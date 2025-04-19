"use client";
import { motion } from "motion/react";
import { HeroHighlight } from "../components/ui/hero-highlight";
import { HoverBorderGradientDemo } from "./Note";


export function HeroHighlightDemo() {
  return (
    <HeroHighlight>
      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="text-sm px-4 md:text-md lg:text-xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
      >
                <div className="text-sm px-4 md:text-md mb-7 lg:text-xl font-bold  dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
                style={{
                    color: "var(--brand-color)"
                }}
                >
            An unmatched Learning Experience for coding courses
        </div>
        Content is every where, we provide a learning experience that is
        unmatched. <br/>{" "}
        <span className="flex gap-2 justify-center mt-4 flex-wrap">
        <HoverBorderGradientDemo text="Bounties"/>
        <HoverBorderGradientDemo text="Peer Learning"/>
        <HoverBorderGradientDemo text="Virtual Hostel"/>
        <HoverBorderGradientDemo text="Alumini Network"/>
        <HoverBorderGradientDemo text="and many others."/>

        </span>
             </motion.h1>
    </HeroHighlight>
  );
}
