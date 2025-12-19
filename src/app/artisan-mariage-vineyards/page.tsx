"use client";

import { RefObject, useRef } from "react";
import TopBar from "../components/TopBar";
import TitleNavLable from "../components/TitleNavLable";
import Footer from "../components/Footer";
import Image from "next/image";
import Link from "next/link";
import NewsUl from "../components/NewsUl";
import AmavinContact from "../components/AmavinContact";
import L from "leaflet";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import { about, contact, shop } from "../models/amavin";

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
        <VineyardsMap />
        <AmavinContact />
      </div>
    </div>
  );
}

//chenge the icon later!
function VineyardsMap() {
  const myIcon = L.icon({
    iconUrl: "/icons/grapes.svg",
    iconSize: [38, 38],
    iconAnchor: [0, 38],
    popupAnchor: [0, 0],
  });

  return (
    <MapContainer
      center={{ lat: 35.7755202, lng: 138.4674056 }}
      zoom={13}
      scrollWheelZoom={false}
      className="h-[35vh]"
    >
      <TileLayer
        attribution='&copy; <a href="https://maps.google.com">Google Maps</a>'
        url="http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}"
        maxZoom={20}
        subdomains={["mt0", "mt1", "mt2", "mt3"]}
      />
      <Marker position={{ lat: 35.7755202, lng: 138.4674056 }} icon={myIcon}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
}
