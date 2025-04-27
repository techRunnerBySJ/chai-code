import Carousel from "../components/ui/carousel";
import { motion } from "framer-motion";

function Udemy() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const slideData = [
    {
      src: "src/assets/images/udemy.jpg",
      title: "Udemy",
      description: "Udemy is a platform for learning new skills. It is a great platform for learning new skills. It is a great platform for learning new skills.",
      ratings: "4.5",
      status: 'Top Rated',
      buttonUrl: "https://www.udemy.com/course/the-complete-web-development-bootcamp/"
    },
    {
      src: "src/assets/images/udemy.jpg",
      title: "Udemy",
      description: "Udemy is a platform for learning new skills. It is a great platform for learning new skills. It is a great platform for learning new skills.",
      ratings: "4.5",
      status: 'Top Rated',
      buttonUrl: "https://www.udemy.com/course/the-complete-web-development-bootcamp/"
    },
    {
      src: "src/assets/images/udemy.jpg",
      title: "Udemy",
      description: "Udemy is a platform for learning new skills. It is a great platform for learning new skills. It is a great platform for learning new skills.",
      ratings: "4.5",
      status: 'Top Rated',
      buttonUrl: "https://www.udemy.com/course/the-complete-web-development-bootcamp/"
    },
    {
      src: "src/assets/images/udemy.jpg",
      title: "Udemy",
      description: "Udemy is a platform for learning new skills. It is a great platform for learning new skills. It is a great platform for learning new skills.",
      ratings: "4.5",
      status: 'Top Rated',
      buttonUrl: "https://www.udemy.com/course/the-complete-web-development-bootcamp/"
    },
    {
      src: "src/assets/images/udemy.jpg",
      title: "Udemy",
      description: "Udemy is a platform for learning new skills. It is a great platform for learning new skills. It is a great platform for learning new skills.",
      ratings: "4.5",
      status: 'Top Rated',
      buttonUrl: "https://www.udemy.com/course/the-complete-web-development-bootcamp/"
    },
    {
      src: "src/assets/images/udemy.jpg",
      title: "Udemy",
      description: "Udemy is a platform for learning new skills. It is a great platform for learning new skills. It is a great platform for learning new skills.",
      ratings: "4.5",
      status: 'Top Rated',
      buttonUrl: "https://www.udemy.com/course/the-complete-web-development-bootcamp/"
    },
    {
      src: "src/assets/images/udemy.jpg",
      title: "Udemy",
      description: "Udemy is a platform for learning new skills. It is a great platform for learning new skills. It is a great platform for learning new skills.",
      ratings: "4.5",
      status: 'Top Rated',
      buttonUrl: "https://www.udemy.com/course/the-complete-web-development-bootcamp/"
    },
  ];

  return (
    <section 
      role="region" 
      aria-label="Udemy courses section"
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
          className="text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium text-black dark:text-white mt-10"
          role="heading"
          aria-level={2}
        >
          Udemy
        </h4>

        <p 
          className="text-sm mb-0 lg:text-base max-w-2xl my-4 mx-auto text-neutral-500 text-center font-normal dark:text-neutral-300"
          role="text"
        >
          From Image generation to video generation, Everything AI has APIs for
          literally everything. It can even create this website copy for you.
        </p>
      </motion.div>

      <motion.div 
        className="relative overflow-hidden w-full h-full py-10 pb-20"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        role="complementary"
        aria-label="Course carousel"
      >
        <Carousel 
          slides={slideData} 
          aria-label="List of Udemy courses"
        />
      </motion.div>
    </section>
  );
}

export default Udemy;
