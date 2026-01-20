import { TYPE_GROUP, TYPE_LOCALE, TYPE_MONTH_HISTORY } from "./config/type";

export const wait = async (seconds: number) =>
  new Promise((resolve) => setTimeout(() => resolve, seconds * 1000));

export const dateIsNew = (date: string) => {
  const daysPast = Math.floor(
    (Date.now() - new Date(date).getTime()) / 1000 / 60 / 60 / 24,
  );

  return daysPast <= 7 ? true : false;
};

//methods for getting names
export const getGroupNameFromType = (type: TYPE_GROUP) =>
  type === "kiyos" ? "Kiyos Cellar" : "Artisan Mariage Vineyards";

export const getShortenedGroupName = (type: TYPE_GROUP) =>
  type.at(0)?.toUpperCase() + type.slice(1);

export const getAboutName = (locale: TYPE_LOCALE, type: TYPE_GROUP) =>
  locale === "ja"
    ? `${getGroupNameFromType(type)}について`
    : `About ${getGroupNameFromType(type)}`;

export const getShopName = (locale: TYPE_LOCALE) =>
  locale === "ja" ? "ショップ" : "Shop";

export const getNewsName = (locale: TYPE_LOCALE) =>
  locale === "ja" ? "お知らせ" : "News";

export const getContactName = (locale: TYPE_LOCALE) =>
  locale === "ja" ? "お問い合わせ" : "Contact";

export const getLocaleDate = (locale: TYPE_LOCALE, date: string) =>
  new Intl.DateTimeFormat(locale).format(new Date(date));

export const getLocalMonth = (locale: TYPE_LOCALE, month: number) => {
  if (locale === "ja") return `${month}月`;

  switch (month) {
    case 1:
      return "Jan";
    case 2:
      return "Feb";
    case 3:
      return "Mar";
    case 4:
      return "Apr";
    case 5:
      return "May";
    case 6:
      return "Jun";
    case 7:
      return "Jul";
    case 8:
      return "Aug";
    case 9:
      return "Sep";
    case 10:
      return "Oct";
    case 11:
      return "Nov";
    case 12:
      return "Dec";
  }
};

export const getHistoryForSearch = (history: object, keywords: string[]) => {
  const keys = Object.keys(history);
  const values = Object.values(history);

  return values.flatMap((yearValues, i) =>
    yearValues.map((value: TYPE_MONTH_HISTORY) => {
      return {
        title: {
          ja: `${keys[i]}年${getLocalMonth("ja", value.month)}`,
          en: `${keys[i]} ${getLocalMonth("en", value.month)}`,
        },
        searchableText: value.searchableText,
        href: "/history",
        keywords: ["history", ...keywords],
      };
    }),
  );
};
