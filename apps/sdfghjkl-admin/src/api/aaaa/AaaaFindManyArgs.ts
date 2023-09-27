import { AaaaWhereInput } from "./AaaaWhereInput";
import { AaaaOrderByInput } from "./AaaaOrderByInput";

export type AaaaFindManyArgs = {
  where?: AaaaWhereInput;
  orderBy?: Array<AaaaOrderByInput>;
  skip?: number;
  take?: number;
};
