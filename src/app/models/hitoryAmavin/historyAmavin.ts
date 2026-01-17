// models
import history2019 from "./history2019";
import history2020 from "./history2020";
import history2021 from "./hisotory2021";
import history2022 from "./history2022";
import history2023 from "./history2023";
import history2024 from "./history2024";
import history2025 from "./history2025";
//method
import { getHistoryForSearch } from "@/app/helper";

export const historyAmavin = {
  ...history2019,
  ...history2020,
  ...history2021,
  ...history2022,
  ...history2023,
  ...history2024,
  ...history2025,
};
export const historyAmavinForSearch = getHistoryForSearch(historyAmavin, [
  "amavin",
]);
