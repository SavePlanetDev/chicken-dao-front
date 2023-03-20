import Image from "next/image";
import chick from "../public/checknf.png";
import styles from "../styles/PleaseConnectWallet.module.css";

export default function WalletEmpty() {
  return (
    <div id="container" className={styles.container}>
      <div id="image-box" className={styles.imageWrapper}>
        <Image src={chick} alt={"chick"}></Image>
      </div>
      <h1>ไม่มีไก่ในเล้าซ๊ากกตัว !? 🐔</h1>
    </div>
  );
}
