import Link from "next/link";
import { dateIsNew } from "../helper";

const news = [
  {
    date: "2025/12/12",
    type: "kiyos",
    title:
      "新しいワインの発売を開始いたしました！ 新しいワインの発売を開始いたしました！",
    content: (
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
    searchableText:
      "新しい○○社のワインが22本入荷しました。華やかで味わい深いワイン、ぜびご堪能下さい。購入はこちらから",
  },
  {
    date: "2025/12/12",
    type: "kiyos",
    title: "新しいワインの発売を開始いたしました！",
    content: (
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
    searchableText:
      "新しい○○社のワインが22本入荷しました。華やかで味わい深いワイン、ぜびご堪能下さい。購入はこちらから",
  },
  {
    date: "2025/12/12",
    type: "amavin",
    title: "New wine is released!",
    content: (
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
    searchableText:
      "New wine from 00 company is released! This rich and floral flavore.Please check it out. Purchase from here",
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
    keywords: ["お知らせ", "news", news.type],
  };
});
