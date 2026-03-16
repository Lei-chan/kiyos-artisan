//react
import { RefObject } from "react";
//type
import { TYPE_GROUP, TYPE_LOCALE } from "../../config/type";
//methods
import {
  getAboutName,
  getContactName,
  getGroupNameFromType,
  getNewsName,
  getShopName,
} from "../../helper";
import Image from "next/image";

export default function TitleNavLable({
  aboutRef,
  shopRef,
  newsRef,
  contactRef,
  locale,
  type,
  bgImagePath,
}: {
  aboutRef?: RefObject<HTMLDivElement | null>;
  shopRef?: RefObject<HTMLDivElement | null>;
  newsRef?: RefObject<HTMLDivElement | null>;
  contactRef?: RefObject<HTMLDivElement | null>;
  locale: TYPE_LOCALE;
  type: TYPE_GROUP | "history";
  bgImagePath: string;
}) {
  return (
    <div
      className={`relative w-full text-center ${
        type === "amavin" ? "h-[27vh]" : "h-[25vh]"
      }`}
    >
      <Image
        src={bgImagePath}
        alt="background image"
        width={2560}
        height={1422}
        className="fixed w-full h-full object-cover left-0 -top-28 md:-top-40 lg:-top-56 xl:-top-72 -z-10"
      ></Image>
      <div className="w-full h-full backdrop-sepia absolute flex flex-col justify-center bg-black/30">
        <h1
          className={`text-xl font-bold tracking-wider leading-tight ${
            type === "kiyos"
              ? "text-yellow-100 "
              : type === "amavin"
                ? "text-pink-100"
                : "text-white"
          }`}
        >
          {type === "kiyos" || type === "amavin"
            ? getGroupNameFromType(type)
            : type.slice(0, 1).toUpperCase() + type.slice(1)}
        </h1>
        {(type === "kiyos" || type === "amavin") &&
          aboutRef &&
          shopRef &&
          newsRef &&
          contactRef && (
            <Nav
              aboutRef={aboutRef}
              shopRef={shopRef}
              newsRef={newsRef}
              contactRef={contactRef}
              locale={locale}
              type={type}
            />
          )}
      </div>
    </div>
  );
}

function Nav({
  aboutRef,
  shopRef,
  newsRef,
  contactRef,
  locale,
  type,
}: {
  aboutRef: RefObject<HTMLDivElement | null>;
  shopRef: RefObject<HTMLDivElement | null>;
  newsRef: RefObject<HTMLDivElement | null>;
  contactRef: RefObject<HTMLDivElement | null>;
  locale: TYPE_LOCALE;
  type: TYPE_GROUP;
}) {
  const navContainerGapLargerThanMd = "md:gap-5 xl:gap-7";
  const containerClassName = `w-full md:w-fit h-fit flex flex-row justify-center gap-3 ${navContainerGapLargerThanMd}`;
  const btnClassName = "w-fit underline text-sm whitespace-nowrap text-white";

  function handleClickAbout() {
    aboutRef?.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function handleClickShop() {
    shopRef?.current?.scrollIntoView({ behavior: "smooth" });
  }

  function handleClickNews() {
    newsRef?.current?.scrollIntoView({ behavior: "smooth" });
  }

  function handleClickContact() {
    contactRef?.current?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <nav
      className={`w-full h-fit flex flex-col md:flex-row justify-center items-start mt-[2%] gap-1 ${navContainerGapLargerThanMd}`}
    >
      <div className={containerClassName}>
        <button
          type="button"
          className={btnClassName}
          onClick={handleClickAbout}
        >
          {getAboutName(locale, type)}
        </button>
      </div>
      <div className={containerClassName}>
        <button
          type="button"
          className={btnClassName}
          onClick={handleClickShop}
        >
          {getShopName(locale)}
        </button>
        <button
          type="button"
          className={btnClassName}
          onClick={handleClickNews}
        >
          {getNewsName(locale)}
        </button>
        <button
          type="button"
          className={btnClassName}
          onClick={handleClickContact}
        >
          {getContactName(locale)}
        </button>
      </div>
    </nav>
  );
}
