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
  },
];

const newsWithNew = news.map((news) => {
  const newNews = { ...news, new: dateIsNew(news.date) };
  return newNews;
});

export default newsWithNew.toReversed();
