import PrivilageHeader from "../components/privilage.header";
import styles from "../styles/Privilage.module.css";
import { useAccount } from "wagmi";
import Image from "next/image";
import axios from "axios";

import {
  getBalanceOf,
  getTokenTokenIdsByIndexes,
  getTokenURIs,
} from "../blockchain/contracts/nft/nft.view";
import { useEffect, useState } from "react";

export default function PrivilagePage() {
  const { address } = useAccount();
  const { balance, balanceOK } = getBalanceOf(address);
  const { tokens } = getTokenTokenIdsByIndexes(address, balance);
  const { uris } = getTokenURIs(tokens);
  const [nftData, setNftData] = useState([]);

  useEffect(() => {
    if (uris.length > 0) {
      getTokenImages(uris);
    }
  }, [uris.length]);

  async function getTokenImages(uris = []) {
    if (uris.length <= 0) return [];
    const data = await Promise.all(
      uris.map(async (uri) => await axios.get(uri))
    );
    const nft = data.map((d) => d.data);

    setNftData(nft);
  }

  return (
    <div>
      <PrivilageHeader />
      <NftContainer>
        <NftImage></NftImage>
      </NftContainer>
      {/* <div name="nft-container" className={styles.nftContainer}>
        {nftData.length <= 0 ? (
          <div>Nothing</div>
        ) : (
          nftData.map((nft, index) => (
            <NftImage key={index} image={nft.image} />
          ))
        )}
      </div> */}
    </div>
  );
}

function NftContainer() {
  return <div></div>;
}

function NftImage({ image }) {
  return (
    <div name="image-wrapper" className={styles.imageBox}>
      <Image src={image} width={150} height={150}></Image>
    </div>
  );
}

function PrivilageTitle() {
  return <div></div>;
}

function PrivilageContainer() {
  return <div></div>;
}

function PrivilageItem() {
  return <div></div>;
}
