"use client";

import { HeroHighlightDemo } from "@/layout/HeroText";
import { MovingBorderDemo } from "@/layout/Join-Now-Button";
import { HoverBorderGradientDemo } from "@/layout/Note";
import { FlipWordsDemo } from "@/layout/Title";
import { motion } from "framer-motion";
import { useState } from "react";

const Shimmer = () => (
  <div className="w-full max-w-[700px] rounded-2xl overflow-hidden relative bg-white dark:bg-neutral-900 p-6 border border-neutral-200 dark:border-neutral-800 shadow-2xl shadow-orange-500/10">
    {/* Video Placeholder */}
    <div className="aspect-video rounded-lg bg-neutral-100 dark:bg-neutral-800 relative overflow-hidden">
      <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    </div>
    
    {/* Title Placeholder */}
    <div className="mt-4 w-3/4 h-6 rounded bg-neutral-100 dark:bg-neutral-800 relative overflow-hidden">
      <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    </div>
    
    {/* Description Placeholder */}
    <div className="mt-2 w-1/2 h-4 rounded bg-neutral-100 dark:bg-neutral-800 relative overflow-hidden">
      <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    </div>
  </div>
);

export function HeroSectionOne() {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div 
      className="relative flex flex-col items-center justify-center px-4 md:px-10 mt-20 w-full text-center gap-10"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      {/* TOP CENTER: Hover Gradient Header */}
      <motion.div variants={itemVariants}>
        <HoverBorderGradientDemo text="Trusted By 1.5M Code Learners" />
      </motion.div>

      {/* FlipWords centered */}
      <motion.div variants={itemVariants}>
        <FlipWordsDemo />
      </motion.div>

      {/* Highlighted Text */}
      <motion.div variants={itemVariants}>
        <HeroHighlightDemo />
      </motion.div>

      {/* YouTube Video */}
      <motion.div
        className="w-full flex justify-center relative"
        variants={itemVariants}
      >
        {!isVideoLoaded && <Shimmer />}
        <motion.div
          className={`w-full max-w-[700px] relative ${!isVideoLoaded ? 'hidden' : ''}`}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-amber-500 rounded-2xl transform rotate-1 opacity-30 blur-2xl" />
          <div className="relative bg-white dark:bg-neutral-900 p-6 rounded-2xl border border-neutral-200 dark:border-neutral-800 shadow-2xl shadow-orange-500/10">
            <div className="aspect-video bg-neutral-100 dark:bg-neutral-800 rounded-lg mb-4 overflow-hidden">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/FQCTzomz6bw?si=wYM71CtQw5nBZkzc"
                title="Chai aur Code"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                onLoad={() => setIsVideoLoaded(true)}
              />
            </div>
            <h3 className="text-xl font-semibold text-black dark:text-white mb-1">
              Checkout our Youtube Video
            </h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              Watch our comprehensive guide on learning to code
            </p>
          </div>
        </motion.div>
      </motion.div>

      {/* Join Now Button */}
      <motion.div variants={itemVariants}>
        <MovingBorderDemo />
      </motion.div>
    </motion.div>
  );
}

export default HeroSectionOne;
