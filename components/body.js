import style from "../styles/Home.module.css";
import styles from "../styles/Body.module.css";
import { useEffect, useState } from "react";
import { PlaceBid, sattle } from "../blockchain/contracts/auction/auction.call";
import { ethers } from "ethers";
import { getAllBids } from "../blockchain/contracts/auction/auction.view";
import { getTokenURI } from "../blockchain/contracts/nft/nft.view";
import CountdownTimer from "./countdown";
import { getBalance } from "../blockchain/contracts/executor/executor.view";
import { getLatestBid } from "../blockchain/contracts/auction/auction.view";
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
  const { latestBid, latestBidLoaded } = getLatestBid();
  const minimum = 0.2;
  const { address } = useAccount();
  const [canSattle, setCanSattle] = useState(false);
  const [img, setImg] = useState(null);
  const [loading, setLoading] = useState(false);

  const { data } = getAllBids();
  const [currentTokenId, setCurrentTokenId] = useState(
    !latestBidLoaded ? 0 : latestBid[0].tokenId
  );
  const [currentTimer, setCurrentTimer] = useState(
    !latestBidLoaded ? 0 : latestBid[0].endAt
  );

  const [bid, setBid] = useState(0);
  const { placeBid } = PlaceBid(bid);
  const { sattleAuction } = sattle();
  const uri = getTokenURI(!latestBidLoaded ? 0 : latestBid[0].tokenId);

  const { bidded, bidAmount, setBidded } = EventBidded();
  const [currentBid, setCurrentBid] = useState(
    !latestBidLoaded ? 0 : latestBid[0].amounts
  );
  const { sattled, setSattled } = EventSattled();
  const { baseUri } = EventSetBaseUri();
  const { tokenId, end } = EventNewBid();
  const { datated } = getBalance();
  console.log({
    img,
    uri,
    lastest: latestBid[0],
    loaded: latestBidLoaded,
    tokenOK: uri.tokenURIOk,
    currentTimer,
    bidded,
    sattled,
    baseUri,
    bidAmount,
    currentBid,
    data: data.length,
    newBidEvent: end,
    canSattle,
  });

  useEffect(() => {
    // console.log({
    //   img,
    //   uri,
    //   lastest: latestBid[0],
    //   loaded: latestBidLoaded,
    //   tokenOK: uri.tokenURIOk,
    //   currentTimer,
    //   bidded,
    //   sattled,
    //   baseUri,
    //   bidAmount,
    //   currentBid,
    //   data: data.length,
    //   newBidEvent: end,
    //   canSattle,
    // });

    if (uri.tokenURIOk) {
      parseTokenUri(uri.tokenURI);
    }

    if (bidded) {
      console.log("bidded ! with : ", bidAmount);
      setCurrentBid(bidAmount.toString());
      setImg(img);
      setLoading(false);
      setBidded(false);
    }

    if (canSattle && sattled) {
      console.log("canSattle: setCurrentBid to 0");
      setCurrentBid(0);
      setCanSattle(false);
    }

    if (baseUri && sattled) {
      console.log("sattled and set base uri");
      parseTokenUri(baseUri);
      setCurrentTokenId(tokenId);
      setCurrentTimer(end);
      setSattled(false);
      setLoading(false);
    }

    if (end > 0) {
      setCurrentTimer(end);
      setCurrentBid(0);
    } else if (latestBidLoaded) {
      setCurrentTokenId(latestBid[0].tokenId);
      setCurrentTimer(latestBid[0].endAt);
      setCurrentBid(latestBid[0].amounts);
    }
  }, [
    uri.tokenURIOk,
    bidded,
    sattled,
    baseUri,
    bidAmount,
    end,
    latestBidLoaded,
  ]);

  async function parseTokenUri(tokenUri) {
    if (tokenUri == "ipfs:://") return null;
    const response = await axios.get(tokenUri);
    const { image } = response.data;
    setImg(image);
    // return image;
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
            disabled={address !== undefined ? false : true}
            placeholder={
              address == undefined
                ? `${"connect wallet ก่อนดิ๊ .. กุ๊ก !! 🐔"}`
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
              {currentBid}{" "}
            </span>{" "}
            KUB
          </div>
          <div className={styles.textbit2}>Time Left</div>
          <div className={styles.textbox}>
            <CountdownTimer
              endtimeMs={end > 0 ? end : currentTimer}
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
            <div className={styles.textokenid}>TokenID: {currentTokenId}</div>
          </div>
        </div>
      </div>
      <div></div>
      {loading ? <LoadingPage /> : null}
    </div>
  );
}
