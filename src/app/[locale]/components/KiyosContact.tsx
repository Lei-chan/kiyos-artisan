//components
import ContactAddress from "./ContactAddress";
import ContactEmail from "./contactEmail";
//type
import { TYPE_LOCALE } from "@/app/config/type";

export default function KiyosContact({ locale }: { locale: TYPE_LOCALE }) {
  return (
    <>
      <ContactAddress
        locale={locale}
        postalCode="000-0000"
        address={{ ja: "東京都府中市20-1-1", en: "20-1-1 Fuchu, Tokyo, Japan" }}
      />
      <ContactEmail locale={locale} email="artisanmariagevineyards@gmail.com" />
    </>
  );
}
