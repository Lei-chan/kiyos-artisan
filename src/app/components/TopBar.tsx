"use client";
//react
import { useState } from "react";
//next.js
import Image from "next/image";
import Link from "next/link";

export default function TopBar() {
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

//later
function SearchOverlay({
  open,
  onClickClose,
}: {
  open: boolean;
  onClickClose: () => void;
}) {
  function handleClickDiv(e: React.MouseEvent<HTMLDivElement>) {
    if (e.currentTarget === e.target) onClickClose();
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const value = new FormData(e.currentTarget).get("value");
    console.log(value);
  }

  return (
    <div
      className={`w-screen h-screen bg-black/30 fixed top-0 left-0 flex flex-col items-center justify-center transition-all duration-700 ease-in-out ${
        open ? "opacity-100" : "opacity-0"
      } ${open ? "z-50" : "-z-50"}`}
      onClick={handleClickDiv}
    >
      <button
        type="button"
        className="absolute text-white w-fit h-fit top-[2%] right-[4%] text-xl"
        onClick={onClickClose}
      >
        &times;
      </button>
      <div className="relative w-[90%] h-[80%] bg-slate-50 rounded-lg">
        <form
          className="w-full h-1/5 border-b-2 flex flex-row items-center justify-center gap-[1%]"
          onSubmit={handleSubmit}
        >
          <input
            type="search"
            placeholder="What are you looking for?"
            name="value"
            className="w-[80%] h-[40%] text-center border-2 border-black/10 rounded"
          ></input>
          <button
            type="submit"
            className="w-[9%] aspect-square bg-[url('/icons/magnifying-glass.svg')] bg-[length:88%] bg-no-repeat bg-center"
          ></button>
        </form>
      </div>
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
        <Link href="/kiyos-celler" className={`${linkClassName}`}>
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
