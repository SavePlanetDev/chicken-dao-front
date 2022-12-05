import style from "../styles/Home.module.css";
import styles from "../styles/Body.module.css";
import { useEffect, useState } from "react";
import { PlaceBid, sattle } from "../blockchain/contracts/auction/auction.call";
import { ethers } from "ethers";
import { getAllBids } from "../blockchain/contracts/auction/auction.view";
import { getTokenURI } from "../blockchain/contracts/nft/nft.view";
import CountdownTimer from "./countdown";

import {
  EventBidded,
  EventSattled,
} from "../blockchain/contracts/auction/auction.event";
import { EventSetBaseUri } from "../blockchain/contracts/nft/nft.event";

import axios from "axios";

export default function Body() {
  const [bid, setBid] = useState(0);
  const [canSattle, setCanSattle] = useState(false);
  const [img, setImg] = useState(null);
  const [loading, setLoading] = useState(false);

  const { placeBid } = PlaceBid(bid);
  const { sattleAuction } = sattle();
  const { data } = getAllBids();
  const uri = getTokenURI(data.length > 0 ? data[data.length - 1].tokenId : 0);

  const { bidded } = EventBidded();
  const { sattled } = EventSattled();
  const { baseUri } = EventSetBaseUri();

  useEffect(() => {
    if (!baseUri && uri.tokenURIOk) {
      parseTokenUri(uri.tokenURI);
    }

    if (bidded) {
      setLoading(false);
    }

    if (sattled) {
      setLoading(false);
    }

    if (baseUri) {
      console.log("baseUri: ", baseUri);
      parseTokenUri(baseUri);
    }
  }, [uri.tokenURIOk, bidded, sattled, baseUri]);

  async function parseTokenUri(tokenUri) {
    const response = await axios.get(tokenUri);
    console.log(response);
    const { image } = response.data;
    console.log(image);
    setImg(image);
    return image;
  }

  function handleBid(fn, e) {
    const { value } = e.target;
    fn(value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    if (bid != null && bid > 2.5) {
      placeBid({
        recklesslySetUnpreparedOverrides: {
          value: ethers.utils.parseEther(bid.toString()),
        },
      });
    }
  }

  function handleSattle() {
    setLoading(true);
    sattleAuction();
  }

  if (loading) {
    return <div>Loading ...</div>;
  }

  return (
    <div style={{ height: "100vh", width: "100vw" }} className={style.bgimage}>
      <div className={styles.bitbot}>
        <form onSubmit={handleSubmit}>
          <input
            type="number"
            min={2.5}
            step={0.01}
            placeholder="place bid"
            className={styles.placebid}
            onChange={(e) => handleBid(setBid, e)}
            style={{
            color:"red",
            fontWeight: "900",
            fontSize: "18px",
            lineHeight: "36px",
            textAlign: "center"

            }}
          ></input>
          <div className={styles.bitbuttonr}>
            {canSattle ? (
              <button className={styles.bitbuttony} onClick={handleSattle}>
                <p className={styles.sattletext}>Sattle</p>
              </button>
            ) : (
              <button type="submit" className={styles.bitbuttony}>
                <p className={styles.textbid}>bid</p>
              </button>
            )}
          </div>
        </form>
        <div className={styles.textbit3}>**บิตเริ่มต้นมากกว่า 2.5 แล้วบิตถัดไปต้องมากกว่าบิตปัจจุบันแล้วบวกเพิ่มอีก 2.5**</div>
        <div>
          <div className={styles.textbit1}>
            Current bid:{" "}
            {data.length > 0 ? data[data.length - 1].amounts : "n/a"} Kub
          </div>
          <div className={styles.textbit2}>Time Left</div>
          <div className={styles.textbox}>
            <CountdownTimer
              endtimeMs={data.length > 0 ? data[data.length - 1].endAt : "n/a"}
              setCanSattle={setCanSattle}
            />
          </div>
        </div>
      </div>
      <div className={styles.imgchecken}>
        <div className={styles.imgbackbocky}>
          <div type="submit" className={styles.imgbackbockr}>
            <div>
              {img == undefined ? (
                <img src="checknf.png" className={styles.imgposition} />
              ) : (
                <img src={img} className={styles.imgposition} />
              )}
            </div>
            <div className={styles.textokenid}>
              TokenID: {data.length > 0 ? data[data.length - 1].tokenId : "n/a"}
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}
