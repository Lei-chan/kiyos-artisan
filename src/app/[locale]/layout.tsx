//react
import React, { Suspense } from "react";
// next.js
import { Metadata } from "next";
//config
import {
  APP_DESCRIPTION,
  APP_NAME,
  METADATA_BASE,
  METADATA_IMAGE,
} from "../lib/config/settings";
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
}): Promise<Metadata> {
  const { locale } = await params;
  const title =
    locale === "ja"
      ? APP_NAME
      : "Artisan Mariage Vineyards・Kiyos Cellar Official Website";
  const description =
    locale === "ja"
      ? APP_DESCRIPTION
      : "This is the official website of Kiyos Cellar, specializing in premium imported wines, and Artisan Mariage Vineyards, a winery producing wines from organically grown black grapes in Akeno-cho, Hokuto city, Yamanashi Prefecture.";

  return {
    title,
    description,
    metadataBase: METADATA_BASE,
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
      canonical: `/${locale}`,
      languages: {
        en: "/en",
        ja: "/ja",
      },
    },
    openGraph: {
      siteName: title,
      url: `/${locale}`,
      //for now
      images: [
        {
          url: METADATA_IMAGE,
          alt: "Kiyos Cellar and Artisan Mariage Vineyards",
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
      images: [METADATA_IMAGE],
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
