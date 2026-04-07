"use client";
//react
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
//next.js
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
//models
import { amavin, kiyos } from "../lib/models/home";
//components
import NewsUl from "./components/NewsUl";
import Loading from "./loading";
//methods
import {
  getAboutName,
  getGroupNameFromType,
  getShortenedGroupName,
} from "../lib/helper";
// settings
import { SHOP_URL } from "../lib/config/settings";
//type
import { NewsType, TYPE_GROUP, TYPE_LOCALE } from "../lib/config/type";

export default function Home() {
  const { locale } = useParams<{ locale: TYPE_LOCALE }>();
  const [displayLoading, setDisplayLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setDisplayLoading(false);
    }, 3000);
  }, []);

  return (
    <div className="w-full h-[100%]">
      {displayLoading && <Loading />}
      <Top locale={locale} />
      <Bottom locale={locale} />
    </div>
  );
}

function Top({ locale }: { locale: TYPE_LOCALE }) {
  return (
    <div className="w-full h-[76vh]">
      <Slide locale={locale} />
    </div>
  );
}

function Slide({ locale }: { locale: TYPE_LOCALE }) {
  const slideData = [
    {
      src: "/field-before-harvest.webp",
      alt: {
        ja: "ヴィンヤード収穫画像",
        en: "Vineyard before harvest image",
      },
    },
    {
      src: "/mountains-from-field.webp",
      alt: {
        ja: "ヴィンヤードから見る山々画像",
        en: "Mountains from vineyard image",
      },
    },
    {
      src: "/field-snow.webp",
      alt: {
        ja: "雪が積もったヴィンヤード画像",
        en: "Vineyard covered with snow image",
      },
    },
    {
      src: "/field-with-sky.webp",
      alt: {
        ja: "Artisan Mariage Vineyards画像",
        en: "Artisan mariage vineyards image",
      },
    },
  ];

  const numberOfSlides = slideData.length;
  const slideDuration = 5; //seconds
  const [curImage, setCurImage] = useState(0);
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (intervalId) clearInterval(intervalId);

    const id = setInterval(() => {
      setCurImage((prev) => (prev === numberOfSlides - 1 ? 0 : prev + 1));
      setIntervalId(id);
    }, slideDuration * 1000);
  }, [curImage, numberOfSlides, intervalId]);

  return (
    <div className="w-full h-[76vh] relative">
      {slideData.map((slide, i) => (
        <Image
          key={i}
          src={slide.src}
          alt={slide.alt[locale]}
          width={2560}
          height={1422}
          priority
          className={`absolute w-full h-full object-cover transition duration-[2000ms] ease-in-out ${
            curImage === i ? "opacity-100" : "opacity-0"
          }`}
        ></Image>
      ))}
    </div>
  );
}

function Bottom({ locale }: { locale: TYPE_LOCALE }) {
  const containerClassName =
    "w-full w-[90%] md:w-[80%] lg:w-[70%] xl:w-[65%] h-fit text-center transition-all duration-[1200ms] scroll-m-5";
  const headerClassName = "text-2xl font-bold tracking-wider";
  const contentClassName =
    "w-full h-fit flex flex-row mt-6 md:mt-5 px-[7%] gap-5 justify-center items-center";
  const slideInClassName = "transform duration-[2000ms]";

  return (
    <div className="w-full h-fit">
      <div className="flex flex-col items-center my-20 md:my-24 lg:my-28  gap-20 lg:gap-24 xl:gap-28">
        <Kiyos
          locale={locale}
          containerClassName={containerClassName}
          headerClassName={headerClassName}
          contentClassName={contentClassName}
          slideInClassName={slideInClassName}
        />
        <Amavin
          locale={locale}
          containerClassName={containerClassName}
          headerClassName={headerClassName}
          contentClassName={contentClassName}
          slideInClassName={slideInClassName}
        />
      </div>
      <News locale={locale} />
    </div>
  );
}

function Kiyos({
  locale,
  containerClassName,
  headerClassName,
  contentClassName,
  slideInClassName,
}: {
  locale: TYPE_LOCALE;
  containerClassName: string;
  headerClassName: string;
  contentClassName: string;
  slideInClassName: string;
}) {
  const [ref, inView, entry] = useInView({ threshold: 0.5, triggerOnce: true });

  return (
    <div
      ref={ref}
      id="kiyos"
      className={`${containerClassName} ${
        inView ? "opacity-100" : "opacity-0"
      }`}
    >
      <h1 className={`${headerClassName} text-yellow-500`}>
        {kiyos.title[locale]}
      </h1>
      <div className={`${contentClassName}`}>
        <GroupDescription
          locale={locale}
          type="kiyos"
          description={kiyos.searchableText[locale]}
          slideInClassName={slideInClassName}
          inView={inView}
        />
      </div>
    </div>
  );
}

function Amavin({
  locale,
  containerClassName,
  headerClassName,
  contentClassName,
  slideInClassName,
}: {
  locale: TYPE_LOCALE;
  containerClassName: string;
  headerClassName: string;
  contentClassName: string;
  slideInClassName: string;
}) {
  const [ref, inView, entry] = useInView({ threshold: 0.5, triggerOnce: true });

  return (
    <div
      ref={ref}
      id="amavin"
      className={`${containerClassName} ${
        inView ? "opacity-100" : "opacity-0"
      }`}
    >
      <h1 className={`${headerClassName} text-pink-600`}>
        {amavin.title[locale]}
      </h1>
      <div className={`${contentClassName}`}>
        <GroupDescription
          locale={locale}
          type="amavin"
          description={amavin.searchableText[locale]}
          slideInClassName={slideInClassName}
          inView={inView}
        />
      </div>
    </div>
  );
}

function GroupDescription({
  locale,
  type,
  description,
  slideInClassName,
  inView,
}: {
  locale: TYPE_LOCALE;
  type: TYPE_GROUP;
  description: string;
  slideInClassName: string;
  inView: boolean;
}) {
  const linkClassName = "text-sm text-purple-700 underline";
  return (
    // change w-[80%] to w-[60%] later with images
    <div
      className={`${slideInClassName} w-[80%] h-fit ${
        inView
          ? "translate-x-0"
          : type === "kiyos"
            ? `-translate-x-[10%]`
            : "translate-x-[10%]"
      }`}
    >
      <p className="text-base">{description}</p>
      <Link
        href={`/${locale}/${
          type === "kiyos" ? "kiyos-cellar" : "artisan-mariage-vineyards"
        }`}
        className={linkClassName}
      >
        {getAboutName(locale, type)}
      </Link>
      <br />
      <Link href={SHOP_URL} className={linkClassName}>
        {locale === "ja"
          ? "オンラインショップはこちら"
          : "Online shop from here"}
      </Link>
    </div>
  );
}

function GroupImages({
  type,
  src1,
  src2,
  alt1,
  alt2,
  left1,
  left2,
  slideInClassName,
  inView,
}: {
  type: TYPE_GROUP;
  src1: string;
  src2: string;
  alt1: string;
  alt2: string;
  left1: string;
  left2: string;
  slideInClassName: string;
  inView: boolean;
}) {
  const image =
    "h-auto aspect-[1/4] object-cover relative w-[47px] md:w-[57px] xl:w-[67px]";

  return (
    <div
      className={`${slideInClassName} w-[30%] h-fit flex flex-row justify-center relative ${
        inView
          ? "translate-x-0"
          : type === "kiyos"
            ? "translate-x-[10%]"
            : "-translate-x-[10%]"
      }`}
    >
      <Image
        src={src1}
        alt={alt1}
        width={100}
        height={400}
        unoptimized
        className={`${image} ${left1} -top-3 left-[0%]`}
      ></Image>
      <Image
        src={src2}
        alt={alt2}
        width={100}
        height={400}
        unoptimized
        className={`${image} ${left2} left-[0%]`}
      ></Image>
    </div>
  );
}

function News({ locale }: { locale: TYPE_LOCALE }) {
  const [type, setType] = useState<NewsType | "all">("all");

  function handleClickHeader() {
    setType("all");
  }

  function handleClickType(e: React.MouseEvent<HTMLButtonElement>) {
    const name = e.currentTarget.name as NewsType;

    setType(name);
  }

  return (
    <div
      id="news"
      className="relative w-full h-fit mt-12 flex flex-col items-center bg-yellow-100 py-12 sm:py-14 md:py-16 lg:py-20 xl:py-24 2xl:py-28"
    >
      <h1
        className="text-center text-xl font-bold tracking-wider text-blue-900 cursor-pointer mb-4"
        onClick={handleClickHeader}
      >
        {locale === "ja" ? "ニュース" : "News"}
      </h1>
      <NewsUl locale={locale} type={type} />
      <NewsButtons locale={locale} onClickType={handleClickType} />
    </div>
  );
}

function NewsButtons({
  locale,
  onClickType,
}: {
  locale: TYPE_LOCALE;
  onClickType: (e: React.MouseEvent<HTMLButtonElement>) => void;
}) {
  return (
    <div className="w-[17rem] sm:w-full flex flex-col justify-center sm:flex-row text-sm mt-6 lg:mt-7 gap-2 md:gap-5 lg:gap-6 xl:gap-7 2xl:gap-8">
      <NewsButton locale={locale} type="kiyos" onClickType={onClickType} />
      <NewsButton locale={locale} type="amavin" onClickType={onClickType} />
      <NewsButton locale={locale} type="both" onClickType={onClickType} />
    </div>
  );
}

function NewsButton({
  locale,
  type,
  onClickType,
}: {
  locale: TYPE_LOCALE;
  type: NewsType;
  onClickType: (e: React.MouseEvent<HTMLButtonElement>) => void;
}) {
  return (
    <div className="flex flex-row w-full sm:w-fit h-fit gap-1 justify-left sm:justify-center">
      <button
        type="button"
        name={type}
        className={`w-fit h-fit text-white py-[1px] px-1 rounded ${type === "kiyos" ? "bg-yellow-500" : type === "amavin" ? "bg-pink-600" : "bg-amber-600"}`}
        onClick={onClickType}
      >
        {type !== "both"
          ? getShortenedGroupName(type)
          : locale === "en"
            ? "Common"
            : "共通"}
      </button>
      <span>
        :{" "}
        {type !== "both"
          ? getGroupNameFromType(type)
          : locale === "en"
            ? "both"
            : "両方"}
      </span>
    </div>
  );
}
