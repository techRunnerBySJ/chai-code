import { motion } from "framer-motion";
import { FaXTwitter } from "react-icons/fa6";
import { useState, useEffect, useRef } from "react";
import LogoDark from "@/assets/chaicode/chai-gray.svg"

export function StudentsFeedback() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const testimonialsRef = useRef<HTMLDivElement>(null);

  const testimonials = [
    {
      quote:
        "Chai Code is a great platform for learning Python. I've learned so much in just a few weeks.",
      name: "Saloni Jain",
      handle: "@TechRunnerBySJ",
      avatar: LogoDark,
      url: "https://x.com/TechRunnerBySJ",
    },
    {
      quote:
        "Chai Code is a great platform for learning Python. I've learned so much in just a few weeks.",
      name: "Saloni Jain",
      handle: "@TechRunnerBySJ",
      avatar: LogoDark,
      url: "https://x.com/TechRunnerBySJ",
    },
    {
      quote:
        "Chai Code is a great platform for learning Python. I've learned so much in just a few weeks.",
      name: "Saloni Jain",
      handle: "@TechRunnerBySJ",
      avatar: LogoDark,
      url: "https://x.com/TechRunnerBySJ",
    },
    {
      quote:
        "Chai Code is a great platform for learning Python. I've learned so much in just a few weeks.",
      name: "Saloni Jain",
      handle: "@TechRunnerBySJ",
      avatar: LogoDark,
      url: "https://x.com/TechRunnerBySJ",
    },
    {
      quote:
        "Chai Code is a great platform for learning Python. I've learned so much in just a few weeks.",
      name: "Saloni Jain",
      handle: "@TechRunnerBySJ",
      avatar: LogoDark,
      url: "https://x.com/TechRunnerBySJ",
    },
    {
      quote:
        "Chai Code is a great platform for learning Python. I've learned so much in just a few weeks.",
      name: "Saloni Jain",
      handle: "@TechRunnerBySJ",
      avatar: LogoDark,
      url: "https://x.com/TechRunnerBySJ",
    },
    {
      quote:
        "Chai Code is a great platform for learning Python. I've learned so much in just a few weeks.",
      name: "Saloni Jain",
      handle: "@TechRunnerBySJ",
      avatar: LogoDark,
      url: "https://x.com/TechRunnerBySJ",
    },
  ];

  const slides = Math.ceil(testimonials.length / 4);
  const visibleTestimonials = testimonials.slice(currentSlide * 4, (currentSlide + 1) * 4);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!testimonialsRef.current) return;

      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        setCurrentSlide(prev => (prev > 0 ? prev - 1 : slides - 1));
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        setCurrentSlide(prev => (prev < slides - 1 ? prev + 1 : 0));
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [slides]);

  return (
    <div
      id="reviews"
      className="mx-auto max-w-sm px-6 transition-colors duration-300 font-sans antialiased md:max-w-4xl md:px-8 lg:px-12 mt-10 md:mt-20"
      role="region" 
      aria-label="Student feedback section"
    >
      <div 
        className="px-4 md:md:px-10 mt-20 mb-10" 
        role="presentation"
      >
        <h4
          className="section-title"
          role="heading"
          aria-level={2}
        >
          Our Students Feedback
        </h4>

        <p
          className="section-paragraph"
          role="text"
        >
          Explore the incredible advantages of enrolling in our courses and enhancing your skills.
        </p>
      </div>

      <div 
        ref={testimonialsRef}
        className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8"
        role="list"
        aria-label="Student testimonials"
      >
        {visibleTestimonials.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
              duration: 0.6,
              delay: index * 0.15,
              type: "spring",
              stiffness: 100,
              damping: 15
            }}
            whileHover={{ scale: 1.03 }}
            className="relative bg-gradient-to-br from-white to-neutral-50 dark:from-neutral-900 dark:to-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-2xl p-6 cursor-pointer transition-all duration-300 hover:shadow-[0_0_20px_rgba(249,115,22,0.3)] hover:border-orange-500 dark:hover:border-orange-500 h-[220px] flex flex-col group"
            onClick={() => window.open(item.url, "_blank")}
            role="article"
            aria-label={`Testimonial from ${item.name}`}
            tabIndex={0}
          >
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.15 + 0.2,
                duration: 0.5
              }}
              className="text-neutral-800 dark:text-white text-base leading-relaxed mb-6 line-clamp-3 flex-grow overflow-hidden"
              role="text"
            >
              {item.quote}
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.15 + 0.3,
                duration: 0.5
              }}
              className="flex items-center justify-between mt-auto"
              role="group"
              aria-label="Student information"
            >
              <div 
                className="flex items-center gap-4" 
                role="group"
                aria-label="Student profile"
              >
                <motion.img
                  initial={{ scale: 0.8, rotate: -10 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.15 + 0.4,
                    type: "spring",
                    stiffness: 200,
                    damping: 15
                  }}
                  src={item.avatar}
                  alt={`${item.name}'s profile picture`}
                  width={40}
                  height={40}
                  className="rounded-full object-cover border-2 border-neutral-200 dark:border-neutral-700 shadow-sm"
                  role="img"
                />
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.15 + 0.5,
                    duration: 0.5
                  }}
                  role="group"
                  aria-label="Student details"
                >
                  <p 
                    className="text-neutral-900 dark:text-white font-medium" 
                    role="text"
                  >
                    {item.name}
                  </p>
                  <p 
                    className="text-sm text-neutral-600 dark:text-neutral-400" 
                    role="text"
                  >
                    {item.handle}
                  </p>
                </motion.div>
              </div>
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.15 + 0.6,
                  type: "spring",
                  stiffness: 200,
                  damping: 15
                }}
                className="relative"
                role="group"
                aria-label="Twitter link"
              >
                <FaXTwitter 
                  className="text-neutral-600 dark:text-white text-xl group-hover:text-orange-500 transition-colors duration-300" 
                  role="img"
                  aria-label="Twitter icon"
                />
                <div 
                  className="absolute -top-8 right-0 bg-neutral-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap"
                  role="tooltip"
                  aria-label="View on Twitter"
                >
                  View on Twitter
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Dots Navigation */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="flex justify-center gap-3 mt-8"
        role="navigation"
        aria-label="Testimonial pagination"
      >
        {Array.from({ length: slides }).map((_, index) => (
          <motion.button
            key={index}
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.6 + index * 0.1,
              type: "spring",
              stiffness: 200,
              damping: 15
            }}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${
              currentSlide === index
                ? "bg-neutral-800 dark:bg-white scale-125"
                : "bg-neutral-300 dark:bg-neutral-700 hover:scale-110"
            }`}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={currentSlide === index ? "true" : "false"}
            tabIndex={0}
          />
        ))}
      </motion.div>
    </div>
  );
}

export default StudentsFeedback;
