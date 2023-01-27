import styles from "../styles/nftImageList.module.css";
import NftImage from "./nftImage";

export default function NftImageList({ images }) {
  return (
    <div className={styles.container}>
      {images == null ? (
        <div>Nothing</div>
      ) : (
        images.map((nft, index) => {
          return <NftImage key={index} data={nft} />;
        })
      )}
    </div>
  );
}
