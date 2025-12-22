import type { Metadata, Viewport } from "next";
import { Noto_Serif_JP } from "next/font/google";
import "./globals.css";
import React from "react";

export const metadata: Metadata = {
  title: "Artisan Marriage Vineyards, Kiyos Celler",
  description: "",
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
    <html className={notoSerifJp.className}>
      <body>{children}</body>
    </html>
  );
}
