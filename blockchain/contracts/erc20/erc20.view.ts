import { ERC20ABI } from "./abi";
import { config } from "./config";
import { ethers } from "ethers";

import { useContractReads } from "wagmi";

function getdBtcBalanceOf() {
  const { data, isSuccess, isError, isFetched, isIdle } = useContractReads({
    contracts: [
      {
        address: config.dBtcAddress,
        abi: ERC20ABI,
        functionName: "balanceOf",
        args: [config.digAddress],
      },
      {
        address: config.dBtcAddress,
        abi: ERC20ABI,
        functionName: "balanceOf",
        args: [config.nextDigAddress],
      },
      {
        address: config.dBtcAddress,
        abi: ERC20ABI,
        functionName: "balanceOf",
        args: [config.treasuryAddress],
      },
    ],
  });

  if (!data) {
    return {
      data: [],
      balanceOK: false,
    };
  }

  const dBtcData =
    data.length <= 0
      ? []
      : data.map((d: any) =>
          parseFloat(ethers.utils.formatEther(d.toString())).toFixed(9)
        );

  return {
    data: dBtcData,
    balanceOK: isSuccess,
  };
}

export { getdBtcBalanceOf };
