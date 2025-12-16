import { RefObject } from "react";
import { TYPE_GROUP } from "../type";
import { getGroupNameFromType } from "../helper";

export default function TitleNavLable({
  aboutRef,
  shopRef,
  newsRef,
  contactRef,
  type,
  bgImageStyle,
}: {
  aboutRef?: RefObject<HTMLDivElement | null>;
  shopRef?: RefObject<HTMLDivElement | null>;
  newsRef?: RefObject<HTMLDivElement | null>;
  contactRef?: RefObject<HTMLDivElement | null>;
  type: TYPE_GROUP | "history";
  bgImageStyle: string;
}) {
  return (
    <div
      className={`relative w-full h-fit bg-fixed bg-cover bg-center bg-no-repeat text-center ${bgImageStyle} ${
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
              : "text-orange-100"
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
  type,
}: {
  aboutRef: RefObject<HTMLDivElement | null>;
  shopRef: RefObject<HTMLDivElement | null>;
  newsRef: RefObject<HTMLDivElement | null>;
  contactRef: RefObject<HTMLDivElement | null>;
  type: TYPE_GROUP;
}) {
  const containerClassName =
    "w-full h-fit flex flex-row gap-[7%] justify-center";
  const btnClassName = `w-fit underline text-sm ${
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
    <nav className="w-full h-fit flex flex-col gap-[3%] justify-center items-start mt-2">
      <div className={containerClassName}>
        <button
          type="button"
          className={btnClassName}
          onClick={handleClickAbout}
        >
          {getGroupNameFromType(type)}について
        </button>
      </div>
      <div className={containerClassName}>
        <button
          type="button"
          className={btnClassName}
          onClick={handleClickShop}
        >
          ショップ
        </button>
        <button
          type="button"
          className={btnClassName}
          onClick={handleClickNews}
        >
          お知らせ
        </button>
        <button
          type="button"
          className={btnClassName}
          onClick={handleClickContact}
        >
          お問い合わせ
        </button>
      </div>
    </nav>
  );
}
