import { getAboutName, getContactName, getShopName } from "../helper";

const href = "/kiyos-celler";
const commonKeywords = ["kiyos celler", "キヨズセラー"];

export const about = {
  title: { ja: getAboutName("ja", "kiyos"), en: getAboutName("en", "kiyos") },
  searchableText: {
    ja: "Kiyos Cellerでは、○○社、○○社、○○社、などの希少なワインを輸入し販売を行っております。なかなか他では手に入らないワインも取り扱っております",
    en: "Kiyos Celler imports and sells precious wines from 00 company, 00 company, and 00 company. There are wines that are hard to get.",
  },
  href,
  keywords: [...commonKeywords],
};

export const shop = {
  title: { ja: getShopName("ja"), en: getShopName("en") },
  searchableText: {
    ja: "こちらのオンラインショップよりKiyos Cellerの商品をご購入いただけます。オンラインショップはこちら",
    en: "You can purchange items of Kiyos Celler from here. Online shop",
  },
  href,
  keywords: [...commonKeywords],
};

export const contact = {
  title: { ja: getContactName("ja"), en: getContactName("en") },
  searchableText: {
    ja: "〒000-0000 東京都府中市20-1-1 artisanmariagevineyards@gmail.com",
    en: "000-0000 20-1-1 Fuchu, Tokyo, Japan artisanmariagevineyards@gmail.com",
  },
  href,
  keywords: [...commonKeywords, "email", "address", "住所", "メールアドレス"],
};

export const kiyosForSearch = [about, shop, contact];
