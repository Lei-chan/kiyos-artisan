//next.js
import Image from "next/image";

export default function Loading() {
  return (
    <div className="fixed left-0 top-0 z-[100] w-full h-screen bg-green-400 flex flex-col items-center justify-center pointer-events-none">
      <Image
        src="/icons/ladybug.svg"
        alt="ladybug icon"
        width={45}
        height={45}
        className={"transition-all  animate-wiggle"}
      ></Image>
    </div>
  );
}
