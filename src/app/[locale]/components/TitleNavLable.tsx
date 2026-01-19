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

export default function TitleNavLable({
  aboutRef,
  shopRef,
  newsRef,
  contactRef,
  locale,
  type,
  bgImageStyle,
}: {
  aboutRef?: RefObject<HTMLDivElement | null>;
  shopRef?: RefObject<HTMLDivElement | null>;
  newsRef?: RefObject<HTMLDivElement | null>;
  contactRef?: RefObject<HTMLDivElement | null>;
  locale: TYPE_LOCALE;
  type: TYPE_GROUP | "history";
  bgImageStyle: string;
}) {
  return (
    <div
      className={`relative w-full text-center before:fixed before:top-0 before:left-0 before:w-full before:h-full before:-z-1  before:bg-cover  before:bg-center before:bg-no-repeat ${bgImageStyle} ${
        type === "amavin" ? "h-[27vh]" : "h-[25vh]"
      }`}
    >
      <div className="w-full h-full backdrop-sepia absolute flex flex-col justify-center">
        <h1
          className={`text-2xl font-bold tracking-wider leading-tight ${
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
  const btnClassName = `w-fit underline text-sm whitespace-nowrap ${
    type === "kiyos" ? "text-orange-100" : "text-purple-100"
  }`;

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
      className={`w-full h-fit flex flex-col md:flex-row  justify-center items-start mt-[2%] gap-1 ${navContainerGapLargerThanMd}`}
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
