"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import slideInfo from "./models/slide";
import { useInView } from "react-intersection-observer";

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
      <h1 className="text-center text-[#ffe77c] pt-[2%]">
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
    <div className="absolute w-1/4 h-[16%] flex flex-row right-[2%] top-[3%]">
      <select
        className={`w-[20%] h-full mr-[3%] bg-transparent bg-[url('/icons/globe.svg')] bg-contain bg-center bg-no-repeat appearance-none text-sm  text-blue-900 text-transparent  focus:text-black`}
      >
        <option value="ja">日本語</option>
        <option value="en">English</option>
      </select>
      <input
        type="text"
        placeholder="search"
        className="w-[60%] h-full text-[4vw] rounded-lg rounded-r-none text-center"
      ></input>
      <button className="w-[18%] h-full rounded-lg rounded-l-none bg-white bg-[url('/icons/magnifying-glass.svg')] bg-[length:88%] bg-no-repeat bg-center border-l-2"></button>
    </div>
  );
}

function Navi() {
  const divClassName =
    "relative flex flex-col text-center items-center justify-center border-r border-blue-900 last:border-r-0 ";
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
          fill
          priority
          className={`transition duration-[2000ms] ease-in-out ${
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
  const wineImage = "h-auto aspect-[1/4] object-cover absolute";
  const wineImageLeft = `${wineImage} w-[47px]`;
  const wineImageRight = `${wineImage} w-[50px]`;
  const slideInClassName = "transform duration-[2000ms]";

  return (
    <div className="w-screen h-fit">
      <Kiyos
        containerClassName={containerClassName}
        headerClassName={headerClassName}
        contentClassName={contentClassName}
        wineImageLeft={wineImageLeft}
        wineImageRight={wineImageRight}
        slideInClassName={slideInClassName}
      />
      <Amavine
        containerClassName={containerClassName}
        headerClassName={headerClassName}
        contentClassName={contentClassName}
        wineImageLeft={wineImageLeft}
        wineImageRight={wineImageRight}
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
  wineImageLeft,
  wineImageRight,
  slideInClassName,
}: {
  containerClassName: string;
  headerClassName: string;
  contentClassName: string;
  wineImageLeft: string;
  wineImageRight: string;
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
        <div
          className={`${slideInClassName} w-[55%] h-fit ${
            inView ? " translate-x-0" : "-translate-x-[10%]"
          }`}
        >
          <p className="text-base mb-3">
            Kiyos
            Cellerでは、主にーーーやーーなど、希少価値の高いワインの輸入販売をおこなっております。
          </p>
          <Link href="" className="text-sm text-purple-700 underline">
            Kiyos Cellerについて
          </Link>
          <br />
          <Link href="" className="text-sm text-purple-700 underline">
            オンラインショップはこちら
          </Link>
        </div>
        <div
          className={`${slideInClassName} relative w-[45%] flex flex-row ${
            inView ? "translate-x-0" : "translate-x-[10%]"
          }`}
        >
          <Image
            src="/wine-demo.png"
            alt="something wine image"
            width={50}
            height={200}
            className={`${wineImageLeft} left-4`}
          ></Image>
          <Image
            src="/wine-demo2.png"
            alt="something wine image"
            width={50}
            height={200}
            className={`${wineImageRight} top-1 left-16`}
          ></Image>
        </div>
      </div>
    </div>
  );
}

function Amavine({
  containerClassName,
  headerClassName,
  contentClassName,
  wineImageLeft,
  wineImageRight,
  slideInClassName,
}: {
  containerClassName: string;
  headerClassName: string;
  contentClassName: string;
  wineImageLeft: string;
  wineImageRight: string;
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
        <div
          className={`${slideInClassName} w-[45%] h-fit flex flex-row relative ${
            inView ? "translate-x-0" : "-translate-x-[10%]"
          }`}
        >
          {/* Change it later */}
          <Image
            src="/artisan-wine-one-no-bg.png"
            alt="artisan mariage vineyards wine"
            width={50}
            height={200}
            unoptimized
            className={`${wineImageLeft} -top-1`}
          ></Image>
          <Image
            src="/artisan-wine-one-no-bg.png"
            alt="artisan mariage vineyards wine"
            width={50}
            height={200}
            unoptimized
            className={`${wineImageRight} left-11`}
          ></Image>
        </div>
        <div
          className={`${slideInClassName} w-[55%] h-fit ${
            inView ? "translate-x-0" : "translate-x-[10%]"
          }`}
        >
          <p className="text-base">
            Artisan Mariage VineyardsはKiyos
            Cellerが作っているヴィンヤードです。ソムリエエクセレンスの資格を持つ支配人がこだわって作るワイン、ぜひご堪能ください。
          </p>
          <Link href="" className="text-sm text-purple-700 underline">
            Artisan Mariage Vineyardsについて
          </Link>
          <br />
          <Link href="" className="text-sm text-purple-700 underline">
            オンラインショップはこちら
          </Link>
        </div>
      </div>
    </div>
  );
}

function News() {
  return (
    <div className="relative w-full h-fit mt-12 flex flex-col items-center bg-yellow-100 py-5">
      <h1 className="text-center text-xl font-bold tracking-wider text-blue-900">
        News
      </h1>
      <div className="w-[85%] h-[60vh] border-2 mt-5 overflow-y-auto overflow-x-hidden bg-white rounded"></div>
      <div className="w-full flex flex- row text-sm right-[2%] gap-1 mt-3 justify-center">
        <div className="flex flex-row w-[50%] h-fit gap-1 justify-center">
          <button
            type="button"
            className="w-fit h-fit bg-yellow-500 text-white p-[1px]"
          >
            Kiyos
          </button>
          <p>: Kiyos Celler</p>
        </div>
        <div className="flex flex-row w-[50%] h-fit gap-1 justify-center">
          <button
            type="button"
            className="w-fit h-fit bg-pink-600 text-white p-[1px]"
          >
            Amavin
          </button>
          <p>: Artisan Mariage Vineyards</p>
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return <footer className="bg-blue-900 w-full h-[25vh]"></footer>;
}
