import styles from "../styles/PrivilageCard.module.css";
export default function CardItem2({ title, content }) {
  return (
    <div className={styles.item}>
      <div>
        <span className={styles.itemTitle}>{title}</span>
      </div>
      <div>{content}</div>
    </div>
  );
}
