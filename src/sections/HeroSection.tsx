"use client";

import { HeroText } from "@/layout/HeroText";
import { JoinNowButton } from "@/layout/Join-Now-Button";
import { InfoAndCtaButton } from "@/layout/Note";
import { TitleFLipWords } from "@/layout/Title";
import { motion } from "framer-motion";
import { useState } from "react";

const Shimmer = () => (
  <div 
    className="w-full max-w-[700px] rounded-2xl overflow-hidden relative bg-white dark:bg-neutral-900 p-6 border border-neutral-200 dark:border-neutral-800 shadow-2xl shadow-orange-500/10"
    role="presentation"
    aria-hidden="true"
  >
    {/* Video Placeholder */}
    <div 
      className="aspect-video rounded-lg bg-neutral-100 dark:bg-neutral-800 relative overflow-hidden"
      role="presentation"
    >
      <div 
        className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent"
        role="presentation"
      />
    </div>
    
    {/* Title Placeholder */}
    <div 
      className="mt-4 w-3/4 h-6 rounded bg-neutral-100 dark:bg-neutral-800 relative overflow-hidden"
      role="presentation"
    >
      <div 
        className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent"
        role="presentation"
      />
    </div>
    
    {/* Description Placeholder */}
    <div 
      className="mt-2 w-1/2 h-4 rounded bg-neutral-100 dark:bg-neutral-800 relative overflow-hidden"
      role="presentation"
    >
      <div 
        className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent"
        role="presentation"
      />
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
    <motion.section 
      id="cohort"
      className="relative flex flex-col items-center justify-center px-4 md:px-10 mt-20 w-full text-center gap-5"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      role="region"
      aria-label="Hero section"
    >
      {/* TOP CENTER: Hover Gradient Header */}
      <motion.div 
        variants={itemVariants}
        role="presentation"
        aria-label="Trust badge"
      >
        <InfoAndCtaButton text="Trusted By 1.5M Code Learners" />
      </motion.div>

      {/* FlipWords centered */}
      <motion.div 
        variants={itemVariants}
        role="presentation"
        aria-label="Main title"
      >
        <TitleFLipWords />
      </motion.div>

      {/* Highlighted Text */}
      <motion.div 
        variants={itemVariants}
        role="presentation"
        aria-label="Feature highlights"
      >
        <HeroText />
      </motion.div>

      {/* Join Now Button */}
      <motion.div 
        variants={itemVariants}
        role="presentation"
        aria-label="Call to action"
      >
        <JoinNowButton />
      </motion.div>

      {/* YouTube Video */}
      <motion.div
        className="w-full flex justify-center relative"
        variants={itemVariants}
        role="complementary"
        aria-label="YouTube video demonstration"
      >
        {!isVideoLoaded && <Shimmer />}
        <motion.div
          className={`w-full max-w-[700px] relative ${!isVideoLoaded ? 'hidden' : ''}`}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
          role="article"
          aria-label="Video content"
        >
          <div 
            className="absolute inset-0 bg-gradient-to-r from-orange-500 to-amber-500 rounded-2xl transform rotate-1 opacity-30 blur-2xl"
            role="presentation"
            aria-hidden="true"
          />
          <div 
            className="relative bg-white dark:bg-neutral-900 p-6 rounded-2xl border border-neutral-200 dark:border-neutral-800 shadow-2xl shadow-orange-500/10"
            role="presentation"
          >
            <div 
              className="aspect-video bg-neutral-100 dark:bg-neutral-800 rounded-lg mb-4 overflow-hidden"
              role="presentation"
            >
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/FQCTzomz6bw?si=wYM71CtQw5nBZkzc"
                title="Chai aur Code"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                onLoad={() => setIsVideoLoaded(true)}
                role="presentation"
                aria-label="YouTube video player"
              />
            </div>
            <h3 
              className="text-xl font-semibold text-black dark:text-white mb-1"
              role="heading"
              aria-level={3}
            >
              Checkout our Youtube Video
            </h3>
            <p 
              className="text-sm text-neutral-600 dark:text-neutral-400"
              role="text"
              aria-label="Video description"
            >
              Watch our comprehensive guide on learning to code
            </p>
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}

export default HeroSectionOne;
