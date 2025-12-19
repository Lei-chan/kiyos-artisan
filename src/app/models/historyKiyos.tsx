import { historyPClassName } from "../config";
import { getHistoryForSearch } from "../helper";

export const historyKiyos = {
  2025: [
    {
      month: 10,
      content: (
        <p className={historyPClassName}>
          Started collecting various wine from diffent countries.
        </p>
      ),
      searchableText: "Started collecting various wine from diffent countries.",
    },
    {
      month: 12,
      content: (
        <p className={historyPClassName}>
          Started selling wines through the online shop
        </p>
      ),
      searchableText: "Started selling wines through the online shop",
    },
  ],
};

export const historyKiyosForSearch = getHistoryForSearch(historyKiyos, [
  "kiyos",
]);
