import { abi, address } from "./executor.abi";
import { useBalance } from "wagmi";

function getBalance() {
  const { data, isError, isLoading } = useBalance({
    address,
  });

  return {
    data: data == undefined ? 0 : data,
    isError,
    isLoading,
  };
}

export { getBalance };
