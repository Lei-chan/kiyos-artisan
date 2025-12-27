"use client";
//react
import { useEffect, useRef, useState } from "react";
//model
import { historyAmavin } from "../../models/historyAmavin";
import { historyKiyos } from "../../models/historyKiyos";
//components
import TitleNavLable from "../components/TitleNavLable";
//type
import { TYPE_GROUP, TYPE_LOCALE, TYPE_MONTH_HISTORY } from "../../config/type";
//methods
import { getGroupNameFromType, getLocalMonth } from "../../helper";
import { useParams } from "next/navigation";

export default function History() {
  const smallHeaderClassName = "text-lg text-orange-800 font-bold";
  const containerClassName =
    "w-full h-fit flex flex-col items-center mt-9 scroll-mt-4";
  const { locale } = useParams();
  const currentLocale = (locale || "en") as TYPE_LOCALE;

  console.log(currentLocale);

  return (
    <div className="w-full min-h-screen max-h-fit  bg-yellow-100/50 text-center flex flex-col items-center">
      <TitleNavLable
        locale={currentLocale}
        type="history"
        bgImageStyle="bg-[url('/mountains-from-field.webp')]"
      />
      <div className="w-full md:w-[90%] lg:w-[80%] xl:w-[70%] h-fit pb-14">
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
  const history = type === "kiyos" ? historyKiyos : historyAmavin;
  const historyEntriesArr = Object.entries(history);

  const isEvenNumber = (number: number) => number % 2 === 0;
  return (
    <div className={containerClassName}>
      <h1 className={`${smallHeaderClassName} mb-2`}>
        {getGroupNameFromType(type)}
      </h1>
      {historyEntriesArr.map((yearArr, i) => {
        const isEven = isEvenNumber(i);
        const [year, monthsArr] = yearArr;
        return (
          <YearHistory
            key={i}
            locale={locale}
            isEven={isEven}
            year={year}
            monthsArr={monthsArr}
          />
        );
      })}
    </div>
  );
}

function YearHistory({
  locale,
  isEven,
  year,
  monthsArr,
}: {
  locale: TYPE_LOCALE;
  isEven: boolean;
  year: string;
  monthsArr: TYPE_MONTH_HISTORY[];
}) {
  const [isYearOpen, setIsYearOpen] = useState(false);
  const [curMonthIndex, setCurMonthIndex] = useState(0);
  const [curMonthHeight, setCurMonthHeight] = useState(0);

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

  return (
    <div className="w-full h-fit flex flex-col items-center">
      <div
        className={`relative w-[85%] h-fit flex flex-row text-[22px] justify-center py-[1%] cursor-pointer
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
      {isYearOpen && (
        <>
          <div
            className="relative w-[90%] mt-4 overflow-hidden"
            style={{ height: `${curMonthHeight}px` }}
          >
            {monthsArr.map((history, i) => (
              <MonthHistory
                key={i}
                locale={locale}
                history={history}
                translateX={calcTranslateX(i)}
                i={i}
                adjustParentHeight={adjustParentHeight}
              />
            ))}
          </div>
          <div className="w-full h-fit flex flex-row justify-center mt-2 mb-4 gap-1">
            {monthsArr.map((history, i) => (
              <button
                key={i}
                type="button"
                className={`underline text-sm ${
                  i === curMonthIndex ? "text-orange-800" : "text-orange-600"
                }`}
                onClick={() => handleClickMonth(i)}
              >
                {getLocalMonth(locale, history.month)}
              </button>
            ))}
          </div>
        </>
      )}
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
  history: TYPE_MONTH_HISTORY;
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
      adjustParentHeight(element.offsetHeight, i)
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
      <h3 className="text-orange-700 font-bold text-lg">
        {getLocalMonth(locale, history.month)}
      </h3>
      {history.content[locale]}
    </div>
  );
}
