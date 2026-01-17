// models
import history2025 from "./history2025";
//method
import { getHistoryForSearch } from "@/app/helper";

export const historyKiyos = { ...history2025 };
export const historyKiyosForSearch = getHistoryForSearch(historyKiyos, [
  "kiyos",
]);
