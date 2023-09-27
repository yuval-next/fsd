import { BbbWhereInput } from "./BbbWhereInput";
import { BbbOrderByInput } from "./BbbOrderByInput";

export type BbbFindManyArgs = {
  where?: BbbWhereInput;
  orderBy?: Array<BbbOrderByInput>;
  skip?: number;
  take?: number;
};
