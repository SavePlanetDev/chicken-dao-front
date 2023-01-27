import Connectwallet from "./connectwallet";
import Link from "next/link";
import styles from "../styles/Header.module.css";

export default function PrivilageHeader() {
  return (
    <div style={{ boxShadow: "0px 3px 3px rgba(0,0,0,0.3)" }}>
      <title>Chicken-DAO</title>
      <div className={styles.logo}>
        <Link href="/">
          <img src="logochic.png" className={styles.logoimg}></img>
        </Link>
        <div
          style={{ alignSelf: "center", paddingRight: "30px", display: "flex" }}
        >
          <Connectwallet />
        </div>
      </div>
    </div>
  );
}
