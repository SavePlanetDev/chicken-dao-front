import { useContractEvent, useContractRead } from "wagmi";
import { useState } from "react";
import { abi, address } from "./auction.abi";
import { ethers } from "ethers";

export function EventBidded() {
  const [bidded, setBidded] = useState(false);
  const [bidAmount, setBidAmount] = useState("0");
  const [bidder, setBidder] = useState("0x000000000000000000000000000000");

  useContractEvent({
    address,
    abi,
    eventName: "Bidded",
    listener(bidId, bidder, previousBid, currentBid, tokenId) {
      console.log(
        `[${bidder}] has new bid on tokenId: ${tokenId} with ${currentBid}`
      );

      const parsedAmounts = ethers.utils.formatEther(currentBid);
      setBidAmount(parsedAmounts);
      setBidded(true);
    },
  });

  return {
    bidded,
    bidAmount,
    bidder,
    setBidded,
    setBidAmount,
    setBidder,
  };
}

export function EventSettled() {
  const [settled, setSettled] = useState(false);
  const [winner, setWinner] = useState(false);
  useContractEvent({
    address,
    abi,
    eventName: "Settled",
    listener(bidId, bidder, amount) {
      console.log(
        `[${bidId.toString()}] ${bidder.toString()} is settle with ${amount.toString()}`
      );
      setSettled(true);
      setWinner(bidder.toString());
    },
  });

  return {
    settled,
    winner,
    setSettled,
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
