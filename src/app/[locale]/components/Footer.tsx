import Image from "next/image";
import AmavinContact from "./AmavinContact";
import KiyosContact from "./KiyosContact";
import Link from "next/link";
import { getGroupNameFromType } from "../../helper";
import { TYPE_GROUP, TYPE_LOCALE } from "@/app/config/type";

//footer
export default function Footer({
  currentLocale,
}: {
  currentLocale: TYPE_LOCALE;
}) {
  return (
    <footer className="bg-blue-900 w-full h-fit p-[4%] flex flex-col gap-2">
      <GroupInfo
        locale={currentLocale}
        type="kiyos"
        snsHref="https://www.instagram.com/kiyoscellar?igsh=MTN0Z3FkMTdkMGtyMw%3D%3D&utm_source=qr"
      />
      <GroupInfo
        locale={currentLocale}
        type="amavin"
        snsHref="https://www.instagram.com/artisanmariagevineyards?igsh=MXViNHF6eWN3YjN1MQ%3D%3D&utm_source=qr"
      />
      <NavFooter locale={currentLocale} />
      <CopyrightAttribution />
    </footer>
  );
}

function GroupInfo({
  locale,
  type,
  snsHref,
}: {
  locale: TYPE_LOCALE;
  type: TYPE_GROUP;
  snsHref: string;
}) {
  return (
    <div className="w-full flex flex-row gap-[5%] justify-center">
      <div className="w-[65%] text-orange-300 text-sm text-left">
        <p className="text-yellow-200">
          {type === "kiyos" ? "Kiyos Celler" : "Artisan Mariage Vineyards"}
        </p>
        {type === "kiyos" ? (
          <KiyosContact locale={locale} />
        ) : (
          <AmavinContact locale={locale} />
        )}
      </div>
      <div className="w-[25%] flex flex-row justify-start items-center">
        <LinkIcon
          href={snsHref}
          src="/icons/instagram.svg"
          alt="Instagram icon"
        />
      </div>
    </div>
  );
}

function LinkIcon({
  href,
  src,
  alt,
}: {
  href: string;
  src: string;
  alt: string;
}) {
  return (
    <div className="relative w-[35%] h-auto aspect-square">
      <Image src={src} alt={alt} fill></Image>
      <Link href={href} className="w-full h-full absolute"></Link>
    </div>
  );
}

function NavFooter({ locale }: { locale: TYPE_LOCALE }) {
  const navLinkClassName = "w-1/3 hover:text-purple-200";

  return (
    <nav className="w-full h-fit text-purple-300 text-xs underline flex flex-row text-center justify-between">
      <Link href={`/${locale}/kiyos-celler`} className={navLinkClassName}>
        {getGroupNameFromType("kiyos")}
      </Link>
      <Link
        href={`/${locale}/artisan-mariage-vineyards`}
        className={navLinkClassName}
      >
        {getGroupNameFromType("amavin")}
      </Link>
      <Link href="" className={navLinkClassName}>
        Online Shop
      </Link>
    </nav>
  );
}

function CopyrightAttribution() {
  return (
    <div className="text-xs text-center text-purple-400">
      <p>© 2025 Kiyos Celler Artisan Mariage Vineyards</p>
      <p>Designed by Freepik</p>
    </div>
  );
}
