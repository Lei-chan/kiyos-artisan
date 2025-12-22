import { historyPClassName } from "../../config";
import { getHistoryForSearch } from "../../helper";

export const historyKiyos = {
  2025: [
    {
      month: 10,
      content: {
        ja: (
          <p className={historyPClassName}>
            様々な国からワインの輸入を開始しました。
          </p>
        ),
        en: (
          <p className={historyPClassName}>
            Started collecting various wine from diffent countries.
          </p>
        ),
      },
      searchableText: {
        ja: "様々な国からワインの輸入を開始しました。",
        en: "Started collecting various wine from diffent countries.",
      },
    },
    {
      month: 12,
      content: {
        ja: (
          <p className={historyPClassName}>
            オンラインショップでワインの販売を始めました。
          </p>
        ),
        en: (
          <p className={historyPClassName}>
            Started selling wines through the online shop
          </p>
        ),
      },
      searchableText: {
        ja: "オンラインショップでワインの販売を始めました。",
        en: "Started selling wines through the online shop",
      },
    },
  ],
};

export const historyKiyosForSearch = getHistoryForSearch(historyKiyos, [
  "kiyos",
]);
