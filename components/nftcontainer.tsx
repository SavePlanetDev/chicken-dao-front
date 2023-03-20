import styles from "../styles/nftContainer.module.css";

export type NftContainerProps = {
  children: JSX.Element;
};

export default function NftContainer({ children }: NftContainerProps) {
  return (
    <div id="nft-container" className={styles.nftContainer}>
      {children}
    </div>
  );
}
