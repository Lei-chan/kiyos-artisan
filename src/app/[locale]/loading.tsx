"use client";
//react
import { useEffect, useState } from "react";
//next.js
import Image from "next/image";

export default function Loading() {
  const numberOfMovements = 3;
  const moveClassNames = [
    "translate-x-60 translate-y-80 -rotate-[50deg]",
    "translate-x-32 translate-y-60 rotate-45",
    "translate-x-48 translate-y-48 -rotate-[50deg]",
    "translate-x-12 translate-y-32 -rotate-[50deg]",
  ];
  const [move, setMove] = useState(0);

  useEffect(() => {
    setTimeout(() => setMove((prev) => prev + 1), 0);

    const id = setInterval(() => {
      setMove((prev) => (prev === numberOfMovements ? 0 : prev + 1));
    }, 1000);

    return () => clearInterval(id);
  }, []);

  return (
    <div className="fixed left-0 top-0 z-[100] w-full h-screen bg-green-400 flex flex-col items-center justify-center pointer-events-none">
      <div className="w-full min-[400px]:w-[80%] md:w-[45%] lg:w-[30%] xl:w-[25%] 2xl:w-[15%] h-full lg:h-[85%] xl:h-[70%] 2xl:h-[50%]">
        <Image
          src="/icons/ladybug.svg"
          alt="ladybug icon"
          width={50}
          height={50}
          className={`transform duration-1000 ease-linear ${
            move === 0 ? "transition-none" : "transition-all"
          } ${moveClassNames[move]}`}
        ></Image>
      </div>
    </div>
  );
}
