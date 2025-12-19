import Image from "next/image";

export default function AmavinContact() {
  return (
    <>
      <p>
        〒000-0000
        <br />
        山梨県北杜市明野町
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
