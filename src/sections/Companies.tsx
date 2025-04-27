import { AnimatedTooltip } from "../components/ui/animated-tooltip";
import { motion } from "framer-motion";

const companies = [
  {
    id: 1,
    name: "Google",
    designation: "Tech Giant",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
  },
  {
    id: 2,
    name: "Microsoft",
    designation: "Tech Giant",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
  },
  {
    id: 3,
    name: "Amazon",
    designation: "Tech Giant",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
  },
  {
    id: 4,
    name: "Meta",
    designation: "Tech Giant",
    image: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg",
  },
  {
    id: 5,
    name: "Apple",
    designation: "Tech Giant",
    image: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
  },
  {
    id: 6,
    name: "Netflix",
    designation: "Tech Giant",
    image: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
  },
  {
    id: 7,
    name: "Amazon",
    designation: "Tech Giant",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
  },
  {
    id: 8,
    name: "Netflix",
    designation: "Tech Giant",
    image: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
  },
  {
    id: 9,
    name: "Amazon",
    designation: "Tech Giant",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
  },
  {
    id: 10,
    name: "Netflix",
    designation: "Tech Giant",
    image: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
  }
];

function CompaniesSection() {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.1
      }
    }
  };


  return (
    <motion.div 
      className="overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <motion.div 
        className="px-20 mt-20"
        variants={containerVariants}
      >
        <h4 className="text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium text-black dark:text-white">
          Our Students Work At
        </h4>

        <p className="text-sm lg:text-base max-w-2xl my-4 mx-auto text-neutral-500 text-center font-normal dark:text-neutral-300">
          From Image generation to video generation, Everything AI has APIs for
          literally everything. It can even create this website copy for you.
        </p>
      </motion.div>

      <motion.div 
        className="flex animate-company-scroll"
        aria-hidden="true"
        variants={containerVariants}
      >
        <AnimatedTooltip items={companies} />
      </motion.div>
    </motion.div>
  );
}

export default CompaniesSection;
