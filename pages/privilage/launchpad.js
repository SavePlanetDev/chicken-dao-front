import { useAccount } from "wagmi";
import Connectwallet from "../../components/connectwallet";
import PleaseConnectWallet from "../../components/please.connnect.wallet";
import lpHeaderModule from "../../styles/launchpad/LpHeader.module.css";
import lpContainerModule from "../../styles/launchpad/LpContainer.module.css";
import lpProjectList from "../../styles/launchpad/LpProjectList.module.css";
import LpProjectCard from "../../components/launchpad/project.card";
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

function LpContainer({ children }) {
  return <div className={lpContainerModule.container}>{children}</div>;
}

function LpProjectList({ children }) {
  return <div className={lpProjectList.container}>{children}</div>;
}

function LpHeader() {
  return (
    <div className={lpHeaderModule.container}>
      <div className={lpHeaderModule.title}>🐔 บ่อนไก่ - The Launch Pad</div>
      <Connectwallet />
    </div>
  );
}

export default LaunchPad;
