import HistoryDefaultImage from "@/app/[locale]/components/HistoryDefaultImage";
import { historyPClassName } from "@/app/config/styles";

const imagePath = "/history/amavin/2021/2021-";
const history2021 = {
  2021: [
    {
      month: 4,
      content: {
        ja: (
          <>
            <HistoryDefaultImage
              src={`${imagePath}4-6.webp`}
              alt="支柱が立った後のヴィンヤード画像"
            ></HistoryDefaultImage>
            <p className={historyPClassName}>支柱が立ちました。</p>
            <HistoryDefaultImage
              src={`${imagePath}4-6(2).webp`}
              alt="苗木画像"
            />
            <p className={historyPClassName}>
              カベルネ・フランの苗木を114本、シラー＆シラーズの苗木を423本定植しました。
            </p>
          </>
        ),
        en: (
          <>
            <HistoryDefaultImage
              src={`${imagePath}4-6.webp`}
              alt="vineyard after the poles were set up"
            ></HistoryDefaultImage>
            <p className={historyPClassName}>We set up poles.</p>
            <HistoryDefaultImage
              src={`${imagePath}4-6(2).webp`}
              alt="saplings image"
            />
            <p className={historyPClassName}>
              We planted 114 Cabernet Franc saplings and 423 Syrah & Shiraz
              saplings.
            </p>
          </>
        ),
      },
      searchableText: {
        ja: "支柱が立ちました。カベルネ・フランの苗木を114本、シラー＆シラーズの苗木を423本定植しました。",
        en: "We set up poles. We planted 114 Cabernet Franc saplings and 423 Syrah & Shiraz saplings.",
      },
    },
    {
      month: 6,
      content: {
        ja: (
          <>
            <HistoryDefaultImage
              src={`${imagePath}6-20.webp`}
              alt="成長している苗木と新梢"
            />
            <p className={historyPClassName}>
              苗木が成長して、新梢が伸びてきました。
            </p>
            <HistoryDefaultImage src={`${imagePath}6-30.webp`} alt="きじ画像" />
            <p className={historyPClassName}>
              きじをはじめ、野鳥たちも遊びに来てくれています
            </p>
          </>
        ),
        en: (
          <>
            <HistoryDefaultImage
              src={`${imagePath}6-20.webp`}
              alt="growing saplings with new shoots"
            />
            <p className={historyPClassName}>
              The saplings have been growing and new shoots have appeared.
            </p>
            <HistoryDefaultImage
              src={`${imagePath}6-30.webp`}
              alt="pheasant image"
            />
            <p className={historyPClassName}>
              Wild birds, including phesants come to play.
            </p>
          </>
        ),
      },
      searchableText: {
        ja: "苗木が成長して、新梢が伸びてきました。きじをはじめ、野鳥たちも遊びに来てくれています。",
        en: "The saplings have been growing and new shoots have appeared. Wild birds, including phesants come to play.",
      },
    },
    {
      month: 7,
      content: {
        ja: (
          <>
            <HistoryDefaultImage
              src={`${imagePath}7-14.webp`}
              alt="ワイヤー張り後のヴィンヤード画像"
            />
            <p className={historyPClassName}>
              支柱の一番下の段にワイヤー(ベースワイヤー)を張りました。
            </p>
            <HistoryDefaultImage
              src={`${imagePath}7-31.webp`}
              alt="成長しているブドウ達画像"
            />
            <p className={historyPClassName}>
              ブドウ達はすくすく成長しています。
            </p>
          </>
        ),
        en: (
          <>
            <HistoryDefaultImage
              src={`${imagePath}7-14.webp`}
              alt="vineyard after wiring"
            />
            <p className={historyPClassName}>
              We run wires (base wires) for the bottom row of the poles.
            </p>
            <HistoryDefaultImage
              src={`${imagePath}7-31.webp`}
              alt="growing grapevines"
            />
            <p className={historyPClassName}>
              The grapes have been growing well.
            </p>
          </>
        ),
      },
      searchableText: {
        ja: "支柱の一番下の段にワイヤー(ベースワイヤー)を張りました。ブドウ達はすくすく成長しています。",
        en: "We run wires (base wires) for the bottom row of the poles. The grapes have been growing well.",
      },
    },
    {
      month: 8,
      content: {
        ja: (
          <>
            <HistoryDefaultImage
              src={`${imagePath}8-25.webp`}
              alt="ブドウがなっている木画像"
            />
            <p className={historyPClassName}>
              初なりの実がヴェレゾンに入りました。
            </p>
          </>
        ),
        en: (
          <>
            <HistoryDefaultImage
              src={`${imagePath}8-25.webp`}
              alt="grapevines with fruits image"
            />
            <p className={historyPClassName}>
              The first fruits have reached veraison.
            </p>
          </>
        ),
      },
      searchableText: {
        ja: "初なりの実がヴェレゾンに入りました。",
        en: "The first fruits have reached veraison.",
      },
    },
    {
      month: 9,
      content: {
        ja: (
          <>
            <HistoryDefaultImage
              src={`${imagePath}9-12.webp`}
              alt="野菜作り画像"
            />
            <p className={historyPClassName}>
              空いているスペースで野菜作りを始めました。
            </p>
          </>
        ),
        en: (
          <>
            <HistoryDefaultImage
              src={`${imagePath}9-12.webp`}
              alt="vegetable garden image"
            />
            <p className={historyPClassName}>
              We started growing vegetables in the unused space of the vineyard.
            </p>
          </>
        ),
      },
      searchableText: {
        ja: "空いているスペースで野菜作りを始めました。",
        en: " We started growing vegetables in the unused space of the vineyard.",
      },
    },
    {
      month: 10,
      content: {
        ja: (
          <>
            <HistoryDefaultImage
              src={`${imagePath}10-8.webp`}
              alt="元気いっぱいなベビーリーフ画像"
            />
            <p className={historyPClassName}>
              野菜園のベビーリーフも元気いっぱいです。
            </p>
          </>
        ),
        en: (
          <>
            <HistoryDefaultImage
              src={`${imagePath}10-8.webp`}
              alt="lively baby leaves"
            />
            <p className={historyPClassName}>
              The babyleaves grown in the vegetable garden are also growing
              well.
            </p>
          </>
        ),
      },
      searchableText: {
        ja: "野菜園のベビーリーフも元気いっぱいです。",
        en: "The babyleaves grown in the vegetable garden are also growing well.",
      },
    },
    {
      month: 12,
      content: {
        ja: (
          <>
            <HistoryDefaultImage
              src={`${imagePath}12-10.webp`}
              alt="カバーを付けたブドウの樹画像"
            />
            <p className={historyPClassName}>
              ブドウの樹を寒さから守るためのカバー(グローチューブ)を付けました。
            </p>
          </>
        ),
        en: (
          <>
            <HistoryDefaultImage
              src={`${imagePath}12-10.webp`}
              alt="grapevines with covers"
            />
            <p className={historyPClassName}>
              We installed covers (grow tubes) to protect the grapevines from
              the cold.
            </p>
          </>
        ),
      },
      searchableText: {
        ja: "ブドウの樹を寒さから守るためのカバー(グローチューブ)を付けました。",
        en: "We installed covers (grow tubes) to protect the grapevines from the cold.",
      },
    },
  ],
};

export default history2021;
