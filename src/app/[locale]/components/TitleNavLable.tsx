//type
import { TYPE_GROUP, TYPE_LOCALE } from "../../lib/config/type";
//methods
import {
  getAboutName,
  getContactName,
  getGroupNameFromType,
  getNewsName,
  getShopName,
} from "../../lib/helper";
import Image from "next/image";
import Link from "next/link";

export default function TitleNavLable({
  locale,
  type,
  bgImagePath,
}: {
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
        <h2
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
        </h2>
        {(type === "kiyos" || type === "amavin") && (
          <Nav locale={locale} type={type} />
        )}
      </div>
    </div>
  );
}

function Nav({ locale, type }: { locale: TYPE_LOCALE; type: TYPE_GROUP }) {
  const navContainerGapLargerThanMd = "md:gap-5 xl:gap-7";
  const containerClassName = `w-full md:w-fit h-fit flex flex-row justify-center gap-3 ${navContainerGapLargerThanMd}`;
  const linkClassName = "w-fit underline text-sm whitespace-nowrap text-white";

  return (
    <nav
      className={`w-full h-fit flex flex-col md:flex-row justify-center items-start mt-[2%] gap-1 ${navContainerGapLargerThanMd}`}
    >
      <div className={containerClassName}>
        <Link href="#about" scroll={true} className={linkClassName}>
          {getAboutName(locale, type)}
        </Link>
      </div>
      <div className={containerClassName}>
        <Link href="#shop" scroll={true} className={linkClassName}>
          {getShopName(locale)}
        </Link>
        <Link href="#news" scroll={true} className={linkClassName}>
          {getNewsName(locale)}
        </Link>
        <Link href="#contact" scroll={true} className={linkClassName}>
          {getContactName(locale)}
        </Link>
      </div>
    </nav>
  );
}
