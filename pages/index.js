import Header from "../components/header";
import Body from "../components/body";
import Footer from "../components/footer";
import Banner from "../components/banner";

import { ethers } from "ethers";
import { bitkub_mainnet, bitkub_testnet } from "../blockchain/chain";
import * as auctionAbi from "../blockchain/contracts/auction/auction.abi";
import * as executorAbi from "../blockchain/contracts/executor/executor.abi";
import { parseBidsData } from "../blockchain/utils/bids.parser";

export default function Home(props) {
  return (
    <div>
      <div>
        <div>
          <Header />
          <Body props={props} />
        </div>
        <div>
          <Banner />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const provider = new ethers.providers.JsonRpcProvider(
    bitkub_testnet.rpcUrls.default
  );
  const aucitonContract = new ethers.Contract(
    auctionAbi.address,
    auctionAbi.abi,
    provider
  );

  //latest auction information
  const lastestBid = await aucitonContract.getLatestBid();
  const parsed = parseBidsData([lastestBid]);
  const latest = parsed[0];

  //all auctions
  const allBids = await aucitonContract.getAllBids();
  const parsedAllBids = parseBidsData(allBids);

  //treasury balance
  const balance = await provider.getBalance(executorAbi.address);
  const balanceEth = ethers.utils.formatEther(balance);

  return {
    props: {
      latest,
      all: parsedAllBids,
      treasury: balanceEth,
    },
  };
}
