import HistoryDefaultImage from "@/app/[locale]/components/HistoryDefaultImage";
import { historyPClassName } from "@/app/config/styles";

const imagePath = "/history/amavin/2025/2025-";

// from here!!
const history2025 = {
  2025: [
    {
      month: 1,
      content: {
        ja: (
          <>
            <HistoryDefaultImage
              src={`${imagePath}1-3.webp`}
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
              src={`${imagePath}1-3.webp`}
              alt="brick kiln image"
            />
            <p className={historyPClassName}>
              Built the brick klin at the entrance of the vineyard.
            </p>
          </>
        ),
      },
      searchableText: {
        ja: "ヴィンヤードの入り口にレンガの窯を作りました。",
        en: "Built the brick klin at the entrance of the vineyard.",
      },
    },
    {
      month: 2,
      content: {
        ja: (
          <>
            <HistoryDefaultImage
              src={`${imagePath}2-9.webp`}
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
              src={`${imagePath}2-9.webp`}
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
              src={`${imagePath}3-2.webp`}
              alt="神秘的な山々画像"
            />
            <p className={historyPClassName}>
              山々に光が当たり、山の端が連なって見えて幻想的です。{" "}
            </p>
            <HistoryDefaultImage
              src={`${imagePath}3-8.webp`}
              alt="ラベルが張られたワイン画像"
            />
            <p className={historyPClassName}>
              クレーレワインにラベルを張りました。
            </p>
            <HistoryDefaultImage
              src={`${imagePath}3-20.webp`}
              alt="雪が積もったヴィンヤード画像"
            />
            <p className={historyPClassName}>３月の後半に雪が積もりました。</p>
            <HistoryDefaultImage
              src={`${imagePath}3-22.webp`}
              alt="残り僅かのワイン画像"
            />
            <p className={historyPClassName}>
              ○○さんで扱っていただいているワインが残り僅かとなっていて嬉しいです。
            </p>
            <HistoryDefaultImage
              src={`${imagePath}3-30.webp`}
              alt="ブドウの枝 ? 画像"
            />
            <p className={historyPClassName}>枝の。。。</p>
          </>
        ),
        en: (
          <>
            <HistoryDefaultImage
              src={`${imagePath}3-2.webp`}
              alt="mystical mountains image"
            />
            <p className={historyPClassName}>
              Light striking on the mountains and you can see each mountain
              layer stack one by one. It&apos;s mystical.
            </p>
            <HistoryDefaultImage
              src={`${imagePath}3-8.webp`}
              alt="wine bottles with label image"
            />
            <p className={historyPClassName}>Put labels on clairet wines.</p>
            <HistoryDefaultImage
              src={`${imagePath}3-20.webp`}
              alt="vineyard covered with snow image"
            />
            <p className={historyPClassName}>
              Snow piled up on the vineyard in the end of March.
            </p>
            <HistoryDefaultImage
              src={`${imagePath}3-22.webp`}
              alt="little wines left image"
            />
            <p className={historyPClassName}>
              Our remaining wine in 00 shop are low on stock. We&apos;re happy
              about it.
            </p>
            <HistoryDefaultImage
              src={`${imagePath}3-30.webp`}
              alt="grapevines ? image"
            />
            <p className={historyPClassName}>Did branch 0000</p>
          </>
        ),
      },
      searchableText: {
        ja: " 山々に光が当たり、山の端が連なって見えて幻想的です。クレーレワインにラベルを張りました。３月の後半に雪が積もりました。○○さんで扱っていただいているワインが残り僅かとなっていて嬉しいです。枝の。。。",
        en: "Light striking on the mountains and you can see each mountain layer stack one by one. It's mystical. Put labels on clairet wines. Snow piled up on the vineyard in the end of March. Our remaining wine in 00 shop are low on stock. We're happy about it. Snow piled up on the vineyard in the end of March. Did branch 0000 ",
      },
    },
    {
      month: 4,
      content: {
        ja: (
          <>
            <HistoryDefaultImage src={`${imagePath}4-5.webp`} alt="苗木画像" />
            <p className={historyPClassName}>
              今年も新たに○○の苗木を○○本植えました。
            </p>
            <HistoryDefaultImage
              src={`${imagePath}4-12.webp`}
              alt="枝の断面から出る水滴画像"
            />
            <p className={historyPClassName}>
              冬が終わり、ブドウ達が元気なことを示す水滴が出ています。
            </p>
            <HistoryDefaultImage
              src={`${imagePath}4-13.webp`}
              alt="枝の剪定画像"
            />
            <p className={historyPClassName}>枝の剪定？を行いました。</p>
            <HistoryDefaultImage
              src={`${imagePath}4-20.webp`}
              alt="固定した枝画像"
            />
            <p className={historyPClassName}>
              枝をワイヤーに紐で固定しました。
            </p>
            <HistoryDefaultImage
              src={`${imagePath}4-26.webp`}
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
              src={`${imagePath}4-5.webp`}
              alt="saplings image"
            />
            <p className={historyPClassName}>
              Planted new 00 saplings of 00 this year too.
            </p>
            <HistoryDefaultImage
              src={`${imagePath}4-12.webp`}
              alt="water drop coming out of branch image"
            />
            <p className={historyPClassName}>
              Winter is over. Water drop that shows the grapes are alive is
              coming out of the branch cross-section.
            </p>
            <HistoryDefaultImage
              src={`${imagePath}4-13.webp`}
              alt="cutting branch image"
            />
            <p className={historyPClassName}>Trimmed branches?</p>
            <HistoryDefaultImage
              src={`${imagePath}4-20.webp`}
              alt="fixed branches image"
            />
            <p className={historyPClassName}>Fixed branches to the wire.</p>
            <HistoryDefaultImage
              src={`${imagePath}4-26.webp`}
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
              src={`${imagePath}5-31.webp`}
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
              src={`${imagePath}5-31.webp`}
              alt="foggy vineyard image"
            />
            <p className={historyPClassName}>The vineyard is foggy.</p>
          </>
        ),
      },
      searchableText: {
        ja: "ヴィンヤードが霧がかっています。",
        en: "The vineyard is foggy.",
      },
    },
    {
      month: 6,
      content: {
        ja: (
          <>
            <HistoryDefaultImage
              src={`${imagePath}6-14.webp`}
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
              src={`${imagePath}6-14.webp`}
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
              src={`${imagePath}7-5.webp`}
              alt="ブドウの木にできた鳥の巣と卵画像"
            />
            <p>ブドウの木に鳥の巣と卵を見つけました。無事に育ちますように。</p>
            <HistoryDefaultImage
              src={`${imagePath}7-13.webp`}
              alt="レインガードが付けられたヴィンヤード画像"
            />
            <p>レインガードを取り付けました。</p>
            <HistoryDefaultImage
              src={`${imagePath}7-14.webp`}
              alt="販売されているワイン画像"
            />
            <p>
              新宿の伊勢丹さんで、去年できた？ワインと今年できたクレーレワインを販売しました。
            </p>
            <HistoryDefaultImage
              src={`${imagePath}7-27.webp`}
              alt="大きくなってきているブドウの実画像"
            />
            <p>ブドウの実が大きくなってきました。</p>
          </>
        ),
        en: (
          <>
            <HistoryDefaultImage
              src={`${imagePath}7-5.webp`}
              alt="bird nest and eggs created on grape tree image"
            />
            <p>
              Found the bird nest and the eggs on the grape tree. We hope they
              will grow safely.
            </p>
            <HistoryDefaultImage
              src={`${imagePath}7-13.webp`}
              alt="vineyard with rain cover image"
            />
            <p>Set up the rain cover.</p>
            <HistoryDefaultImage
              src={`${imagePath}7-14.webp`}
              alt="wine for sale image"
            />
            <p>
              Sold our wine created last year and our clairet wine created this
              year at the Isetan store at Shinjuku.
            </p>
            <HistoryDefaultImage
              src={`${imagePath}7-27.webp`}
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
              src={`${imagePath}8-7.webp`}
              alt="販売されているワイン画像"
            />
            <p className={historyPClassName}>
              ００さんで、今年作られたクレーレワインの発売をしていただきました。
            </p>
            <HistoryDefaultImage
              src={`${imagePath}8-11.webp`}
              alt="成長しているブドウの実画像"
            />
            <p className={historyPClassName}>
              ブドウの実が更に大きくなっています。
            </p>
            <HistoryDefaultImage
              src={`${imagePath}8-23.webp`}
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
              src={`${imagePath}8-7.webp`}
              alt="wine for sale image"
            />
            <p className={historyPClassName}>
              00 started selling our clairet wine created this year.
            </p>
            <HistoryDefaultImage
              src={`${imagePath}8-11.webp`}
              alt="growing grape fruits image"
            />
            <p className={historyPClassName}>
              The grape fruits have been getting even bigger.
            </p>
            <HistoryDefaultImage
              src={`${imagePath}8-23.webp`}
              alt="vineyard with bird net image"
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
              src={`${imagePath}9-13.webp`}
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
              src={`${imagePath}9-13.webp`}
              alt="machine that makes sounds image"
            />
            <p className={historyPClassName}>
              The machine that makes sounds to prevent animal damage have come
              to our vineyard.
            </p>
          </>
        ),
      },
      searchableText: {
        ja: "様々な動物による害を防ぐための音を出す機械がヴィンヤードにやってきました。",
        en: "The machine that makes sounds to prevent animal damage have come to our vineyard.",
      },
    },
    {
      month: 10,
      content: {
        ja: (
          <>
            <HistoryDefaultImage
              src={`${imagePath}10-11.webp`}
              alt="ブドウの収穫をしている画像"
            />
            <p className={historyPClassName}>
              ブドウの収穫を２週に分けて行いました。
            </p>
            <HistoryDefaultImage
              src={`${imagePath}10-13.webp`}
              alt="タンク画像"
            />
            <p className={historyPClassName}>
              今年は５００Ｌ？のタンクを２つ購入しました。
            </p>
            <HistoryDefaultImage
              src={`${imagePath}10-13(2).webp`}
              alt="タンクの横でブドウを持つ代表画像"
            />
            <p className={historyPClassName}>グルナッシュのG！</p>
            <HistoryDefaultImage
              src={`${imagePath}10-13(3).webp`}
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
              src={`${imagePath}10-11.webp`}
              alt="harvesting grapes image"
            />
            <p className={historyPClassName}>
              Harvested grapes for 2 consecutive weekends.
            </p>
            <HistoryDefaultImage
              src={`${imagePath}10-13.webp`}
              alt="tanks image"
            />
            <p className={historyPClassName}>
              Purchanged two 500L tanks this year.
            </p>
            <HistoryDefaultImage
              src={`${imagePath}10-13(2).webp`}
              alt="representative holding a bunch of grape next to tank image"
            />
            <p className={historyPClassName}>G for grenache!</p>
            <HistoryDefaultImage
              src={`${imagePath}10-13(3).webp`}
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
              src={`${imagePath}11-9.webp`}
              alt="絞られた後のブドウの皮と房画像"
            />
            <HistoryDefaultImage
              src={`${imagePath}11-9(2).webp`}
              alt="ヴィンヤードに撒かれたブドウの搾りかす画像"
            />
            <p className={historyPClassName}>
              １０月に収穫し置いてあった？ブドウを絞りました。搾りかすはヴィンヤードに返しました。
            </p>
            <HistoryDefaultImage
              src={`${imagePath}11.webp`}
              alt="グラスに入ったワイン画像"
            />
            <HistoryDefaultImage
              src={`${imagePath}11-22.webp`}
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
              src={`${imagePath}11-9.webp`}
              alt="grape skins and bunches after being pressed image"
            />
            <HistoryDefaultImage
              src={`${imagePath}11-9(2).webp`}
              alt="spread pomace in vineyard image"
            />
            <p className={historyPClassName}>
              Pressed the grapes harvested in this October and stored. The
              pomace was returned to the vineyard.
            </p>
            <HistoryDefaultImage
              src={`${imagePath}11.webp`}
              alt="wine in glass image"
            />
            <HistoryDefaultImage
              src={`${imagePath}11-22.webp`}
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
    {
      month: 12,
      content: {
        ja: (
          <>
            <HistoryDefaultImage
              src={`${imagePath}12-21.webp`}
              alt="レインガードが片付けられている途中のヴィンヤード"
            />
            <HistoryDefaultImage
              src={`${imagePath}12-28.webp`}
              alt="レインガードと防鳥ネットが片付けられている途中のヴィンヤード"
            />
            <HistoryDefaultImage
              src={`${imagePath}12-28(2).webp`}
              alt="レインガードと防鳥ネットが片付けられたヴィンヤード"
            />
            <p className={historyPClassName}>
              レインガードと防鳥ネットの片付けと手入れを行い、無事完了しました。
            </p>
          </>
        ),
        en: (
          <>
            <HistoryDefaultImage
              src={`${imagePath}12-21.webp`}
              alt="vineyard where the rain covers are being removed"
            />
            <HistoryDefaultImage
              src={`${imagePath}12-28.webp`}
              alt="vineyard where the rain covers and bird damage net are being removed"
            />
            <HistoryDefaultImage
              src={`${imagePath}12-28(2).webp`}
              alt="vineyard after the rain covers and the bird damage net were removed"
            />
            <p className={historyPClassName}>
              We finished removing and cleaning the vineyard&apos;s rain covers
              and bird damage net.
            </p>
          </>
        ),
      },
      searchableText: {
        ja: "レインガードと防鳥ネットの片付けと手入れを行い、無事完了しました。",
        en: "We finished removing and cleaning the vineyard's rain covers and bird damage net.",
      },
    },
  ],
};

export default history2025;
