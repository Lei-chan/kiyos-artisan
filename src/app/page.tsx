"use client";
//react
import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
//next.js
import Image from "next/image";
import Link from "next/link";
//models
import slideInfo from "./models/slide";
//components
import NewsUl from "./components/NewsUl";
import TopBar from "./components/TopBar";
import Footer from "./components/Footer";
import { amavin, kiyos } from "./models/home";
import UpArrow from "./components/UpArrow";
import { getGroupNameFromType } from "./helper";
import { TYPE_GROUP } from "./type";

export default function Home() {
  return (
    <div className="w-screen h-[100%]">
      <Top />
      <Bottom />
      <UpArrow />
    </div>
  );
}

function Top() {
  return (
    <div className="w-full h-dvh">
      <TopBar />
      <Slide />
    </div>
  );
}

function Slide() {
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
          alt={slide.alt}
          width={1800}
          height={1000}
          priority
          className={`absolute w-[1800px] h-full object-cover transition duration-[2000ms] ease-in-out ${
            curImage === i ? "opacity-100" : "opacity-0"
          }`}
        ></Image>
      ))}
    </div>
  );
}

function Bottom() {
  const containerClassName =
    "w-full h-fit text-center mt-8 transition-all duration-[1200ms]";
  const headerClassName = "text-2xl font-bold tracking-wider";
  const contentClassName = "w-full h-fit flex flex-row mt-6 px-[7%]";
  const slideInClassName = "transform duration-[2000ms]";

  const buttomRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={buttomRef} className="w-screen h-fit">
      <Kiyos
        containerClassName={containerClassName}
        headerClassName={headerClassName}
        contentClassName={contentClassName}
        slideInClassName={slideInClassName}
      />
      <Amavine
        containerClassName={containerClassName}
        headerClassName={headerClassName}
        contentClassName={contentClassName}
        slideInClassName={slideInClassName}
      />
      <News />
      <Footer />
    </div>
  );
}

function Kiyos({
  containerClassName,
  headerClassName,
  contentClassName,
  slideInClassName,
}: {
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
      <h1 className={`${headerClassName} text-yellow-500`}>{kiyos.title}</h1>
      <div className={`${contentClassName}`}>
        <GroupDescription
          type="kiyos"
          description={kiyos.searchableText}
          slideInClassName={slideInClassName}
          inView={inView}
        />
        <GroupImages
          type="kiyos"
          src1="/wine-demo.png"
          alt1="something wine image"
          src2="/wine-demo2.png"
          alt2="something wine image"
          left1="left-4"
          left2="left-16"
          slideInClassName={slideInClassName}
          inView={inView}
        />
      </div>
    </div>
  );
}

function Amavine({
  containerClassName,
  headerClassName,
  contentClassName,
  slideInClassName,
}: {
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
      <h1 className={`${headerClassName} text-pink-600`}>{amavin.title}</h1>
      <div className={`${contentClassName}`}>
        <GroupImages
          type="amavin"
          src1="/artisan-wine-one-no-bg.png"
          alt1="artisan mariage vineyards wine"
          src2="/artisan-wine-one-no-bg.png"
          alt2="artisan mariage vineyards wine"
          left1=""
          left2="left-11"
          slideInClassName={slideInClassName}
          inView={inView}
        />
        <GroupDescription
          type="amavin"
          description={amavin.searchableText}
          slideInClassName={slideInClassName}
          inView={inView}
        />
      </div>
    </div>
  );
}

function GroupDescription({
  type,
  description,
  slideInClassName,
  inView,
}: {
  type: TYPE_GROUP;
  description: string;
  slideInClassName: string;
  inView: boolean;
}) {
  const linkClassName = "text-sm text-purple-700 underline";
  return (
    <div
      className={`${slideInClassName} w-[55%] h-fit ${
        inView
          ? "translate-x-0"
          : type === "kiyos"
          ? `-translate-x-[10%]`
          : "translate-x-[10%]"
      }`}
    >
      <p className="text-base">{description}</p>
      <Link
        href={type === "kiyos" ? "/kiyos-celler" : "artisan-mariage-vineyards"}
        className={linkClassName}
      >
        {getGroupNameFromType(type)}
        について
      </Link>
      <br />
      <Link href="" className={linkClassName}>
        オンラインショップはこちら
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
  const image = "h-auto aspect-[1/4] object-cover absolute";

  return (
    <div
      className={`${slideInClassName} w-[45%] h-fit flex flex-row relative ${
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
        width={50}
        height={200}
        unoptimized
        className={`${image} ${left1} w-[47px] -top-1`}
      ></Image>
      <Image
        src={src2}
        alt={alt2}
        width={50}
        height={200}
        unoptimized
        className={`${image} ${left2} w-[50px]`}
      ></Image>
    </div>
  );
}

//news
function News() {
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
    <div className="relative w-full h-fit mt-12 flex flex-col items-center bg-yellow-100 py-5">
      <h1
        className="text-center text-xl font-bold tracking-wider text-blue-900 cursor-pointer"
        onClick={handleClickHeader}
      >
        News
      </h1>
      <NewsUl type={type} />
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
    <div className="w-full flex flex- row text-sm right-[2%] gap-1 mt-3 justify-center">
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
  type: "kiyos" | "amavin";
  className: string;
  onClickType: (e: React.MouseEvent<HTMLButtonElement>) => void;
}) {
  return (
    <div className="flex flex-row w-[50%] h-fit gap-1 justify-center">
      <button
        type="button"
        name={type}
        className={className}
        onClick={onClickType}
      >
        {type.at(0)?.toUpperCase() + type.slice(1)}
      </button>
      <p>: {type === "kiyos" ? "Kiyos Celler" : "Artisan Mariage Vineyards"}</p>
    </div>
  );
}
