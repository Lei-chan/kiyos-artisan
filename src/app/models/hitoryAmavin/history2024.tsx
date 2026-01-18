import HistoryDefaultImage from "@/app/[locale]/components/HistoryDefaultImage";
import { historyPClassName } from "@/app/config/styles";

const imagePath = "/history/amavin/2024/2024-";
const history2024 = {
  2024: [
    {
      month: 2,
      content: {
        ja: (
          <>
            <HistoryDefaultImage
              src={`${imagePath}2-7.webp`}
              alt="雪が積もったヴィンヤード画像"
            />
            <p className={historyPClassName}>今年も雪が積もりました。</p>
          </>
        ),
        en: (
          <>
            <HistoryDefaultImage
              src={`${imagePath}2-7.webp`}
              alt="vineyard covered in snow"
            />
            <p className={historyPClassName}>
              Snow piled up on the vineyard this year.
            </p>
          </>
        ),
      },
      searchableText: {
        ja: "今年も雪が積もりました。",
        en: "Snow piled up on the vineyard this year too.",
      },
    },
    {
      month: 4,
      content: {
        ja: (
          <>
            <HistoryDefaultImage src={`${imagePath}4-7.webp`} alt="苗木画像" />
            <p className={historyPClassName}>
              グルナッシュの苗木37本を定植し、カベルネ・フランの苗木20本、シラー＆シラーズの苗木13本を捕植しました。
            </p>
            <HistoryDefaultImage
              src={`${imagePath}4-17.webp`}
              alt="ブドウの芽画像"
            />
            <p className={historyPClassName}>
              暖かくなってきて、ブドウの芽が膨らみ始めました。
            </p>
            <HistoryDefaultImage
              src={`${imagePath}4-29.webp`}
              alt="ワインの瓶詰の機械画像"
            />
            <HistoryDefaultImage
              src={`${imagePath}4-29(2).webp`}
              alt="瓶詰め後のワイン画像"
            />
            <p className={historyPClassName}>
              2023年に初収穫したブドウのワインの瓶詰を164本行いました。
            </p>
          </>
        ),
        en: (
          <>
            <HistoryDefaultImage
              src={`${imagePath}4-7.webp`}
              alt="saplings images"
            />
            <p className={historyPClassName}>
              We planted 37 Grenache saplings, and added 20 more Cabernet Franc
              and 13 more Syrah & Shiraz saplings.
            </p>
            <HistoryDefaultImage
              src={`${imagePath}4-17.webp`}
              alt="grape buds image"
            />
            <p className={historyPClassName}>
              As the weather gets warm, the grape buds began to swell.
            </p>
            <HistoryDefaultImage
              src={`${imagePath}4-29.webp`}
              alt="wine bottling machine image"
            />
            <HistoryDefaultImage
              src={`${imagePath}4-29(2).webp`}
              alt="wine after bottling image"
            />
            <p className={historyPClassName}>
              We bottled 164 bottles with the wine made out of the grapes of the
              first harvest in 2023.
            </p>
          </>
        ),
      },
      searchableText: {
        ja: "グルナッシュの苗木37本を定植し、カベルネ・フランの苗木20本、シラー＆シラーズの苗木13本を捕植しました。 暖かくなってきて、ブドウの芽が膨らみ始めました。2023年に初収穫したブドウのワインの瓶詰を164本行いました。",
        en: "We planted 37 Grenache saplings, and added 20 more Cabernet Franc and 13 more Syrah & Shiraz saplings. As the weather gets warm, the grape buds began to swell. We bottled 164 bottles with the wine made out of the grapes of the first harvest in 2023.",
      },
    },
    {
      month: 5,
      content: {
        ja: (
          <>
            <HistoryDefaultImage
              src={`${imagePath}5-31.webp`}
              alt="成長を続ける苗木画像"
            />
            <p className={historyPClassName}>
              ４月に定植した苗木も順調に成長しています。
            </p>
          </>
        ),
        en: (
          <>
            <HistoryDefaultImage
              src={`${imagePath}5-31.webp`}
              alt="growing saplings images"
            />
            <p className={historyPClassName}>
              The saplings planted in this April have been growing well.
            </p>
          </>
        ),
      },
      searchableText: {
        ja: "４月に定植した苗木も順調に成長しています。",
        en: "The saplings planted in this April have been growing well.",
      },
    },
    {
      month: 6,
      content: {
        ja: (
          <>
            <HistoryDefaultImage
              src={`${imagePath}6-28.webp`}
              alt="ワインが紹介されるフェイスブックの投稿画像"
            />
            <p className={historyPClassName}>
              北杜市市長の上村さんに、初収穫のワインを紹介していただきました。
            </p>
          </>
        ),
        en: (
          <>
            <HistoryDefaultImage
              src={`${imagePath}6-28.webp`}
              alt="facebook post featuring our wine image"
            />
            <p className={historyPClassName}>
              Mayor Kamimura of Hokuto city introduced our wine from the first
              harvest on his social media.
            </p>
          </>
        ),
      },
      searchableText: {
        ja: "北杜市市長の上村さんに、初収穫のワインを紹介していただきました。",
        en: "Mayor Kamimura of Hokuto city introduced our wine from the first harvest on his social media.",
      },
    },
    {
      month: 7,
      content: {
        ja: (
          <>
            {/* later */}
            {/* <HistoryDefaultImage
              src={`${imagePath}7-15.webp`}
              alt="トラの置物とヴィンヤード画像"
            />
            <p className={historyPClassName}>
              獣害対策のため、トラの置物がやってきました。
            </p> */}
            <HistoryDefaultImage
              src={`${imagePath}7.webp`}
              alt="販売されているワイン画像"
            />
            <p className={historyPClassName}>
              伊勢丹新宿店の世界を旅するワイン展で、ワインの販売を行いました。
            </p>
          </>
        ),
        en: (
          <>
            {/* change */}
            {/* <HistoryDefaultImage
              src={`${imagePath}7-15.webp`}
              alt="vineyard with tiger object image"
            />
            <p className={historyPClassName}>
              The tiger object have came to our vineyard to prevent monkey
              damage.
            </p> */}
            <HistoryDefaultImage
              src={`${imagePath}7.webp`}
              alt="wine for sale image"
            />
            <p className={historyPClassName}>
              We sold our wine at the World Travel Wine Exhibition at Isetan
              Shinjuku.
            </p>
          </>
        ),
      },
      searchableText: {
        ja: "伊勢丹新宿店の世界を旅するワイン展で、ワインの販売を行いました。。",
        en: "We sold our wine at the World Travel Wine Exhibition at Isetan Shinjuku.",
      },
    },
    {
      month: 8,
      content: {
        ja: (
          <>
            <HistoryDefaultImage
              src={`${imagePath}8-4.webp`}
              alt="ブドウの実画像"
            />
            <p className={historyPClassName}>ヴェレゾンが始まりました。</p>
            <HistoryDefaultImage
              src={`${imagePath}8-29.webp`}
              alt="霧がかったヴィンヤード画像"
            />
            <p className={historyPClassName}>
              寒暖差があり、たまにヴィンヤードに霧がかかります。
            </p>
          </>
        ),
        en: (
          <>
            <HistoryDefaultImage
              src={`${imagePath}8-4.webp`}
              alt="grape fruits image"
            />
            <p className={historyPClassName}>Veraison has begun.</p>
            <HistoryDefaultImage
              src={`${imagePath}8-29.webp`}
              alt="foggy vineyard image"
            />
            <p className={historyPClassName}>
              There are temperature differences and sometimes fog covers the
              vineyard.
            </p>
          </>
        ),
      },
      searchableText: {
        ja: "ヴェレゾンが始まりました。寒暖差があり、たまにヴィンヤードに霧がかかります。",
        en: "Veraison has begun. There are temperature differences and sometimes fog covers the vineyard.",
      },
    },
    {
      month: 9,
      content: {
        ja: (
          <>
            <HistoryDefaultImage
              src={`${imagePath}9-15.webp`}
              alt="鷹のカイト画像"
            />
            <p className={historyPClassName}>
              防鳥のための、鷹のカイトを設置しました。
            </p>
          </>
        ),
        en: (
          <>
            <HistoryDefaultImage
              src={`${imagePath}9-15.webp`}
              alt="hawk kite image"
            />
            <p className={historyPClassName}>
              We installed the hawk kite for bird damage.
            </p>
          </>
        ),
      },
      searchableText: {
        ja: "防鳥のための、鷹のカイトを設置しました。",
        en: "We installed the hawk kite for bird damage.",
      },
    },
    {
      month: 10,
      content: {
        ja: (
          <>
            <HistoryDefaultImage
              src={`${imagePath}10-11.webp`}
              alt="ヴィンヤードの中のキラキラテープ画像"
            />
            <p className={historyPClassName}>
              防鳥のためのキラキラテープを設置しました。
            </p>
            <HistoryDefaultImage
              src={`${imagePath}10-21.webp`}
              alt="タンクに入ったブドウ画像"
            />
            <HistoryDefaultImage
              src={`${imagePath}10-26.webp`}
              alt="ブドウの実が無くなったヴィンヤード画像"
            />
            <p className={historyPClassName}>
              ブドウの収穫を行いました。カベルネ・フラン281㎏、シラーズ611㎏、グルナッシュ2㎏、合計894kg収穫しました。
            </p>
          </>
        ),
        en: (
          <>
            <HistoryDefaultImage
              src={`${imagePath}10-11.webp`}
              alt="glitter tape in the vineyard image"
            />
            <p className={historyPClassName}>
              We installed the glitter tape in the vineyard for bird damage.
            </p>
            <HistoryDefaultImage
              src={`${imagePath}10-21.webp`}
              alt="grape fruits in a tank image"
            />
            <HistoryDefaultImage
              src={`${imagePath}10-26.webp`}
              alt="vineyard with no grapes image"
            />
            <p className={historyPClassName}>
              We harvested the grapes. We harvested 281kg of Cabernet Franc,
              611kg of Shiraz, and 2kg of Grenache, 894kg grapes in total.
            </p>
          </>
        ),
      },
      searchableText: {
        ja: "防鳥のためのキラキラテープを設置しました。ブドウの収穫を行いました。カベルネ・フラン281㎏、シラーズ611㎏、グルナッシュ2㎏、合計894kg収穫しました。。",
        en: "We installed the glitter tape in the vineyard for bird damage. We harvested the grapes. We harvested 281kg of Cabernet Franc, 611kg of Shiraz, and 2kg of Grenache, 894kg grapes in total.",
      },
    },
    {
      month: 11,
      content: {
        ja: (
          <>
            <HistoryDefaultImage
              src={`${imagePath}11-22.webp`}
              alt="カバーを付けたブドウの樹画像"
            />
            <p className={historyPClassName}>
              ヴィンヤードも冬支度。ブドウの樹に寒さ除けのカバー(グローチューブ)を付けました。
            </p>
          </>
        ),
        en: (
          <>
            <HistoryDefaultImage
              src={`${imagePath}11-22.webp`}
              alt="grapevines with cover image"
            />
            <p className={historyPClassName}>
              The vineyard is preparing for winter. Grow tubes have been
              installed to protect the grapevines from the cold.
            </p>
          </>
        ),
      },
      searchableText: {
        ja: " ヴィンヤードも冬支度。ブドウの樹に寒さ除けのカバー(グローチューブ)を付けました。",
        en: "The vineyard is preparing for winter. Grow tubes have been installed to protect the grapevines from the cold.",
      },
    },
  ],
};

export default history2024;
