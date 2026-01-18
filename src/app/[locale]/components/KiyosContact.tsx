//components
import { contactContainerClassName } from "@/app/config/styles";
import ContactAddress from "./ContactAddress";
import ContactEmail from "./contactEmail";
//type
import { TYPE_LOCALE } from "@/app/config/type";

export default function KiyosContact({ locale }: { locale: TYPE_LOCALE }) {
  return (
    <div className={contactContainerClassName}>
      <ContactAddress
        locale={locale}
        postalCode=""
        address={{ ja: "", en: "" }}
      />
      <ContactEmail locale={locale} email="artisanmariagevineyards@gmail.com" />
    </div>
  );
}
