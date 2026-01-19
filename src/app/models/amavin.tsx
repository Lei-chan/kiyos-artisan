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
    ja: "山梨県北杜市明野町（標高750m）にて、黒ブドウに特化しクローン管理された醸造用ブドウ栽培を有機栽培にて行っています。品種はシラー＆シラーズ、グルナッシュ、カベルネ・フランです。醸造は同じく明野町の紫藝醸造さんにて委託醸造を行い、2023年ヴィンテージから販売スタートしています。",
    en: "Artisan Mariage Vineyards is vineyardLocated in Akeno-cho, Hokuto City, Yamanashi Prefecture (at an altitude of 750m), we organically cultivate clone-controlled wine grapes, specializing in black grapes. The varieties we use are Syrah & Shiraz, Grenache, and Cabernet Franc. Our wines are brewed under contract by Shigei Brewery, also in Akeno-cho, and we have been selling our wines since the 2023 vintage.",
  },
  href,
  keywords: [...commonKeywords],
};

export const shop = {
  title: { ja: getShopName("ja"), en: getShopName("en") },
  searchableText: {
    ja: "こちらのオンラインショップよりArtisan Mariage Vineyardsの商品をご購入いただけます。オンラインショップはこちら（準備中）",
    en: "You can purchase items of Artisan Mariage Vineyards from here. Online shope (In preparation)",
  },
  href,
  keywords: [commonKeywords],
};

export const contact = {
  title: { ja: getContactName("ja"), en: getContactName("en") },
  searchableText: {
    ja: "〒408-0204 山梨県北杜市明野町上手永井原11805 artisanmariagevineyards@gmail.com",
    en: "408-0204 Akeno-cho Uede Nagaihara 11805, Hokuto, Yamanashi, Japan artisanmariagevineyards@gmail.com",
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
