import { getGroupNameFromType } from "@/app/helper";

const href = "/";

export const kiyos = {
  title: {
    ja: getGroupNameFromType("ja", "kiyos"),
    en: getGroupNameFromType("en", "kiyos"),
  },
  searchableText: {
    ja: "キヨズセラーでは、主にーーーやーーなど、希少価値の高いワインの輸入販売をおこなっております。",
    en: "Kiyos Celler imports and sells precious wines from companies such as 00 and 00.",
  },
  href,
  keywords: ["kiyos", "キヨズ"],
};

export const amavin = {
  title: {
    ja: getGroupNameFromType("ja", "amavin"),
    en: getGroupNameFromType("en", "amavin"),
  },
  searchableText: {
    ja: "アルチザンマリアージュヴィンヤードはキヨズセラーが作っているヴィンヤードです。ソムリエエクセレンスの資格を持つ支配人がこだわって作るワイン、ぜひご堪能ください。",
    en: "Artisan Mariage Vineyards is vineyards that Kiyos Celler run. Please enjoy our wine that the owner who is qualified as a somlier excellence make with pride.",
  },
  href,
  keywords: ["amavin", "アマビン"],
};

export const homeForSearch = [kiyos, amavin];
