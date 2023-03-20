import styles from "../styles/PrivilageCard.module.css";

export type CardItemProps = {
  title: string;
  content: string;
};

export default function CardItem({ title, content }: CardItemProps) {
  return (
    <div className={styles.item}>
      <span className={styles.itemTitle}>{title}</span> {content}
    </div>
  );
}
