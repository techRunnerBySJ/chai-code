import React from "react";
import { FlipWords } from "../components/ui/flip-words";

export function FlipWordsDemo() {
  const words = ["Community", "Growth", "Learning", "Support"];

  return (
    <div className=" flex justify-center items-center px-4 w-full">
      <div className="text-3xl text-neutral-600 dark:text-neutral-400 font-extrabold">
        Consistency and
        <FlipWords words={words} />
      </div>
    </div>
  );
}
