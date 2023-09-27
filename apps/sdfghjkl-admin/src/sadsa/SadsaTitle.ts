import { Sadsa as TSadsa } from "../api/sadsa/Sadsa";

export const SADSA_TITLE_FIELD = "id";

export const SadsaTitle = (record: TSadsa): string => {
  return record.id?.toString() || String(record.id);
};
