import Image from "next/image";
import styles from "../styles/Advertise.module.css";
import contentImg from "../public/chick-system-explain.png";

export default function Explain() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>น้องไก่ คือยังไงซิ๊ !?​ เวอร์.เห็นภาพ</div>
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
