//react
import React from "react";
//type
import { TYPE_LOCALE } from "../type";
//components
import TopBar from "./components/TopBar";
import UpArrow from "./components/UpArrow";
import Footer from "./components/Footer";

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
      <header>
        <TopBar currentLocale={locale as TYPE_LOCALE} />
      </header>
      <main>{children}</main>
      <UpArrow />
      <footer>
        <Footer />
      </footer>
    </>
  );
}
