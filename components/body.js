import style from "../styles/Home.module.css";
import styles from "../styles/Body.module.css";
import { useEffect, useState } from "react";
import { PlaceBid, sattle } from "../blockchain/contracts/auction/auction.call";
import { ethers } from "ethers";
import { getAllBids } from "../blockchain/contracts/auction/auction.view";
import { getTokenURI } from "../blockchain/contracts/nft/nft.view";
import CountdownTimer from "./countdown";
import { getBalance } from "../blockchain/contracts/executor/executor.view";
import { useAccount } from "wagmi";
import {
  EventBidded,
  EventNewBid,
  EventSattled,
} from "../blockchain/contracts/auction/auction.event";
import { EventSetBaseUri } from "../blockchain/contracts/nft/nft.event";
import axios from "axios";

import LoadingPage from "./loading";

export default function Body() {
  const minimum = 0.2;
  const { address } = useAccount();
  const [canSattle, setCanSattle] = useState(false);
  const [img, setImg] = useState(null);
  const [loading, setLoading] = useState(false);

  const { data } = getAllBids();
  const [currentTokenId, setCurrentTokenId] = useState(
    data.length > 0 ? data[data.length - 1].tokenId : 0
  );
  const [currentTimer, setCurrentTimer] = useState(
    data.length > 0 ? data[data.length - 1].endAt : 0
  );

  const [bid, setBid] = useState(0);
  const { placeBid } = PlaceBid(bid);
  const { sattleAuction } = sattle();
  const uri = getTokenURI(data.length > 0 ? data[data.length - 1].tokenId : 0);

  const { bidded, bidAmount } = EventBidded();
  const [currentBid, setCurrentBid] = useState(
    data[data.length - 1].amounts > 0
      ? data[data.length - 1].amounts
      : bidAmount
  );
  const { sattled } = EventSattled();
  const { baseUri } = EventSetBaseUri();
  const { tokenId, end } = EventNewBid();
  const { datated } = getBalance();

  useEffect(() => {
    if (!baseUri && uri.tokenURIOk) {
      parseTokenUri(uri.tokenURI);
    }

    if (bidded) {
      setCurrentBid(bidAmount.toString());
      setLoading(false);
    }

    if (canSattle && sattled) {
      setCurrentBid(0);
    }

    if (baseUri && sattled) {
      setLoading(false);
      parseTokenUri(baseUri);
      setCurrentTokenId(tokenId);
      setCurrentTimer(end);
      setCanSattle(false);
    }
  }, [uri.tokenURIOk, bidded, sattled, baseUri]);

  async function parseTokenUri(tokenUri) {
    if (tokenUri == "ipfs:://") return null;
    const response = await axios.get(tokenUri);
    const { image } = response.data;
    setImg(image);
    return image;
  }

  function handleBid(fn, e) {
    const { value } = e.target;
    fn(value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (bid != null && bid >= parseFloat(bidAmount) + minimum) {
      setLoading(true);
      e.target.reset();
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

  return (
    <div style={{ height: "100vh", width: "100vw" }} className={style.bgimage}>
      <div className={styles.tedbox}>
        <div className={styles.tedbox2}>
          <span className={styles.tedtext}>
            {" "}
            Treasury : {`${datated.formatted} ${datated.symbol}`}{" "}
          </span>
        </div>
      </div>

      <div className={styles.bitbot}>
        <form onSubmit={handleSubmit}>
          <input
            type="number"
            min={0.2}
            step={0.1}
            disabled={address == undefined ? true : false}
            placeholder={
              address == undefined
                ? "connect wallet ก่อนดิ๊!"
                : `at least ${(parseFloat(currentBid) + minimum).toFixed(
                    1
                  )} KUB`
            }
            className={styles.placebid}
            onChange={(e) => handleBid(setBid, e)}
            style={{
              color: "red",
              fontWeight: "900",
              fontSize: "18px",
              lineHeight: "36px",
              textAlign: "center",
            }}
          ></input>
          {address == undefined ? null : (
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
          )}
        </form>
        <div className={styles.textbit3}>
          **บิตเริ่มต้นมากกว่า{" "}
          <span style={{ color: "#00FF00" }}>{minimum}</span> KUB
          แล้วบิตถัดไปต้องมากกว่าบิตปัจจุบันแล้วบวกเพิ่มอีก{" "}
          <span style={{ color: "#00FF00" }}>{minimum}</span> KUB **
        </div>
        <div>
          <div className={styles.textbit1}>
            Current bid:{" "}
            <span style={{ color: "#00FF00", fontWeight: 800 }}>
              {currentBid > 0 ? currentBid : 0.0}{" "}
            </span>{" "}
            KUB
          </div>
          <div className={styles.textbit2}>Time Left</div>
          <div className={styles.textbox}>
            <CountdownTimer
              endtimeMs={currentTimer > 0 ? currentTimer : "n/a"}
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
              TokenID: {currentTokenId > 0 ? currentTokenId : "n/a"}
            </div>
          </div>
        </div>
      </div>
      <div></div>
      {loading ? <LoadingPage /> : null}
    </div>
  );
}
