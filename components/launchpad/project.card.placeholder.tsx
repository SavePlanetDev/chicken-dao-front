import Image from "next/image";
import lpProjectCard from "../../styles/launchpad/LpProjectCard.module.css";

function LpProjectPlaceHolderCard() {
  return (
    <div className={lpProjectCard.container}>
      <div className={lpProjectCard.titleBox}>
        <div className={lpProjectCard.circle}></div>
      </div>
      <div className={lpProjectCard.contentBox}>
        <div className={lpProjectCard.contentTitle}>โปรเจคอาราย !!?</div>
        <div className={lpProjectCard.description}>
          โปรเจคต่อไปจะเป็น โปรเจคของใครน๊าาาา ?? 🐔
        </div>
        <div>
          <div className={lpProjectCard.listItem}>
            <span>Total Supply:</span> ไม่รู้ดิ
          </div>
          <div className={lpProjectCard.listItem}>
            <span>Website:</span> ????
          </div>
        </div>
        <div className={lpProjectCard.buttonBox}>
          <button className={lpProjectCard.buttonDisabled}>ไก๊ ไก๊ ไก๊</button>
        </div>
      </div>
    </div>
  );
}

export default LpProjectPlaceHolderCard;
