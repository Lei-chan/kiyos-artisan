import { getGroupNameFromType } from "@/app/helper";

const href = "/";

export const kiyos = {
  title: {
    ja: getGroupNameFromType("kiyos"),
    en: getGroupNameFromType("kiyos"),
  },
  searchableText: {
    ja: "Kiyos Celler(キヨズセラー)では小規模な日本ワイン生産者の他、アメリカ、カリフォルニア州のKistler Vineyards,Occidental Wines.その他Rare Wineを取り扱っています。",
    en: "Kiyo's Cellar carries wines from small Japanese wine producers as well as Kistler Vineyards and Occidental Wines from California, USA, and other rare wines.",
  },
  href,
  keywords: ["kiyos", "kiyos celler", "キヨズ", "キヨズセラー"],
};

export const amavin = {
  title: {
    ja: getGroupNameFromType("amavin"),
    en: getGroupNameFromType("amavin"),
  },
  searchableText: {
    ja: "山梨県北杜市明野町（標高750m）にて、黒ブドウに特化しクローン管理された醸造用ブドウ栽培を有機栽培にて行っています。品種はシラー＆シラーズ、グルナッシュ、カベルネ・フランです。醸造は同じく明野町の紫藝醸造さんにて委託醸造を行い、2023年ヴィンテージから販売スタートしています。",
    en: "Artisan Mariage Vineyards is vineyardLocated in Akeno-cho, Hokuto City, Yamanashi Prefecture (at an altitude of 750m), we organically cultivate clone-controlled wine grapes, specializing in black grapes. The varieties we use are Syrah & Shiraz, Grenache, and Cabernet Franc. Our wines are brewed under contract by Shigei Brewery, also in Akeno-cho, and we have been selling our wines since the 2023 vintage.",
  },
  href,
  keywords: [
    "amavin",
    "artisan mariage vineyards",
    "アマヴィン",
    "アルチザンマリアージュヴィンヤード",
  ],
};

export const homeForSearch = [kiyos, amavin];
