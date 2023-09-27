import { Bbb as TBbb } from "../api/bbb/Bbb";

export const BBB_TITLE_FIELD = "id";

export const BbbTitle = (record: TBbb): string => {
  return record.id?.toString() || String(record.id);
};
