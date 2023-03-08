import { useAccount } from "wagmi";
import Connectwallet from "../../components/connectwallet";
import PleaseConnectWallet from "../../components/please.connnect.wallet";
import lpHeaderModule from "../../styles/launchpad/LpHeader.module.css";
import lpContainerModule from "../../styles/launchpad/LpContainer.module.css";
import lpProjectList from "../../styles/launchpad/LpProjectList.module.css";
import lpProjectCard from "../../styles/launchpad/LpProjectCard.module.css";

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
          <LpProjectCard />
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

function LpProjectCard() {
  return (
    <div className={lpProjectCard.container}>
      <div className={lpProjectCard.titleBox}>
        <div className={lpProjectCard.circle}></div>
      </div>
      <div className={lpProjectCard.contentBox}>
        <div className={lpProjectCard.contentTitle}>สุ่มไก่</div>
        <div className={lpProjectCard.description}>
          โปรเจคลึกลับ สุ่มไก่ ! เฉพาะคนไก่ๆ mint ได้ตามราคาประมูล 1 wallet ต่อ
          1 ครั้ง
        </div>
        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              paddingRight: "10px",
              paddingLeft: "10px",
            }}
          >
            <span>Total Supply:</span> จนกว่าจะหมดเวลา
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              paddingRight: "10px",
              paddingLeft: "10px",
            }}
          >
            <span>Website:</span> chicken-dao.xyz
          </div>
        </div>
        <div style={{ paddingTop: "10px", display: "flex" }}>
          <button className={lpProjectCard.button}>เปิดสุ่ม</button>
        </div>
      </div>
    </div>
  );
}

export default LaunchPad;
