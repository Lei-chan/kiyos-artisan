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

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: TYPE_LOCALE }>;
}) {
  const { locale } = await params;
  const title =
    locale === "ja"
      ? "Artisan Mariage Vineyards(アルチザンマリアージュヴィンヤード)・Kiyos Cellar(キヨズセラー)"
      : "Artisan Mariage Vineyards・Kiyos Cellar";
  const description =
    locale === "ja"
      ? "海外の希少ワインの輸入販売を行うKiyos Cellar（キヨズセラー）、山梨県北杜市明野町で有機栽培した黒ブドウでワイン作るArtisan Mariage Vineyards（アルチザンマリアージュヴィンヤード）の公式ウェブサイトです。"
      : "This is the official website of Kiyos Cellar, specializing in premium imported wines, and Artisan Mariage Vineyards, a winery producing wines from organically grown black grapes in Akeno-cho, Hokuto city, Yamanashi Prefecture.";
  const image = "/main-image.webp";

  return {
    title,
    description,
    metadataBase: new URL(BASE_URL),
    alternates: {
      canonical: "/",
      languages: {
        ja: "/ja",
        en: "/en",
      },
    },
    openGraph: {
      siteName: title,
      url: BASE_URL,
      //for now
      images: {
        url: image,
        alt:
          locale === "ja"
            ? "Kiyos CellarとArtisan Mariage Vineyards 画像"
            : "Kiyos Cellar and Artisan Mariage Vineyards image",
        width: 1200,
        height: 630,
      },
      locale: locale === "ja" ? "ja_JP" : "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: {
        url: image,
        alt:
          locale === "ja"
            ? "Kiyos CellarとArtisan Mariage Vineyardsのメイン画像"
            : "Kiyos Cellar and Artisan Mariage Vineyards main image",
      },
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
