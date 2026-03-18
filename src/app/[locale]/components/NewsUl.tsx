"use client";
//react
import { useState } from "react";
//type
import { TYPE_GROUP, TYPE_LOCALE, TYPE_NEWS } from "../../lib/config/type";
//models
import { organizedNews } from "../../lib/models/news";
import { getLocaleDate, getShortenedGroupName } from "@/app/lib/helper";

export default function NewsUl({
  locale,
  type,
}: {
  locale: TYPE_LOCALE;
  type: "all" | TYPE_GROUP;
}) {
  const newsForType = organizedNews.filter((news) =>
    type === "all" ? news : type === news.type,
  );
  return (
    <ul className="w-[18rem] sm:w-[20rem] md:w-[23rem] lg:w-[27rem] xl:w-[32rem] 2xl:w-[34rem] aspect-[1/1.3] md:aspect-[1/1.2] lg:aspect-[1/1.1] xl:aspect-square 2xl:aspect-[1/0.9] border-2 overflow-y-auto overflow-x-hidden bg-white rounded-lg">
      {newsForType.length ? (
        newsForType.map((news, i) => (
          <List key={i} locale={locale} news={news as TYPE_NEWS} />
        ))
      ) : (
        <p className="text-base text-center mt-8">
          {locale === "ja" ? "新しいニュースはありません" : "There're no news"}
        </p>
      )}
    </ul>
  );
}

function List({ locale, news }: { locale: TYPE_LOCALE; news: TYPE_NEWS }) {
  const labelClassName = "w-fit h-fit text-white p-[1px] rounded";

  const [clicked, setClicked] = useState(false);

  function handleClickList() {
    setClicked(!clicked);
  }

  return (
    <li
      className="relative w-full min-h-[5rem] max-h-fit border-b-2 p-[1%] cursor-pointer flex flex-col"
      onClick={handleClickList}
    >
      <div className="w-fit flex-1 text-sm flex flex-row items-center">
        {news.new && <span className="mr-[3%] text-purple-700">New</span>}
        <span>{getLocaleDate(locale, news.date)}</span>
      </div>
      <div
        className="w-full flex-[2] flex flex-row justify-evenly 
      items-center"
      >
        <span
          className={`${
            news.type === "kiyos"
              ? `${labelClassName} bg-yellow-500`
              : `${labelClassName}  bg-pink-600`
          } text-xs mt-[1%]`}
        >
          {getShortenedGroupName(news.type)}
        </span>
        <p className="w-[75%] h-full text-[15px] overflow-hidden leading-tight">
          {news.title[locale]}
        </p>
      </div>
      {clicked && (
        <p className="w-full h-fit text-sm p-[2%]">{news.content[locale]}</p>
      )}
    </li>
  );
}
