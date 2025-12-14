import Image from "next/image";

export default function KiyosContact() {
  return (
    <>
      <p>
        〒000-0000
        <br />
        東京都府中市20-1-1
      </p>
      <div className="w-fit h-fit flex flex-row gap-[2%] items-start leading-tight">
        <Image
          src="/icons/email.svg"
          alt="email icon"
          width={15}
          height={15}
          className="mt-[2%]"
        ></Image>
        <p className="break-all">artisanmariagevineyards@gmail.com</p>
      </div>
    </>
  );
}
