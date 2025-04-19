"use client";

import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import React from "react";

export const HeroHighlight = ({
  children,
  className,
  containerClassName,
  role = "region",
  "aria-label": ariaLabel = "Highlighted text section",
}: {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  role?: string;
  "aria-label"?: string;
}) => {
  return (
    <div
      className={cn(
        "relative flex h-auto w-full items-center justify-center",
        containerClassName,
      )}
      role={role}
      aria-label={ariaLabel}
    >
      <div 
        className={cn("relative z-20", className)}
        role="presentation"
      >
        {children}
      </div>
    </div>
  );
};

export const Highlight = ({
  children,
  className,
  role = "text",
}: {
  children: React.ReactNode;
  className?: string;
  role?: string;
}) => {
  return (
    <motion.span
      initial={{
        backgroundSize: "0% 100%",
      }}
      animate={{
        backgroundSize: "100% 100%",
      }}
      transition={{
        duration: 2,
        ease: "linear",
        delay: 0.5,
      }}
      style={{
        backgroundRepeat: "no-repeat",
        backgroundPosition: "left center",
        display: "inline",
      }}
      className={cn(
        "relative inline-block rounded px-1 pb-1 bg-gradient-to-r from-indigo-300 to-purple-300 dark:from-indigo-500 dark:to-purple-500",
        className,
      )}
      role={role}
    >
      {children}
    </motion.span>
  );
};
