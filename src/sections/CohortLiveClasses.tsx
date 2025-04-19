import React from "react";
import { BentoGrid, BentoGridItem } from "../components/ui/bento-grid";
import { motion } from "framer-motion";

function BentoGridDemo() {
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
        className="px-20 mt-20"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        role="presentation"
      >
        <h4 
          className="text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium text-black dark:text-white"
          role="heading"
          aria-level={2}
        >
          Cohorts
        </h4>

        <p 
          className="text-sm lg:text-base max-w-2xl my-4 mx-auto text-neutral-500 text-center font-normal dark:text-neutral-300"
          role="text"
        >
          From Image generation to video generation, Everything AI has APIs for
          literally everything. It can even create this website copy for you.
        </p>
      </motion.div>

      <motion.div
        className="overflow-x-auto scrollbar-hide"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        role="complementary"
        aria-label="Course grid"
      >
        <BentoGrid 
          className="ml-3 mr-3 w-full"
          role="list"
          aria-label="List of cohort courses"
        >
          {items.map((item, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
              role="listitem"
              aria-label={`Course: ${item.title}`}
            >
              <BentoGridItem
                title={item.title}
                description={item.description}
                src={item.src}
                actualPrice={item.actualPrice}
                discountPrice={item.discountPrice}
                buttonUrl={item.buttonUrl}
                className={i === 6 || i === 9 ? "md:col-span-1" : ""}
                role="article"
                aria-label={`Course details: ${item.title} - ${item.description}`}
              />
            </motion.div>
          ))}
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

export default BentoGridDemo;