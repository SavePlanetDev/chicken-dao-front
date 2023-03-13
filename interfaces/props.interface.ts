import { Bid } from "./bid.interface";
export interface Props {
  latest: Bid;
  treasury: string;
  paused: boolean;
}
