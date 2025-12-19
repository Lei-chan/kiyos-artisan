"use client";
//react
import { RefObject, useEffect, useRef, useState } from "react";

//from here!!
export default function UpArrow({
  ref,
}: {
  ref: RefObject<HTMLDivElement | null>;
}) {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [isDisplayed, setIsDisplayed] = useState(false);

  useEffect(() => {
    if (!ref?.current) return;

    const observer = new IntersectionObserver(
      (entry) => {
        if (entry[0].isIntersecting) setIsDisplayed(true);
      },
      {
        threshold: 0.1,
      }
    );
    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [ref]);

  return (
    isDisplayed && (
      <button
        ref={buttonRef}
        className="fixed w-[8%] h-auto aspect-square bg-[url('/icons/up-arrow.svg')] bg-center bg-no-repeat bg-contain right-[2%] bottom-[2%]"
      ></button>
    )
  );
}
