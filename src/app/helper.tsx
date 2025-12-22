import { TYPE_GROUP, TYPE_LOCALE, TYPE_MONTH_HISTORY } from "./type";

export const wait = async (seconds: number) =>
  new Promise((resolve) => setTimeout(() => resolve, seconds * 1000));

export const dateIsNew = (date: string) => {
  const daysPast = Math.floor(
    (Date.now() - new Date(date).getTime()) / 1000 / 60 / 60 / 24
  );

  return daysPast <= 7 ? true : false;
};

export const getGroupNameFromType = (locale: TYPE_LOCALE, type: TYPE_GROUP) => {
  if (locale === "ja")
    return type === "kiyos"
      ? "キヨズセラー"
      : "アルチザンマリアージュヴィンヤード";

  return type === "kiyos" ? "Kiyos Celler" : "Artisan Mariage Vineyards";
};

export const getShortenedGroupName = (
  locale: TYPE_LOCALE,
  type: TYPE_GROUP
) => {
  if (locale === "ja") return type === "kiyos" ? "キヨズ" : "アマビン";

  return type.at(0)?.toUpperCase() + type.slice(1);
};

export const getHistoryForSearch = (history: object, keywords: string[]) => {
  const keys = Object.keys(history);
  const values = Object.values(history);

  return values.flatMap((yearValues, i) =>
    yearValues.map((value: TYPE_MONTH_HISTORY) => {
      return {
        title: {
          ja: `${keys[i]}年${value.month}月`,
          en: `${value.month}/${keys[i]}`,
        },
        searchableText: value.searchableText,
        href: "/history",
        keywords: ["history", ...keywords],
      };
    })
  );
};
