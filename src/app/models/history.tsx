import Image from "next/image";

const defaultImageWidth = 200;
const defaultImageHeight = 150;

function DefaultImage({ src, alt }: { src: string; alt: string }) {
  return (
    <Image
      src={src}
      alt={alt}
      width={defaultImageWidth}
      height={defaultImageHeight}
    ></Image>
  );
}

export const kiyosHistory = {
  2025: [
    {
      month: 10,
      content: <p>Started collecting various wine from diffent countries.</p>,
    },
    {
      month: 12,
      content: <p>Started selling wines through the online shop</p>,
    },
  ],
};

export const amavinHistory = {
  2019: [
    {
      month: 12,
      content: (
        <>
          <DefaultImage src="/history/2019-12-16.webp" alt="field image" />
          <p>畑を借りて、初めてご対面。</p>
        </>
      ),
    },
  ],
  2020: [
    {
      month: 3,
      content: (
        <>
          <DefaultImage src="/history/2020-3-16.webp" alt="mowed field image" />
          <p>畑の草刈りをしました。</p>
        </>
      ),
    },
    {
      month: 5,
      content: (
        <>
          <DefaultImage src="/history/2020-5.webp" alt="mowed field image" />
          <p>畑の草刈りをしました。</p>
        </>
      ),
    },
  ],
  2021: [
    {
      month: 4,
      content: (
        <div>
          <DefaultImage
            src="2021-4-6.webp"
            alt="field with poles"
          ></DefaultImage>
          <DefaultImage src="2021-4-6(2).webp" alt="saplings" />
          <p>
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
        <div>
          <DefaultImage
            src="/history/2021-6-20.webp"
            alt="growings saplings with leaves image"
          />
          <DefaultImage src="/history/2021-6-30.webp" alt="pheasant image" />
          <p>
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
        <div>
          <DefaultImage
            src="/history/2021-7-14.webp"
            alt="field with run wire"
          />
          <DefaultImage
            src="/history/2021-7-31"
            alt="growing grape trees image"
          />
          <p>
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
          <DefaultImage src="/history/2021-8-25.webp" alt="tree with grapes" />
          <p>木にブドウがなり始めました。</p>
        </>
      ),
    },
    {
      month: 9,
      content: (
        <>
          <DefaultImage
            src="/history/2021-9-12.webp"
            alt="vegetable garden image"
          />
          <p>空いているスペースで家庭菜園を始めました。</p>
        </>
      ),
    },
    {
      month: 10,
      content: (
        <>
          <DefaultImage
            src="/history/2021-10-8.webp"
            alt="lively baby leaves"
          />
          <p>家庭菜園のベビーリーフは元気いっぱいです。</p>
        </>
      ),
    },
    {
      month: 12,
      content: (
        <>
          <DefaultImage
            src="/history/2021-12-10.webp"
            alt="grape trees with cover"
          />
          <p>ブドウの木達を寒さから守るためのカバーを付けました。</p>
        </>
      ),
    },
  ],
  2022: [],
  2023: [],
  2024: [],
  2025: [],
};
