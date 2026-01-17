import HistoryDefaultImage from "@/app/[locale]/components/HistoryDefaultImage";
import { historyPClassName } from "@/app/config/styles";

const imagePath = "/history/amavin/2019/2019-";
const history2019 = {
  2019: [
    {
      month: 12,
      content: {
        ja: (
          <>
            <HistoryDefaultImage
              src={`${imagePath}12-16.webp`}
              alt="ヴィンヤード画像"
            />
            <p className={historyPClassName}>
              明野町のテロワールを信じ、定植を決意。標高750mにある、39aの畑を借りました。
            </p>
          </>
        ),
        en: (
          <>
            <HistoryDefaultImage
              src={`${imagePath}12-16.webp`}
              alt="vineyard image"
            />
            <p className={historyPClassName}>
              Believing in the terroir of Akeno Town, we decided to plant grapes
              and started renting a 39a field at an altitude of 750m.
            </p>
          </>
        ),
      },
      searchableText: {
        ja: "明野町のテロワールを信じ、定植を決意。標高750mにある、39aの畑を借りました。",
        en: "Believing in the terroir of Akeno Town, we decided to plant grapes and rented a 39a field at an altitude of 750m.",
      },
    },
  ],
};

export default history2019;
