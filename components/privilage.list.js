import PrivilageCard from "./privilage.card";
import styles from "../styles/PrivilageList.module.css";
export default function PrivilageList() {
  return (
    <div className={styles.container}>
      <PrivilageCard />
      <PrivilageCard />
      <PrivilageCard />
      <PrivilageCard />
    </div>
  );
}
