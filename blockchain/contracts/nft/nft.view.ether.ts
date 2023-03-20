import { ethers } from "ethers";
import { address, abi } from "./nft.abi";
import axios from "axios";

const provider = new ethers.providers.JsonRpcProvider(
  "https://rpc.bitkubchain.io"
);

const nftContract = new ethers.Contract(address, abi, provider);

const getBalanceOf = async (owner: string) => {
  if (!owner) return 0;
  const balance = (await nftContract.balanceOf(owner)).toString();
  return balance == undefined || parseInt(balance) <= 0 ? 0 : parseInt(balance);
};

const getTokenIdsOf = async (
  owner: string,
  balance: number = 0
): Promise<string[]> => {
  if (balance <= 0 || !owner) return [];
  let tokenIds = [];
  for (let i = 0; i < balance; i++) {
    const tokenId = await nftContract.tokenOfOwnerByIndex(owner, i);
    tokenIds.push(tokenId.toString());
  }
  return tokenIds;
};

const getNftMetadataFromTokenIds = async (tokenIds: string[] = []) => {
  if (tokenIds.length <= 0) return [];
  // const tokenIdds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  // const tokenIdds = [1, 2];
  const metadata: string[] = await Promise.all(
    tokenIds.map(async (tokenId) => {
      const tokenURI = await nftContract.tokenURI(tokenId);
      const response = await axios.get(tokenURI);
      return response.data;
    })
  );

  return !metadata && metadata.length <= 0 ? [] : metadata;
};

export const getNftListOf = async (owner: string) => {
  try {
    const balance = await getBalanceOf(owner);
    const tokenIds = await getTokenIdsOf(owner, balance);
    const metadata = await getNftMetadataFromTokenIds(tokenIds);
    console.log(metadata);
    return metadata;
  } catch (e: any) {
    console.log("getNftListOf : error -> ", e.message);
    return [];
  }
};
