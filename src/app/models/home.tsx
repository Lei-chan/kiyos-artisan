import { getGroupNameFromType } from "@/app/helper";

const href = "/";

export const kiyos = {
  title: {
    ja: getGroupNameFromType("kiyos"),
    en: getGroupNameFromType("kiyos"),
  },
  searchableText: {
    ja: "Kiyos Cellerでは、主にーーーやーーなど、希少価値の高いワインの輸入販売をおこなっております。",
    en: "Kiyos Celler imports and sells precious wines from companies such as 00 and 00.",
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
