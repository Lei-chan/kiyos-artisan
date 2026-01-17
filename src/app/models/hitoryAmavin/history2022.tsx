import HistoryDefaultImage from "@/app/[locale]/components/HistoryDefaultImage";
import { historyPClassName } from "@/app/config/styles";

const imagePath = "/history/amavin/2022/2022-";
const history2022 = {
  2022: [
    {
      month: 10,
      content: {
        ja: (
          <>
            <HistoryDefaultImage
              src={`${imagePath}10-9.webp`}
              alt="落としたブドウ画像"
            />
            <p className={historyPClassName}>
              初収穫のブドウの果実。より樹の成長を促すためにほとんど落としてしまいました。
            </p>
          </>
        ),
        en: (
          <>
            <HistoryDefaultImage
              src={`${imagePath}10-9.webp`}
              alt="cut grapes image"
            />
            <p className={historyPClassName}>
              Grape fruits of the first harvest. Most of the fruits were dropped
              to encourage the grapevines grow more.
            </p>
          </>
        ),
      },
      searchableText: {
        ja: "初収穫のブドウの果実。より樹の成長を促すためにほとんど落としてしまいました。",
        en: "  Grape fruits of the first harvest. Most of the fruits were dropped to encourage the grapevines grow more.",
      },
    },
  ],
};

export default history2022;
