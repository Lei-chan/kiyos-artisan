//react
import React, { Suspense } from "react";
//config
import { BASE_URL } from "../lib/config/settings";
//components
import TopBar from "./components/TopBar";
import UpArrow from "./components/UpArrow";
import Footer from "./components/Footer";
import Loading from "./loading";
//type
import { TYPE_LOCALE } from "../lib/config/type";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: TYPE_LOCALE }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const title =
    locale === "ja"
      ? "Artisan Mariage Vineyards(アルチザンマリアージュヴィンヤード)・Kiyos Cellar(キヨズセラー)"
      : "Artisan Mariage Vineyards・Kiyos Cellar";
  const description =
    locale === "ja"
      ? "海外の希少ワインの輸入販売を行うKiyos Cellar（キヨズセラー）、山梨県北杜市明野町で有機栽培した黒ブドウでワイン作るArtisan Mariage Vineyards（アルチザンマリアージュヴィンヤード）の公式ウェブサイトです。"
      : "This is the official website of Kiyos Cellar, specializing in premium imported wines, and Artisan Mariage Vineyards, a winery producing wines from organically grown black grapes in Akeno-cho, Hokuto city, Yamanashi Prefecture.";
  const metadataBase = new URL(BASE_URL);
  const image = new URL("/main-image.webp", metadataBase).toString();

  return {
    title,
    description,
    metadataBase,
    keywords: [
      "Kiyos Cellar",
      "Artisan Mariage Vineyards",
      "キヨズセラー",
      "アルチザンマリアージュヴィンヤード",
      "アマヴィン",
      "アマビン",
      "北杜市",
      "明野町",
      "ワイン",
      "ワイナリー",
    ],
    alternates: {
      canonical: new URL(`/${locale}`, metadataBase).toString(),
      languages: {
        en: new URL("/en", metadataBase).toString(),
        ja: new URL("/ja", metadataBase).toString(),
      },
    },
    openGraph: {
      siteName: title,
      url: metadataBase,
      //for now
      images: [
        {
          url: image,
          alt:
            locale === "ja"
              ? "Kiyos Cellar • Artisan Mariage Vineyards"
              : "Kiyos Cellar and Artisan Mariage Vineyards",
          width: 1200,
          height: 630,
        },
      ],
      locale: locale === "ja" ? "ja_JP" : "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <>
      <Suspense fallback={<Loading />}>
        <header>
          <TopBar currentLocale={locale as TYPE_LOCALE} />
        </header>
        <main>{children}</main>
        <UpArrow />
        <footer>
          <Footer currentLocale={locale as TYPE_LOCALE} />
        </footer>
      </Suspense>
    </>
  );
}
