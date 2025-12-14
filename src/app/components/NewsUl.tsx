"use client";
//react
import { useState } from "react";
//type
import { TYPE_NEWS } from "../type";
//models
import news from "../models/news";

export default function NewsUl({ type }: { type: "all" | "kiyos" | "amavin" }) {
  return (
    <ul className="w-[85%] h-[60vh] border-2 mt-5 overflow-y-auto overflow-x-hidden bg-white rounded">
      {news
        .filter((news) => (type === "all" ? news : type === news.type))
        .map((news, i) => (
          <List key={i} news={news as TYPE_NEWS} />
        ))}
    </ul>
  );
}

function List({ news }: { news: TYPE_NEWS }) {
  const labelClassName = "w-fit h-fit text-white p-[1px] rounded";

  const [clicked, setClicked] = useState(false);

  function handleClickList() {
    setClicked(!clicked);
  }

  return (
    <li
      className="relative w-full min-h-[20%] max-h-fit border-b-2 p-[1%] cursor-pointer"
      onClick={handleClickList}
    >
      <div className="w-fit h-1/3 text-sm">
        {news.new && <span className="mr-[3%] text-purple-700">New</span>}
        <span>{news.date}</span>
      </div>
      <div className="w-full h-2/3 flex flex-row justify-evenly">
        <span
          className={`${
            news.type === "kiyos"
              ? `${labelClassName} bg-yellow-500`
              : `${labelClassName}  bg-pink-600`
          } text-xs mt-[1%]`}
        >
          {news.type}
        </span>
        <p className="w-[75%] h-full text-[15px] overflow-hidden leading-tight">
          {news.title}
        </p>
      </div>
      {clicked && <p className="w-full h-fit text-sm p-[2%]">{news.content}</p>}
    </li>
  );
}
