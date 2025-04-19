import React from "react";
import { HoverBorderGradient } from "../components/ui/hover-border-gradient";
import { FaCode } from "react-icons/fa";
import { motion } from "framer-motion";

type HoverBorderGradientDemoProps = {
  text: string;
  ariaLabel?: string;
};

export function HoverBorderGradientDemo({ text, ariaLabel }: HoverBorderGradientDemoProps) {
  return (
    <motion.div 
      className="flex justify-center text-center w-full sm:w-auto"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <HoverBorderGradient
        containerClassName="w-full sm:w-auto"
        as="button"
        className="dark:bg-black bg-white text-black dark:text-white flex items-center justify-center space-x-2 px-4 py-2 sm:px-6 sm:py-3 rounded-lg"
        aria-label={ariaLabel || text}
        role="button"
        tabIndex={0}
      >
        <FaCode 
          size={20} 
          className="text-black-500 dark:text-black-400"
          aria-hidden="true"
        />
        <h2 
          className="text-sm sm:text-base font-bold"
          aria-hidden="true"
        >
          {text}
        </h2>
      </HoverBorderGradient>
    </motion.div>
  );
}
