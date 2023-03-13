import styles from "../styles/PrivilageCard.module.css";

export default function PrivilageCard({ title = "????", children }) {
  return (
    <div name="card-container" className={styles.container}>
      <div name="card-title" className={styles.title}>
        {title}
      </div>
      <div name="card-content" clasName={styles.content}>
        {children}
      </div>
    </div>
  );
}
