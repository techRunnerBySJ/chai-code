import { FaHeart } from "react-icons/fa";
import Carousel from "../components/ui/carousel";
import React from "react";
import { motion } from "framer-motion";

function CarouselDemo() {
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
    <>
    {/* <div className="flex flex-col items-center justify-center mb-10 mt-20">
      <h2 className="text-2xl md:text-2xl font-extrabold bg-gradient-to-r from-[#ff9332] via-pink-400 to-red-500 bg-clip-text text-transparent animate-text mb-4 flex items-center gap-3">
        UDEMY COURSES <FaHeart className="text-[#ff9332] animate-pulse" />
      </h2>
        <p className="text-gray-600 dark:text-gray-400">Not only in INDIA, we are global leaders in providing tech education</p>
      </div> */}
      <motion.div 
        className="px-20 mt-20"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <h4 className="text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium text-black dark:text-white">
          Udemy
        </h4>

        <p className="text-sm lg:text-base max-w-2xl my-4 mx-auto text-neutral-500 text-center font-normal dark:text-neutral-300">
          From Image generation to video generation, Everything AI has APIs for
          literally everything. It can even create this website copy for you.
        </p>
      </motion.div>

      <motion.div 
        className="relative overflow-hidden w-full h-full py-20"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <Carousel slides={slideData} />
      </motion.div>
    </>
  );
}

export default CarouselDemo;
