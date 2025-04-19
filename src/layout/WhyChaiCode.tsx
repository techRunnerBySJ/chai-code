import { CardSpotlight } from "@/components/ui/card-spotlight";
import { FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
import { MovingBorderDemo } from "./Join-Now-Button";
import { motion } from "framer-motion";

export function CardSpotlightDemo() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <>
        {/* <div className="flex flex-col items-center justify-center mb-10">
    <h2 className="text-2xl md:text-2xl font-extrabold bg-gradient-to-r from-[#ff9332] via-pink-400 to-red-500 bg-clip-text text-transparent animate-text mb-4 flex items-center gap-3">
      Why ChaiCode? <FaHeart className="text-[#ff9332] animate-pulse" />
    </h2>
      <p className="text-gray-600 dark:text-gray-400">Love that we get from our community</p>
    </div> */}
          <div className="px-20 mt-20">
        <h4 className="text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium text-black dark:text-white">
         Why ChaiCode?
        </h4>

        <p className="text-sm lg:text-base  max-w-2xl  my-4 mx-auto text-neutral-500 text-center font-normal dark:text-neutral-300">
          From Image generation to video generation, Everything AI has APIs for
          literally everything. It can even create this website copy for you.
        </p>
      </div>
    <motion.div 
      className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 md:px-20 mb-10"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      {/* Left Column */}
      <div className="flex flex-col gap-4 items-center md:items-start">
        <motion.div variants={cardVariants}>
          <CardSpotlight className="h-40 w-full max-w-md hover:shadow-2xl transition-all duration-300">
            <p className="text-xl font-bold relative z-20 text-white flex items-center gap-2 mt-2">
              <img src="src/assets/chaicode/chai-white.svg" alt="ChaiCode" className="w-10 h-10" />
              Comprehensive Curriculum
            </p>
            <p className="text-neutral-300 mt-4 relative z-20 text-sm mb-3 p-2">
              Master key concepts and hands-on skills with clarity and confidence. Learn what truly matters, the right way, thorough, practical, and easy to understand.
            </p>
          </CardSpotlight>
        </motion.div>
        <motion.div variants={cardVariants}>
          <CardSpotlight className="h-40 w-full max-w-md hover:shadow-2xl transition-all duration-300">
            <p className="text-xl font-bold relative z-20 text-white flex items-center gap-2 mt-2">
              <img src="src/assets/chaicode/chai-white.svg" alt="ChaiCode" className="w-10 h-10" />
              You finish it
            </p>
            <p className="text-neutral-300 mt-4 relative z-20 text-sm mb-3 p-2">
              Our cohort are a collaborative journey, students learn together, stay motivated, and complete the course on time as a community.
            </p>
          </CardSpotlight>
        </motion.div>
        <motion.div variants={cardVariants}>
          <CardSpotlight className="h-40 w-full max-w-md hover:shadow-2xl transition-all duration-300">
            <p className="text-xl font-bold relative z-20 text-white flex items-center gap-2 mt-2">
              <img src="src/assets/chaicode/chai-white.svg" alt="ChaiCode" className="w-10 h-10" />
              Industry Guests
            </p>
            <p className="text-neutral-300 mt-4 relative z-20 text-sm mb-3 p-2">
              We are connected with industry experts and regularly invite them into our classes for engaging, fun, and insightful sessions with students.
            </p>
          </CardSpotlight>
        </motion.div>
      </div>

      {/* Middle Column */}
      <motion.div className="flex justify-center" variants={cardVariants}>
        <CardSpotlight className="h-[513px] w-full max-w-md flex flex-col items-center justify-between py-6 px-4 hover:shadow-2xl transition-all duration-300">
          <img 
            src="src/assets/images/hitesh-sir.jpeg" 
            alt="Instructor" 
            className="rounded-lg w-48 h-48 object-cover shadow-md"
          />
          <div className="text-center mt-4">
            <p className="text-2xl font-bold text-white">Hitesh Choudhary</p>
            <p className="text-neutral-300 mt-2 text-sm">
              Retired from corporate and now a full-time YouTuber. Ex-founder of LCO (acquired), ex-CTO and Sr. Director at PW.
              Runs 2 YT channels (950k & 470k), visited 43 countries.
            </p>
            <div className="mt-4">
              <p className="text-xl font-semibold text-white">Approach</p>
              <p className="text-neutral-300 text-sm">
                Project-based courses with peer learning and bounties loaded with activities.
              </p>
            </div>
          </div>
          <div className="flex gap-4 text-white">
            <FaLinkedin />
            <FaYoutube />
            <FaInstagram />
            <FaTwitter/>
          </div>
        </CardSpotlight>
      </motion.div>

      {/* Right Column */}
      <div className="flex flex-col gap-4 items-center md:items-start">
        <motion.div variants={cardVariants}>
          <CardSpotlight className="h-40 w-full max-w-md hover:shadow-2xl transition-all duration-300">
            <p className="text-xl font-bold relative z-20 text-white flex items-center gap-2 mt-2">
              <img src="src/assets/chaicode/chai-white.svg" alt="ChaiCode" className="w-10 h-10" />
              Code and Chill
            </p>
            <p className="text-neutral-300 mt-4 relative z-20 text-sm mb-3 p-2">
              Coding should be fun, not frightening. It might feel tough at first, but with time and practice, everything starts to click and fall in place.
            </p>
          </CardSpotlight>
        </motion.div>
        <motion.div variants={cardVariants}>
          <CardSpotlight className="h-40 w-full max-w-md hover:shadow-2xl transition-all duration-300">
            <p className="text-xl font-bold relative z-20 text-white flex items-center gap-2 mt-2">
              <img src="src/assets/chaicode/chai-white.svg" alt="ChaiCode" className="w-10 h-10" />
              Improve Communication
            </p>
            <p className="text-neutral-300 mt-4 relative z-20 text-sm mb-3 p-2">
              One of the best ways to boost communication skills is to practice it. Our peer classes make it happen where co-learners teach, share, and grow together.
            </p>
          </CardSpotlight>
        </motion.div>
        <motion.div variants={cardVariants}>
          <CardSpotlight className="h-40 w-full max-w-md hover:shadow-2xl transition-all duration-300">
            <p className="text-xl font-bold relative z-20 text-white flex items-center gap-2 mt-2">
              <img src="src/assets/chaicode/chai-white.svg" alt="ChaiCode" className="w-10 h-10" />
              Bounties
            </p>
            <p className="text-neutral-300 mt-4 relative z-20 text-sm mb-3 p-2">
              Every cohort comes with exciting cash prizes and some even feature a MacBook giveaway! It's our way of keeping the motivation high and the learning fun.
            </p>
          </CardSpotlight>
        </motion.div>
      </div>
    </motion.div>
    <MovingBorderDemo/>
    </>

  );
}

export default CardSpotlightDemo;
