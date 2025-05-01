"use client";
import { motion } from "motion/react";
import { HeroHighlight } from "../components/ui/hero-highlight";
import { useEffect, useState } from "react";

const features = [
  "Bounties",
  "Peer Learning",
  "Virtual Hostel",
  "Alumni Network",
  "and many others."
];

function TypewriterText({ text, delay }: { text: string; delay: number }) {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text]);

  return (
    <motion.span
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="inline-block"
    >
      {displayText}
    </motion.span>
  );
}

function FeatureItem({ text, index }: { text: string; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="relative group"
      role="listitem"
      aria-label={`Feature: ${text}`}
    >
      <div 
        className="absolute -inset-1 bg-gradient-to-r from-orange-300 to-orange-400 dark:from-orange-500 dark:to-orange-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"
        role="presentation"
        aria-hidden="true"
      />
      <div 
        className="relative px-4 py-2 bg-gradient-to-r from-orange-200 to-orange-100 dark:bg-black rounded-lg leading-none flex items-center"
        role="presentation"
      >
        <span 
          className="text-orange-600 dark:text-white-400 font-semibold"
          role="text"
        >
          <TypewriterText text={text} delay={index * 0.5} />
        </span>
      </div>
    </motion.div>
  );
}

export function HeroText() {
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
        className="text-sm px-4 md:text-md lg:text-xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto"
        role="heading"
        aria-level={1}
      >
        <div 
          className="text-sm px-4 md:text-md mb-7 lg:text-xl font-bold text-black dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto"
          role="text"
          aria-label="Main heading"
        >
          An unmatched Learning Experience for coding courses
        </div>
        <span role="text" aria-label="Description">
          Content is every where, we provide a learning experience that is
          unmatched.
        </span>
        <br/>{" "}
        <div className="relative" role="presentation">
          <div 
            className="absolute inset-0 bg-gradient-to-r from-orange-50/50 to-orange-100/50 dark:from-orange-900/20 dark:to-orange-800/20 rounded-2xl blur-2xl"
            role="presentation"
            aria-hidden="true"
          />
          <div 
            className="flex gap-4 justify-center mt-4 flex-wrap relative z-10"
            role="list"
            aria-label="Key features"
          >
            {features.map((feature, index) => (
              <FeatureItem key={feature} text={feature} index={index} />
            ))}
          </div>
        </div>
      </motion.h1>
    </HeroHighlight>
  );
}
