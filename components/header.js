import Connectwallet from "./connectwallet";
import styles from "../styles/Header.module.css";

export default function Header() {
  return (
    <div>
      <title>Chicken-DAO</title>
      <div className={styles.logo}>
        <div>
          <img src="logochic.png" className={styles.logoimg}></img>
        </div>

        <div style={{ alignSelf: "center", paddingRight: "30px" }}>
          <Connectwallet />
        </div>
      </div>
    </div>
  );
}
