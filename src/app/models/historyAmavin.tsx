import HistoryDefaultImage from "../[locale]/components/HistoryDefaultImage";
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
      content: {
        ja: (
          <>
            <HistoryDefaultImage
              src={`${amavinImagePath2019}12-16.webp`}
              alt="ヴィンヤード画像"
            />
            <p className={historyPClassName}>
              ヴィンヤードを借りて、初めてご対面。
            </p>
          </>
        ),
        en: (
          <>
            <HistoryDefaultImage
              src={`${amavinImagePath2019}12-16.webp`}
              alt="field image"
            />
            <p className={historyPClassName}>
              Started renting the field and saw it for the first time
            </p>
          </>
        ),
      },
      searchableText: {
        ja: "ヴィンヤードを借りて、初めてご対面。",
        en: "Started renting the field and saw it for the first time",
      },
    },
  ],
  2020: [
    {
      month: 3,
      content: {
        ja: (
          <>
            <HistoryDefaultImage
              src={`${amavinImagePath2020}3-16.webp`}
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
              src={`${amavinImagePath2020}3-16.webp`}
              alt="mowed field image"
            />
            <p className={historyPClassName}>Mowed the field.</p>
          </>
        ),
      },
      searchableText: {
        ja: "ヴィンヤードの草刈りをしました。",
        en: "Mowed the field",
      },
    },
    {
      month: 5,
      content: {
        ja: (
          <>
            <HistoryDefaultImage
              src={`${amavinImagePath2020}5.webp`}
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
              src={`${amavinImagePath2020}5.webp`}
              alt="mowed field image"
            />
            <p className={historyPClassName}>Mowed the field.</p>
          </>
        ),
      },
      searchableText: {
        ja: "ヴィンヤードの草刈りをしました。",
        en: "Mowed the field",
      },
    },
  ],
  2021: [
    {
      month: 4,
      content: {
        ja: (
          <div className={historyMultiImageContainerClassName}>
            <HistoryDefaultImage
              src={`${amavinImagePath2021}4-6.webp`}
              alt="支柱が立った後のヴィンヤード画像"
            ></HistoryDefaultImage>
            <HistoryDefaultImage
              src={`${amavinImagePath2021}4-6(2).webp`}
              alt="苗木画像"
            />
            <p className={historyPClassName}>
              支柱が立ちました。
              <br />
              ○○と○○の苗木を○○本植えました。
            </p>
          </div>
        ),
        en: (
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
              Set up poles.
              <br />
              Planted ○○ saplings of ○○ and ○○.
            </p>
          </div>
        ),
      },
      searchableText: {
        ja: "支柱が立ちました。○○と○○の苗木を○○本植えました。",
        en: "Set up poles. Planted ○○ saplings of ○○ and ○○.",
      },
    },
    {
      month: 6,
      content: {
        ja: (
          <div className={historyMultiImageContainerClassName}>
            <HistoryDefaultImage
              src={`${amavinImagePath2021}6-20.webp`}
              alt="成長している苗木と葉っぱ画像"
            />
            <HistoryDefaultImage
              src={`${amavinImagePath2021}6-30.webp`}
              alt="きじ画像"
            />
            <p className={historyPClassName}>
              苗木がすくすく成長して、葉ができ始めました。
              <br />
              きじを発見しました。
            </p>
          </div>
        ),
        en: (
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
              The saplings have been growing and started having leaves.
              <br />
              Found a phesant.
            </p>
          </div>
        ),
      },
      searchableText: {
        ja: "苗木がすくすく成長して、葉ができ始めました。きじを発見しました。",
        en: "The saplings have been growing and started having leaves. Found a phesant.",
      },
    },
    {
      month: 7,
      content: {
        ja: (
          <div className={historyMultiImageContainerClassName}>
            <HistoryDefaultImage
              src={`${amavinImagePath2021}7-14.webp`}
              alt="ワイヤー張り後のヴィンヤード画像"
            />
            <HistoryDefaultImage
              src={`${amavinImagePath2021}7-31.webp`}
              alt="成長しているブドウ達画像"
            />
            <p className={historyPClassName}>
              支柱の一番下の段にワイヤーを張りました。
              <br />
              ブドウ達はすくすく成長しています。
            </p>
          </div>
        ),
        en: (
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
              Run wire for the bottom line of the poles.
              <br />
              The grapes have been growing well.
            </p>
          </div>
        ),
      },
      searchableText: {
        ja: "支柱の一番下の段にワイヤーを張りました。ブドウ達はすくすく成長しています。",
        en: "Run wire for the bottom line of the poles. The grapes have been growing well.",
      },
    },
    {
      month: 8,
      content: {
        ja: (
          <>
            <HistoryDefaultImage
              src={`${amavinImagePath2021}8-25.webp`}
              alt="ブドウがなっている木画像"
            />
            <p className={historyPClassName}>木にブドウがなり始めました。</p>
          </>
        ),
        en: (
          <>
            <HistoryDefaultImage
              src={`${amavinImagePath2021}8-25.webp`}
              alt="tree with grapes image"
            />
            <p className={historyPClassName}>
              The trees started having grapes.
            </p>
          </>
        ),
      },
      searchableText: {
        ja: "木にブドウがなり始めました。",
        en: "The trees started having grapes.",
      },
    },
    {
      month: 9,
      content: {
        ja: (
          <>
            <HistoryDefaultImage
              src={`${amavinImagePath2021}9-12.webp`}
              alt="家庭菜園画像"
            />
            <p className={historyPClassName}>
              空いているスペースで家庭菜園を始めました。
            </p>
          </>
        ),
        en: (
          <>
            <HistoryDefaultImage
              src={`${amavinImagePath2021}9-12.webp`}
              alt="vegetable garden image"
            />
            <p className={historyPClassName}>
              Started a vegetable garden in the unused space of the field.
            </p>
          </>
        ),
      },
      searchableText: {
        ja: "空いているスペースで家庭菜園を始めました。",
        en: "Started a vegetable garden in the unused space of the field.",
      },
    },
    {
      month: 10,
      content: {
        ja: (
          <>
            <HistoryDefaultImage
              src={`${amavinImagePath2021}10-8.webp`}
              alt="元気いっぱいなベビーリーフ画像"
            />
            <p className={historyPClassName}>
              家庭菜園のベビーリーフは元気いっぱいです。
            </p>
          </>
        ),
        en: (
          <>
            <HistoryDefaultImage
              src={`${amavinImagePath2021}10-8.webp`}
              alt="lively baby leaves"
            />
            <p className={historyPClassName}>
              The babyleaves grown in the vegetable garden are energetic.
            </p>
          </>
        ),
      },
      searchableText: {
        ja: "家庭菜園のベビーリーフは元気いっぱいです。",
        en: "The babyleaves grown in the vegetable garden are energetic.",
      },
    },
    {
      month: 12,
      content: {
        ja: (
          <>
            <HistoryDefaultImage
              src={`${amavinImagePath2021}12-10.webp`}
              alt="カバーを付けたブドウの木達画像"
            />
            <p className={historyPClassName}>
              ブドウの木達を寒さから守るためのカバーを付けました。
            </p>
          </>
        ),
        en: (
          <>
            <HistoryDefaultImage
              src={`${amavinImagePath2021}12-10.webp`}
              alt="grape trees with cover"
            />
            <p className={historyPClassName}>
              Put a cover around the grape trees to protect them for the coming
              winter.
            </p>
          </>
        ),
      },
      searchableText: {
        ja: "ブドウの木達を寒さから守るためのカバーを付けました。",
        en: "Put a cover around the grape trees to protect them for the coming winter.",
      },
    },
  ],
  2022: [
    {
      month: 10,
      content: {
        ja: (
          <>
            <HistoryDefaultImage
              src={`${amavinImagePath2022}10-9.webp`}
              alt="落としたブドウ達画像"
            />
            <p className={historyPClassName}>
              ブドウ達を落とし、より成長させます。
            </p>
          </>
        ),
        en: (
          <>
            <HistoryDefaultImage
              src={`${amavinImagePath2022}10-9.webp`}
              alt="cut grapes image"
            />
            <p className={historyPClassName}>
              Cut grapes to make them grow more.
            </p>
          </>
        ),
      },
      searchableText: {
        ja: "ブドウ達を落とし、より成長させます。",
        en: "Cut grapes to make them grow more.",
      },
    },
  ],
  2023: [
    {
      month: 2,
      content: {
        ja: (
          <>
            <HistoryDefaultImage
              src={`${amavinImagePath2023}2-12.webp`}
              alt="雪が積もったヴィンヤード画像"
            />
            <p className={historyPClassName}>雪が積もりました。</p>
          </>
        ),
        en: (
          <>
            <HistoryDefaultImage
              src={`${amavinImagePath2023}2-12.webp`}
              alt="field covered with snow image"
            />
            <p className={historyPClassName}>Snow piled up on the field.</p>
          </>
        ),
      },
      searchableText: {
        ja: "雪が積もりました。",
        en: "Snow piled up on the field.",
      },
    },
    {
      month: 3,
      content: {
        ja: (
          <div className={historyMultiImageContainerClassName}>
            <HistoryDefaultImage
              src={`${amavinImagePath2023}3-15.webp`}
              alt="枝の断面から出る水滴画像"
            />
            <HistoryDefaultImage
              src={`${amavinImagePath2023}3-19.webp`}
              alt="頂上付近が雪に覆われる甲斐駒ヶ岳画像"
            />
            <p className={historyPClassName}>
              冬が終わり、ブドウ達が元気なことを示す水滴が出ています。
              <br />
              甲斐駒ヶ岳の上に雪がかぶり、とても綺麗です。
            </p>
          </div>
        ),
        en: (
          <div className={historyMultiImageContainerClassName}>
            <HistoryDefaultImage
              src={`${amavinImagePath2023}3-15.webp`}
              alt="water drop coming out of branch cross-section image"
            />
            <HistoryDefaultImage
              src={`${amavinImagePath2023}3-19.webp`}
              alt="Mt.Kaikomagatake with the top covered with snow image"
            />
            <p className={historyPClassName}>
              Winter is over. Water drop that shows grapes are alive is coming
              out of a branch cross-section.
              <br />
              Mt.Kaikomagatake with snow on top is very beatiful.
            </p>
          </div>
        ),
      },
      searchableText: {
        ja: "冬が終わり、ブドウ達が元気なことを示す水滴が出ています。甲斐駒ヶ岳の上に雪がかぶり、とても綺麗です。",
        en: "Winter is over. Water drop that shows grapes are alive is coming out of a branch cross-section. Mt.Kaikomagatake with snow on top is very beatiful.",
      },
    },
    {
      month: 7,
      content: {
        ja: (
          <>
            <HistoryDefaultImage
              src={`${amavinImagePath2023}7-14.webp`}
              alt="横になっているブドウの木画像"
            />
            <p className={historyPClassName}>
              成長したブドウの木達を横に倒し始めました。
            </p>
          </>
        ),
        en: (
          <>
            <HistoryDefaultImage
              src={`${amavinImagePath2023}7-14.webp`}
              alt="grape trees laid horizontally"
            />
            <p className={historyPClassName}>
              Laid the grown up grape trees horizontally.
            </p>
          </>
        ),
      },
      searchableText: {
        ja: "成長したブドウ達を横に倒し始めました。",
        en: "Laid the grown up grape trees horizontally.",
      },
    },
  ],
  2024: [
    {
      month: 2,
      content: {
        ja: (
          <>
            <HistoryDefaultImage
              src={`${amavinImagePath2024}2-7.webp`}
              alt="雪が積もったヴィンヤード画像"
            />
            <p className={historyPClassName}>
              ヴィンヤードに雪が積もりました。
            </p>
          </>
        ),
        en: (
          <>
            <HistoryDefaultImage
              src={`${amavinImagePath2024}2-7.webp`}
              alt="field covered with snow"
            />
            <p className={historyPClassName}>Snow piled up on the field.</p>
          </>
        ),
      },
      searchableText: {
        ja: "ヴィンヤードに雪が積もりました。",
        en: "Snow piled up on the field.",
      },
    },
    {
      month: 4,
      content: {
        ja: (
          <>
            <HistoryDefaultImage
              src={`${amavinImagePath2024}4-7.webp`}
              alt="saplings images"
            />
            <p className={historyPClassName}>○○と○○の苗木を○○本植えました。</p>
            <HistoryDefaultImage
              src={`${amavinImagePath2024}4-17.webp`}
              alt="branch image"
            />
            <p className={historyPClassName}>ブドウの枝を。</p>
            <HistoryDefaultImage
              src={`${amavinImagePath2024}4-29.webp`}
              alt="machines for filling bottles with wine image"
            />
            <HistoryDefaultImage
              src={`${amavinImagePath2024}4-29(2).webp`}
              alt="filled bottles image"
            />
            <p className={historyPClassName}>
              ○○年に収穫したブドウのワインの瓶詰を行いました。
            </p>
          </>
        ),
        en: (
          <>
            <HistoryDefaultImage
              src={`${amavinImagePath2024}4-7.webp`}
              alt="saplings images"
            />
            <p className={historyPClassName}>
              Planted 00 saplings of 00 and 00.
            </p>
            <HistoryDefaultImage
              src={`${amavinImagePath2024}4-17.webp`}
              alt="branch image"
            />
            <p className={historyPClassName}>Did 00 for the branches.</p>
            <HistoryDefaultImage
              src={`${amavinImagePath2024}4-29.webp`}
              alt="machines for filling bottles with wine image"
            />
            <HistoryDefaultImage
              src={`${amavinImagePath2024}4-29(2).webp`}
              alt="filled bottles image"
            />
            <p className={historyPClassName}>
              Filled wine made with the grapes harvested in 0000 fall.
            </p>
          </>
        ),
      },
      searchableText: {
        ja: "○○と○○の苗木を○○本植えました。ブドウの枝を。○○年に収穫したブドウのワインの瓶詰を行いました。",
        en: "Planted 00 saplings of 00 and 00. Did 00 for the branches.Filled wine made with the grapes harvested in 0000 fall.",
      },
    },
    {
      month: 5,
      content: {
        ja: (
          <>
            <HistoryDefaultImage
              src={`${amavinImagePath2024}5-31.webp`}
              alt="成長を続ける苗木画像"
            />
            <p className={historyPClassName}>
              ４月に植えた苗木がどんどん成長しています。
            </p>
          </>
        ),
        en: (
          <>
            <HistoryDefaultImage
              src={`${amavinImagePath2024}5-31.webp`}
              alt="growing saplings images"
            />
            <p className={historyPClassName}>
              The saplings planted this April have been growing lively.
            </p>
          </>
        ),
      },
      searchableText: {
        ja: "４月に植えた苗木がどんどん成長しています。",
        en: "The saplings planted this April have been growing lively.",
      },
    },
    {
      month: 6,
      content: {
        ja: (
          <>
            <HistoryDefaultImage
              src={`${amavinImagePath2024}6-28.webp`}
              alt="ワインが紹介されるフェイスブックの投稿画像"
            />
            <p className={historyPClassName}>
              北斗市市長の上村さんに、ワインを紹介していただきました。
            </p>
          </>
        ),
        en: (
          <>
            <HistoryDefaultImage
              src={`${amavinImagePath2024}6-28.webp`}
              alt="facebook introducing wine image"
            />
            <p className={historyPClassName}>
              The mayor of Hokuto city introduced our wine.
            </p>
          </>
        ),
      },
      searchableText: {
        ja: "北斗市市長の上村さんに、ワインを紹介していただきました。",
        en: "The mayor of Hokuto city introduced our wine.",
      },
    },
    {
      month: 7,
      content: {
        ja: (
          <>
            <HistoryDefaultImage
              src={`${amavinImagePath2024}7-15.webp`}
              alt="トラの置物とヴィンヤード画像"
            />
            <p className={historyPClassName}>
              サル除け？のための、トラの置物がやってきました
            </p>
            <HistoryDefaultImage
              src={`${amavinImagePath2024}7.webp`}
              alt="販売されているワイン画像"
            />
            <p className={historyPClassName}>
              新宿の伊勢丹さんで、ワインの販売を行いました。
            </p>
          </>
        ),
        en: (
          <>
            <HistoryDefaultImage
              src={`${amavinImagePath2024}7-15.webp`}
              alt="field with tiger object image"
            />
            <p className={historyPClassName}>
              The tiger object have came to our field to prevent monkey damage.
            </p>
            <HistoryDefaultImage
              src={`${amavinImagePath2024}7.webp`}
              alt="wine for sale image"
            />
            <p className={historyPClassName}>
              Sold our wine at the Isetan store at Shinjuku.
            </p>
          </>
        ),
      },
      searchableText: {
        ja: "サル除け？のための、トラの置物がやってきました。新宿の伊勢丹さんで、ワインの販売を行いました。",
        en: "The tiger object have came to our field to prevent monkey damage. Sold our wine at the Isetan store at Shinjuku.",
      },
    },
    {
      month: 8,
      content: {
        ja: (
          <>
            <HistoryDefaultImage
              src={`${amavinImagePath2024}8-4.webp`}
              alt="ブドウの実画像"
            />
            <p className={historyPClassName}>ブドウの実がなり始めました。</p>
            <HistoryDefaultImage
              src={`${amavinImagePath2024}8-29.webp`}
              alt="霧がかったヴィンヤード画像"
            />
            <p className={historyPClassName}>
              たまにヴィンヤードに霧がかかります。
            </p>
          </>
        ),
        en: (
          <>
            <div className={historyMultiImageContainerClassName}>
              <HistoryDefaultImage
                src={`${amavinImagePath2024}8-4.webp`}
                alt="grapes image"
              />
              <p className={historyPClassName}>
                The trees started having grapes.
              </p>
              <HistoryDefaultImage
                src={`${amavinImagePath2024}8-29.webp`}
                alt="foggy field image"
              />
            </div>
            <p className={historyPClassName}>
              Sometimes the field becomes foggy.
            </p>
          </>
        ),
      },
      searchableText: {
        ja: "ブドウの実がなり始めました。たまにヴィンヤードに霧がかかります。",
        en: "The trees started having grapes. Sometimes the field becomes foggy.",
      },
    },
    {
      month: 9,
      content: {
        ja: (
          <>
            <HistoryDefaultImage
              src={`${amavinImagePath2024}9-15.webp`}
              alt="鷹のオブジェクト画像"
            />
            <p className={historyPClassName}>
              ブドウを食べる鳥よけ？のための、鷹のオブジェクトかやってきました。
            </p>
          </>
        ),
        en: (
          <>
            <HistoryDefaultImage
              src={`${amavinImagePath2024}9-15.webp`}
              alt="eagle object image"
            />
            <p className={historyPClassName}>
              The eagle object has come to protect our field from bird
              damage?damage?
            </p>
          </>
        ),
      },
      searchableText: {
        ja: "ブドウを食べる鳥よけ？のための、鷹のオブジェクトかやってきました。",
        en: "  The eagle object has come to protect our field from bird damage?damage?",
      },
    },
    {
      month: 10,
      content: {
        ja: (
          <>
            <HistoryDefaultImage
              src={`${amavinImagePath2024}10-11.webp`}
              alt="ヴィンヤードとキラキラテープ画像"
            />
            <p className={historyPClassName}>
              ブドウを食べる鳥よけ？のためのキラキラテープを設置しました。
            </p>
            <HistoryDefaultImage
              src={`${amavinImagePath2024}10-21.webp`}
              alt="タンクに入ったブドウ画像"
            />
            <HistoryDefaultImage
              src={`${amavinImagePath2024}10-26.webp`}
              alt="ブドウの実が無くなったヴィンヤード画像"
            />
            <p className={historyPClassName}>
              ブドウの収穫を行いました。○○かご・計○○ kg収穫しました。
            </p>
          </>
        ),
        en: (
          <>
            <HistoryDefaultImage
              src={`${amavinImagePath2024}10-11.webp`}
              alt="glittering tape image"
            />
            <p className={historyPClassName}>
              Set up the glittering tape in the field to prevent bird damage.
            </p>
            <HistoryDefaultImage
              src={`${amavinImagePath2024}10-21.webp`}
              alt="harvested grapes in tank image"
            />
            <HistoryDefaultImage
              src={`${amavinImagePath2024}10-26.webp`}
              alt="field with no grapes left image"
            />
            <p className={historyPClassName}>
              Harvested grapes. We could harvest 00 cases, 00 kg in total.
            </p>
          </>
        ),
      },
      searchableText: {
        ja: "ブドウを食べる鳥よけ？のためのキラキラテープを設置しました。ブドウの収穫を行いました。○○個・計○○ kg収穫しました。",
        en: "Set up the glittering tape in the field to prevent bird damage. Harvested grapes. We could harvest 00 cases, 00 kg in total.",
      },
    },
    {
      month: 11,
      content: {
        ja: (
          <>
            <HistoryDefaultImage
              src={`${amavinImagePath2024}11-22.webp`}
              alt="カバーを付けたブドウの木達画像"
            />
            <p className={historyPClassName}>
              ブドウの木に寒さ除けのカバーを付けました。
            </p>
          </>
        ),
        en: (
          <>
            <HistoryDefaultImage
              src={`${amavinImagePath2024}11-22.webp`}
              alt="grape trees with cover image"
            />
            <p className={historyPClassName}>
              Put a cover around the grape trees to protect them from cold for
              the coming winter.
            </p>
          </>
        ),
      },
      searchableText: {
        ja: "ブドウの木に寒さ除けのカバーを付けました。",
        en: "Put a cover around the grape trees to protect them from cold for the coming winter.",
      },
    },
  ],
  2025: [
    {
      month: 1,
      content: {
        ja: (
          <>
            <HistoryDefaultImage
              src={`${amavinImagePath2025}1-3.webp`}
              alt="レンガでできた窯画像"
            />
            <p className={historyPClassName}>
              ヴィンヤードの入り口にレンガの窯を作りました。
            </p>
          </>
        ),
        en: (
          <>
            <HistoryDefaultImage
              src={`${amavinImagePath2025}1-3.webp`}
              alt="brick kiln image"
            />
            <p className={historyPClassName}>
              Built the brick klin at the entrance of the field.
            </p>
          </>
        ),
      },
      searchableText: {
        ja: "ヴィンヤードの入り口にレンガの窯を作りました。",
        en: "Built the brick klin at the entrance of the field.",
      },
    },
    {
      month: 2,
      content: {
        ja: (
          <>
            <HistoryDefaultImage
              src={`${amavinImagePath2025}2-9.webp`}
              alt="ワインが詰められたボトル画像"
            />
            <p className={historyPClassName}>
              去年？収穫したブドウのクレーレワインの瓶詰を行いました。
              <br />
              Kiyos CellerとArtisan Mariage
              Vineyardsのインスタグラムを作りました。？
            </p>
          </>
        ),
        en: (
          <>
            <HistoryDefaultImage
              src={`${amavinImagePath2025}2-9.webp`}
              alt="filled wine bottles image"
            />
            <p className={historyPClassName}>
              Filled clairet wine made with the grapes harvested last fall.
              <br />
              Made the Instagram accounts for Kiyos Celler and Artisan Mariage
              Vineyards?
            </p>
          </>
        ),
      },
      searchableText: {
        ja: "去年？収穫したブドウのクレーレワインの瓶詰を行いました。Kiyos CellerとArtisan Mariage Vineyardsのインスタグラムを作りました。？",
        en: "Filled clairet wine made with the grapes harvested last fall. Made the Instagram accounts for Kiyos Celler and Artisan Mariage Vineyards?",
      },
    },
    {
      month: 3,
      content: {
        ja: (
          <>
            <HistoryDefaultImage
              src={`${amavinImagePath2025}3-2.webp`}
              alt="神秘的な山々画像"
            />
            <p className={historyPClassName}>
              山々に光が当たり、山の端が連なって見えて幻想的です。{" "}
            </p>
            <HistoryDefaultImage
              src={`${amavinImagePath2025}3-8.webp`}
              alt="ラベルが張られたワイン画像"
            />
            <p className={historyPClassName}>
              クレーレワインにラベルを張りました。
            </p>
            <HistoryDefaultImage
              src={`${amavinImagePath2025}3-20.webp`}
              alt="雪が積もったヴィンヤード画像"
            />
            <p className={historyPClassName}>３月の後半に雪が積もりました。</p>
            <HistoryDefaultImage
              src={`${amavinImagePath2025}3-22.webp`}
              alt="残り僅かのワイン画像"
            />
            <p className={historyPClassName}>
              ○○さんで扱っていただいているワインが残り僅かとなっていて嬉しいです。
            </p>
            <HistoryDefaultImage
              src={`${amavinImagePath2025}3-30.webp`}
              alt="ブドウの枝 ? 画像"
            />
            <p className={historyPClassName}>枝の。。。</p>
          </>
        ),
        en: (
          <>
            <HistoryDefaultImage
              src={`${amavinImagePath2025}3-2.webp`}
              alt="mystical mountains image"
            />
            <p className={historyPClassName}>
              Light striking on the mountains and you can see each mountain
              layer stack one by one. It&apos;s mystical.
            </p>
            <HistoryDefaultImage
              src={`${amavinImagePath2025}3-8.webp`}
              alt="wine bottles with label image"
            />
            <p className={historyPClassName}>Put labels on clairet wines.</p>
            <HistoryDefaultImage
              src={`${amavinImagePath2025}3-20.webp`}
              alt="field covered with snow image"
            />
            <p className={historyPClassName}>
              Snow piled up on the field in the end of March.
            </p>
            <HistoryDefaultImage
              src={`${amavinImagePath2025}3-22.webp`}
              alt="little wines left image"
            />
            <p className={historyPClassName}>
              Our remaining wine in 00 shop are low on stock. We&apos;re happy
              about it.
            </p>
            <HistoryDefaultImage
              src={`${amavinImagePath2025}3-30.webp`}
              alt="grape trees ? image"
            />
            <p className={historyPClassName}>Did branch 0000</p>
          </>
        ),
      },
      searchableText: {
        ja: " 山々に光が当たり、山の端が連なって見えて幻想的です。クレーレワインにラベルを張りました。３月の後半に雪が積もりました。○○さんで扱っていただいているワインが残り僅かとなっていて嬉しいです。枝の。。。",
        en: "Light striking on the mountains and you can see each mountain layer stack one by one. It's mystical. Put labels on clairet wines. Snow piled up on the field in the end of March. Our remaining wine in 00 shop are low on stock. We're happy about it. Snow piled up on the field in the end of March. Did branch 0000 ",
      },
    },
    {
      month: 4,
      content: {
        ja: (
          <>
            <HistoryDefaultImage
              src={`${amavinImagePath2025}4-5.webp`}
              alt="苗木画像"
            />
            <p className={historyPClassName}>
              今年も新たに○○の苗木を○○本植えました。
            </p>
            <HistoryDefaultImage
              src={`${amavinImagePath2025}4-12.webp`}
              alt="枝の断面から出る水滴画像"
            />
            <p className={historyPClassName}>
              冬が終わり、ブドウ達が元気なことを示す水滴が出ています。
            </p>
            <HistoryDefaultImage
              src={`${amavinImagePath2025}4-13.webp`}
              alt="枝の剪定画像"
            />
            <p className={historyPClassName}>枝の剪定？を行いました。</p>
            <HistoryDefaultImage
              src={`${amavinImagePath2025}4-20.webp`}
              alt="固定した枝画像"
            />
            <p className={historyPClassName}>
              枝をワイヤーに紐で固定しました。
            </p>
            <HistoryDefaultImage
              src={`${amavinImagePath2025}4-26.webp`}
              alt="枝から出る芽画像"
            />
            <p className={historyPClassName}>
              春になり、ブドウ達の芽が出始めました。
            </p>
          </>
        ),
        en: (
          <>
            <HistoryDefaultImage
              src={`${amavinImagePath2025}4-5.webp`}
              alt="saplings image"
            />
            <p className={historyPClassName}>
              Planted new 00 saplings of 00 this year too.
            </p>
            <HistoryDefaultImage
              src={`${amavinImagePath2025}4-12.webp`}
              alt="water drop coming out of branch image"
            />
            <p className={historyPClassName}>
              Winter is over. Water drop that shows the grapes are alive is
              coming out of the branch cross-section.
            </p>
            <HistoryDefaultImage
              src={`${amavinImagePath2025}4-13.webp`}
              alt="cutting branch image"
            />
            <p className={historyPClassName}>Trimmed branches?</p>
            <HistoryDefaultImage
              src={`${amavinImagePath2025}4-20.webp`}
              alt="fixed branches image"
            />
            <p className={historyPClassName}>Fixed branches to the wire.</p>
            <HistoryDefaultImage
              src={`${amavinImagePath2025}4-26.webp`}
              alt="branches with buds image"
            />
            <p className={historyPClassName}>
              Spring has come. The branches started having buds.
            </p>
          </>
        ),
      },
      searchableText: {
        ja: " 今年も新たに○○の苗木を○○本植えました。冬が終わり、ブドウ達が元気なことを示す水滴が出ています。枝の剪定？を行いました。枝をワイヤーに紐で固定しました。春になり、ブドウ達の芽が出始めました。",
        en: "Planted new 00 saplings of 00 this year too.  Winter is over. Water drop that shows the grapes are alive is coming out of the branch cross-section. Trimmed branches? Fixed branches to the wire.Spring has come. The branches started having buds.",
      },
    },
    {
      month: 5,
      content: {
        ja: (
          <>
            <HistoryDefaultImage
              src={`${amavinImagePath2025}5-31.webp`}
              alt="霧がかっているヴィンヤード画像"
            />
            <p className={historyPClassName}>
              ヴィンヤードが霧がかっています。
            </p>
          </>
        ),
        en: (
          <>
            <HistoryDefaultImage
              src={`${amavinImagePath2025}5-31.webp`}
              alt="foggy field image"
            />
            <p className={historyPClassName}>The field is foggy.</p>
          </>
        ),
      },
      searchableText: {
        ja: "ヴィンヤードが霧がかっています。",
        en: "The field is foggy.",
      },
    },
    {
      month: 6,
      content: {
        ja: (
          <>
            <HistoryDefaultImage
              src={`${amavinImagePath2025}6-14.webp`}
              alt="ブドウの房と小さい実画像"
            />
            <p className={historyPClassName}>
              ブドウの房ができはじめ、小さい実がなっています。
            </p>
          </>
        ),
        en: (
          <>
            <HistoryDefaultImage
              src={`${amavinImagePath2025}6-14.webp`}
              alt="grape bunches with small fruits"
            />
            <p className={historyPClassName}>
              Grape bunches have started growing and they have small fruits.
            </p>
          </>
        ),
      },
      searchableText: {
        ja: "ブドウの房ができはじめ、小さい実がなっています。",
        en: "Grape bunches have started growing and they have small fruits.",
      },
    },
    {
      month: 7,
      content: {
        ja: (
          <>
            <HistoryDefaultImage
              src={`${amavinImagePath2025}7-5.webp`}
              alt="ブドウの木にできた鳥の巣と卵画像"
            />
            <p>ブドウの木に鳥の巣と卵を見つけました。無事に育ちますように。</p>
            <HistoryDefaultImage
              src={`${amavinImagePath2025}7-13.webp`}
              alt="レインガードが付けられたヴィンヤード画像"
            />
            <p>レインガードを取り付けました。</p>
            <HistoryDefaultImage
              src={`${amavinImagePath2025}7-14.webp`}
              alt="販売されているワイン画像"
            />
            <p>
              新宿の伊勢丹さんで、去年できた？ワインと今年できたクレーレワインを販売しました。
            </p>
            <HistoryDefaultImage
              src={`${amavinImagePath2025}7-27.webp`}
              alt="大きくなってきているブドウの実画像"
            />
            <p>ブドウの実が大きくなってきました。</p>
          </>
        ),
        en: (
          <>
            <HistoryDefaultImage
              src={`${amavinImagePath2025}7-5.webp`}
              alt="bird nest and eggs created on grape tree image"
            />
            <p>
              Found the bird nest and the eggs on the grape tree. We hope they
              will grow safely.
            </p>
            <HistoryDefaultImage
              src={`${amavinImagePath2025}7-13.webp`}
              alt="field with rain cover image"
            />
            <p>Set up the rain cover.</p>
            <HistoryDefaultImage
              src={`${amavinImagePath2025}7-14.webp`}
              alt="wine for sale image"
            />
            <p>
              Sold our wine created last year and our clairet wine created this
              year at the Isetan store at Shinjuku.
            </p>
            <HistoryDefaultImage
              src={`${amavinImagePath2025}7-27.webp`}
              alt="growing grape fruits image"
            />
            <p>The grape fruits have been getting bigger.</p>
          </>
        ),
      },
      searchableText: {
        ja: "ブドウの木に鳥の巣と卵を見つけました。無事に育ちますように。 レインガードを取り付けました。 新宿の伊勢丹さんで、去年できた？ワインと今年できたクレーレワインを販売しました。 ブドウの実が大きくなってきました。",
        en: "Found the bird nest and the eggs on the grape tree. We hope they will grow safely. Set up the rain cover. Sold our wine created last year and our clairet wine created this year at the Isetan store at Shinjuku. The grape fruits have been getting bigger.",
      },
    },
    {
      month: 8,
      content: {
        ja: (
          <>
            <HistoryDefaultImage
              src={`${amavinImagePath2025}8-7.webp`}
              alt="販売されているワイン画像"
            />
            <p className={historyPClassName}>
              ００さんで、今年作られたクレーレワインの発売をしていただきました。
            </p>
            <HistoryDefaultImage
              src={`${amavinImagePath2025}8-11.webp`}
              alt="成長しているブドウの実画像"
            />
            <p className={historyPClassName}>
              ブドウの実が更に大きくなっています。
            </p>
            <HistoryDefaultImage
              src={`${amavinImagePath2025}8-23.webp`}
              alt="防鳥ネットを付けたヴィンヤード画像"
            />
            <p className={historyPClassName}>
              鳥害対策のために、防鳥ネットを付けました。
            </p>
          </>
        ),
        en: (
          <>
            <HistoryDefaultImage
              src={`${amavinImagePath2025}8-7.webp`}
              alt="wine for sale image"
            />
            <p className={historyPClassName}>
              00 started selling our clairet wine created this year.
            </p>
            <HistoryDefaultImage
              src={`${amavinImagePath2025}8-11.webp`}
              alt="growing grape fruits image"
            />
            <p className={historyPClassName}>
              The grape fruits have been getting even bigger.
            </p>
            <HistoryDefaultImage
              src={`${amavinImagePath2025}8-23.webp`}
              alt="field with bird net image"
            />
            <p className={historyPClassName}>
              Set up bird nets for bird damage.
            </p>
          </>
        ),
      },
      searchableText: {
        ja: "００さんで、今年作られたクレーレワインの発売をしていただきました。 ブドウの実が更に大きくなっています。 鳥害対策のために、防鳥ネットを付けました。",
        en: "00 started selling our clairet wine created this year. The grape fruits have been getting even bigger. Set up bird nets for bird damage.",
      },
    },
    {
      month: 9,
      content: {
        ja: (
          <>
            <HistoryDefaultImage
              src={`${amavinImagePath2025}9-13.webp`}
              alt="音を出す機械画像"
            />
            <p className={historyPClassName}>
              様々な動物による害を防ぐための音を出す機械がヴィンヤードにやってきました。
            </p>
          </>
        ),
        en: (
          <>
            <HistoryDefaultImage
              src={`${amavinImagePath2025}9-13.webp`}
              alt="machine that makes sounds image"
            />
            <p className={historyPClassName}>
              The machine that makes sounds to prevent animal damage have come
              to our field.
            </p>
          </>
        ),
      },
      searchableText: {
        ja: "様々な動物による害を防ぐための音を出す機械がヴィンヤードにやってきました。",
        en: "The machine that makes sounds to prevent animal damage have come to our field.",
      },
    },
    {
      month: 10,
      content: {
        ja: (
          <>
            <HistoryDefaultImage
              src={`${amavinImagePath2025}10-11.webp`}
              alt="ブドウの収穫をしている画像"
            />
            <p className={historyPClassName}>
              ブドウの収穫を２週に分けて行いました。
            </p>
            <HistoryDefaultImage
              src={`${amavinImagePath2025}10-13.webp`}
              alt="タンク画像"
            />
            <p className={historyPClassName}>
              今年は５００Ｌ？のタンクを２つ購入しました。
            </p>
            <HistoryDefaultImage
              src={`${amavinImagePath2025}10-13(2).webp`}
              alt="タンクの横でブドウを持つ代表画像"
            />
            <p className={historyPClassName}>グルナッシュのG！</p>
            <HistoryDefaultImage
              src={`${amavinImagePath2025}10-13(3).webp`}
              alt="タンクに入ったブドウ達画像"
            />
            <p className={historyPClassName}>
              ００と００が００かごずつ、計００ｋｇ収穫しました。ご協力いただいた皆さん、ありがとうございました。
            </p>
          </>
        ),
        en: (
          <>
            <HistoryDefaultImage
              src={`${amavinImagePath2025}10-11.webp`}
              alt="harvesting grapes image"
            />
            <p className={historyPClassName}>
              Harvested grapes for 2 consecutive weekends.
            </p>
            <HistoryDefaultImage
              src={`${amavinImagePath2025}10-13.webp`}
              alt="tanks image"
            />
            <p className={historyPClassName}>
              Purchanged two 500L tanks this year.
            </p>
            <HistoryDefaultImage
              src={`${amavinImagePath2025}10-13(2).webp`}
              alt="representative holding a bunch of grape next to tank image"
            />
            <p className={historyPClassName}>G for grenache!</p>
            <HistoryDefaultImage
              src={`${amavinImagePath2025}10-13(3).webp`}
              alt="grapes in tank image"
            />
            <p className={historyPClassName}>
              Harvested 00 cases for each 00 and 00, 00 kg in total. Thank you
              very much people who helped the harvest.
            </p>
          </>
        ),
      },
      searchableText: {
        ja: "ブドウの収穫を２週に分けて行いました。 今年は５００Ｌ？のタンクを２つ購入しました。 グルナッシュのG！ ００と００が００かごずつ、計００ｋｇ収穫しました。ご協力いただいた皆さん、ありがとうございました。",
        en: "Harvested grapes for 2 consecutive weekends. Purchanged two 500L tanks this year. Harvested 00 cases for 00 and 00 each, 00 kg in total. Thank you very much people who helped the harvest.",
      },
    },
    {
      month: 11,
      content: {
        ja: (
          <>
            <HistoryDefaultImage
              src={`${amavinImagePath2025}11-9.webp`}
              alt="絞られた後のブドウの皮と房画像"
            />
            <HistoryDefaultImage
              src={`${amavinImagePath2025}11-9(2).webp`}
              alt="ヴィンヤードに撒かれたブドウの搾りかす画像"
            />
            <p className={historyPClassName}>
              １０月に収穫し置いてあった？ブドウを絞りました。搾りかすはヴィンヤードに返しました。
            </p>
            <HistoryDefaultImage
              src={`${amavinImagePath2025}11.webp`}
              alt="グラスに入ったワイン画像"
            />
            <HistoryDefaultImage
              src={`${amavinImagePath2025}11-22.webp`}
              alt="瓶詰めされたワイン画像"
            />
            <p className={historyPClassName}>
              ００年に収穫し寝かせていたワインの瓶詰を行いました。
            </p>
          </>
        ),
        en: (
          <>
            <HistoryDefaultImage
              src={`${amavinImagePath2025}11-9.webp`}
              alt="grape skins and bunches after being pressed image"
            />
            <HistoryDefaultImage
              src={`${amavinImagePath2025}11-9(2).webp`}
              alt="spread pomace in vineyard image"
            />
            <p className={historyPClassName}>
              Pressed the grapes harvested in this October and stored. The
              pomace was returned to the vineyard.
            </p>
            <HistoryDefaultImage
              src={`${amavinImagePath2025}11.webp`}
              alt="wine in glass image"
            />
            <HistoryDefaultImage
              src={`${amavinImagePath2025}11-22.webp`}
              alt="filled wine bottles image"
            />
            <p className={historyPClassName}>
              Filled the wine made with the grapes harvested in 00 fall and
              aged.
            </p>
          </>
        ),
      },
      searchableText: {
        ja: "１０月に収穫し置いてあった？ブドウを絞りました。搾りかすはヴィンヤードに返しました。 ００年に収穫し寝かせていたワインの瓶詰を行いました。",
        en: "Pressed the grapes harvested in this October and stored. The pomace was returned to the vineyard. Filled the wine made with the grapes harvested in 00 fall and aged.",
      },
    },
  ],
};

export const historyAmavinForSearch = getHistoryForSearch(historyAmavin, [
  "amavin",
]);
