import styles from "../styles/Body.module.css";

export default function PrivilageTitle() {
  // const { datated } = getBalance();
  // console.log(datated);
  return (
    <div>
      <div className={styles.bannerbox}>
        <div style={{ position: "relative", top: "27%" }}>
          มีไก่ก็มีสิทธิ์​ ไม่มีไก๊ ? อดดด ! เฉพาะชาวไก่
        </div>
      </div>
    </div>
  );
}
