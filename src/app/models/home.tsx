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
    ja: "Artisan Mariage VineyardsはKiyos Cellerが作っているヴィンヤードです。ソムリエエクセレンスの資格を持つ支配人がこだわって作るワイン、ぜひご堪能ください。",
    en: "Artisan Mariage Vineyards is vineyards that Kiyos Celler run. Please enjoy our wine that the owner who is qualified as a somlier excellence make with pride.",
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
