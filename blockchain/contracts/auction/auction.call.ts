import { abi, address } from "./auction.abi";
import { usePrepareContractWrite, useContractWrite } from "wagmi";

function PlaceBid() {
  //   const { config } = usePrepareContractWrite({
  //     address,
  //     abi,
  //     functionName: "bid",
  //   });

  const { write, isError, isSuccess } = useContractWrite({
    mode: "recklesslyUnprepared",
    address,
    abi,
    functionName: "bid",
  });

  return {
    placeBid: write,
    placeBidError: isError,
    isSuccess,
  };
}

function settle() {
  const { write, isError, isSuccess } = useContractWrite({
    mode: "recklesslyUnprepared",
    address,
    abi,
    functionName: "settle",
  });

  return {
    settleAuction: write,
    settleError: isError,
  };
}

export { PlaceBid, settle };
