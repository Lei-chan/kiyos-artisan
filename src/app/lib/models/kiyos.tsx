import { getAboutName, getContactName, getShopName } from "../../lib/helper";

const baseHref = "/kiyos-cellar";
const commonKeywords = ["kiyos cellar", "キヨズセラー"];

export const about = {
  title: { ja: getAboutName("ja", "kiyos"), en: getAboutName("en", "kiyos") },
  searchableText: {
    ja: "Kiyos Cellar(キヨズセラー)では小規模な日本ワイン生産者の他、アメリカ、カリフォルニア州のKistler Vineyards、 Occidental Wines、 その他Rare Wineを取り扱っています。",
    en: "Kiyo's Cellar carries wines from small Japanese wine producers as well as Kistler Vineyards and Occidental Wines from California, USA, and other rare wines.",
  },
  href: `${baseHref}#about`,
  keywords: [...commonKeywords],
};

export const shop = {
  title: { ja: getShopName("ja"), en: getShopName("en") },
  searchableText: {
    ja: "こちらのオンラインショップよりKiyos Cellarの商品をご購入いただけます。オンラインショップはこちら",
    en: "You can purchange items of Kiyos Cellar from here. Online shop",
  },
  href: `${baseHref}#shop`,
  keywords: [...commonKeywords],
};

export const contact = {
  title: { ja: getContactName("ja"), en: getContactName("en") },
  searchableText: {
    ja: "artisanmariagevineyards@gmail.com",
    en: "artisanmariagevineyards@gmail.com",
  },
  href: `${baseHref}#contact`,
  keywords: [...commonKeywords, "email", "address", "住所", "メールアドレス"],
};

export const kiyosForSearch = [about, shop, contact];
