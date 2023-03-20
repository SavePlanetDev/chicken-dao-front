import { useAccount } from "wagmi";
import { useGetAllNfts } from "../../blockchain/contracts/launchpad/launchpad.view";
import PleaseConnectWallet from "../../components/please.connnect.wallet";
import LpContainer from "../../components/launchpad/project.container";
import LpProjectList from "../../components/launchpad/proejct.list";
import LpProjectCard from "../../components/launchpad/project.card";
import LpHeader from "../../components/launchpad/header";
import LpTitle from "../../components/launchpad/title";
import cardBanner from "../../public/bodybackground.png";
import cardAvatar from "../../public/checknf2.png.png";
import { trpc } from "../../trpc/utils/trpc";

function LaunchPad() {
  const nfts = trpc.projects.useQuery().data;
  const { address, isConnected } = useAccount();
  // const { nfts, nftsLoading } = useGetAllNfts();

  if (!isConnected)
    return (
      <div>
        <LpHeader />
        <LpTitle />
        <PleaseConnectWallet />
      </div>
    );

  return (
    <div>
      <LpHeader />
      <LpTitle />
      <LpContainer>
        {nfts?.length! <= 0 ? (
          <>
            <Loading />
          </>
        ) : (
          <LpProjectList>
            {nfts?.length ? (
              nfts.map((nft, index) => (
                <LpProjectCard
                  key={index}
                  bannerImage={cardBanner}
                  avatarImage={cardAvatar}
                  title={"Project Kai"}
                  description={nft.description}
                  totalsupply={"200"}
                  website="chicken-dao.xyz"
                  addr={nft.address}
                  owner={nft.ownerId}
                />
              ))
            ) : (
              <div>No nfts..</div>
            )}
            {/* <LpProjectCard
              bannerImage={cardBanner}
              avatarImage={cardAvatar}
              title="สุ่มไก่"
              description="เมื่อมีไก่ ! ก็ต้องมีสุ่มไก๊ มา mint สุ่มไก่ไปกันเลย ไก่ 1 ตัว ต่อ สุ่ม 1 สุ่ม"
              totalsupply="จนกว่าเวลาจะหมด"
              website="chicken-dao.xyz"
            />
            <LpProjectPlaceHolderCard />
            <LpProjectPlaceHolderCard /> */}
          </LpProjectList>
        )}
      </LpContainer>
    </div>
  );
}

function Loading() {
  return <div style={{ fontSize: "30px" }}>Loading...</div>;
}

export default LaunchPad;
