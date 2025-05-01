import { motion } from "framer-motion";
import { FaXTwitter } from "react-icons/fa6";
import { useState } from "react";
import LogoDark from "@/assets/chaicode/chai-gray.svg"

export function StudentsFeedback() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
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

  return (
    <div
      id="reviews"
      className="mx-auto max-w-sm px-6 transition-colors duration-300 font-sans antialiased md:max-w-4xl md:px-8 lg:px-12 mt-10 md:mt-20"
    >
      <div className="px-4 md:px-20 mt-20 mb-10">
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

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
        {visibleTestimonials.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03 }}
            className="relative bg-gradient-to-br from-white to-neutral-50 dark:from-neutral-900 dark:to-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-2xl p-6 cursor-pointer transition-all duration-300 hover:shadow-[0_0_20px_rgba(249,115,22,0.3)] hover:border-orange-500 dark:hover:border-orange-500 h-[220px] flex flex-col group"
            onClick={() => window.open(item.url, "_blank")}
          >
            <p className="text-neutral-800 dark:text-white text-base leading-relaxed mb-6 line-clamp-3 flex-grow overflow-hidden">
              {item.quote}
            </p>

            <div className="flex items-center justify-between mt-auto">
              <div className="flex items-center gap-4">
                <img
                  src={item.avatar}
                  alt={item.name}
                  width={40}
                  height={40}
                  className="rounded-full object-cover border-2 border-neutral-200 dark:border-neutral-700 shadow-sm"
                />
                <div>
                  <p className="text-neutral-900 dark:text-white font-medium">{item.name}</p>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">
                    {item.handle}
                  </p>
                </div>
              </div>
              <div className="relative">
                <FaXTwitter className="text-neutral-600 dark:text-white text-xl group-hover:text-orange-500 transition-colors duration-300" />
                <div className="absolute -top-8 right-0 bg-neutral-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                  View on Twitter
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Dots Navigation */}
      <div className="flex justify-center gap-3 mt-8">
        {Array.from({ length: slides }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${
              currentSlide === index
                ? "bg-neutral-800 dark:bg-white scale-125"
                : "bg-neutral-300 dark:bg-neutral-700 hover:scale-110"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default StudentsFeedback;
