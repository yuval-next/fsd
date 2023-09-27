import { SadsaWhereInput } from "./SadsaWhereInput";
import { SadsaOrderByInput } from "./SadsaOrderByInput";

export type SadsaFindManyArgs = {
  where?: SadsaWhereInput;
  orderBy?: Array<SadsaOrderByInput>;
  skip?: number;
  take?: number;
};
