"use client";
import { TypewriterEffectSmooth } from "../components/ui/typewriter-effect";
import { HoverBorderGradientDemo } from "./Note";

function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: "Join",
    },
    {
      text: "our",
    },
    {
      text: "community",
    },
    {
      text: "where",
    },
    {
      text: "creativity thrives.",
      className: "text-orange-500 dark:text-orange-500",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[20rem]  ">
      {/* <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base  ">
        The road to become a skilled coder starts from here
      </p> */}
      <TypewriterEffectSmooth words={words} />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
        <HoverBorderGradientDemo text="80,000+ Active Coders on Discord"/>
      </div>
    </div>
  );
}

export default TypewriterEffectSmoothDemo;
