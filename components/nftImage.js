import Image from "next/image";
import styles from "../styles/nftImage.module.css";

export default function NftImage({ image }) {
  return (
    <div name="image-wrapper" className={styles.imageBox}>
      <Image src={image} fill></Image>
    </div>
  );
}
