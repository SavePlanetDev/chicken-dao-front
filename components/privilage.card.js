import styles from "../styles/PrivilageCard.module.css";

export default function PrivilageCard() {
  return (
    <div name="card-container" className={styles.container}>
      <div name="card-title" className={styles.title}>
        ?????
      </div>
      <div name="card-content" clasName={styles.content}>
        <div className={styles.item}>
          <span className={styles.itemTitle}>???:</span> ???
        </div>
        <div className={styles.item}>
          <div>
            <span className={styles.itemTitle}>???:</span>
          </div>
          <div>????????</div>
        </div>
        <div className={styles.item}>
          <span className={styles.itemTitle}>???</span>???
        </div>
        <div className={styles.item}>
          <span className={styles.itemTitle}>???:</span> ???
        </div>
      </div>
    </div>
  );
}
