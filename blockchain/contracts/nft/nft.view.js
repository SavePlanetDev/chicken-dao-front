import { abi, address } from "./nft.abi";
import { useContractRead } from "wagmi";

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

export { getTokenURI };
