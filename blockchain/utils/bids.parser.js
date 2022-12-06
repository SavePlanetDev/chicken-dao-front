import { ethers } from "ethers";
function parseBidsData(bids = []) {
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
      startAt: parsed[3],
      endAt: parsed[4],
      bidders: parsed[5],
      status: parsed[6],
    };
  });

  return bidData;
}

export { parseBidsData };
