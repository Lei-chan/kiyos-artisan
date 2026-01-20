"use client";
//react
import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
//next.js
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
//models
import slideInfo from "../models/slide";
import { amavin, kiyos } from "../models/home";
//components
import NewsUl from "./components/NewsUl";
//type
import { TYPE_GROUP, TYPE_LOCALE } from "../config/type";
//methods
import {
  getAboutName,
  getGroupNameFromType,
  getShortenedGroupName,
} from "../helper";
import Loading from "./loading";

export default function Home() {
  const { locale } = useParams();
  const [displayLoading, setDisplayLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setDisplayLoading(false);
    }, 3000);
  }, []);

  return (
    <div className="w-full h-[100%]">
      {displayLoading && <Loading />}
      <Top locale={(locale || "en") as TYPE_LOCALE} />
      <Bottom locale={(locale || "en") as TYPE_LOCALE} />
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
  const slideLength = slideInfo.length;
  const slideDuration = 5; //seconds
  const [curImage, setCurImage] = useState(0);
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (intervalId) clearInterval(intervalId);

    const id = setInterval(() => {
      setCurImage((prev) => (prev === slideLength - 1 ? 0 : prev + 1));
      setIntervalId(id);
    }, slideDuration * 1000);
  }, [curImage, slideLength, intervalId]);

  return (
    <div className="w-full h-[76vh] relative">
      {slideInfo.map((slide, i) => (
        <Image
          key={i}
          src={slide.src}
          alt={slide.alt[locale]}
          width={2560}
          height={1422}
          priority
          className={`absolute w-[2560px] h-full object-cover transition duration-[2000ms] ease-in-out ${
            curImage === i ? "opacity-100" : "opacity-0"
          }`}
        ></Image>
      ))}
    </div>
  );
}

function Bottom({ locale }: { locale: TYPE_LOCALE }) {
  const containerClassName =
    "w-full md:w-[90%] lg:w-[80%] h-fit text-center transition-all duration-[1200ms]";
  const headerClassName = "text-2xl font-bold tracking-wider";
  const contentClassName =
    "w-full h-fit flex flex-row mt-6 md:mt-5 px-[7%] gap-5 justify-center items-center";
  const slideInClassName = "transform duration-[2000ms]";

  const buttomRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={buttomRef}
      className="w-full h-fit flex flex-col items-center mt-20 gap-11 md:gap-13 lg:gap-16"
    >
      <Kiyos
        locale={locale}
        containerClassName={containerClassName}
        headerClassName={headerClassName}
        contentClassName={contentClassName}
        slideInClassName={slideInClassName}
      />
      <Amavine
        locale={locale}
        containerClassName={containerClassName}
        headerClassName={headerClassName}
        contentClassName={contentClassName}
        slideInClassName={slideInClassName}
      />
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
        {/* <GroupImages
          type="kiyos"
          src1="/wine-demo.png"
          alt1={locale === "ja" ? "○○ワイン画像" : "something wine image"}
          src2="/wine-demo2.png"
          alt2={locale === "ja" ? "○○ワイン画像" : "something wine image"}
          left1="left-4"
          left2="left-16"
          slideInClassName={slideInClassName}
          inView={inView}
        /> */}
      </div>
    </div>
  );
}

function Amavine({
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
      className={`${containerClassName} ${
        inView ? "opacity-100" : "opacity-0"
      }`}
    >
      <h1 className={`${headerClassName} text-pink-600`}>
        {amavin.title[locale]}
      </h1>
      <div className={`${contentClassName}`}>
        {/* <GroupImages
          type="amavin"
          src1="/artisan-wine-one-no-bg.png"
          alt1={
            locale === "ja"
              ? "Artisan Mariage Vineyards画像"
              : "Artisan Mariage Vineyards wine image"
          }
          src2="/artisan-wine-one-no-bg.png"
          alt2={
            locale === "ja"
              ? "Artisan Mariage Vineyards画像"
              : "Artisan Mariage Vineyards wine image"
          }
          left1=""
          left2="left-11"
          slideInClassName={slideInClassName}
          inView={inView}
        /> */}
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
      <Link href="" className={linkClassName}>
        {locale === "ja"
          ? "オンラインショップはこちら（準備中）"
          : "Online shop from here (In preparation)"}
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
  const [type, setType] = useState<"all" | TYPE_GROUP>("all");

  function handleClickHeader() {
    setType("all");
  }

  function handleClickType(e: React.MouseEvent<HTMLButtonElement>) {
    const name = e.currentTarget.name;
    if (name !== "kiyos" && name !== "amavin") return;

    setType(name);
  }

  return (
    <div className="relative w-full h-fit mt-12 flex flex-col items-center bg-yellow-100 py-[5%]">
      <h1
        className="text-center text-xl font-bold tracking-wider text-blue-900 cursor-pointer mb-4"
        onClick={handleClickHeader}
      >
        {locale === "ja" ? "ニュース" : "News"}
      </h1>
      <NewsUl locale={locale} type={type} />
      <NewsButtons onClickType={handleClickType} />
    </div>
  );
}

function NewsButtons({
  onClickType,
}: {
  onClickType: (e: React.MouseEvent<HTMLButtonElement>) => void;
}) {
  const labelClassName = "w-fit h-fit text-white p-[1px] rounded";

  return (
    <div className=" flex flex-row text-sm  mt-6 w-full md:w-[70%] lg:w-[60%] 2xl:w-[50%] justify-center md:justify-end gap-1 md:gap-5">
      <NewsButton
        type="kiyos"
        className={`${labelClassName} bg-yellow-500`}
        onClickType={onClickType}
      />
      <NewsButton
        type="amavin"
        className={`${labelClassName}  bg-pink-600`}
        onClickType={onClickType}
      />
    </div>
  );
}

function NewsButton({
  type,
  className,
  onClickType,
}: {
  type: TYPE_GROUP;
  className: string;
  onClickType: (e: React.MouseEvent<HTMLButtonElement>) => void;
}) {
  return (
    <div className="flex flex-row w-[50%] md:w-fit h-fit gap-1 justify-center">
      <button
        type="button"
        name={type}
        className={className}
        onClick={onClickType}
      >
        {getShortenedGroupName(type)}
      </button>
      <span>: {getGroupNameFromType(type)}</span>
    </div>
  );
}
