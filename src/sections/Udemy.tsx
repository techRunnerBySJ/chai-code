import Carousel from "../components/ui/carousel";
import { motion } from "framer-motion";
import UdemyImage from "@/assets/images/udemy.jpg";

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
      src: UdemyImage,
      title: "Udemy",
      description: "Udemy is a platform for learning new skills. It is a great platform for learning new skills. It is a great platform for learning new skills.",
      ratings: "4.5",
      status: 'Top Rated',
      buttonUrl: "https://www.udemy.com/course/the-complete-web-development-bootcamp/"
    },
    {
      src: UdemyImage,
      title: "Udemy",
      description: "Udemy is a platform for learning new skills. It is a great platform for learning new skills. It is a great platform for learning new skills.",
      ratings: "4.5",
      status: 'Top Rated',
      buttonUrl: "https://www.udemy.com/course/the-complete-web-development-bootcamp/"
    },
    {
      src: UdemyImage,
      title: "Udemy",
      description: "Udemy is a platform for learning new skills. It is a great platform for learning new skills. It is a great platform for learning new skills.",
      ratings: "4.5",
      status: 'Top Rated',
      buttonUrl: "https://www.udemy.com/course/the-complete-web-development-bootcamp/"
    },
    {
      src: UdemyImage,
      title: "Udemy",
      description: "Udemy is a platform for learning new skills. It is a great platform for learning new skills. It is a great platform for learning new skills.",
      ratings: "4.5",
      status: 'Top Rated',
      buttonUrl: "https://www.udemy.com/course/the-complete-web-development-bootcamp/"
    },
    {
      src: UdemyImage,
      title: "Udemy",
      description: "Udemy is a platform for learning new skills. It is a great platform for learning new skills. It is a great platform for learning new skills.",
      ratings: "4.5",
      status: 'Top Rated',
      buttonUrl: "https://www.udemy.com/course/the-complete-web-development-bootcamp/"
    },
    {
      src: UdemyImage,
      title: "Udemy",
      description: "Udemy is a platform for learning new skills. It is a great platform for learning new skills. It is a great platform for learning new skills.",
      ratings: "4.5",
      status: 'Top Rated',
      buttonUrl: "https://www.udemy.com/course/the-complete-web-development-bootcamp/"
    },
    {
      src: UdemyImage,
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
        className="md:px-10 mt-20"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        role="presentation"
      >
        <h4 
          className="section-title"
          role="heading"
          aria-level={2}
        >
          Udemy
        </h4>

        <p 
          className="section-paragraph"
          role="text"
        >
          Not Only in India we are global leaders in tech education.
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
