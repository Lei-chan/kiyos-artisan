import { TYPE_LOCALE } from "@/app/config/type";

export default function ContactAddress({
  locale,
  postalCode,
  address,
}: {
  locale: TYPE_LOCALE;
  postalCode: string;
  address: { ja: string; en: string };
}) {
  return (
    <p className="text-left">
      {locale === "ja" ? "〒" : ""}
      {postalCode}
      <br />
      {address[locale]}
    </p>
  );
}
