import { ethers } from "ethers";
import { Bid } from "../../interfaces";

function parseBidsData(bids: [Bid[]] = [[]]) {
  if (bids.length <= 0) {
    return [];
  }

  const bidData = bids.map((bid, index) => {
    const parsed = bid.map((data) => {
      return data.toString();
    });

    return {
      id: index,
      bidder: parsed[0],
      amounts: ethers.utils.formatUnits(parsed[1], "ether"),
      tokenId: parsed[2],
      startAt: parseInt(parsed[3]),
      endAt: parseInt(parsed[4]),
      bidders: parsed[5],
      status: parsed[6],
    };
  });

  // const bidData = bids.map((bid, index) => {
  //   return bid.toString();
  // });

  // return {
  //   bidder: bidData[0],
  //   amounts: ethers.utils.formatUnits(bidData[1], "ether"),
  //   tokenId: bidData[2],
  //   startAt: bidData[3],
  //   endAt: bidData[4],
  //   bidders: bidData[5],
  //   status: bidData[6],
  // } as unknown as Bid;

  return bidData;
}

export { parseBidsData };
