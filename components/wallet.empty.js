import Image from "next/image";
import chick from "../public/checknf2.png";
import styles from "../styles/PleaseConnectWallet.module.css";

export default function WalletEmpty() {
  return (
    <div name="container" className={styles.container}>
      <div name="image-box" className={styles.imageWrapper}>
        <Image src={chick}></Image>
      </div>
      <h1>ไม่มีไก่ในเล้าซ๊ากกตัว !? 🐔</h1>
    </div>
  );
}
