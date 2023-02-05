import { ERC20ABI } from "./abi";
import { config } from "./config";

import { useContractReads } from "wagmi";

function getdBtcBalanceOf() {
  const { data, isSuccess, isError } = useContractReads({
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
        ERC20ABI,
        functionName: "balanceOf",
        args: [config.treasuryAddress],
      },
    ],
  });
  const dBtcData = data.length <= 0 ? [] : data.map((d) => d.toString());

  return {
    data: dBtcData,
    balanceOK: isSuccess,
  };
}

export { getdBtcBalanceOf };
