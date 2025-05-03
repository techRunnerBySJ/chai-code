import { BentoGrid, BentoGridItem } from "../components/ui/bento-grid";
import { motion } from "framer-motion";
import { IconArrowNarrowRight } from "@tabler/icons-react";

function CohortLiveClasses() {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section 
      role="region" 
      aria-label="Cohort live classes section"
      className="relative"
    >
      <motion.div 
        className="md:px-10 mt-20"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        role="presentation"
      >
        <h4 
          className="section-title mt-10"
          role="heading"
          aria-level={2}
          aria-label="Section title: Cohorts"
        >
          Cohorts
        </h4>

        <p 
          className="section-paragraph"
          role="text"
          aria-label="Section description"
        >
          Live training sessions
        </p>
      </motion.div>

      <motion.div
        className="overflow-x-auto scrollbar-hide relative"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        role="complementary"
        aria-label="Course grid"
      >
        {/* Navigation Arrows */}
        <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between px-4 pointer-events-none">
          <button
            className="w-12 h-12 flex items-center justify-center bg-orange-500 hover:bg-orange-600 text-white rounded-full shadow-lg transition-all duration-300 hover:scale-110 pointer-events-auto"
            onClick={() => {
              const container = document.querySelector('.overflow-x-auto');
              if (container) {
                container.scrollBy({ left: -300, behavior: 'smooth' });
              }
            }}
            aria-label="Scroll to previous courses"
          >
            <IconArrowNarrowRight className="rotate-180" />
          </button>
          <button
            className="w-12 h-12 flex items-center justify-center bg-orange-500 hover:bg-orange-600 text-white rounded-full shadow-lg transition-all duration-300 hover:scale-110 pointer-events-auto"
            onClick={() => {
              const container = document.querySelector('.overflow-x-auto');
              if (container) {
                container.scrollBy({ left: 300, behavior: 'smooth' });
              }
            }}
            aria-label="Scroll to next courses"
          >
            <IconArrowNarrowRight />
          </button>
        </div>

        <BentoGrid 
          className="ml-3 mr-3 w-full"
          role="list"
          aria-label="List of cohort courses"
        >
          {items.map((item, i) => {
            const discountPercentage = Math.round((1 - Number(item.discountPrice) / Number(item.actualPrice)) * 100);
            return (
              <motion.div
                key={i}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
                role="listitem"
                aria-label={`Course: ${item.title}`}
                tabIndex={0}
              >
                <BentoGridItem
                  title={item.title}
                  description={`${item.description} (${discountPercentage}% off)`}
                  src={item.src}
                  actualPrice={item.actualPrice}
                  discountPrice={item.discountPrice}
                  buttonUrl={item.buttonUrl}
                  className={i === 6 || i === 9 ? "md:col-span-1" : ""}
                  role="article"
                  aria-label={`Course details: ${item.title} - ${item.description} - ${discountPercentage}% discount`}
                />
              </motion.div>
            );
          })}
        </BentoGrid>
      </motion.div>
    </section>
  );
}

const items = [
  {
    title: "Web Development",
    description: "Advanced React Patterns",
    src: "https://www.youtube.com/embed/vz1RlUyrc3w?si=QHGVM8b9zGeDqtlc",
    actualPrice: "1000",
    discountPrice: "500",
    buttonUrl: "https://www.youtube.com/embed/vz1RlUyrc3w?si=QHGVM8b9zGeDqtlc",
  },
  {
    title: "Data Science",
    description: "Machine Learning Fundamentals",
    src: "https://www.youtube.com/embed/MPCVGFvgVEQ?si=qvBup-5TXBV3oyj5",
    actualPrice: "1000",
    discountPrice: "500",
    buttonUrl: "https://www.youtube.com/embed/MPCVGFvgVEQ?si=qvBup-5TXBV3oyj5",
  },
  {
    title: "System Design",
    description: "Scalable Architecture",
    src: "https://www.youtube.com/embed/vz1RlUyrc3w?si=QHGVM8b9zGeDqtlc",
    actualPrice: "1000",
    discountPrice: "500",
    buttonUrl: "https://www.youtube.com/embed/vz1RlUyrc3w?si=QHGVM8b9zGeDqtlc",
  },
  {
    title: "DevOps",
    description: "CI/CD Pipeline",
    src: "https://www.youtube.com/embed/MPCVGFvgVEQ?si=qvBup-5TXBV3oyj5",
    actualPrice: "1000",
    discountPrice: "500",
    buttonUrl: "https://www.youtube.com/embed/MPCVGFvgVEQ?si=qvBup-5TXBV3oyj5",
  },
  {
    title: "Mobile",
    description: "React Native Mastery",
    src: "https://www.youtube.com/embed/vz1RlUyrc3w?si=QHGVM8b9zGeDqtlc",
    actualPrice: "1000",
    discountPrice: "500",
    buttonUrl: "https://www.youtube.com/embed/vz1RlUyrc3w?si=QHGVM8b9zGeDqtlc",
  }
];

export default CohortLiveClasses;