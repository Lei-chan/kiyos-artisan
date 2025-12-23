import { TYPE_LOCALE } from "@/app/config/type";
import Image from "next/image";

export default function KiyosContact({ locale }: { locale: TYPE_LOCALE }) {
  return (
    <>
      <p>
        {locale === "ja" ? "〒" : ""}000-0000
        <br />
        {locale === "ja" ? "東京都府中市20-1-1" : "20-1-1 Fuchu, Tokyo, Japan"}
      </p>
      <div className="w-fit h-fit flex flex-row gap-[2%] items-start leading-tight">
        <Image
          src="/icons/email.svg"
          alt={locale === "ja" ? "メールアイコン" : "email icon"}
          width={15}
          height={15}
          className="mt-[2%]"
        ></Image>
        <p className="break-all">artisanmariagevineyards@gmail.com</p>
      </div>
    </>
  );
}
