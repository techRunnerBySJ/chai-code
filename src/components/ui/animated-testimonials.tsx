"use client";

import { JoinNowButton } from "@/layout/Join-Now-Button";
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
      className="mx-auto max-w-sm px-6 font-sans antialiased md:max-w-4xl md:px-8 lg:px-12 mt-10 md:mt-20"
      role={role}
      aria-label={ariaLabel}
    >
      <div className="px-4 md:px-20 mt-10 md:mt-20">
        <h4
          className="text-2xl md:text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium text-black dark:text-white"
          role="heading"
          aria-level={2}
        >
          Our Students Feedback
        </h4>

        <p
          className="text-sm md:text-base lg:text-lg max-w-2xl my-4 mx-auto text-neutral-500 text-center font-normal dark:text-neutral-300"
          role="text"
        >
          From Image generation to video generation, Everything AI has APIs for
          literally everything. It can even create this website copy for you.
        </p>
      </div>

      <div
        className="relative grid grid-cols-1 gap-10 md:gap-20 md:grid-cols-2"
        role="presentation"
      >
        {/* Image Section */}
        <div>
          <div
            className="relative h-60 w-full md:h-80"
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
                    y: isActive(index) ? [0, -40, 0] : 0,
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

        {/* Text Section */}
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
              className="text-lg md:text-2xl font-bold text-black dark:text-white"
              role="heading"
              aria-level={3}
            >
              {testimonials[active].name}
            </h3>
            <p
              className="text-xs md:text-sm text-gray-500 dark:text-neutral-500"
              role="text"
            >
              {testimonials[active].designation}
            </p>

            <motion.p
              className="mt-4 md:mt-8 text-sm md:text-lg text-gray-500 dark:text-neutral-300 mb-10 md:mb-5"
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

          <JoinNowButton />

          <div
            className="flex gap-4 pt-8 md:pt-12"
            role="group"
            aria-label="Testimonial navigation"
          >
            <button
              onClick={handlePrev}
              className="group/button flex h-8 w-8 md:h-10 md:w-10 items-center justify-center rounded-full bg-gray-100 dark:bg-neutral-800"
              aria-label="Previous testimonial"
            >
              <IconArrowLeft className="h-4 w-4 md:h-5 md:w-5 text-black transition-transform duration-300 group-hover/button:rotate-12 dark:text-neutral-400" />
            </button>
            <button
              onClick={handleNext}
              className="group/button flex h-8 w-8 md:h-10 md:w-10 items-center justify-center rounded-full bg-gray-100 dark:bg-neutral-800"
              aria-label="Next testimonial"
            >
              <IconArrowRight className="h-4 w-4 md:h-5 md:w-5 text-black transition-transform duration-300 group-hover/button:-rotate-12 dark:text-neutral-400" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};