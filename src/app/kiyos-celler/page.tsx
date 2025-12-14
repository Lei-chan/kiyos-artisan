"use client";
//react
import { RefObject, useRef } from "react";
//next.js
import Image from "next/image";
import Link from "next/link";
//components
import TopBar from "../components/TopBar";
import NewsUl from "../components/NewsUl";
import KiyosContact from "../components/KiyosContact";
import Footer from "../components/Footer";

export default function KiyosCeller() {
  const smallHeaderClassName = "text-lg text-yellow-600 font-bold";
  const containerClassName =
    "w-full h-fit flex flex-col items-center mt-9 scroll-mt-4";

  const aboutRef = useRef<HTMLDivElement | null>(null);
  const shopRef = useRef<HTMLDivElement | null>(null);
  const newsRef = useRef<HTMLDivElement | null>(null);
  const contactRef = useRef<HTMLDivElement | null>(null);

  return (
    <div className="w-screen min-h-screen max-h-fit bg-yellow-100/50 text-center">
      <TopBar />
      <TitleLabel
        aboutRef={aboutRef}
        shopRef={shopRef}
        newsRef={newsRef}
        contactRef={contactRef}
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
    </div>
  );
}

function TitleLabel({
  aboutRef,
  shopRef,
  newsRef,
  contactRef,
}: {
  aboutRef: RefObject<HTMLDivElement | null>;
  shopRef: RefObject<HTMLDivElement | null>;
  newsRef: RefObject<HTMLDivElement | null>;
  contactRef: RefObject<HTMLDivElement | null>;
}) {
  return (
    <div className="relative w-full h-[25vh] bg-[url('/artisan-clairet-for-sale.webp')] bg-fixed bg-cover bg-center bg-no-repeat text-center">
      <div className="w-full h-full backdrop-sepia absolute flex flex-col justify-center">
        <h1 className="text-2xl text-yellow-100 font-bold tracking-wider">
          Kiyos Celler
        </h1>
        <Nav
          aboutRef={aboutRef}
          shopRef={shopRef}
          newsRef={newsRef}
          contactRef={contactRef}
        />
      </div>
    </div>
  );
}

function Nav({
  aboutRef,
  shopRef,
  newsRef,
  contactRef,
}: {
  aboutRef: RefObject<HTMLDivElement | null>;
  shopRef: RefObject<HTMLDivElement | null>;
  newsRef: RefObject<HTMLDivElement | null>;
  contactRef: RefObject<HTMLDivElement | null>;
}) {
  const containerClassName =
    "w-full h-fit flex flex-row gap-[7%] justify-center";
  const btnClassName = "w-fit underline text-orange-100 text-sm";

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
    <nav className="w-full h-fit flex flex-col gap-[3%] justify-center items-start mt-3">
      <div className={containerClassName}>
        <button
          type="button"
          className={btnClassName}
          onClick={handleClickAbout}
        >
          Kiyos Cellerについて
        </button>
        <button
          type="button"
          className={btnClassName}
          onClick={handleClickShop}
        >
          ショップ
        </button>
      </div>
      <div className={containerClassName}>
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
      <h2 className={smallHeaderClassName}>Kiyos Cellerについて</h2>
      <Image
        src="/artisan-clairet-for-sale.webp"
        alt="Kiyos Celler image"
        width={180}
        height={120}
        className="w-[90%] h-auto aspect-[3/2] object-cover mt-3"
      />
      <p className="w-full h-fit p-[5%] text-base">
        Kiyos
        Cellerでは、○○社、○○社、○○社、などの希少なワインを輸入し販売を行っております。
        なかなか他では手に入らないワインも取り扱っております。
      </p>
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
      <h2 className={smallHeaderClassName}>ショップ</h2>
      <p className="w-full h-fit p-[5%] pt-[4%] text-base">
        こちらのオンラインショップよりKiyos Cellerの商品をご購入いただけます。
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
      <NewsUl type="kiyos" />
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
      <h2 className={smallHeaderClassName}>お問い合わせ</h2>
      <div className="w-[90%] h-fit p-[5%] pt-[4%] text-base text-left">
        <KiyosContact />
      </div>
    </div>
  );
}
