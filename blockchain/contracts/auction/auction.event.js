import { useContractEvent, useContractRead } from "wagmi";
import { useState } from "react";
import { abi, address } from "./auction.abi";
import { ethers } from "ethers";

export function EventBidded() {
  const [bidded, setBidded] = useState(false);
  const [bidAmount, setBidAmount] = useState(0);

  useContractEvent({
    address,
    abi,
    eventName: "Bidded",
    listener(bidId, previousBid, currentBid, tokenId) {
      console.log(
        `[${bidId}] tokenId: ${tokenId} has new bid with ${currentBid}`
      );

      const parsedAmounts = ethers.utils.formatEther(currentBid);
      setBidAmount(parsedAmounts);
      setBidded(true);
    },
  });

  return {
    bidded,
    bidAmount,
    setBidded,
    setBidAmount,
  };
}

export function EventSattled() {
  const [sattled, setSattled] = useState(false);
  useContractEvent({
    address,
    abi,
    eventName: "Sattled",
    listener(bidId, bidder, amount) {
      console.log(
        `[${bidId.toString()}] ${bidder.toString()} is sattle with ${amount.toString()}`
      );
      setSattled(true);
    },
  });

  return {
    sattled,
    setSattled,
  };
}

export function EventNewBid() {
  const [tokenId, setTokenId] = useState(0);
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(0);

  useContractEvent({
    address,
    abi,
    eventName: "NewBid",
    listener(tokenId, start, end) {
      setTokenId(tokenId.toString());
      setStart(start.toString());
      setEnd(end.toString());
    },
  });

  return {
    tokenId,
    start,
    end,
  };
}
