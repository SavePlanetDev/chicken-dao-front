import Image from "next/image";
import styles from "../styles/nftImage.module.css";
import { motion } from "framer-motion";
import {
  imageContainerVariants,
  tokenNameVariants,
} from "../framer/nftImage.framer";

export default function NftImage({ data }) {
  return (
    <motion.div
      variants={imageContainerVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      name="image-wrapper"
      className={styles.imageBox}
    >
      <Image src={data.image} alt="chicker image" fill></Image>
      <motion.div variants={tokenNameVariants} className={styles.tokenName}>
        {data.name}
      </motion.div>
    </motion.div>
  );
}
