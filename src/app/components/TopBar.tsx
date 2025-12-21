"use client";
//react
import { useRef, useState } from "react";
//next.js
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
//components
import SearchOverlay from "./SearchOverlay";
//methods
import { getGroupNameFromType } from "../helper";

export default function TopBar() {
  const router = useRouter();

  function handleClickLogo() {
    router.push("/");
  }

  return (
    <div className="grid w-full h-[24vh] bg-blue-900 grid-rows-2 relative">
      {/* I'm gonna replace the p by a logo image later */}
      <h1
        className="text-center text-[#ffe77c] pt-[2%] text-base cursor-pointer"
        onClick={handleClickLogo}
      >
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
      <LanguageSelect />
      <Search />
    </div>
  );
}

function LanguageSelect() {
  return (
    <select
      className={`w-[35%] h-full mr-[3%] bg-transparent bg-[url('/icons/globe.svg')] bg-contain bg-center bg-no-repeat appearance-none text-sm  text-blue-900 text-transparent  focus:text-black`}
    >
      <option value="ja">日本語</option>
      <option value="en">English</option>
    </select>
  );
}

function Search() {
  const [open, setOpen] = useState(false);

  function handleToggleSearch() {
    setOpen(!open);
  }

  return (
    <>
      <button
        type="button"
        className="w-[43%] aspect-square bg-[url('/icons/magnifying-glass.svg')] bg-[length:88%] bg-no-repeat bg-center"
        onClick={handleToggleSearch}
      ></button>
      <SearchOverlay open={open} onClickClose={handleToggleSearch} />
    </>
  );
}

function Navi() {
  const divClassName =
    "relative flex flex-col text-center items-center justify-center border-r border-blue-900 last:border-r-0";
  const linkClassName = "pb-[1%] px-[1%] text-orange-300 w-full z-10";
  const hoverBgClassName = `transition-all duration-500 z-0`;

  const [kiyosHovered, setKiyosHovered] = useState(false);
  const [amavinHovered, setAmavinHovered] = useState(false);
  const [historyHovered, setHistoryHovered] = useState(false);
  const [shopHovered, setShopHovered] = useState(false);

  function handleKiyosHover() {
    setKiyosHovered(!kiyosHovered);
  }

  function handleAmavinHover() {
    setAmavinHovered(!amavinHovered);
  }

  function handleHistoryHover() {
    setHistoryHovered(!historyHovered);
  }

  function handleShopHover() {
    setShopHovered(!shopHovered);
  }

  return (
    <nav className="w-full flex flex-row  text-sm bg-blue-800">
      <div
        className={`${divClassName} w-[27%]`}
        onMouseEnter={handleKiyosHover}
        onMouseLeave={handleKiyosHover}
      >
        <Image
          src="/main-image.webp"
          alt=""
          fill
          className={`${hoverBgClassName} ${
            kiyosHovered ? "opacity-50" : "opacity-0"
          }`}
        ></Image>
        <Link href="/kiyos-celler" className={`${linkClassName}`}>
          Kiyos
          <br />
          Celler
        </Link>
      </div>
      <div
        className={`${divClassName} w-[27%]`}
        onMouseEnter={handleAmavinHover}
        onMouseLeave={handleAmavinHover}
      >
        <Image
          src="/main-image.webp"
          alt=""
          fill
          className={`${hoverBgClassName} ${
            amavinHovered ? "opacity-50" : "opacity-0"
          }`}
        ></Image>
        <Link
          href="/artisan-mariage-vineyards"
          className={`${linkClassName} leading-tight`}
        >
          {getGroupNameFromType("amavin")}
        </Link>
      </div>
      <div
        className={`${divClassName} w-[27%]`}
        onMouseEnter={handleHistoryHover}
        onMouseLeave={handleHistoryHover}
      >
        <div
          className={`${hoverBgClassName} absolute bg-blue-600 w-full h-full ${
            historyHovered ? "opacity-50" : "opacity-0"
          }`}
        ></div>
        <Link href="/history" className={`${linkClassName} `}>
          History
        </Link>
      </div>
      <div
        className={`${divClassName} w-[19%] gap-1`}
        onMouseEnter={handleShopHover}
        onMouseLeave={handleShopHover}
      >
        <div
          className={`${hoverBgClassName} absolute bg-blue-600 w-full h-full ${
            shopHovered ? "opacity-50" : "opacity-0"
          }`}
        ></div>
        <Image
          src="/icons/shop.svg"
          alt=""
          width={20}
          height={20}
          className="z-10"
        ></Image>
        <Link href="" className={`${linkClassName} leading-tight`}>
          Shop
        </Link>
      </div>
    </nav>
  );
}
