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
  },
  {
    id: 11,
    name: "Netflix",
    designation: "Tech Giant",
    image: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
  },
  {
    id: 12,
    name: "Netflix",
    designation: "Tech Giant",
    image: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
  },
  {
    id: 13,
    name: "Netflix",
    designation: "Tech Giant",
    image: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
  },
  {
    id: 14,
    name: "Netflix",
    designation: "Tech Giant",
    image: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
  },

  {
    id: 15,
    name: "Amazon",
    designation: "Tech Giant",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
  },
  {
    id: 16,
    name: "Amazon",
    designation: "Tech Giant",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
  },
  {
    id: 17,
    name: "Amazon",
    designation: "Tech Giant",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
  },
  {
    id: 18,
    name: "Apple",
    designation: "Tech Giant",
    image: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
  },
  {
    id: 19,
    name: "Apple",
    designation: "Tech Giant",
    image: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
  },
  {
    id: 20,
    name: "Apple",
    designation: "Tech Giant",
    image: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
  },

  
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
        className="md:px-10 mt-20"
        variants={containerVariants}
      >
        <h4 className="section-title" role="heading" aria-level={2}>
          Our Students Work At
        </h4>

        <p className="section-paragraph" role="text">
          Our students are not only working in big tech companies, but 
          are now founders of funded startups and product creators.
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
