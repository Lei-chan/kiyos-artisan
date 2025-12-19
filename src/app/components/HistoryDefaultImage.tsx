import Image from "next/image";

const width = 200;
const height = 150;

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
      width={width}
      height={height}
      className="w-auto h-auto object-contain"
    ></Image>
  );
}
