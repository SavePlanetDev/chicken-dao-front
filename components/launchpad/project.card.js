import Image from "next/image";
import lpProjectCard from "../../styles/launchpad/LpProjectCard.module.css";

function LpProjectCard({
  title,
  bannerImage,
  avatarImage,
  description,
  totalsupply,
  website,
}) {
  return (
    <div className={lpProjectCard.container}>
      <div className={lpProjectCard.titleBox}>
        <Image src={bannerImage} alt="banner" fill />
        <div className={lpProjectCard.circle}>
          <Image src={avatarImage} alt="avatar" fill />
        </div>
      </div>
      <div className={lpProjectCard.contentBox}>
        <div className={lpProjectCard.contentTitle}>{title}</div>
        <div className={lpProjectCard.description}>{description}</div>
        <div>
          <div className={lpProjectCard.listItem}>
            <span>Total Supply:</span> {totalsupply}
          </div>
          <div className={lpProjectCard.listItem}>
            <span>Website:</span> {website}
          </div>
        </div>
        <div className={lpProjectCard.buttonBox}>
          <button className={lpProjectCard.button}>เปิดสุ่ม</button>
        </div>
      </div>
    </div>
  );
}

export default LpProjectCard;
