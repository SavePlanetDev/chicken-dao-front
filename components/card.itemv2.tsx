import styles from "../styles/PrivilageCard.module.css";
import { CardItemProps } from "./card.item";
export default function CardItem2({ title, content }: CardItemProps) {
  return (
    <div className={styles.item}>
      <div>
        <span className={styles.itemTitle}>{title}</span>
      </div>
      <div>{content}</div>
    </div>
  );
}
