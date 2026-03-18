"use client";
//react
import { useEffect, useRef, useState } from "react";
// next.js
import { useParams } from "next/navigation";
//components
import TitleNavLable from "../components/TitleNavLable";
//methods
import { getGroupNameFromType, getLocalMonth } from "@/app/lib/helper";
//type
import { HistoryData, TYPE_GROUP, TYPE_LOCALE } from "../../lib/config/type";
import {
  amavinHistoryYears,
  kiyosHistoryYears,
  MANAGEMENT_API_URL,
} from "@/app/lib/config/settings";
import HistoryDefaultImage from "../components/HistoryDefaultImage";
import { historyPClassName } from "@/app/lib/config/styles";

export default function History() {
  const smallHeaderClassName = "text-lg text-orange-800 font-bold";
  const containerClassName =
    "w-full h-fit flex flex-col items-center mt-9 scroll-mt-4";
  const { locale } = useParams();
  const currentLocale = (locale || "en") as TYPE_LOCALE;

  return (
    <div className="w-full min-h-screen max-h-fit text-center">
      <TitleNavLable
        locale={currentLocale}
        type="history"
        bgImagePath="/mountains-from-field.webp"
      />
      <div className="w-full min-h-[75vh] z-0 bg-[#ffffdc] flex flex-col items-center">
        <div className="w-full h-fit md:w-[90%] lg:w-[80%] xl:w-[70%] pb-14">
          <GroupHistory
            locale={currentLocale}
            type="kiyos"
            smallHeaderClassName={smallHeaderClassName}
            containerClassName={containerClassName}
          />
          <GroupHistory
            locale={currentLocale}
            type="amavin"
            smallHeaderClassName={smallHeaderClassName}
            containerClassName={containerClassName}
          />
        </div>
      </div>
    </div>
  );
}

function GroupHistory({
  locale,
  type,
  smallHeaderClassName,
  containerClassName,
}: {
  locale: TYPE_LOCALE;
  type: TYPE_GROUP;
  smallHeaderClassName: string;
  containerClassName: string;
}) {
  const historyYears =
    type === "kiyos" ? kiyosHistoryYears : amavinHistoryYears;

  const isEvenNumber = (number: number) => number % 2 === 0;
  return (
    <div id={type} className={containerClassName}>
      <h1
        className={`${smallHeaderClassName} mb-3 md:mb-4 lg:mb-5 xl:mb-6 2xl:mb-7`}
      >
        {getGroupNameFromType(type)}
      </h1>
      {historyYears.map((year, i) => {
        const isEven = isEvenNumber(i);
        return (
          <YearHistory
            key={i}
            locale={locale}
            type={type}
            isEven={isEven}
            year={year}
          />
        );
      })}
    </div>
  );
}

function YearHistory({
  locale,
  type,
  isEven,
  year,
}: {
  locale: TYPE_LOCALE;
  type: TYPE_GROUP;
  isEven: boolean;
  year: string;
}) {
  const [history, setHistory] = useState<HistoryData[]>();
  const [isYearOpen, setIsYearOpen] = useState(false);
  const [curMonthIndex, setCurMonthIndex] = useState(0);
  const [curMonthHeight, setCurMonthHeight] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");

  const calcTranslateX = (i: number) =>
    `translateX(${(i - curMonthIndex) * 100}%)`;

  function adjustParentHeight(height: number, i: number) {
    if (curMonthIndex === i) setCurMonthHeight(height);
  }

  function handleClickYear() {
    setIsYearOpen(!isYearOpen);
  }

  function handleClickMonth(i: number) {
    setCurMonthIndex(i);
  }

  useEffect(() => {
    fetch(`${MANAGEMENT_API_URL}history?page=history&type=${type}&year=${year}`)
      .then((res) => res.json())
      .then((data) => {
        const sortedByMonth = data.toSorted(
          (a: HistoryData, b: HistoryData) => a.month - b.month,
        );
        setHistory(sortedByMonth);
      })
      .catch((err) => {
        console.error("Error", err);
        setErrorMessage(
          locale === "en"
            ? "Error occured. Please try again."
            : "エラーが発生しました。もう一度お試し下さい。",
        );
      });
  }, [locale, type, year]);

  return (
    <div className="w-[85%] sm:w-[80%] md:w-[75%] lg:w-[70%] xl:w-[65%] 2xl:w-[60%]  h-fit flex flex-col items-center">
      <div
        className={`relative w-full h-fit flex flex-row text-[22px] justify-center py-2 cursor-pointer
            ${
              isEven
                ? "bg-amber-300/50 hover:bg-amber-300/80"
                : "bg-amber-600/50 hover:bg-amber-600/80"
            } ${isYearOpen ? "shadow-md" : ""}`}
        onClick={handleClickYear}
      >
        <span>{year}</span>
        <span className="absolute right-[5%]">+</span>
      </div>
      {isYearOpen &&
        (history ? (
          <>
            <div
              className="relative w-full mt-4 overflow-hidden"
              style={{ height: `${curMonthHeight}px` }}
            >
              {history.map((his, i) => (
                <MonthHistory
                  key={i}
                  locale={locale}
                  history={his}
                  translateX={calcTranslateX(i)}
                  i={i}
                  adjustParentHeight={adjustParentHeight}
                />
              ))}
            </div>
            <div className="w-full h-fit flex flex-row justify-center mt-2 mb-4 md:mb-5 lg:mb-6 xl:mb-7 2xl:mb-8 gap-1 sm:gap-2 px-[2%] flex-wrap">
              {history.map((his, i) => (
                <button
                  key={i}
                  type="button"
                  className={`underline text-sm ${
                    i === curMonthIndex ? "text-orange-800" : "text-orange-600"
                  }`}
                  onClick={() => handleClickMonth(i)}
                >
                  {getLocalMonth(locale, his.month)}
                </button>
              ))}
            </div>
          </>
        ) : errorMessage ? (
          <p className="py-6 text-amber-600">{errorMessage}</p>
        ) : (
          <p className="py-6 text-amber-600">
            {locale === "en" ? "Loading..." : "ロード中..."}
          </p>
        ))}
    </div>
  );
}

function MonthHistory({
  locale,
  history,
  translateX,
  i,
  adjustParentHeight,
}: {
  locale: TYPE_LOCALE;
  history: HistoryData;
  translateX: string;
  i: number;
  adjustParentHeight: (height: number, i: number) => void;
}) {
  const containerRef = useRef<HTMLDivElement>(null);

  //adjust the parent height for the absolude positioned child. Use observer to notice the change when the child is fully rendered
  useEffect(() => {
    const element = containerRef?.current;
    if (!element) return;

    const observer = new ResizeObserver(() =>
      adjustParentHeight(element.offsetHeight, i),
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [i, adjustParentHeight]);

  return (
    <div
      ref={containerRef}
      style={{ transform: translateX }}
      className="absolute w-full h-fit flex flex-col items-center duration-700 px-[5%]"
    >
      <h3 className="text-orange-700 font-bold text-lg my-1 sm:my-2 md:my-3 lg:my-4">
        {getLocalMonth(locale, history.month)}
      </h3>
      {history.contents.map((con, i) => (
        <div
          key={i}
          className="flex flex-col items-center mb-4 sm:mb-5 md:mb-6 lg:mb-7 xl:mb-8 2xl:mb-9"
        >
          {con.images.map((img, i) => (
            <HistoryDefaultImage
              key={i}
              src={`data:image/webp;base64,${img.data}`}
              alt={img.name}
            />
          ))}
          <p className={historyPClassName}>
            {con.sentence[locale].map((sen, i) =>
              i !== con.sentence[locale].length - 1 ? (
                <span key={i}>
                  {sen}
                  <br />
                </span>
              ) : (
                sen
              ),
            )}
          </p>
        </div>
      ))}
    </div>
  );
}
