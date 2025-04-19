"use client";

import { MovingBorderDemo } from "@/layout/Join-Now-Button";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { motion, AnimatePresence } from "motion/react";
import { useCallback, useEffect, useState } from "react";

type Testimonial = {
  quote: string;
  name: string;
  designation: string;
  src: string;
};

interface AnimatedTestimonialsProps {
  testimonials: Testimonial[];
  autoplay?: boolean;
  role?: string;
  "aria-label"?: string;
}

export const AnimatedTestimonials = ({
  testimonials,
  autoplay = false,
  role = "complementary",
  "aria-label": ariaLabel = "Testimonials carousel",
}: AnimatedTestimonialsProps) => {
  const [active, setActive] = useState(0);

  const handleNext = useCallback(() => {
    setActive((prev) => (prev + 1) % testimonials.length);
  }, [testimonials.length]);

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const isActive = (index: number) => {
    return index === active;
  };

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay, handleNext]);

  const randomRotateY = () => {
    return Math.floor(Math.random() * 21) - 10;
  };

  return (
    <div 
      className="mx-auto max-w-sm px-4 font-sans antialiased md:max-w-4xl md:px-8 lg:px-12 mt-20"
      role={role}
      aria-label={ariaLabel}
    >
      {/* <div className="flex flex-col items-center justify-center mb-20">
      <h2 className="text-2xl md:text-2xl font-extrabold bg-gradient-to-r from-[#ff9332] via-pink-400 to-red-500 bg-clip-text text-transparent animate-text mb-4 flex items-center gap-3">
        Our Students Feedback <FaHeart className="text-[#ff9332] animate-pulse" />
      </h2>
        <p className="text-gray-600 dark:text-gray-400">Explore the incredible advantages of joining our courses and enhacing your skills.</p>
      </div> */}
      <div className="px-20 mt-20">
        <h4 
          className="text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium text-black dark:text-white"
          role="heading"
          aria-level={2}
        >
          Our Students Feedback
        </h4>

        <p 
          className="text-sm lg:text-base max-w-2xl my-4 mx-auto text-neutral-500 text-center font-normal dark:text-neutral-300"
          role="text"
        >
          From Image generation to video generation, Everything AI has APIs for
          literally everything. It can even create this website copy for you.
        </p>
      </div>

      <div 
        className="relative grid grid-cols-1 gap-20 md:grid-cols-2"
        role="presentation"
      >
        <div>
          <div 
            className="relative h-80 w-full"
            role="presentation"
          >
            <AnimatePresence>
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.src}
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                    z: -100,
                    rotate: randomRotateY(),
                  }}
                  animate={{
                    opacity: isActive(index) ? 1 : 0.7,
                    scale: isActive(index) ? 1 : 0.95,
                    z: isActive(index) ? 0 : -100,
                    rotate: isActive(index) ? 0 : randomRotateY(),
                    zIndex: isActive(index)
                      ? 40
                      : testimonials.length + 2 - index,
                    y: isActive(index) ? [0, -80, 0] : 0,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.9,
                    z: 100,
                    rotate: randomRotateY(),
                  }}
                  transition={{
                    duration: 0.4,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 origin-bottom"
                  role="img"
                  aria-label={`Testimonial from ${testimonial.name}`}
                >
                  <img
                    src={testimonial.src}
                    alt={`${testimonial.name}'s profile picture`}
                    width={500}
                    height={500}
                    draggable={false}
                    className="h-full w-full rounded-3xl object-cover object-center"
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        <div 
          className="flex flex-col justify-between py-4"
          role="presentation"
        >
          <motion.div
            key={active}
            initial={{
              y: 20,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            exit={{
              y: -20,
              opacity: 0,
            }}
            transition={{
              duration: 0.2,
              ease: "easeInOut",
            }}
            role="article"
            aria-label={`Testimonial from ${testimonials[active].name}`}
          >
            <h3 
              className="text-2xl font-bold text-black dark:text-white"
              role="heading"
              aria-level={3}
            >
              {testimonials[active].name}
            </h3>
            <p 
              className="text-sm text-gray-500 dark:text-neutral-500"
              role="text"
            >
              {testimonials[active].designation}
            </p>
           
            <motion.p 
              className="mt-8 text-lg text-gray-500 dark:text-neutral-300"
              role="text"
            >
              {testimonials[active].quote.split(" ").map((word, index) => (
                <motion.span
                  key={index}
                  initial={{
                    filter: "blur(10px)",
                    opacity: 0,
                    y: 5,
                  }}
                  animate={{
                    filter: "blur(0px)",
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.2,
                    ease: "easeInOut",
                    delay: 0.02 * index,
                  }}
                  className="inline-block"
                  role="text"
                >
                  {word}&nbsp;
                </motion.span>
              ))}
            </motion.p>
          </motion.div>

          <MovingBorderDemo />

          <div 
            className="flex gap-4 pt-12 md:pt-0"
            role="group"
            aria-label="Testimonial navigation"
          >
            <button
              onClick={handlePrev}
              className="group/button flex h-7 w-7 items-center justify-center rounded-full bg-gray-100 dark:bg-neutral-800"
              aria-label="Previous testimonial"
            >
              <IconArrowLeft className="h-5 w-5 text-black transition-transform duration-300 group-hover/button:rotate-12 dark:text-neutral-400" />
            </button>
            <button
              onClick={handleNext}
              className="group/button flex h-7 w-7 items-center justify-center rounded-full bg-gray-100 dark:bg-neutral-800"
              aria-label="Next testimonial"
            >
              <IconArrowRight className="h-5 w-5 text-black transition-transform duration-300 group-hover/button:-rotate-12 dark:text-neutral-400" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
