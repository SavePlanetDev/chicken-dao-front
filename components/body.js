import style from "../styles/Home.module.css";
import styles from "../styles/Body.module.css";
import { useEffect, useState } from "react";
import { PlaceBid, settle } from "../blockchain/contracts/auction/auction.call";
import { ethers } from "ethers";
import { getTokenURI } from "../blockchain/contracts/nft/nft.view";
import CountdownTimer from "./countdown";
import { useAccount, useProvider } from "wagmi";
import Button from "./button";

import {
  EventBidded,
  EventNewBid,
  EventSettled,
} from "../blockchain/contracts/auction/auction.event";
import { EventSetBaseUri } from "../blockchain/contracts/nft/nft.event";
import axios from "axios";

import LoadingPage from "./loading";

export default function Body({ props }) {
  const minimum = 2;
  const { address } = useAccount();
  const [canSettle, setCanSettle] = useState(false);
  const [img, setImg] = useState(null);
  const [loading, setLoading] = useState(false);

  const [currentTokenId, setCurrentTokenId] = useState(props.latest.tokenId);
  const [currentTimer, setCurrentTimer] = useState(props.latest.endAt);
  const [currentBidder, setCurrentBidder] = useState(props.latest.bidder);

  const [bid, setBid] = useState(0);
  const { placeBid, placeBidError } = PlaceBid(bid);
  const { settleAuction, settleError } = settle();
  const uri = getTokenURI(props.latest.tokenId);

  const { bidded, bidAmount, bidder, setBidded } = EventBidded();
  const [currentBid, setCurrentBid] = useState(props.latest.amounts);
  const { settled, winner, setSettled } = EventSettled();
  const { baseUri } = EventSetBaseUri();
  const { tokenId, end } = EventNewBid();

  useEffect(() => {
    if (!baseUri && uri.tokenURIOk && uri.tokenURI) {
      console.log(
        "เซต base uri จากการ load getTokenUri hook: \n",
        uri.tokenURI
      );
      parseTokenUri(uri.tokenURI);
    }

    if (bidded) {
      // console.log("มีคน bid ที่ amount :", bidAmount.toString());
      setCurrentBid(bidAmount.toString());
      setCurrentBidder(bidder);
      setLoading(false);
      setBidded(false);
    }

    if (canSettle && settled) {
      // console.log("หมดเวลา สามารถที่จะ settle ได้", { currentBid, canSettle });
      setCurrentBid(0);
      setCanSettle(false);
    }

    if (baseUri && settled) {
      // console.log("settle เรียบร้อย ทำการ mint -> setbase uri", {
      //   baseUri,
      //   tokenId,
      //   end,
      // });
      parseTokenUri(baseUri);
      setCurrentTokenId(tokenId);
      setCurrentTimer(end);
      setSettled(false);
      setLoading(false);
    }

    if (end > 0) {
      // console.log("sattle แล้วตอนจบ set timer เป็น อันใหม่");
      // console.log("baseURI-old", baseUri.tokenURI);
      // console.log("baseURI", baseUri);
      setCurrentTimer(end);
      setCurrentTokenId(tokenId);
      if (baseUri != false) {
        parseTokenUri(baseUri);
      }
    }

    if (placeBidError) {
      setLoading(false);
    }

    if (settleError) {
      setLoading(false);
    }
  }, [
    uri.tokenURIOk,
    bidded,
    settled,
    baseUri,
    bidAmount,
    end,
    placeBidError,
    settleError,
  ]);

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

  function handleSettle() {
    setLoading(true);
    setCurrentBid(0);
    settleAuction();
  }

  return (
    <div style={{ height: "100vh", width: "100vw" }} className={style.bgimage}>
      <div className={styles.tedbox}>
        <div className={styles.tedbox2}>
          <span className={styles.tedtext}>
            {" "}
            Treasury : {`${props.treasury} KUB`}{" "}
          </span>
        </div>
      </div>

      <div className={styles.bitbot}>
        <form onSubmit={handleSubmit}>
          {canSettle ? (
            <div
              className={styles.placebid}
              style={{
                display: "flex",
                color: "#00FF00",
                fontWeight: "600",
                fontSize: "25px",
                lineHeight: "25px",
                textAlign: "left",
                alignItems: "center",
                background: "none",
                paddingLeft: "10px",
              }}
            >
              {`Winner : ${currentBidder.slice(0, 6)} ... ${currentBidder.slice(
                38
              )}`}
            </div>
          ) : (
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
          )}

          {address == undefined ? null : (
            <div className={styles.bitbuttonr}>
              {canSettle ? (
                <button className={styles.bitbuttony} onClick={handleSettle}>
                  <p className={styles.sattletext}>Settle</p>
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
          <Button>
            <span>ปุ่มอะไร !?</span>
          </Button>
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
              setCanSettle={setCanSettle}
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
