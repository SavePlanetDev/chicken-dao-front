import styles from "../styles/AuctionProfile.module.css";
export function AuctionProfile({ auctions = [] }) {
  const { highest, lowest } = getHiLowBid(auctions);
  const sum = getSumAmounts(auctions).toFixed(1);
  const avg = getAvg(auctions).toFixed(1);
  return (
    <div className={styles.container}>
      <ul className={styles.listContainer}>
        <li className={styles.listItem}>
          <div className={styles.listTitle}>highest bid:</div>
          <div className={styles.listDesc}>chicker #{highest.tokenId}</div>
          <div className={styles.listSubDesc}>@{highest.amounts} KUB</div>
        </li>
        <li className={styles.listItem}>
          <div className={styles.listTitle}>lowest bid:</div>
          <div className={styles.listDesc}>chicker #{lowest.tokenId}</div>
          <div className={styles.listSubDesc}>@{lowest.amounts} KUB</div>
        </li>
        <li className={styles.listItem}>
          <div className={styles.listTitle}>Avg:</div>
          <div className={styles.listDesc}>@{avg} KUB</div>
        </li>
        <li className={styles.listItem}>
          <div className={styles.listTitle}>Total Volume:</div>
          <div className={styles.listDesc}>@{sum} KUB</div>
          <div className={styles.listSubDesc}>dev + treasury</div>
        </li>
        <li className={styles.listItem}>
          <div className={styles.listTitle}>Total Supply:</div>
          <div className={styles.listDesc}>{auctions.length} NFT</div>
          <div className={styles.listSubDesc}>*bidding included</div>
        </li>
      </ul>
    </div>
  );
}

function getHiLowBid(auctions = []) {
  console.log(auctions);
  if (auctions.length <= 0) return null;
  const sorted = auctions.sort(
    (a: { amounts: number }, b: { amounts: number }) => b.amounts - a.amounts
  ) as number[];
  return { highest: sorted[0], lowest: sorted[sorted.length - 1] };
}

function getSumAmounts(auctions = []) {
  if (auctions.length <= 0) return 0;
  const sum = auctions.reduce((a, b) => parseInt(a) + parseInt(b.amounts), 0);
  return sum;
}

function getAvg(auctions = []) {
  if (auctions.length <= 0) return 0;
  const sum = getSumAmounts(auctions);
  const avg = sum / auctions.length;
  return avg;
}
