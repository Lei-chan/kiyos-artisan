import { getAboutName, getContactName, getShopName } from "../helper";

const href = "/kiyos-celler";
const commonKeywords = ["kiyos celler", "キヨズセラー"];

export const about = {
  title: { ja: getAboutName("ja", "kiyos"), en: getAboutName("en", "kiyos") },
  searchableText: {
    ja: "Kiyos Celler(キヨズセラー)では小規模な日本ワイン生産者の他、アメリカ、カリフォルニア州のKistler Vineyards,Occidental Wines.その他Rare Wineを取り扱っています。",
    en: "Kiyo's Cellar carries wines from small Japanese wine producers as well as Kistler Vineyards and Occidental Wines from California, USA, and other rare wines.",
  },
  href,
  keywords: [...commonKeywords],
};

export const shop = {
  title: { ja: getShopName("ja"), en: getShopName("en") },
  searchableText: {
    ja: "こちらのオンラインショップよりKiyos Cellerの商品をご購入いただけます。オンラインショップはこちら（準備中）",
    en: "You can purchange items of Kiyos Celler from here. Online shop (In preparation)",
  },
  href,
  keywords: [...commonKeywords],
};

export const contact = {
  title: { ja: getContactName("ja"), en: getContactName("en") },
  searchableText: {
    ja: "artisanmariagevineyards@gmail.com",
    en: "artisanmariagevineyards@gmail.com",
  },
  href,
  keywords: [...commonKeywords, "email", "address", "住所", "メールアドレス"],
};

export const kiyosForSearch = [about, shop, contact];
