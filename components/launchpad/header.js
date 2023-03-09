import lpHeaderModule from "../../styles/launchpad/LpHeader.module.css";

function LpHeader() {
  return (
    <div className={lpHeaderModule.container}>
      <div className={lpHeaderModule.title}>🐔 บ่อนไก่ - The Launch Pad</div>
      <Connectwallet />
    </div>
  );
}

export default LpHeader;
