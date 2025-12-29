//react
import React, { Suspense } from "react";
//config
import { baseUrl } from "../config/others";
//components
import TopBar from "./components/TopBar";
import UpArrow from "./components/UpArrow";
import Footer from "./components/Footer";
import Loading from "./loading";
//type
import { TYPE_LOCALE } from "../config/type";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: TYPE_LOCALE }>;
}) {
  const { locale } = await params;
  const title =
    locale === "ja"
      ? "Artisan Mariage Vineyards(アルチザン・マリアージュ・ヴィンヤード) - Kiyos Celler(キヨズ・セラー)"
      : "Artisan Mariage Vineyards-Kiyos Celler";
  const description =
    locale === "ja"
      ? "海外の希少ワインの輸入販売を行うKiyos Celler (キヨズ・セラー)と山梨県北杜市で高品質なワイン作るArtisan Mariage Vineyards (アルチザンマリアージュ・ヴィンヤード)の公式ウェブサイトです。"
      : "This is the official website of Kiyos Celler, specializing in premium imported wines, and Artisan Mariage Vineyards, a winery producing high-quality wines in Hokuto, Yamanashi.";
  const image = "/main-image.webp";

  return {
    title,
    description,
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: "/",
      languages: {
        ja: "/ja",
        en: "/en",
      },
    },
    openGraph: {
      siteName: title,
      url: baseUrl,
      //for now
      images: {
        url: image,
        alt:
          locale === "ja"
            ? "Kiyos CellerとArtisan Mariage Vineyards 画像"
            : "Kiyos Celler and Artisan Mariage Vineyards image",
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
            ? "Kiyos CellerとArtisan Mariage Vineyardsのメイン画像"
            : "Kiyos Celler and Artisan Mariage Vineyards main image",
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
