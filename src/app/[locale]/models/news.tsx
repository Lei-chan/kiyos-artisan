import Link from "next/link";
import { dateIsNew, getGroupNameFromType } from "../../helper";
import { TYPE_GROUP } from "@/app/type";

const news = [
  {
    date: "2025/12/12",
    type: "kiyos",
    title: {
      ja: "新しいワインの発売を開始いたしました！ 新しいワインの発売を開始いたしました！",
      en: "We have started selling our new wine! We have started selling our new wine!",
    },
    content: {
      ja: (
        <>
          <span>
            新しい○○社のワインが22本入荷しました。華やかで味わい深いワイン、ぜびご堪能下さい。
          </span>
          <br />
          <Link href="" className="underline text-purple-600">
            購入はこちらから
          </Link>
        </>
      ),
      en: (
        <>
          <span>22 bottles of our wine is now on stock. Please enjoy :)</span>
          <br />
          <Link href="" className="underline text-purple-600">
            Purchase from here
          </Link>
        </>
      ),
    },
    searchableText: {
      ja: "新しい○○社のワインが22本入荷しました。華やかで味わい深いワイン、ぜびご堪能下さい。購入はこちらから",
      en: "22 bottles of our wine is now on stock. Please enjoy :) Purchase from here",
    },
  },
  {
    date: "2025/12/12",
    type: "kiyos",
    title: {
      ja: "新しいワインの発売を開始いたしました！",
      en: "We've started selling our new wine!",
    },
    content: {
      ja: (
        <>
          <span>
            新しい○○社のワインが22本入荷しました。華やかで味わい深いワイン、ぜびご堪能下さい。
          </span>
          <br />
          <Link href="" className="underline text-purple-600">
            購入はこちらから
          </Link>
        </>
      ),
      en: (
        <>
          <span>22 bottles of our wine is now on stock. Please enjoy :)</span>
          <br />
          <Link href="" className="underline text-purple-600">
            Purchase from here
          </Link>
        </>
      ),
    },
    searchableText: {
      ja: "新しい○○社のワインが22本入荷しました。華やかで味わい深いワイン、ぜびご堪能下さい。購入はこちらから",
      en: "22 bottles of our wine is now on stock. Please enjoy :) Purchase from here",
    },
  },
  {
    date: "2025/12/12",
    type: "amavin",
    title: {
      ja: "新しいワインが発売されました！",
      en: "New wine is released!",
    },
    content: {
      ja: (
        <>
          <span>
            ○○会社から新しいワインが届きました。このリッチで華やかな味わい、ぜひご堪能下さい。
          </span>
          <br />
          <Link href="" className="underline text-purple-600">
            ご購入はこちら
          </Link>
        </>
      ),
      en: (
        <>
          <span>
            New wine from 00 company is released! This rich and floral flavore.
            Please check it out.
          </span>
          <br />
          <Link href="" className="underline text-purple-600">
            Purchase from here
          </Link>
        </>
      ),
    },
    searchableText: {
      ja: "○○会社から新しいワインが届きました。このリッチで華やかな味わい、ぜひご堪能下さい。ご購入はこちら",
      en: "New wine from 00 company is released! This rich and floral flavore.Please check it out. Purchase from here",
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
    searchableText: `${news.new ? "New" : ""} ${news.date} ${
      news.searchableText
    }`,
    href: "/",
    keywords: [
      "お知らせ",
      "news",
      getGroupNameFromType("ja", news.type as TYPE_GROUP),
      news.type,
    ],
  };
});
