import { useContractEvent } from "wagmi";
import { useState } from "react";
import { abi, address } from "./nft.abi";

export function EventSetBaseUri() {
  const [baseUri, setBaseUri] = useState(false);

  useContractEvent({
    address,
    abi,
    eventName: "SetBaseUri",
    listener(tokenId, baseUri) {
      setBaseUri(baseUri);
    },
  });

  return {
    baseUri,
  };
}
