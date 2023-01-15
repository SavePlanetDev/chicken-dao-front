import Connectwallet from "./connectwallet";
import Image from "next/image";
import styles from "../styles/Header.module.css";
import what from "../public/what_btn.png";

export default function PrivilageHeader() {
  return (
    <div>
      <title>Chicken-DAO</title>
      <div className={styles.logo}>
        <div>
          <img src="logochic.png" className={styles.logoimg}></img>
        </div>
        <div
          style={{ alignSelf: "center", paddingRight: "30px", display: "flex" }}
        >
          <Connectwallet />
        </div>
      </div>
    </div>
  );
}
