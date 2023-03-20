import PrivilageHeader from "../../components/privilage.header";
import PleaseConnectWallet from "../../components/please.connnect.wallet";
import NftContainer from "../../components/nftcontainer";
import NftImageList from "../../components/nftImageList";
import PrivilageTitle from "../../components/privilage.title";
import styles from "../../styles/Privilage.module.css";
import { useAccount } from "wagmi";
import { getNftListOf } from "../../blockchain/contracts/nft/nft.view.ether";
import { useEffect, useState } from "react";
import PrivilageList from "../../components/privilage.list";
import WalletEmpty from "../../components/wallet.empty";

import { ethers } from "ethers";
import { bitkub_mainnet } from "../../blockchain/chain";
import * as auctionAbi from "../../blockchain/contracts/auction/auction.abi";
import * as executorAbi from "../../blockchain/contracts/executor/executor.abi";
import { parseBidsData } from "../../blockchain/utils/bids.parser";
import { AuctionProfile } from "../../components/auction.profile";
import { Bid, Props } from "../../interfaces";

export default function PrivilagePage(props: Props) {
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

  async function getNftList(owner: string) {
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
          <AuctionProfile auctions={props.all} />
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
          <div style={{ marginBottom: "50px" }}></div>
        </>
      ) : (
        <WalletEmpty />
      )}
    </div>
  );
}

export async function getStaticProps() {
  const provider = new ethers.providers.JsonRpcProvider(
    bitkub_mainnet.rpcUrls.default
  );

  const aucitonContract = new ethers.Contract(
    auctionAbi.address,
    auctionAbi.abi,
    provider
  );

  // //isAuctionPaused
  const paused = await aucitonContract.paused();

  //latest auction information
  const lastestBid = await aucitonContract.getLatestBid();
  const parsed = parseBidsData([lastestBid]);
  const latest = parsed[0];

  //all auctions
  const allBids = await aucitonContract.getAllBids();
  const parsedAllBids: Bid[] = parseBidsData(allBids);

  //treasury balance
  const balance = await provider.getBalance(executorAbi.address);
  const balanceEth = ethers.utils.formatEther(balance);

  // console.log("regenerate");

  return {
    props: {
      latest,
      all: parsedAllBids,
      treasury: balanceEth,
      paused,
    } as Props,
    revalidate: 10,
  };
}
