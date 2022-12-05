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

function sattle() {
  const { write, isError, isSuccess } = useContractWrite({
    mode: "recklesslyUnprepared",
    address,
    abi,
    functionName: "sattle",
  });

  return {
    sattleAuction: write,
    sattleError: isError,
  };
}

export { PlaceBid, sattle };
