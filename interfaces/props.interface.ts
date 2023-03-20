import { Bid } from "./bid.interface";
export interface Props {
  latest: Bid;
  all?: Bid[];
  treasury: string;
  paused: boolean;
}
