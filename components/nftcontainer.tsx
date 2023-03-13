import styles from "../styles/nftContainer.module.css";

export default function NftContainer({ children }) {
  return (
    <div name="nft-container" className={styles.nftContainer}>
      {children}
    </div>
  );
}
