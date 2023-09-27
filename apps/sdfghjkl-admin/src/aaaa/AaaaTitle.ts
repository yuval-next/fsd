import { Aaaa as TAaaa } from "../api/aaaa/Aaaa";

export const AAAA_TITLE_FIELD = "id";

export const AaaaTitle = (record: TAaaa): string => {
  return record.id?.toString() || String(record.id);
};
