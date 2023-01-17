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
  if (!owner) return { balance: 0 };
  console.log("กระเป๋าที่เชื่อมต่อ : ", owner);
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
  console.log("output ของ function get tokenIds: ", output);

  return {
    tokens: output.length <= 0 ? [] : output,
  };
}

function getTokenURIs(tokenIds = []) {
  console.log(tokenIds.length);
  if (tokenIds.length <= 0) {
    console.log("zero length");
    return {
      uris: [],
    };
  } else {
    try {
      const { data, isError, isLoading } = useContractInfiniteReads({
        cacheKey: "data",
        contracts() {
          const data = tokenIds.map((token) => {
            const args = [BigNumber.from(token)];
            return {
              address,
              abi,
              functionName: "tokenURI",
              args,
            };
          });
          return data;
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
        uris: data == undefined ? [] : data.pages[0],
      };
    } catch (e) {
      console.log("error", e);
    }
  }
}

export { getTokenURI, getBalanceOf, getTokenTokenIdsByIndexes, getTokenURIs };
