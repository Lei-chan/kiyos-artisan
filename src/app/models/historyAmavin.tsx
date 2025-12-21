import HistoryDefaultImage from "../components/HistoryDefaultImage";
import {
  historyMultiImageContainerClassName,
  historyPClassName,
} from "../config";
import { getHistoryForSearch } from "../helper";

const amavinImagePath = "/history/amavin/";
const amavinImagePath2019 = `${amavinImagePath}2019/2019-`;
const amavinImagePath2020 = `${amavinImagePath}2020/2020-`;
const amavinImagePath2021 = `${amavinImagePath}2021/2021-`;
const amavinImagePath2022 = `${amavinImagePath}2022/2022-`;
const amavinImagePath2023 = `${amavinImagePath}2023/2023-`;
const amavinImagePath2024 = `${amavinImagePath}2024/2024-`;
const amavinImagePath2025 = `${amavinImagePath}2025/2025-`;

export const historyAmavin = {
  2019: [
    {
      month: 12,
      content: (
        <>
          <HistoryDefaultImage
            src={`${amavinImagePath2019}12-16.webp`}
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
            src={`${amavinImagePath2020}3-16.webp`}
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
            src={`${amavinImagePath2020}5.webp`}
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
            src={`${amavinImagePath2021}4-6.webp`}
            alt="field with poles image"
          ></HistoryDefaultImage>
          <HistoryDefaultImage
            src={`${amavinImagePath2021}4-6(2).webp`}
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
            src={`${amavinImagePath2021}6-20.webp`}
            alt="growings saplings with leaves image"
          />
          <HistoryDefaultImage
            src={`${amavinImagePath2021}6-30.webp`}
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
            src={`${amavinImagePath2021}7-14.webp`}
            alt="field with run wire"
          />
          <HistoryDefaultImage
            src={`${amavinImagePath2021}7-31.webp`}
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
            src={`${amavinImagePath2021}8-25.webp`}
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
            src={`${amavinImagePath2021}9-12.webp`}
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
            src={`${amavinImagePath2021}10-8.webp`}
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
            src={`${amavinImagePath2021}12-10.webp`}
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
            src={`${amavinImagePath2022}10-9.webp`}
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
            src={`${amavinImagePath2023}2-12.webp`}
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
            src={`${amavinImagePath2023}3-15.webp`}
            alt="branch with water drop image"
          />
          <HistoryDefaultImage
            src={`${amavinImagePath2023}3-19.webp`}
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
            src={`${amavinImagePath2023}7-14.webp`}
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
            src={`${amavinImagePath2024}2-7.webp`}
            alt="field covered with snow"
          />
          <p className={historyPClassName}>畑に雪が積もりました。</p>
        </>
      ),
      searchableText: "畑に雪が積もりました。",
    },
    {
      month: 4,
      content: (
        <>
          <div className={historyMultiImageContainerClassName}>
            <HistoryDefaultImage
              src={`${amavinImagePath2024}4-7.webp`}
              alt="saplings images"
            />
            <HistoryDefaultImage
              src={`${amavinImagePath2024}4-17.webp`}
              alt="branch image"
            />
            <HistoryDefaultImage
              src={`${amavinImagePath2024}4-29.webp`}
              alt="machines for filling bottles with wine image"
            />
            <HistoryDefaultImage
              src={`${amavinImagePath2024}4-29(2).webp`}
              alt="filled bottles image"
            />
          </div>
          <p className={historyPClassName}>
            ○○と○○の苗木を○○本植えました。
            <br />
            ブドウの枝を。
            <br />
            ○○年に収穫したブドウのワインの瓶詰を行いました。
          </p>
        </>
      ),
      searchableText:
        "○○と○○の苗木を○○本植えました。ブドウの枝を。○○年に収穫したブドウのワインの瓶詰を行いました。",
    },
    {
      month: 5,
      content: (
        <>
          <HistoryDefaultImage
            src={`${amavinImagePath2024}5-31.webp`}
            alt="growing saplings images"
          />
          <p className={historyPClassName}>
            ４月に植えた苗木がどんどん成長しています。
          </p>
        </>
      ),
      searchableText: "４月に植えた苗木がどんどん成長しています。",
    },
    {
      month: 6,
      content: (
        <>
          <HistoryDefaultImage
            src={`${amavinImagePath2024}6-28.webp`}
            alt="facebook introducing wine image"
          />
          <p className={historyPClassName}>
            北斗市市長の上村さんに、ワインを紹介していただきました。
          </p>
        </>
      ),
      searchableText:
        "北斗市市長の上村さんに、ワインを紹介していただきました。",
    },
    {
      month: 7,
      content: (
        <>
          <div className={historyMultiImageContainerClassName}>
            <HistoryDefaultImage
              src={`${amavinImagePath2024}7-15.webp`}
              alt="field with tiger object image"
            />
            <HistoryDefaultImage
              src={`${amavinImagePath2024}7.webp`}
              alt="wine for sale image"
            />
          </div>
          <p className={historyPClassName}>
            サル除け？のための、トラの置物がやってきました。
            <br />
            新宿の伊勢丹さんで、ワインの販売を行いました。
          </p>
        </>
      ),
      searchableText:
        "サル除け？のための、トラの置物がやってきました。新宿の伊勢丹さんで、ワインの販売を行いました。",
    },
    {
      month: 8,
      content: (
        <>
          <div className={historyMultiImageContainerClassName}>
            <HistoryDefaultImage
              src={`${amavinImagePath2024}8-4.webp`}
              alt="grapes image"
            />
            <HistoryDefaultImage
              src={`${amavinImagePath2024}8-29.webp`}
              alt="foggy field image"
            />
          </div>
          <p className={historyPClassName}>
            ブドウの実がなり始めました。
            <br />
            たまに畑に霧がかかります。
          </p>
        </>
      ),
      searchableText: "ブドウの実がなり始めました。たまに畑に霧がかかります。",
    },
    {
      month: 9,
      content: (
        <>
          <HistoryDefaultImage
            src={`${amavinImagePath2024}9-15.webp`}
            alt="eagle object image"
          />
          <p className={historyPClassName}>
            ブドウを食べる鳥よけ？のための、鷹のオブジェクトかやってきました。
          </p>
        </>
      ),
      searchableText:
        "ブドウを食べる鳥よけ？のための、鷹のオブジェクトかやってきました。",
    },
    {
      month: 10,
      content: (
        <>
          <div className={historyMultiImageContainerClassName}>
            <HistoryDefaultImage
              src={`${amavinImagePath2024}10-11.webp`}
              alt="glittering tape image"
            />
            <HistoryDefaultImage
              src={`${amavinImagePath2024}10-21.webp`}
              alt="eagle object image"
            />
            <HistoryDefaultImage
              src={`${amavinImagePath2024}10-26.webp`}
              alt="eagle object image"
            />
          </div>
          <p className={historyPClassName}>
            ブドウを食べる鳥よけ？のためのキラキラテープを設置しました。
            <br />
            ブドウの収穫を行いました。○○個・計○○ kg収穫しました。
          </p>
        </>
      ),
      searchableText:
        "ブドウを食べる鳥よけ？のためのキラキラテープを設置しました。ブドウの収穫を行いました。○○個・計○○ kg収穫しました。",
    },
    {
      month: 11,
      content: (
        <>
          <HistoryDefaultImage
            src={`${amavinImagePath2024}11-22.webp`}
            alt="grape trees with cover image"
          />
          <p className={historyPClassName}>
            ブドウの木に寒さ除けのカバーを付けました。
          </p>
        </>
      ),
      searchableText: "ブドウの木に寒さ除けのカバーを付けました。",
    },
  ],
  2025: [
    {
      month: 1,
      content: (
        <>
          <HistoryDefaultImage
            src={`${amavinImagePath2025}1-3.webp`}
            alt="brick kiln image"
          />
          <p className={historyPClassName}>
            畑の入り口にレンガの窯を作りました。
          </p>
        </>
      ),
      searchableText: "畑の入り口にレンガの窯を作りました。",
    },
    {
      month: 2,
      content: (
        <>
          <HistoryDefaultImage
            src={`${amavinImagePath2025}2-9.webp`}
            alt="filled wine bottles image"
          />
          <p className={historyPClassName}>
            去年？収穫したブドウのクレーレワインの瓶詰を行いました。
            <br />
            Kiyos CellerとArtisan Mariage
            Vineyardsのインスタグラムを作りました。？
          </p>
        </>
      ),
      searchableText:
        "去年？収穫したブドウのクレーレワインの瓶詰を行いました。Kiyos CellerとArtisan Mariage Vineyardsのインスタグラムを作りました。？",
    },
    {
      month: 3,
      content: (
        <>
          <div className={historyMultiImageContainerClassName}>
            <HistoryDefaultImage
              src={`${amavinImagePath2025}3-2.webp`}
              alt="mystical mountains image"
            />
            <HistoryDefaultImage
              src={`${amavinImagePath2025}3-8.webp`}
              alt="wine bottles with label image"
            />
            <HistoryDefaultImage
              src={`${amavinImagePath2025}3-20.webp`}
              alt="field covered with snow image"
            />
            <HistoryDefaultImage
              src={`${amavinImagePath2025}3-22.webp`}
              alt="little wines left image"
            />
            <HistoryDefaultImage
              src={`${amavinImagePath2025}3-30.webp`}
              alt="grape trees ? image"
            />
          </div>
          <p className={historyPClassName}>
            山々に光が当たり、山の端が連なって見えて幻想的です。
            <br />
            クレーレワインにラベルを張りました。
            <br />
            ３月の後半に雪が積もりました。
            <br />
            ○○さんで扱っていただいているワインが残り僅かとなっていて嬉しいです。
            <br />
            枝の。。。
          </p>
        </>
      ),
      searchableText:
        " 山々に光が当たり、山の端が連なって見えて幻想的です。クレーレワインにラベルを張りました。３月の後半に雪が積もりました。○○さんで扱っていただいているワインが残り僅かとなっていて嬉しいです。枝の。。。",
    },
    {
      month: 4,
      content: (
        <>
          <div className={historyMultiImageContainerClassName}>
            <HistoryDefaultImage
              src={`${amavinImagePath2025}4-5.webp`}
              alt="saplings image"
            />
            <HistoryDefaultImage
              src={`${amavinImagePath2025}4-12.webp`}
              alt="water drop coming out from branch image"
            />
            <HistoryDefaultImage
              src={`${amavinImagePath2025}4-13.webp`}
              alt="cutting branch image"
            />
            <HistoryDefaultImage
              src={`${amavinImagePath2025}4-20.webp`}
              alt="fixed branches image"
            />
            <HistoryDefaultImage
              src={`${amavinImagePath2025}4-26.webp`}
              alt="branches with buds image"
            />
          </div>
          <p className={historyPClassName}>
            今年も新たに○○の苗木を○○本植えました。
            <br />
            冬が終わり、ブドウ達が元気なことを示す水滴が出ています。
            <br />
            枝の剪定？を行いました。
            <br />
            枝をワイヤーに紐で固定しました。
            <br />
            春になり、ブドウ達の芽が出始めました。
          </p>
        </>
      ),
      searchableText:
        " 今年も新たに○○の苗木を○○本植えました。冬が終わり、ブドウ達が元気なことを示す水滴が出ています。枝の剪定？を行いました。枝をワイヤーに紐で固定しました。春になり、ブドウ達の芽が出始めました。",
    },
    {
      month: 5,
      content: (
        <>
          <HistoryDefaultImage
            src={`${amavinImagePath2025}5-31.webp`}
            alt="foggy field image"
          />
          <p className={historyPClassName}>畑が霧がかっています。</p>
        </>
      ),
      searchableText: "畑が霧がかっています。",
    },
  ],
};

export const historyAmavinForSearch = getHistoryForSearch(historyAmavin, [
  "amavin",
]);
