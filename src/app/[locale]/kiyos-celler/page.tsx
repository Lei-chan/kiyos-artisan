"use client";
//react
import { RefObject, useRef } from "react";
//next.js
import Image from "next/image";
import Link from "next/link";
//models
import { about, contact, shop } from "../models/kiyos";
//components
import TitleNavLable from "../components/TitleNavLable";
import NewsUl from "../components/NewsUl";
import KiyosContact from "../components/KiyosContact";
import { useParams } from "next/navigation";
import { TYPE_LOCALE } from "@/app/type";

export default function KiyosCeller() {
  const smallHeaderClassName = "text-lg text-yellow-600 font-bold";
  const containerClassName =
    "w-full h-fit flex flex-col items-center mt-9 scroll-mt-4";

  const { locale } = useParams();

  const aboutRef = useRef<HTMLDivElement | null>(null);
  const shopRef = useRef<HTMLDivElement | null>(null);
  const newsRef = useRef<HTMLDivElement | null>(null);
  const contactRef = useRef<HTMLDivElement | null>(null);

  return (
    <div className="w-screen min-h-screen max-h-fit bg-yellow-100/50 text-center">
      <TitleNavLable
        aboutRef={aboutRef}
        shopRef={shopRef}
        newsRef={newsRef}
        contactRef={contactRef}
        locale={(locale || "en") as TYPE_LOCALE}
        type="kiyos"
        bgImageStyle="bg-[url('/artisan-clairet-for-sale.webp')]"
      />
      <div className="w-full h-fit pt-2 pb-8">
        <About
          ref={aboutRef}
          locale={(locale || "en") as TYPE_LOCALE}
          containerClassName={containerClassName}
          smallHeaderClassName={smallHeaderClassName}
        />
        <Shop
          ref={shopRef}
          locale={(locale || "en") as TYPE_LOCALE}
          containerClassName={containerClassName}
          smallHeaderClassName={smallHeaderClassName}
        />
        <News
          ref={newsRef}
          locale={(locale || "en") as TYPE_LOCALE}
          containerClassName={containerClassName}
          smallHeaderClassName={smallHeaderClassName}
        />
        <Contact
          ref={contactRef}
          locale={(locale || "en") as TYPE_LOCALE}
          containerClassName={containerClassName}
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
        alt={locale === "ja" ? "キヨズセラー画像" : "Kiyos Celler image"}
        width={180}
        height={120}
        className="w-[90%] h-auto aspect-[3/2] object-cover mt-3"
      />
      <p className="w-full h-fit p-[5%] text-base">
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
      <p className="w-full h-fit p-[5%] pt-[4%] text-base">
        {locale === "ja"
          ? "こちらのオンラインショップよりKiyos Cellerの商品をご購入いただけます。"
          : "You can purchase items of Kiyos Celler from here."}
        <br />
        <Link href="" className="underline text-purple-500 text-sm">
          {locale === "ja" ? "オンラインショップはこちら" : "Online shop"}
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
      <h2 className={smallHeaderClassName}>
        {locale === "ja" ? "お知らせ" : "News"}
      </h2>
      <NewsUl locale={locale} type="kiyos" />
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
      <div className="w-[90%] h-fit p-[5%] pt-[4%] text-base text-left">
        <KiyosContact locale={locale} />
      </div>
    </div>
  );
}
