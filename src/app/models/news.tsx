import Link from "next/link";
import { dateIsNew, getGroupNameFromType, getLocaleDate } from "../helper";
import { TYPE_GROUP } from "@/app/config/type";
import { JSX } from "react";
import { shopUrl } from "../config/others";

const news: {
  date: string;
  type: string;
  title: { ja: string; en: string };
  content: { ja: JSX.Element; en: JSX.Element };
  searchableText: { ja: string; en: string };
}[] = [
  {
    date: "2026/1/28",
    type: "kiyos",
    title: {
      ja: "オンラインショップを開始いたしました！",
      en: "We have started our online shop!",
    },
    content: {
      ja: (
        <>
          <span>
            小規模な日本ワイン生産者、アメリカ、カリフォルニア州のKistler
            Vineyards、Occidental Winesから仕入れたワイン、その他Rare
            Wineの販売を行います。またArtisan Mariage
            Vineyardsのワイン販売も行います。
          </span>
          <br />
          <Link
            href={shopUrl}
            className="underline text-purple-600 text-center"
          >
            オンラインショップはこちら
          </Link>
        </>
      ),
      en: (
        <>
          <span>
            We have started our online shop! We sell wines from small Japanese
            wine producers as well as Kistler Vineyards and Occidental Wines
            from California, USA, other rare wines. We also sell Artisan Mariage
            Vineyards wines.
          </span>
          <br />
          <Link href={shopUrl} className="underline text-purple-600">
            Online shop from here
          </Link>
        </>
      ),
    },
    searchableText: {
      ja: "オンラインショップを開始いたしました！小規模な日本ワイン生産者、アメリカ、カリフォルニア州のKistler Vineyards、Occidental Winesから仕入れたワイン、その他Rare Wineの販売を行います。またArtisan Mariage Vineyardsのワイン販売も行います。",
      en: "We have started our online shop! We sell wines from small Japanese wine producers as well as Kistler Vineyards and Occidental Wines from California, USA, other rare wines. We also sell Artisan Mariage Vineyards wines.",
    },
  },
];

const newsWithNew = news.map((news) => {
  const newNews = { ...news, new: dateIsNew(news.date) };
  return newNews;
});

export const organizedNews = newsWithNew.toReversed();

export const newsForSearch = organizedNews.map((news) => {
  return {
    title: news.title,
    searchableText: {
      ja: `${news.new ? "New" : ""} ${getLocaleDate("ja", news.date)} ${
        news.searchableText.ja
      }`,
      en: `${news.new ? "New" : ""} ${getLocaleDate("en", news.date)} ${
        news.searchableText.en
      }`,
    },
    href: "/",
    keywords: [
      "お知らせ",
      "news",
      getGroupNameFromType(news.type as TYPE_GROUP),
      news.type,
    ],
  };
});
