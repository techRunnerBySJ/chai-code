import React from "react";
import { HoverBorderGradient } from "../components/ui/hover-border-gradient";
import { FaShoppingCart } from "react-icons/fa";

export function InfoAndCtaButton() {
  return (
    <div className="flex justify-center text-center w-full">
      <HoverBorderGradient
        containerClassName="rounded-md w-full"
        as="button"
        className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2 w-full justify-center"
      >
        <FaShoppingCart className="h-4 w-4" />
        <span>BUY NOW</span>
      </HoverBorderGradient>
    </div>
  );
}
