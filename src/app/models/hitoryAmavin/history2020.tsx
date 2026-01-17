import HistoryDefaultImage from "@/app/[locale]/components/HistoryDefaultImage";
import { historyPClassName } from "@/app/config/styles";

const imagePath = "/history/amavin/2020/2020-";
const history2020 = {
  2020: [
    {
      month: 3,
      content: {
        ja: (
          <>
            <HistoryDefaultImage
              src={`${imagePath}3-16.webp`}
              alt="草刈り後のヴィンヤード画像"
            />
            <p className={historyPClassName}>
              ヴィンヤードの草刈りをしました。
            </p>
          </>
        ),
        en: (
          <>
            <HistoryDefaultImage
              src={`${imagePath}3-16.webp`}
              alt="mowed vineyard image"
            />
            <p className={historyPClassName}>We mowed the vineyard.</p>
          </>
        ),
      },
      searchableText: {
        ja: "ヴィンヤードの草刈りをしました。",
        en: "We mowed the vineyard",
      },
    },
    {
      month: 5,
      content: {
        ja: (
          <>
            <HistoryDefaultImage
              src={`${imagePath}5.webp`}
              alt="草刈り後のヴィンヤード画像"
            />
            <p className={historyPClassName}>
              気に入ったクローンの苗木が手に入らず、2020年度はヴィンヤードの草生栽培の準備を開始。
            </p>
          </>
        ),
        en: (
          <>
            <HistoryDefaultImage
              src={`${imagePath}5.webp`}
              alt="vineyard after being mowed image"
            />
            <p className={historyPClassName}>
              Unable to obtain saplings of the our preferred clone, we started
              preparing for grass cultivation in the vineyard in 2020.
            </p>
          </>
        ),
      },
      searchableText: {
        ja: "気に入ったクローンの苗木が手に入らず、2020年度はヴィンヤードの草生栽培の準備を開始。",
        en: " Unable to obtain saplings of the our preferred clone, we started preparing for grass cultivation in the vineyard in 2020.",
      },
    },
  ],
};

export default history2020;
