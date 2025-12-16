import TitleNavLable from "../components/TitleNavLable";
import TopBar from "../components/TopBar";
import { getGroupNameFromType } from "../helper";
import { TYPE_GROUP } from "../type";

export default function History() {
  const smallHeaderClassName = "text-lg text-orange-800 font-bold";
  const containerClassName =
    "w-full h-fit flex flex-col items-center mt-9 scroll-mt-4";

  return (
    <div className="w-screen min-h-screen max-h-fit  bg-yellow-100/50 text-center">
      <TopBar />
      <TitleNavLable
        type="history"
        bgImageStyle="bg-[url('/mountains-from-field.webp')]"
      />
      <GroupHistory
        type="kiyos"
        smallHeaderClassName={smallHeaderClassName}
        containerClassName={containerClassName}
      />
      <GroupHistory
        type="amavin"
        smallHeaderClassName={smallHeaderClassName}
        containerClassName={containerClassName}
      />
    </div>
  );
}

function GroupHistory({
  type,
  smallHeaderClassName,
  containerClassName,
}: {
  type: TYPE_GROUP;
  smallHeaderClassName: string;
  containerClassName: string;
}) {
  return (
    <div className={containerClassName}>
      <h1 className={smallHeaderClassName}>{getGroupNameFromType(type)}</h1>
    </div>
  );
}

const kiyosHistory = {
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

const amavinHistory = {
  2019: [],
  2020: [],
  2021: [],
  2022: [],
  2023: [],
  2024: [],
  2025: [],
};
