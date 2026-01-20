//components
import { contactContainerClassName } from "@/app/config/styles";
import ContactAddress from "./ContactAddress";
import ContactEmail from "./contactEmail";
//type
import { TYPE_LOCALE } from "@/app/config/type";

export default function AmavinContact({ locale }: { locale: TYPE_LOCALE }) {
  return (
    <div className={contactContainerClassName}>
      <ContactAddress
        locale={locale}
        postalCode="408-0204"
        address={{
          ja: "山梨県北杜市明野町上手永井原11805",
          en: "Akeno-cho Uede Nagaihara 11805, Hokuto City, Yamanashi Prefecture, Japan",
        }}
      />
      <ContactEmail locale={locale} email="artisanmariagevineyards@gmail.com" />
    </div>
  );
}
