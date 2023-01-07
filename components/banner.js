import styles from "../styles/Body.module.css";
import { getBalance } from "../blockchain/contracts/executor/executor.view";

export default function Banner() {
  // const { datated } = getBalance();
  // console.log(datated);
  return (
    <div>
      <div className={styles.bannerbox}>
        <div style={{ position: "relative", top: "27%" }}>
          วันละ 2 ตัว ไปตลอดจนกว่า KUB จะเจ๊ง !
        </div>
      </div>

      <div style={{ display: "flex" }}>
        <img src="banner.png" width="100%"></img>
      </div>
    </div>
  );
}
