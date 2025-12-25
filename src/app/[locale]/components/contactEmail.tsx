import { TYPE_LOCALE } from "@/app/config/type";
import Image from "next/image";

export default function ContactEmail({
  locale,
  email,
}: {
  locale: TYPE_LOCALE;
  email: string;
}) {
  return (
    <div className=" h-fit flex flex-row gap-[2%] items-center leading-tight">
      <Image
        src="/icons/email.svg"
        alt={locale === "ja" ? "メールアイコン" : "email icon"}
        width={15}
        height={15}
      ></Image>
      <p className="break-all">{email}</p>
    </div>
  );
}
