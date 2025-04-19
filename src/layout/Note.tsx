import React from "react";
import { HoverBorderGradient } from "../components/ui/hover-border-gradient";
import { FaCode } from "react-icons/fa";

type HoverBorderGradientDemoProps = {
  text: string;
};

export function HoverBorderGradientDemo({ text }: HoverBorderGradientDemoProps) {
  return (
    <div className="flex justify-center text-center">
      <HoverBorderGradient
        containerClassName=""
        as="button"
        className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
      >
        <FaCode size={20} />
        <h2 className="text-sm font-bold">{text}</h2>
      </HoverBorderGradient>
    </div>
  );
}
