"use client";
//next.js
import Image from "next/image";
import Link from "next/link";
//conponents
import AmavinContact from "./AmavinContact";
import KiyosContact from "./KiyosContact";
//methods
import { getGroupNameFromType } from "../../lib/helper";
// settings
import {
  INSTAGRAM_AMAVIN_URL,
  INSTAGRAM_KIYOS_URL,
  SHOP_URL,
} from "@/app/lib/config/settings";
//type
import { TYPE_GROUP, TYPE_LOCALE } from "@/app/lib/config/type";

export default function Footer({
  currentLocale,
}: {
  currentLocale: TYPE_LOCALE;
}) {
  return (
    <footer className="bg-blue-900 w-full h-fit px-[4%] py-5 flex flex-col gap-2 items-center">
      <GroupInfo
        locale={currentLocale}
        type="kiyos"
        snsHref={INSTAGRAM_KIYOS_URL}
      />
      <GroupInfo
        locale={currentLocale}
        type="amavin"
        snsHref={INSTAGRAM_AMAVIN_URL}
      />
      <NavFooter locale={currentLocale} />
      <CopyrightAttribution />
    </footer>
  );
}

function GroupInfo({
  locale,
  type,
  snsHref,
}: {
  locale: TYPE_LOCALE;
  type: TYPE_GROUP;
  snsHref: string;
}) {
  return (
    <div className="w-full flex flex-row gap-[5%] justify-center">
      <div className="w-[65%] text-orange-300 text-sm text-left">
        <p className="text-yellow-200">{getGroupNameFromType(type)}</p>
        {type === "kiyos" ? (
          <KiyosContact locale={locale} />
        ) : (
          <AmavinContact locale={locale} />
        )}
      </div>
      <div className="w-[25%] flex flex-row justify-start items-center">
        <LinkIcon
          href={snsHref}
          src="/icons/instagram.svg"
          alt="Instagram icon"
        />
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
    <div className="relative w-9 h-auto aspect-square">
      <Image src={src} alt={alt} fill></Image>
      <Link href={href} className="w-full h-full absolute"></Link>
    </div>
  );
}

function NavFooter({ locale }: { locale: TYPE_LOCALE }) {
  const navLinkClassName = "w-fit hover:text-purple-200";

  return (
    <nav className="w-full h-fit text-purple-300 text-xs underline flex flex-row text-center justify-center mt-2 gap-3">
      <Link
        href={`/${locale}/kiyos-cellar`}
        className={`${navLinkClassName} whitespace-nowrap`}
      >
        {getGroupNameFromType("kiyos")}
      </Link>
      <Link
        href={`/${locale}/artisan-mariage-vineyards`}
        className={`${navLinkClassName} whitespace-normal`}
      >
        {getGroupNameFromType("amavin")}
      </Link>
      <Link href={SHOP_URL} className={`${navLinkClassName} whitespace-nowrap`}>
        Online Shop
      </Link>
    </nav>
  );
}

function CopyrightAttribution() {
  return (
    <div className="text-xs text-center text-purple-400">
      <p>© 2025 Kiyos Cellar Artisan Mariage Vineyards</p>
      <p>Designed by Freepik</p>
    </div>
  );
}
