import { Content } from "next/font/google";
import Image from "next/image";

const defaultImageWidth = 200;
const defaultImageHeight = 150;
const multiImageContainerClassName = "flex flex-col items-center gap-2";
const pClassName = "text-base mt-2";

function DefaultImage({ src, alt }: { src: string; alt: string }) {
  return (
    <Image
      src={src}
      alt={alt}
      width={defaultImageWidth}
      height={defaultImageHeight}
      className="w-auto h-auto object-contain"
    ></Image>
  );
}

export const kiyosHistory = {
  2025: [
    {
      month: 10,
      content: (
        <p className={pClassName}>
          Started collecting various wine from diffent countries.
        </p>
      ),
    },
    {
      month: 12,
      content: (
        <p className={pClassName}>
          Started selling wines through the online shop
        </p>
      ),
    },
  ],
};

const amavinImagePath = "/history/amavin/";
const amavinImagePath2019 = `${amavinImagePath}2019/`;
const amavinImagePath2020 = `${amavinImagePath}2020/`;
const amavinImagePath2021 = `${amavinImagePath}2021/`;
const amavinImagePath2022 = `${amavinImagePath}2022/`;
const amavinImagePath2023 = `${amavinImagePath}2023/`;
const amavinImagePath2024 = `${amavinImagePath}2024/`;
const amavinImagePath2025 = `${amavinImagePath}2025/`;

export const amavinHistory = {
  2019: [
    {
      month: 12,
      content: (
        <>
          <DefaultImage
            src={`${amavinImagePath2019}2019-12-16.webp`}
            alt="field image"
          />
          <p className={pClassName}>畑を借りて、初めてご対面。</p>
        </>
      ),
    },
  ],
  2020: [
    {
      month: 3,
      content: (
        <>
          <DefaultImage
            src={`${amavinImagePath2020}2020-3-16.webp`}
            alt="mowed field image"
          />
          <p className={pClassName}>畑の草刈りをしました。</p>
        </>
      ),
    },
    {
      month: 5,
      content: (
        <>
          <DefaultImage
            src={`${amavinImagePath2020}2020-5.webp`}
            alt="mowed field image"
          />
          <p className={pClassName}>畑の草刈りをしました。</p>
        </>
      ),
    },
  ],
  2021: [
    {
      month: 4,
      content: (
        <div className={multiImageContainerClassName}>
          <DefaultImage
            src={`${amavinImagePath2021}2021-4-6.webp`}
            alt="field with poles image"
          ></DefaultImage>
          <DefaultImage
            src={`${amavinImagePath2021}2021-4-6(2).webp`}
            alt="saplings image"
          />
          <p className={pClassName}>
            支柱が立ちました。
            <br />
            ○○と○○の苗木を○○本植えました。
          </p>
        </div>
      ),
    },
    {
      month: 6,
      content: (
        <div className={multiImageContainerClassName}>
          <DefaultImage
            src={`${amavinImagePath2021}2021-6-20.webp`}
            alt="growings saplings with leaves image"
          />
          <DefaultImage
            src={`${amavinImagePath2021}2021-6-30.webp`}
            alt="pheasant image"
          />
          <p className={pClassName}>
            苗木がすくすく成長して、葉ができ始めました。
            <br />
            きじを発見しました。
          </p>
        </div>
      ),
    },
    {
      month: 7,
      content: (
        <div className={multiImageContainerClassName}>
          <DefaultImage
            src={`${amavinImagePath2021}2021-7-14.webp`}
            alt="field with run wire"
          />
          <DefaultImage
            src={`${amavinImagePath2021}2021-7-31.webp`}
            alt="growing grape trees image"
          />
          <p className={pClassName}>
            支柱の一番下の段にワイヤーを張りました。
            <br />
            ブドウ達はすくすく成長しています。
          </p>
        </div>
      ),
    },
    {
      month: 8,
      content: (
        <>
          <DefaultImage
            src={`${amavinImagePath2021}2021-8-25.webp`}
            alt="tree with grapes"
          />
          <p className={pClassName}>木にブドウがなり始めました。</p>
        </>
      ),
    },
    {
      month: 9,
      content: (
        <>
          <DefaultImage
            src={`${amavinImagePath2021}2021-9-12.webp`}
            alt="vegetable garden image"
          />
          <p className={pClassName}>
            空いているスペースで家庭菜園を始めました。
          </p>
        </>
      ),
    },
    {
      month: 10,
      content: (
        <>
          <DefaultImage
            src={`${amavinImagePath2021}2021-10-8.webp`}
            alt="lively baby leaves"
          />
          <p className={pClassName}>
            家庭菜園のベビーリーフは元気いっぱいです。
          </p>
        </>
      ),
    },
    {
      month: 12,
      content: (
        <>
          <DefaultImage
            src={`${amavinImagePath2021}2021-12-10.webp`}
            alt="grape trees with cover"
          />
          <p className={pClassName}>
            ブドウの木達を寒さから守るためのカバーを付けました。
          </p>
        </>
      ),
    },
  ],
  2022: [
    {
      month: 10,
      content: (
        <>
          <DefaultImage
            src={`${amavinImagePath2022}2022-10-9.webp`}
            alt="cut grapes image"
          />
          <p className={pClassName}>ブドウ達を落とし、より成長させます。</p>
        </>
      ),
    },
  ],
  2023: [
    {
      month: 2,
      content: (
        <>
          <DefaultImage
            src={`${amavinImagePath2023}2023-2-12.webp`}
            alt="field covered with snow image"
          />
          <p className={pClassName}>雪が積もりました。</p>
        </>
      ),
    },
    {
      month: 3,
      content: (
        <div className={multiImageContainerClassName}>
          <DefaultImage
            src={`${amavinImagePath2023}2023-3-15.webp`}
            alt="branch with water drop image"
          />
          <DefaultImage
            src={`${amavinImagePath2023}2023-3-19.webp`}
            alt="Mt.Kaikoma covered with snow at the top image"
          />
          <p className={pClassName}>
            冬が終わり、ブドウ達が元気なことを示す水滴が出ています。
            <br />
            甲斐駒ヶ岳の上に雪がかぶり、とても綺麗です。
          </p>
        </div>
      ),
    },
    {
      month: 7,
      content: (
        <>
          <DefaultImage
            src={`${amavinImagePath2023}2023-7-14.webp`}
            alt="grape trees laid horizontally"
          />
          <p className={pClassName}>成長したブドウ達を横に倒し始めました。</p>
        </>
      ),
    },
  ],
  2024: [
    {
      month: 2,
      content: (
        <>
          <DefaultImage
            src={`${amavinImagePath2024}2024-2-7.webp`}
            alt="field covered with snow"
          />
          <p className={pClassName}>畑に雪が積もりました。</p>
        </>
      ),
    },
  ],
  2025: [],
};
