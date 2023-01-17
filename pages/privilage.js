import PrivilageHeader from "../components/privilage.header";
import PleaseConnectWallet from "../components/please.connnect.wallet";
import NftContainer from "../components/nftcontainer";
import NftImageList from "../components/nftImageList";
import PrivilageTitle from "../components/privilage.title";
import PrivilageCard from "../components/privilage.card";
import styles from "../styles/Privilage.module.css";
import { useAccount } from "wagmi";
import { getNftListOf } from "../blockchain/contracts/nft/nft.view.ether";
import { useEffect, useState } from "react";
import PrivilageList from "../components/privilage.list";
import WalletEmpty from "../components/wallet.empty";

export default function PrivilagePage() {
  const [nftData, setNftData] = useState([]);
  const { address, isConnected } = useAccount();
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    if (address !== undefined) {
      getNftList(address);
    }
    if (!isConnected) {
      setNftData([]);
    }
  }, [address, isConnected]);

  async function getNftList(owner) {
    const nftList = await getNftListOf(owner);
    nftList.length <= 0 ? setNftData([]) : setNftData(nftList);
  }

  if (!isConnected)
    return (
      <div>
        <PrivilageHeader />
        <PleaseConnectWallet />
      </div>
    );

  return (
    <div>
      <PrivilageHeader />
      {nftData.length > 0 ? (
        <>
          <NftContainer>
            <div className={styles.listContainer}>
              <h2>ไก่ในเล้าของคุณ 🐔</h2>
              <NftImageList images={nftData} />
            </div>
          </NftContainer>
          <PrivilageTitle />
          <NftContainer>
            <PrivilageList />
          </NftContainer>
        </>
      ) : (
        <WalletEmpty />
      )}
    </div>
  );
}
