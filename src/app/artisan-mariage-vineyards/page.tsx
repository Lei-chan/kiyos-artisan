"use client";
//react
import { RefObject, useRef } from "react";
//next.js
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
//models
import { about, contact, shop } from "../models/amavin";
//components
import TopBar from "../components/TopBar";
import TitleNavLable from "../components/TitleNavLable";
import NewsUl from "../components/NewsUl";
import AmavinContact from "../components/AmavinContact";
import UpArrow from "../components/UpArrow";
import Footer from "../components/Footer";

//prevent a error for a client-side leaflet library map by avoiding the map to be rendered on server side
const MapWithNoSSR = dynamic(() => import("../components/AmavinMap"), {
  ssr: false,
});

export default function ArtisanMariageVineyards() {
  const smallHeaderClassName = "text-lg text-pink-700 font-bold";
  const containerClassName =
    "w-full h-fit flex flex-col items-center mt-9 scroll-mt-4";

  const aboutRef = useRef<HTMLDivElement | null>(null);
  const shopRef = useRef<HTMLDivElement | null>(null);
  const newsRef = useRef<HTMLDivElement | null>(null);
  const contactRef = useRef<HTMLDivElement | null>(null);

  return (
    <div className="w-screen min-h-screen max-h-fit bg-yellow-100/50 text-center">
      <TopBar />
      <TitleNavLable
        aboutRef={aboutRef}
        shopRef={shopRef}
        newsRef={newsRef}
        contactRef={contactRef}
        type="amavin"
        bgImageStyle="bg-[url('/artisan-clairet-for-sale.webp')]"
      />
      <div className="w-full h-fit pt-2 pb-8">
        <About
          ref={aboutRef}
          containerClassName={containerClassName}
          smallHeaderClassName={smallHeaderClassName}
        />
        <Shop
          ref={shopRef}
          containerClassName={containerClassName}
          smallHeaderClassName={smallHeaderClassName}
        />
        <News
          ref={newsRef}
          containerClassName={containerClassName}
          smallHeaderClassName={smallHeaderClassName}
        />
        <Contact
          ref={contactRef}
          containerClassName={containerClassName}
          smallHeaderClassName={smallHeaderClassName}
        />
      </div>
      <Footer />
      <UpArrow />
    </div>
  );
}

function About({
  ref,
  containerClassName,
  smallHeaderClassName,
}: {
  ref: RefObject<HTMLDivElement | null>;
  containerClassName: string;
  smallHeaderClassName: string;
}) {
  return (
    <div ref={ref} className={containerClassName}>
      <h2 className={smallHeaderClassName}>
        Artisan Mariage Vineyards
        <br />
        について
      </h2>
      <Image
        src="/artisan-clairet-for-sale.webp"
        alt="Artisan mariage vineyards image"
        width={180}
        height={120}
        className="w-[90%] h-auto aspect-[3/2] object-cover mt-3"
      />
      <p className="w-full h-fit p-[5%] text-base">{about.searchableText}</p>
    </div>
  );
}

function Shop({
  ref,
  containerClassName,
  smallHeaderClassName,
}: {
  ref: RefObject<HTMLDivElement | null>;
  containerClassName: string;
  smallHeaderClassName: string;
}) {
  return (
    <div ref={ref} className={containerClassName}>
      <h2 className={smallHeaderClassName}>{shop.title}</h2>
      <p className="w-full h-fit p-[5%] pt-[4%] text-base">
        こちらのオンラインショップよりArtisan Mariage
        Vineyardsの商品をご購入いただけます。
        <br />
        <Link href="" className="underline text-purple-500 text-sm">
          オンラインショップはこちら
        </Link>
      </p>
    </div>
  );
}

function News({
  ref,
  containerClassName,
  smallHeaderClassName,
}: {
  ref: RefObject<HTMLDivElement | null>;
  containerClassName: string;
  smallHeaderClassName: string;
}) {
  return (
    <div ref={ref} className={containerClassName}>
      <h2 className={smallHeaderClassName}>お知らせ</h2>
      <NewsUl type="amavin" />
    </div>
  );
}

function Contact({
  ref,
  containerClassName,
  smallHeaderClassName,
}: {
  ref: RefObject<HTMLDivElement | null>;
  containerClassName: string;
  smallHeaderClassName: string;
}) {
  return (
    <div ref={ref} className={containerClassName}>
      <h2 className={smallHeaderClassName}>{contact.title}</h2>
      <div className="w-[90%] h-fit p-[5%] pt-[4%] text-base text-left">
        <MapWithNoSSR />
        <AmavinContact />
      </div>
    </div>
  );
}
