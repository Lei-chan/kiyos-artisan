"use client";
//react
import { useEffect, useRef, useState } from "react";

export default function UpArrow() {
  const screenRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [isDisplayed, setIsDisplayed] = useState(false);

  //display the up arrow button when a user scrolls down the size of the button
  useEffect(() => {
    const handleDisplayButton = () => {
      const target = buttonRef.current;
      if (!target) return;

      setIsDisplayed(window.scrollY >= target.offsetHeight);
    };

    handleDisplayButton();

    window.addEventListener("scroll", handleDisplayButton);

    return () => window.removeEventListener("scroll", handleDisplayButton);
  }, []);

  function handleClickArrow() {
    const target = screenRef.current;
    if (!target) return;

    target.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <>
      <div
        ref={screenRef}
        className="absolute w-full h-screen top-0 left-0 -z-50"
      ></div>
      <button
        ref={buttonRef}
        className={`fixed w-8 sm:w-11 2xl:w-14 h-auto aspect-square bg-[url('/icons/up-arrow.svg')] bg-center bg-no-repeat bg-contain right-[2%] bottom-[2%] ${
          isDisplayed ? "opacity-100" : "opacity-0"
        }`}
        onClick={handleClickArrow}
      ></button>
    </>
  );
}
