"use client";
import { JSX, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import slideInfo from "./models/slide";
import { useInView } from "react-intersection-observer";
import news from "./models/news";
import { TYPE_NEWS } from "./type";

export default function Home() {
  return (
    <div className="w-screen h-[100%]">
      <Top />
      <Bottom />
    </div>
  );
}

function Top() {
  return (
    <div className="w-full h-dvh">
      <Belt />
      <Slide />
    </div>
  );
}

function Belt() {
  return (
    <div className="grid w-full h-[24vh] bg-blue-900 grid-rows-2 relative">
      {/* I'm gonna replace the p by a logo image later */}
      <h1 className="text-center text-[#ffe77c] pt-[2%] text-base">
        Kiyos Celler
        <br />
        Artisan Mariage Vineyards
      </h1>
      <LanguageSearch />
      <Navi />
    </div>
  );
}

function LanguageSearch() {
  return (
    <div className="absolute w-fit h-fit flex flex-row right-[1%] top-[3%] gap-[5%]">
      <select
        className={`w-[35%] h-full mr-[3%] bg-transparent bg-[url('/icons/globe.svg')] bg-contain bg-center bg-no-repeat appearance-none text-sm  text-blue-900 text-transparent  focus:text-black`}
      >
        <option value="ja">日本語</option>
        <option value="en">English</option>
      </select>
      <button
        type="button"
        className="w-[43%] aspect-square bg-[url('/icons/magnifying-glass.svg')] bg-[length:88%] bg-no-repeat bg-center"
      ></button>
    </div>
  );
}

function Navi() {
  const divClassName =
    "relative flex flex-col text-center items-center justify-center border-r border-blue-900 last:border-r-0";
  const linkClassName = "pb-[1%] px-[1%] text-orange-300 w-full";
  const hoverBgClassName =
    "opacity-0 transition-all duration-500 hover:opacity-50";

  return (
    <nav className="w-full flex flex-row  text-sm bg-blue-800">
      <div className={`${divClassName} w-[27%]`}>
        <Link href="" className={`${linkClassName}`}>
          Kiyos
          <br />
          Celler
        </Link>
      </div>
      <div className={`${divClassName} w-[27%]`}>
        <Image
          src="/main-image.webp"
          alt=""
          fill
          className={hoverBgClassName}
        ></Image>
        <Link href="" className={`${linkClassName} leading-tight`}>
          Artisan Mariage Vineyards
        </Link>
      </div>
      <div className={`${divClassName} w-[27%]`}>
        <div
          className={`${hoverBgClassName} absolute bg-blue-600 w-full h-full`}
        ></div>
        <Link href="" className={`${linkClassName} `}>
          History
        </Link>
      </div>
      <div className={`${divClassName} w-[19%] gap-1`}>
        <div
          className={`${hoverBgClassName} absolute bg-blue-600 w-full h-full`}
        ></div>
        <Image src="/icons/shop.svg" alt="" width={20} height={20}></Image>
        <Link href="" className={`${linkClassName} leading-tight`}>
          Shop
        </Link>
      </div>
    </nav>
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

  return (
    <div className="w-screen h-fit">
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
      <h1 className={`${headerClassName} text-yellow-500`}>Kiyos Celler</h1>
      <div className={`${contentClassName}`}>
        <GroupDescription
          type="kiyos"
          description="Kiyos Cellerでは、主にーーーやーーなど、希少価値の高いワインの輸入販売をおこなっております。"
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
      <h1 className={`${headerClassName} text-pink-600`}>
        Artisan Mariage Vineyards
      </h1>
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
          description="Artisan Mariage VineyardsはKiyos Cellerが作っているヴィンヤードです。ソムリエエクセレンスの資格を持つ支配人がこだわって作るワイン、ぜひご堪能ください。"
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
  type: "kiyos" | "amavin";
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
      <Link href="" className={linkClassName}>
        {type === "kiyos" ? "Kiyos Celler" : "Artisan Mariage Vineyards"}
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
  type: "kiyos" | "amavin";
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
  const labelClassName = "w-fit h-fit text-white p-[1px] rounded";
  const kiyosClassName = `${labelClassName} bg-yellow-500`;
  const amavinClassName = `${labelClassName}  bg-pink-600`;

  const [type, setType] = useState<"all" | "kiyos" | "amavin">("all");

  function handleClickType(e: React.MouseEvent<HTMLButtonElement>) {
    const name = e.currentTarget.name;
    if (name !== "kiyos" && name !== "amavin") return;

    setType(name);
  }

  return (
    <div className="relative w-full h-fit mt-12 flex flex-col items-center bg-yellow-100 py-5">
      <h1 className="text-center text-xl font-bold tracking-wider text-blue-900">
        News
      </h1>
      <ul className="w-[85%] h-[60vh] border-2 mt-5 overflow-y-auto overflow-x-hidden bg-white rounded">
        {news
          .filter((news) => (type === "all" ? news : type === news.type))
          .map((news, i) => (
            <List
              key={i}
              news={news as TYPE_NEWS}
              kiyosClassName={kiyosClassName}
              amavinClassName={amavinClassName}
            />
          ))}
      </ul>
      <NewsButtons
        kiyosClassName={kiyosClassName}
        amavinClassName={amavinClassName}
        onClickType={handleClickType}
      />
    </div>
  );
}

function NewsButtons({
  kiyosClassName,
  amavinClassName,
  onClickType,
}: {
  kiyosClassName: string;
  amavinClassName: string;
  onClickType: (e: React.MouseEvent<HTMLButtonElement>) => void;
}) {
  return (
    <div className="w-full flex flex- row text-sm right-[2%] gap-1 mt-3 justify-center">
      <NewsButton
        type="kiyos"
        className={kiyosClassName}
        onClickType={onClickType}
      />
      <NewsButton
        type="amavin"
        className={amavinClassName}
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

function List({
  news,
  kiyosClassName,
  amavinClassName,
}: {
  news: TYPE_NEWS;
  kiyosClassName: string;
  amavinClassName: string;
}) {
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
            news.type === "kiyos" ? kiyosClassName : amavinClassName
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

//footer
function Footer() {
  return (
    <footer className="bg-blue-900 w-full h-fit p-[4%] flex flex-col gap-2">
      <GroupInfo
        groupName="Kiyos Celler"
        groupInfo={
          <p>
            〒400-0863
            <br />
            山梨県甲府市南口町1-50-1008
          </p>
        }
      />
      <GroupInfo
        groupName="Artisan Mariage Vineyards"
        groupInfo={
          <>
            <p>
              〒
              <br />
              山梨県北杜市明野町
            </p>
            <div className="w-fit h-fit flex flex-row gap-[2%] items-start leading-tight">
              <Image
                src="/icons/email.svg"
                alt="email icon"
                width={15}
                height={15}
                className="mt-[2%]"
              ></Image>
              <p className="break-all">artisanmariagevineyards@gmail.com</p>
            </div>
          </>
        }
      />
      <NavFooter />
      <CopyrightAttribution />
    </footer>
  );
}

function GroupInfo({
  groupName,
  groupInfo,
}: {
  groupName: string;
  groupInfo: JSX.Element;
}) {
  return (
    <div className="w-full flex flex-row gap-[5%] justify-center">
      <div className="w-[65%] text-orange-300 text-sm">
        <p className="text-yellow-200">{groupName}</p>
        {groupInfo}
      </div>
      <div className="w-[25%] flex flex-row justify-start items-center">
        <LinkIcon href="" src="/icons/instagram.svg" alt="Instagram icon" />
      </div>
    </div>
  );
}

function LinkIcon({
  href,
  src,
  alt,
}: {
  href: string;
  src: string;
  alt: string;
}) {
  return (
    <div className="relative w-[35%] h-auto aspect-square">
      <Image src={src} alt={alt} fill></Image>
      <Link href={href} className="w-full h-full absolute"></Link>
    </div>
  );
}

function NavFooter() {
  const navLinkClassName = "w-1/3 hover:text-purple-200";

  return (
    <nav className="w-full h-fit text-purple-300 text-xs underline flex flex-row text-center justify-between">
      <Link href="" className={navLinkClassName}>
        Kiyos Celler
      </Link>
      <Link href="" className={navLinkClassName}>
        Artisan Mariage Vineyards
      </Link>
      <Link href="" className={navLinkClassName}>
        Online Shop
      </Link>
    </nav>
  );
}

function CopyrightAttribution() {
  return (
    <div className="text-xs text-center text-purple-400">
      <p>© 2025 Kiyos Celler Artisan Mariage Vineyards</p>
      <p>Designed by Freepik</p>
    </div>
  );
}
