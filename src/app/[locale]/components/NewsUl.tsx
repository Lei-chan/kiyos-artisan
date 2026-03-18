"use client";
//react
import { useEffect, useState } from "react";
//type
import { NewsData, TYPE_GROUP, TYPE_LOCALE } from "../../lib/config/type";
//models
import {
  dateIsNew,
  getLocaleDate,
  getShortenedGroupName,
} from "@/app/lib/helper";
import { MANAGEMENT_API_URL } from "@/app/lib/config/settings";
import Link from "next/link";

export default function NewsUl({
  locale,
  type,
}: {
  locale: TYPE_LOCALE;
  type: "all" | TYPE_GROUP | "both";
}) {
  const [news, setNews] = useState<NewsData[]>();
  const newsForType =
    type === "all" ? news : news?.filter((n) => n.type === type);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const displayLoadingMessage = () =>
      setMessage(locale === "en" ? "Loading..." : "ロード中...");
    displayLoadingMessage();

    fetch(`${MANAGEMENT_API_URL}news`)
      .then((res) => res.json())
      .then(setNews)
      .catch((err) => {
        console.error("Error", err);
        setMessage(
          locale === "en"
            ? "Server Error. Please try again this later 🙇‍♂️"
            : "サーバーエラーが発生しました。後ほどもう一度お試し下さい🙇‍♂️",
        );
      });
  }, [locale]);

  return (
    <ul className="w-[18rem] sm:w-[20rem] md:w-[23rem] lg:w-[27rem] xl:w-[32rem] 2xl:w-[34rem] aspect-[1/1.3] md:aspect-[1/1.2] lg:aspect-[1/1.1] xl:aspect-square 2xl:aspect-[1/0.9] border-2 overflow-y-auto overflow-x-hidden bg-white rounded-lg">
      {!news && message && <p className="text-center mt-8">{message}</p>}
      {newsForType &&
        newsForType.length > 0 &&
        newsForType.map((n, i) => <List key={i} locale={locale} news={n} />)}
      {newsForType && newsForType.length === 0 && (
        <p className="text-center mt-8">
          {locale === "ja" ? "新しいニュースはありません" : "There're no news"}
        </p>
      )}
    </ul>
  );
}

function List({ locale, news }: { locale: TYPE_LOCALE; news: NewsData }) {
  const isNewsNew = dateIsNew(news.date);
  const type = news.type;

  const [clicked, setClicked] = useState(false);

  function handleClickList() {
    setClicked(!clicked);
  }

  return (
    <li
      className="relative w-full min-h-[5rem] max-h-fit border-b-2 p-2 pb-3 cursor-pointer flex flex-col gap-2"
      onClick={handleClickList}
    >
      <div className="w-fit flex-1 text-sm flex flex-row items-center">
        {isNewsNew && <span className="mr-[3%] text-purple-700">New</span>}
        <span>{getLocaleDate(locale, news.date)}</span>
      </div>
      <div
        className="w-full flex-[2] flex flex-row justify-evenly 
      items-center"
      >
        <span
          className={`w-fit h-fit text-white py-[2px] px-1 rounded text-xs mt-[1%] ${
            type === "kiyos"
              ? "bg-yellow-500"
              : type === "amavin"
                ? "bg-pink-600"
                : "bg-amber-600"
          } `}
        >
          {type !== "both"
            ? getShortenedGroupName(type)
            : locale === "en"
              ? "Common"
              : "共通"}
        </span>
        <p className="w-[75%] h-full text-[15px] overflow-hidden leading-tight">
          {news.content.title[locale]}
        </p>
      </div>
      {clicked && (
        <div className="w-full h-fit flex flex-col items-center text-sm p-1 text-center mb-1">
          <p className="lg:w-[90%] text-left mb-2">
            {news.content.sentence[locale]}
          </p>
          <Link href={news.content.link} className="text-purple-700 underline">
            {locale === "en"
              ? "Please check out from here"
              : "こちらからご確認ください"}
          </Link>
        </div>
      )}
    </li>
  );
}
