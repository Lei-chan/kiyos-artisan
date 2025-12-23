import { getAboutName, getContactName, getShopName } from "../helper";

const href = "/artisan-mariage-vineyards";
const commonKeywords = [
  "amavin",
  "artisan mariage vineyards",
  "アルチザンマリアージュヴィンヤード",
  "アマヴィン",
];

export const about = {
  title: {
    ja: getAboutName("ja", "amavin"),
    en: getAboutName("en", "amavin"),
  },
  searchableText: {
    ja: "Artisan Mariage Vineyardsは、ワインの輸入販売を行うKiyos Cellerが立ち上げたヴィンヤードです。ソムリエエクセレンスの資格を持つ支配人が作るこだわりのワイン。ぜひご堪能下さい。",
    en: "Artisan Mariage Vineyards is run by Kiyos Celler in which imports and sells wines from abroad. Please enjoy the wine the owner who is qualified as a Somlier excellence make with pride.",
  },
  href,
  keywords: [...commonKeywords],
};

export const shop = {
  title: { ja: getShopName("ja"), en: getShopName("en") },
  searchableText: {
    ja: "こちらのオンラインショップよりArtisan Mariage Vineyardsの商品をご購入いただけます。オンラインショップはこちら",
    en: "You can purchase items of Artisan Mariage Vineyards from here. Online shope",
  },
  href,
  keywords: [commonKeywords],
};

export const contact = {
  title: { ja: getContactName("ja"), en: getContactName("en") },
  searchableText: {
    ja: "〒000-0000 山梨県北杜市明野町 artisanmariagevineyards@gmail.com",
    en: "000-0000 Akeno, Hokuto, Yamanashi, Japan artisanmariagevineyards@gmail.com",
  },
  href,
  keywords: [
    ...commonKeywords,
    "artisan mariage vineyards",
    "address",
    "email",
    "住所",
    "メールアドレス",
  ],
};

export const amavinForSearch = [about, shop, contact];
