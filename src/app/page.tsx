"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import slideInfo from "./models/slide";

export default function Home() {
  return (
    <div className="w-full h-dvh">
      <Top />
      <Slide />
    </div>
  );
}

function Top() {
  return (
    <div className="grid w-full h-[24vh] bg-blue-900 grid-rows-2 relative">
      {/* I'm gonna replace the p by a logo image later */}
      <p className="text-center text-[#ffe77c] pt-[2%]">
        Kiyos Celler
        <br />
        Artisan Mariage Vineyards
      </p>
      <LanguageSearch />
      <Navi />
    </div>
  );
}

function LanguageSearch() {
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);

  return (
    <div className="absolute w-1/4 h-[16%] flex flex-row right-[2%] top-[3%]">
      <select
        className={`w-[20%] h-full mr-[3%] bg-transparent bg-[url('/icons/globe.svg')] bg-contain bg-center bg-no-repeat appearance-none  text-blue-900 text-transparent  focus:text-black`}
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
  const divClassNames = "relative flex flex-col text-center justify-center";
  const linkClassNames =
    "pb-[1%] px-[1%] text-orange-300 border-r border-blue-900 last:border-r-0 w-full";

  return (
    <nav className="w-full flex flex-row  text-sm bg-blue-800">
      <div className={`${divClassNames} w-[27%]`}>
        <Link href="" className={`${linkClassNames}`}>
          Kiyos
          <br />
          Celler
        </Link>
      </div>
      <div className={`${divClassNames} w-[27%]`}>
        <Image
          src="/main-image.webp"
          alt=""
          fill
          className={`transition-all duration-500 opacity-0 hover:opacity-60`}
        ></Image>
        <Link href="" className={`${linkClassNames} leading-tight`}>
          Artisan Mariage Vineyards
        </Link>
      </div>
      <div className={`${divClassNames} w-[27%]`}>
        <Link href="" className={`${linkClassNames} `}>
          History
        </Link>
      </div>
      <div className={`${divClassNames} w-[19%]`}>
        <Link href="" className={`${linkClassNames} leading-tight`}>
          Shop
        </Link>
      </div>
      {/* {naviLinks.map((link, i) => (
        <Link
          key={i}
          href={link.href}
          className={`${link.width} flex flex-col text-center justify-center pb-[1%] px-[1%] text-orange-300 ${link.options} border-r border-blue-900 last:border-r-0`}
        >
          {link.name}
        </Link>
      ))} */}
    </nav>
  );
}

function Slide() {
  const slideLength = slideInfo.length;
  const slideDuration = 5; //seconds
  const [curImage, setCurImage] = useState(0);
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);

  const wait = async (seconds: number) =>
    new Promise((resolve) => setTimeout(() => resolve, seconds * 1000));

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
          className={`transition duration-[2000ms] ease-in-out ${
            curImage === i ? "opacity-100" : "opacity-0"
          }`}
        ></Image>
      ))}
    </div>
  );
}
