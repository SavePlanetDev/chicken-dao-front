import styles from "../styles/PrivilageCard.module.css";

export type PrivilageCardProps = {
  title: string;
  children: JSX.Element;
};

export default function PrivilageCard({
  title = "????",
  children,
}: PrivilageCardProps) {
  return (
    <div id="card-container" className={styles.container}>
      <div id="card-title" className={styles.title}>
        {title}
      </div>
      <div id="card-content" className={styles.content}>
        {children}
      </div>
    </div>
  );
}
