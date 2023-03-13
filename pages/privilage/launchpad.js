import { useAccount } from "wagmi";
import { useGetAllNfts } from "../../blockchain/contracts/launchpad/launchpad.view";
import PleaseConnectWallet from "../../components/please.connnect.wallet";
import LpContainer from "../../components/launchpad/project.container";
import LpProjectList from "../../components/launchpad/proejct.list";
import LpProjectCard from "../../components/launchpad/project.card";
import LpHeader from "../../components/launchpad/header";
import LpProjectPlaceHolderCard from "../../components/launchpad/project.card.placeholder";

import cardBanner from "../../public/bodybackground.png";
import cardAvatar from "../../public/checknf2.png.png";

function LaunchPad() {
  const { address, isConnected } = useAccount();
  const { nfts, nftsLoading } = useGetAllNfts();
  console.log(nfts);

  if (!isConnected)
    return (
      <div>
        <LpHeader />
        <PleaseConnectWallet />
      </div>
    );

  return (
    <div>
      <LpHeader />
      <LpContainer>
        {nftsLoading || nfts.length <= 0 ? (
          <>
            <Loading />
          </>
        ) : (
          <LpProjectList>
            {nfts.length ? (
              nfts.map((nft, index) => (
                <LpProjectCard
                  bannerImage={cardBanner}
                  avatarImage={cardAvatar}
                  title={nft.name}
                  description={nft.desc}
                  totalsupply={nft.supply}
                  website="chicken-dao.xyz"
                  addr={nft.asset}
                  owner={nft.owner}
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
