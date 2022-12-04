import styles from "../styles/Body.module.css";
import { getBalance } from "../blockchain/contracts/executor/executor.view";

export default function Banner() {
  const { data } = getBalance();
  console.log(data);
  return (
    <div>
      <div className={styles.bannerbox}>
        <div style={{ position: "relative", top: "27%" }}>
          ชั่วโมงละตัว ไปตลอดจนกว่า KUB จะเจ๊ง !
        </div>
      </div>

      <div style={{ display: "flex" }}>
        <img src="banner.png" width="100%"></img>
      </div>

      <div className={styles.bannerbox}>
        <div style={{ position: "relative", top: "27%" }}>
          Treasury : {`${data.formatted} ${data.symbol}`}
        </div>
      </div>
    </div>
  );
}
