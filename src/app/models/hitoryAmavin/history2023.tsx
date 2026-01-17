import HistoryDefaultImage from "@/app/[locale]/components/HistoryDefaultImage";
import { historyPClassName } from "@/app/config/styles";

const imagePath = "/history/amavin/2023/2023-";
const history2023 = {
  2023: [
    {
      month: 2,
      content: {
        ja: (
          <>
            <HistoryDefaultImage
              src={`${imagePath}2-12.webp`}
              alt="雪が積もったヴィンヤード画像"
            />
            <p className={historyPClassName}>雪が積もりました。</p>
          </>
        ),
        en: (
          <>
            <HistoryDefaultImage
              src={`${imagePath}2-12.webp`}
              alt="vineyard covered with snow image"
            />
            <p className={historyPClassName}>Snow piled up on the vineyard.</p>
          </>
        ),
      },
      searchableText: {
        ja: "雪が積もりました。",
        en: "Snow piled up on the vineyard.",
      },
    },
    {
      month: 3,
      content: {
        ja: (
          <>
            <HistoryDefaultImage
              src={`${imagePath}3-15.webp`}
              alt="枝の断面から出る水滴画像"
            />
            <p className={historyPClassName}>
              冬が終わり暖かくなってきたことで、ブドウ樹が揚水を始めました。
            </p>
            <HistoryDefaultImage
              src={`${imagePath}3-19.webp`}
              alt="頂上付近が雪に覆われる八ヶ岳画像"
            />
            <p className={historyPClassName}>
              快晴の空に、八ヶ岳がまぶしく写ります。
            </p>
          </>
        ),
        en: (
          <>
            <HistoryDefaultImage
              src={`${imagePath}3-15.webp`}
              alt="water droplets coming out of a branch cross-section image"
            />
            <p className={historyPClassName}>
              The grapevines started to pump water as winter ended and the
              weather got warm.
            </p>
            <HistoryDefaultImage
              src={`${imagePath}3-19.webp`}
              alt="Mt.Yatsugatake with the summit covered in snow image"
            />
            <p className={historyPClassName}>
              Mt.Yatsugatake appears dazzling against the clear blue sky.
            </p>
          </>
        ),
      },
      searchableText: {
        ja: "冬が終わり暖かくなってきたことで、ブドウ樹が揚水を始めました。快晴の空に、八ヶ岳がまぶしく写ります。",
        en: "The grapevines started to pump water as winter ended and the weather got warm. Mt.Yatsugatake appears dazzling against the clear blue sky.",
      },
    },
    // check with client
    {
      month: 10,
      content: {
        ja: (
          <>
            <HistoryDefaultImage
              src={`${imagePath}10.webp`}
              alt="タンクに入っているブドウの実"
            />
            <p className={historyPClassName}>
              収穫を行いました。００㎏、００㎏、計００㎏収穫できました。
            </p>
          </>
        ),
        en: (
          <>
            <HistoryDefaultImage
              src={`${imagePath}10.webp`}
              alt="grape fruits in a tank"
            />
            <p className={historyPClassName}>We harvested grapes.</p>
          </>
        ),
      },
      searchableText: {
        ja: "収穫を行いました。００㎏、００㎏、計００㎏収穫できました。",
        en: "",
      },
    },
    {
      // check with client
      month: 11,
      content: {
        ja: (
          <>
            <HistoryDefaultImage
              src={`${imagePath}11-3.webp`}
              alt="タンクの中でブドウを潰す画像"
            />
            <p className={historyPClassName}></p>

            <HistoryDefaultImage
              src={`${imagePath}11-19(2).webp`}
              alt="タンクの中にある濾されたブドウの液"
            />
            <HistoryDefaultImage
              src={`${imagePath}11-19.webp`}
              alt="ワイングラスの中にある濾されたワイン"
            />
            <p className={historyPClassName}></p>
          </>
        ),
        en: (
          <>
            <HistoryDefaultImage src={`${imagePath}11-3.webp`} alt="" />
            <p className={historyPClassName}></p>
            <HistoryDefaultImage src={`${imagePath}11-19(2).webp`} alt="" />
            <HistoryDefaultImage src={`${imagePath}11-19.webp`} alt="" />
            <p className={historyPClassName}></p>
          </>
        ),
      },
      searchableText: { ja: "", en: "" },
    },
  ],
};

export default history2023;
