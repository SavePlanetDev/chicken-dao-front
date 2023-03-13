import Image from "next/image";
import styles from "../styles/Advertise.module.css";
import contentImg from "../public/xdig.png";

export default function Advertise() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>น้อง Dig x ก๊ะไก๊แน๊วววววว วว</div>
      <div className={styles.imageContainer}>
        <Image
          className={styles.image}
          src={contentImg}
          alt="x-dig-dragon"
          fill
        ></Image>
      </div>
    </div>
  );
}
