import Image from "next/image";
import TitleNavLable from "../components/TitleNavLable";
import TopBar from "../components/TopBar";
import { getGroupNameFromType } from "../helper";
import { TYPE_GROUP } from "../type";
import { amavinHistory, kiyosHistory } from "../models/history";
import Footer from "../components/Footer";

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
      <div className="w-full h-fit pb-14">
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
      <Footer />
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
  const history = type === "kiyos" ? kiyosHistory : amavinHistory;
  const historyEntriesArr = Object.entries(history);

  console.log(Object.entries(history));

  const isEvenNumber = (number: number) => number % 2 === 0;
  return (
    <div className={containerClassName}>
      <h1 className={`${smallHeaderClassName} mb-2`}>
        {getGroupNameFromType(type)}
      </h1>
      {historyEntriesArr.map((yearArr, i) => {
        const isEven = isEvenNumber(i);
        const [year, monthsArr] = yearArr;
        return (
          <div key={i} className="w-full h-fit flex flex-col items-center">
            <div
              className={`relative w-[85%] h-fit flex flex-row text-[22px] justify-center py-[1%]
            ${
              isEven
                ? "bg-amber-300/50 hover:bg-amber-300/80"
                : "bg-amber-600/50 hover:bg-amber-600/80"
            }`}
            >
              <span>{year}</span>
              <span className="absolute right-[5%]">+</span>
            </div>
            <div></div>
          </div>
        );
      })}
    </div>
  );
}
