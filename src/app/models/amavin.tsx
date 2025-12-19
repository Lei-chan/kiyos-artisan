const href = "/artisan-mariage-vineyards";
const commonKeywords = ["amavin"];

export const about = {
  title: "Artisan Mariage Vineyardsについて",
  searchableText:
    "Artisan Mariage Vineyardsは、ワインの輸入販売を行うKiyos Cellerが立ち上げたヴィンヤードです。ソムリエエクセレンスの資格を持つ支配人が作るこだわりのワイン。ぜひご堪能下さい。",
  href,
  keywords: [...commonKeywords],
};

export const shop = {
  title: "ショップ",
  searchableText:
    "こちらのオンラインショップよりArtisan Mariage Vineyardsの商品をご購入いただけます。オンラインショップはこちら",
  href,
  keywords: [commonKeywords],
};

export const contact = {
  title: "お問い合わせ",
  searchableText:
    "〒000-0000 山梨県北杜市明野町 artisanmariagevineyards@gmail.com",
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
