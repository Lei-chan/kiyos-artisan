import HistoryDefaultImage from "../components/HistoryDefaultImage";
import {
  historyMultiImageContainerClassName,
  historyPClassName,
} from "../config";
import { getHistoryForSearch } from "../helper";
import { TYPE_MONTH_HISTORY } from "../type";

const amavinImagePath = "/history/amavin/";
const amavinImagePath2019 = `${amavinImagePath}2019/`;
const amavinImagePath2020 = `${amavinImagePath}2020/`;
const amavinImagePath2021 = `${amavinImagePath}2021/`;
const amavinImagePath2022 = `${amavinImagePath}2022/`;
const amavinImagePath2023 = `${amavinImagePath}2023/`;
const amavinImagePath2024 = `${amavinImagePath}2024/`;
const amavinImagePath2025 = `${amavinImagePath}2025/`;

export const historyAmavin = {
  2019: [
    {
      month: 12,
      content: (
        <>
          <HistoryDefaultImage
            src={`${amavinImagePath2019}2019-12-16.webp`}
            alt="field image"
          />
          <p className={historyPClassName}>畑を借りて、初めてご対面。</p>
        </>
      ),
      searchableText: "畑を借りて、初めてご対面。",
    },
  ],
  2020: [
    {
      month: 3,
      content: (
        <>
          <HistoryDefaultImage
            src={`${amavinImagePath2020}2020-3-16.webp`}
            alt="mowed field image"
          />
          <p className={historyPClassName}>畑の草刈りをしました。</p>
        </>
      ),
      searchableText: "畑の草刈りをしました。",
    },
    {
      month: 5,
      content: (
        <>
          <HistoryDefaultImage
            src={`${amavinImagePath2020}2020-5.webp`}
            alt="mowed field image"
          />
          <p className={historyPClassName}>畑の草刈りをしました。</p>
        </>
      ),
      searchableText: "畑の草刈りをしました。",
    },
  ],
  2021: [
    {
      month: 4,
      content: (
        <div className={historyMultiImageContainerClassName}>
          <HistoryDefaultImage
            src={`${amavinImagePath2021}2021-4-6.webp`}
            alt="field with poles image"
          ></HistoryDefaultImage>
          <HistoryDefaultImage
            src={`${amavinImagePath2021}2021-4-6(2).webp`}
            alt="saplings image"
          />
          <p className={historyPClassName}>
            支柱が立ちました。
            <br />
            ○○と○○の苗木を○○本植えました。
          </p>
        </div>
      ),
      searchableText: "支柱が立ちました。○○と○○の苗木を○○本植えました。",
    },
    {
      month: 6,
      content: (
        <div className={historyMultiImageContainerClassName}>
          <HistoryDefaultImage
            src={`${amavinImagePath2021}2021-6-20.webp`}
            alt="growings saplings with leaves image"
          />
          <HistoryDefaultImage
            src={`${amavinImagePath2021}2021-6-30.webp`}
            alt="pheasant image"
          />
          <p className={historyPClassName}>
            苗木がすくすく成長して、葉ができ始めました。
            <br />
            きじを発見しました。
          </p>
        </div>
      ),
      searchableText:
        "苗木がすくすく成長して、葉ができ始めました。きじを発見しました。",
    },
    {
      month: 7,
      content: (
        <div className={historyMultiImageContainerClassName}>
          <HistoryDefaultImage
            src={`${amavinImagePath2021}2021-7-14.webp`}
            alt="field with run wire"
          />
          <HistoryDefaultImage
            src={`${amavinImagePath2021}2021-7-31.webp`}
            alt="growing grape trees image"
          />
          <p className={historyPClassName}>
            支柱の一番下の段にワイヤーを張りました。
            <br />
            ブドウ達はすくすく成長しています。
          </p>
        </div>
      ),
      searchableText:
        "支柱の一番下の段にワイヤーを張りました。ブドウ達はすくすく成長しています。",
    },
    {
      month: 8,
      content: (
        <>
          <HistoryDefaultImage
            src={`${amavinImagePath2021}2021-8-25.webp`}
            alt="tree with grapes"
          />
          <p className={historyPClassName}>木にブドウがなり始めました。</p>
        </>
      ),
      searchableText: "木にブドウがなり始めました。",
    },
    {
      month: 9,
      content: (
        <>
          <HistoryDefaultImage
            src={`${amavinImagePath2021}2021-9-12.webp`}
            alt="vegetable garden image"
          />
          <p className={historyPClassName}>
            空いているスペースで家庭菜園を始めました。
          </p>
        </>
      ),
      searchableText: "空いているスペースで家庭菜園を始めました。",
    },
    {
      month: 10,
      content: (
        <>
          <HistoryDefaultImage
            src={`${amavinImagePath2021}2021-10-8.webp`}
            alt="lively baby leaves"
          />
          <p className={historyPClassName}>
            家庭菜園のベビーリーフは元気いっぱいです。
          </p>
        </>
      ),
      searchableText: "家庭菜園のベビーリーフは元気いっぱいです。",
    },
    {
      month: 12,
      content: (
        <>
          <HistoryDefaultImage
            src={`${amavinImagePath2021}2021-12-10.webp`}
            alt="grape trees with cover"
          />
          <p className={historyPClassName}>
            ブドウの木達を寒さから守るためのカバーを付けました。
          </p>
        </>
      ),
      searchableText: "ブドウの木達を寒さから守るためのカバーを付けました。",
    },
  ],
  2022: [
    {
      month: 10,
      content: (
        <>
          <HistoryDefaultImage
            src={`${amavinImagePath2022}2022-10-9.webp`}
            alt="cut grapes image"
          />
          <p className={historyPClassName}>
            ブドウ達を落とし、より成長させます。
          </p>
        </>
      ),
      searchableText: "ブドウ達を落とし、より成長させます。",
    },
  ],
  2023: [
    {
      month: 2,
      content: (
        <>
          <HistoryDefaultImage
            src={`${amavinImagePath2023}2023-2-12.webp`}
            alt="field covered with snow image"
          />
          <p className={historyPClassName}>雪が積もりました。</p>
        </>
      ),
      searchableText: "雪が積もりました。",
    },
    {
      month: 3,
      content: (
        <div className={historyMultiImageContainerClassName}>
          <HistoryDefaultImage
            src={`${amavinImagePath2023}2023-3-15.webp`}
            alt="branch with water drop image"
          />
          <HistoryDefaultImage
            src={`${amavinImagePath2023}2023-3-19.webp`}
            alt="Mt.Kaikoma covered with snow at the top image"
          />
          <p className={historyPClassName}>
            冬が終わり、ブドウ達が元気なことを示す水滴が出ています。
            <br />
            甲斐駒ヶ岳の上に雪がかぶり、とても綺麗です。
          </p>
        </div>
      ),
      searchableText:
        "冬が終わり、ブドウ達が元気なことを示す水滴が出ています。甲斐駒ヶ岳の上に雪がかぶり、とても綺麗です。",
    },
    {
      month: 7,
      content: (
        <>
          <HistoryDefaultImage
            src={`${amavinImagePath2023}2023-7-14.webp`}
            alt="grape trees laid horizontally"
          />
          <p className={historyPClassName}>
            成長したブドウ達を横に倒し始めました。
          </p>
        </>
      ),
      searchableText: "成長したブドウ達を横に倒し始めました。",
    },
  ],
  2024: [
    {
      month: 2,
      content: (
        <>
          <HistoryDefaultImage
            src={`${amavinImagePath2024}2024-2-7.webp`}
            alt="field covered with snow"
          />
          <p className={historyPClassName}>畑に雪が積もりました。</p>
        </>
      ),
      searchableText: "畑に雪が積もりました。",
    },
  ],
  2025: [],
};

export const historyAmavinForSearch = getHistoryForSearch(historyAmavin, [
  "amavin",
]);
