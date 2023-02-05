import PrivilageCard from "./privilage.card";
import CardItem from "./card.item";
import CardItem2 from "./card.itemv2";
import { useObject } from "react-firebase-hooks/database";
import { getdBtcBalanceOf } from "../blockchain/contracts/erc20/erc20.view";

import { db } from "../firebase/config";
import { ref } from "firebase/database";

export default function DigMonitor() {
  const { data } = getdBtcBalanceOf();
  const [snapshots, loading, error] = useObject(ref(db, "/"));

  return (
    <>
      {/* {error && <strong>Error: {error}</strong>} */}
      {/* {loading && <span>List: Loading...</span>} */}
      {!loading && snapshots && (
        <>
          <PrivilageCard title={"Dig Monitor"}>
            <CardItem
              title={"lastUpdate: "}
              content={new Date(snapshots.val().lastUpdate).toLocaleString(
                "en-th"
              )}
            />
            <CardItem2
              title={"pendingReward: "}
              content={`${snapshots.val().pendingReward} dBTC`}
            />
            <CardItem
              title={"tokenCount: "}
              content={`${snapshots.val().tokenCount} Dig[s]`}
            />
            <CardItem
              title={"tokenIds: "}
              content={`[${snapshots.val().tokenIds}]`}
            />
            <CardItem title={"Dig Tres.: "} content={`${data[0]} dBtc`} />
            <CardItem title={"Next Dig: "} content={`${data[1]} dBtc`} />
          </PrivilageCard>
        </>
      )}
    </>
  );
}
