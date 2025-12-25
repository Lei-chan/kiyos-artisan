//components
import ContactAddress from "./ContactAddress";
import ContactEmail from "./contactEmail";
//type
import { TYPE_LOCALE } from "@/app/config/type";

export default function AmavinContact({ locale }: { locale: TYPE_LOCALE }) {
  return (
    <>
      <ContactAddress
        locale={locale}
        postalCode="408-0204"
        address={{
          ja: "山梨県北杜市明野町上手永井原11805",
          en: "Akenocho Uede Nagaihara 11805, Hokuto, Yamanashi, Japan",
        }}
      />
      <ContactEmail locale={locale} email="artisanmariagevineyards@gmail.com" />
    </>
  );
}
