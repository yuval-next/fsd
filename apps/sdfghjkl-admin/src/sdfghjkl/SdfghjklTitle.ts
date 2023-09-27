import { Sdfghjkl as TSdfghjkl } from "../api/sdfghjkl/Sdfghjkl";

export const SDFGHJKL_TITLE_FIELD = "id";

export const SdfghjklTitle = (record: TSdfghjkl): string => {
  return record.id?.toString() || String(record.id);
};
