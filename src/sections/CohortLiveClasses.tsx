import { BentoGrid, BentoGridItem } from "../components/ui/bento-grid";
import { motion } from "framer-motion";

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
              tabIndex={0}
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

export default CohortLiveClasses;