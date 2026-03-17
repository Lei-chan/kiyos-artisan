import Image from "next/image";

export default function HistoryDefaultImage({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  return (
    <Image
      src={src}
      alt={alt}
      width={400}
      height={300}
      className="w-[300px] lg:w-[400px] object-contain mt-2"
    ></Image>
  );
}
