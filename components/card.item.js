import styles from "../styles/PrivilageCard.module.css";
export default function CardItem({ title, content }) {
  return (
    <div className={styles.item}>
      <span className={styles.itemTitle}>{title}</span> {content}
    </div>
  );
}
