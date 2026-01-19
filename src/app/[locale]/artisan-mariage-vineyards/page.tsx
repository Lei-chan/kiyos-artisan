"use client";
//react
import { RefObject, useRef } from "react";
//next.js
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import dynamic from "next/dynamic";
//models
import { about, contact, shop } from "../../models/amavin";
//styles
import {
  groupPageClassName,
  groupPageContentContainerClassName,
  groupPageSectionContainerClassName,
} from "@/app/config/styles";
//components
import TitleNavLable from "../components/TitleNavLable";
import NewsUl from "../components/NewsUl";
import AmavinContact from "../components/AmavinContact";
//type
import { TYPE_LOCALE } from "@/app/config/type";
//methods
import { getNewsName } from "@/app/helper";

//prevent a error for a client-side leaflet library map by avoiding the map to be rendered on server side
const MapWithNoSSR = dynamic(() => import("../components/AmavinMap"), {
  ssr: false,
});

export default function ArtisanMariageVineyards() {
  const smallHeaderClassName = "text-lg text-pink-700 font-bold px-[10%] mb-3";

  const { locale } = useParams();
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const shopRef = useRef<HTMLDivElement | null>(null);
  const newsRef = useRef<HTMLDivElement | null>(null);
  const contactRef = useRef<HTMLDivElement | null>(null);

  return (
    <div className={groupPageClassName}>
      <TitleNavLable
        aboutRef={aboutRef}
        shopRef={shopRef}
        newsRef={newsRef}
        contactRef={contactRef}
        locale={(locale || "en") as TYPE_LOCALE}
        type="amavin"
        bgImageStyle="bg-[url('/artisan-clairet-for-sale.webp')]"
      />
      <div className={groupPageContentContainerClassName}>
        <About
          ref={aboutRef}
          locale={(locale || "en") as TYPE_LOCALE}
          containerClassName={groupPageSectionContainerClassName}
          smallHeaderClassName={smallHeaderClassName}
        />
        <Shop
          ref={shopRef}
          locale={(locale || "en") as TYPE_LOCALE}
          containerClassName={groupPageSectionContainerClassName}
          smallHeaderClassName={smallHeaderClassName}
        />
        <News
          ref={newsRef}
          locale={(locale || "en") as TYPE_LOCALE}
          containerClassName={groupPageSectionContainerClassName}
          smallHeaderClassName={smallHeaderClassName}
        />
        <Contact
          ref={contactRef}
          locale={(locale || "en") as TYPE_LOCALE}
          containerClassName={groupPageSectionContainerClassName}
          smallHeaderClassName={smallHeaderClassName}
        />
      </div>
    </div>
  );
}

function About({
  ref,
  locale,
  containerClassName,
  smallHeaderClassName,
}: {
  ref: RefObject<HTMLDivElement | null>;
  locale: TYPE_LOCALE;
  containerClassName: string;
  smallHeaderClassName: string;
}) {
  return (
    <div ref={ref} className={containerClassName}>
      <h2 className={smallHeaderClassName}>{about.title[locale]}</h2>
      <Image
        src="/artisan-clairet-for-sale.webp"
        alt={`Artisan mariage vineyards${locale === "ja" ? "画像" : " image"}`}
        width={600}
        height={400}
        className="w-[90%] md:w-[300px] lg:w-[400px] h-auto aspect-[3/2] object-cover"
      />
      <p className="w-full h-fit mt-5 px-[5%] text-base">
        {about.searchableText[locale]}
      </p>
    </div>
  );
}

function Shop({
  ref,
  locale,
  containerClassName,
  smallHeaderClassName,
}: {
  ref: RefObject<HTMLDivElement | null>;
  locale: TYPE_LOCALE;
  containerClassName: string;
  smallHeaderClassName: string;
}) {
  return (
    <div ref={ref} className={containerClassName}>
      <h2 className={smallHeaderClassName}>{shop.title[locale]}</h2>
      <p className="w-full h-fit p-[5%]text-base">
        {locale === "ja"
          ? "こちらのオンラインショップよりArtisan Mariage Vineyardsの商品をご購入いただけます。(準備中)"
          : "You can purchase items of Artisan Mariage Vineyards from here (In preparation)"}
        <br />
        <Link href="" className="underline text-purple-500 text-sm">
          {locale === "ja" ? "オンラインショップはこちら" : "Online Shop"}
        </Link>
      </p>
    </div>
  );
}

function News({
  ref,
  locale,
  containerClassName,
  smallHeaderClassName,
}: {
  ref: RefObject<HTMLDivElement | null>;
  locale: TYPE_LOCALE;
  containerClassName: string;
  smallHeaderClassName: string;
}) {
  return (
    <div ref={ref} className={containerClassName}>
      <h2 className={smallHeaderClassName}>{getNewsName(locale)}</h2>
      <NewsUl locale={locale} type="amavin" />
    </div>
  );
}

function Contact({
  ref,
  locale,
  containerClassName,
  smallHeaderClassName,
}: {
  ref: RefObject<HTMLDivElement | null>;
  locale: TYPE_LOCALE;
  containerClassName: string;
  smallHeaderClassName: string;
}) {
  return (
    <div ref={ref} className={containerClassName}>
      <h2 className={smallHeaderClassName}>{contact.title[locale]}</h2>
      <div className="w-[90%] h-fit text-base text-left flex flex-col gap-3 items-center">
        <MapWithNoSSR />
        <AmavinContact locale={locale} />
      </div>
    </div>
  );
}
