import { useContractRead } from "wagmi";
import { abi, address } from "./launchpad.abi";
//fetch nft profile from database by address

export function useGetAllNfts() {
  const { data, isLoading, isError, isSuccess } = useContractRead({
    abi,
    address,
    functionName: "getAllNfts",
  });

  return {
    nfts: isSuccess ? parseProjectData(data) : [],
    nftsLoading: isLoading,
    nftsError: isError,
    nftsSuccess: isSuccess,
  };
}

function parseProjectData(data = []) {
  if (data.length <= 0) return [];
  return data.map((d, index) => {
    return {
      name: `BonKaiProject #${index + 1}`,
      desc: `โปรเจค #${index + 1} ของ bonkai launch pad (ยังไม่ได้ตั้งชื่อ)`,
      supply: `จนกว่าเวลาจะหมด`,
      web: `bonkai_launchpad`,
      asset: d.asset,
      owner: d.owner,
    };
  });
}
