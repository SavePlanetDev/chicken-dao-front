import { useContractEvent } from "wagmi";
import { useState } from "react";
import { abi, address } from "./auction.abi";

export function EventBidded() {
  const [bidded, setBidded] = useState(false);

  useContractEvent({
    address,
    abi,
    eventName: "Bidded",
    listener(bidId, previousBid, currentBid, tokenId) {
      console.log(
        `[${bidId}] tokenId: ${tokenId} has new bid with ${currentBid}`
      );
      setBidded(true);
    },
  });

  return {
    bidded,
  };
}

export function EventSattled() {
  const [sattled, setSattled] = useState(false);
  useContractEvent({
    address,
    abi,
    eventName: "Sattled",
    listener(bidId, bidder, amount) {
      console.log(`[${bidId}] ${bidder} is sattle with ${amount}`);
      setSattled(true);
    },
  });

  return {
    sattled,
  };
}
