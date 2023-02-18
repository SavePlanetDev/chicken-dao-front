import Image from "next/image";
import chick from "../public/checknf.png";
import styles from "../styles/PleaseConnectWallet.module.css";

export default function PleaseConnectWallet() {
  return (
    <div name="container" className={styles.container}>
      <div name="image-box" className={styles.imageWrapper}>
        <Image src={chick}></Image>
      </div>
      <h1>เชื่อมต่อกระเป๋าก่อนเข้า เล้าไก๊ ! 🐔</h1>
    </div>
  );
}
