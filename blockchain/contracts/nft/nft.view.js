import { abi, address } from "./nft.abi";
import {
  useContractRead,
  useContractReads,
  useContractInfiniteReads,
  paginatedIndexesConfig,
} from "wagmi";
import { BigNumber } from "ethers";
import axios from "axios";

function getTokenURI(tokenId) {
  const { data, isSuccess } = useContractRead({
    address,
    abi,
    functionName: "tokenURI",
    args: [tokenId],
  });

  return {
    tokenURI: data,
    tokenURIOk: isSuccess,
  };
}

function getBalanceOf(owner) {
  const { data, isSuccess } = useContractRead({
    address,
    abi,
    functionName: "balanceOf",
    args: [owner],
  });

  return {
    balance: data && parseInt(data.toString()),
    balanceOK: isSuccess,
  };
}

function getTokenTokenIdsByIndexes(owner, balance) {
  if (balance <= 0) {
    return {
      tokens: [],
    };
  }
  const { data, fetchNextPage } = useContractInfiniteReads({
    cacheKey: "list",
    ...paginatedIndexesConfig(
      (index) => {
        return [
          {
            address,
            abi,
            functionName: "tokenOfOwnerByIndex",
            args: [owner, BigNumber.from(index)],
          },
        ];
      },
      { start: 0, perPage: balance, direction: "increment" }
    ),
  });

  let output = data && data.pages[0].map((m) => m.toString());
  console.log(output);

  return {
    tokens: output.length <= 0 ? [] : output,
  };
}

function getTokenURIs(tokenIds = []) {
  if (tokenIds.length <= 0) {
    return {
      uris: [],
    };
  }
  const { data, isError, isLoading } = useContractInfiniteReads({
    cacheKey: "data",
    contracts() {
      return tokenIds.map((token) => {
        const args = [BigNumber.from(token)];
        return {
          address,
          abi,
          functionName: "tokenURI",
          args,
        };
      });
    },
    // select: async (data) => {
    //   const dataFromPage = data.pages[0];
    //   const uri = await Promise.all(
    //     dataFromPage.map(async (d) => await axios(d))
    //   );
    //   return uri.data;
    // },
  });

  return {
    uris: data.length <= 0 ? [] : data.pages[0],
  };
}

export { getTokenURI, getBalanceOf, getTokenTokenIdsByIndexes, getTokenURIs };
