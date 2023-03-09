import { useAccount } from "wagmi";
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
        <LpProjectList>
          <LpProjectCard
            bannerImage={cardBanner}
            avatarImage={cardAvatar}
            title="สุ่มไก่"
            description="เมื่อมีไก่ ! ก็ต้องมีสุ่มไก๊ มา mint สุ่มไก่ไปกันเลย ไก่ 1 ตัว ต่อ สุ่ม 1 สุ่ม"
            totalsupply="จนกว่าเวลาจะหมด"
            website="chicken-dao.xyz"
          />
          <LpProjectPlaceHolderCard />
          <LpProjectPlaceHolderCard />
        </LpProjectList>
      </LpContainer>
    </div>
  );
}

export default LaunchPad;
