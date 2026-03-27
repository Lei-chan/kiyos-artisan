import type { Metadata, Viewport } from "next";
import { Noto_Serif_JP } from "next/font/google";
import "./globals.css";
import React from "react";
import {
  APP_DESCRIPTION,
  APP_NAME,
  METADATA_BASE,
  METADATA_IMAGE,
} from "./lib/config/settings";

export const metadata: Metadata = {
  title: APP_NAME,
  description: APP_DESCRIPTION,
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
    canonical: "/",
    languages: {
      en: "/en",
      ja: "/ja",
    },
  },
  openGraph: {
    siteName: APP_NAME,
    url: "/",
    //for now
    images: [
      {
        url: METADATA_IMAGE,
        alt: "Kiyos Cellar • Artisan Mariage Vineyards",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: APP_NAME,
    description: APP_DESCRIPTION,
    images: [METADATA_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

const notoSerifJp = Noto_Serif_JP({
  weight: "400",
  fallback: ["serif"],
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="" className={notoSerifJp.className}>
      <body>{children}</body>
    </html>
  );
}
