//react
import React, { Suspense } from "react";
//type
import { TYPE_LOCALE } from "../config/type";
//components
import TopBar from "./components/TopBar";
import UpArrow from "./components/UpArrow";
import Footer from "./components/Footer";
import Loading from "./loading";

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
