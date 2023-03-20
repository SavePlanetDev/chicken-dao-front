import styles from "../../styles/launchpad/LpTitle.module.css";

export default function LpTitle() {
  return (
    <div>
      <div className={styles.bannerbox}>
        <div style={{ position: "relative", top: "2%" }}></div>
      </div>
      <div style={{ display: "flex" }}>
        <img src="../LPbanner2.png" width="100%"></img>
      </div>
    </div>
  );
}
