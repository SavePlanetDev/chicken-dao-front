import Image, { StaticImageData } from "next/image";
import lpProjectCard from "../../styles/launchpad/LpProjectCard.module.css";

type ProjectCardProps = {
  title: string;
  bannerImage: string | StaticImageData;
  avatarImage: string | StaticImageData;
  description: string;
  totalsupply: string;
  website: string;
  addr: string;
  owner: string;
};

function LpProjectCard({
  title,
  bannerImage,
  avatarImage,
  description,
  totalsupply,
  website,
  addr,
  owner,
}: ProjectCardProps) {
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
          <div className={lpProjectCard.listItem}>
            <span>addr:</span>{" "}
            {`${addr ? addr.slice(0, 6) : "0x000"} ... ${
              addr ? addr.slice(38) : "0000"
            } `}
          </div>
          <div className={lpProjectCard.listItem}>
            <span>owner:</span>{" "}
            {`${owner ? owner.slice(0, 6) : "0x000"} ... ${
              owner ? owner.slice(38) : "0000"
            } `}
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
