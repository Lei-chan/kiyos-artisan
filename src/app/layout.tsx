import type { Metadata, Viewport } from "next";
//for now
import { Noto_Serif_JP } from "next/font/google";
import "./globals.css";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={notoSerifJp.className}>
      <body>{children}</body>
    </html>
  );
}
