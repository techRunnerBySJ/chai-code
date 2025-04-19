import { CardSpotlight } from "@/components/ui/card-spotlight";
import { FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
import { MovingBorderDemo } from "../layout/Join-Now-Button";
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
    <section 
      className="w-full"
      role="region"
      aria-label="Why choose ChaiCode section"
    >
      <div 
        className="px-20 mt-20"
        role="presentation"
      >
        <h4 
          className="text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium text-black dark:text-white"
          role="heading"
          aria-level={2}
        >
          Why ChaiCode?
        </h4>

        <p 
          className="text-sm lg:text-base max-w-2xl my-4 mx-auto text-neutral-500 text-center font-normal dark:text-neutral-300"
          role="text"
        >
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
        role="presentation"
      >
        {/* Left Column */}
        <div 
          className="flex flex-col gap-4 items-center md:items-start"
          role="list"
          aria-label="Key features of ChaiCode"
        >
          <motion.div variants={cardVariants} role="listitem">
            <CardSpotlight className="h-40 w-full max-w-md hover:shadow-2xl transition-all duration-300">
              <p 
                className="text-xl font-bold relative z-20 text-white flex items-center gap-2 mt-2"
                role="heading"
                aria-level={3}
              >
                <img 
                  src="src/assets/chaicode/chai-white.svg" 
                  alt="ChaiCode logo" 
                  className="w-10 h-10"
                  aria-hidden="true"
                />
                Comprehensive Curriculum
              </p>
              <p 
                className="text-neutral-300 mt-4 relative z-20 text-sm mb-3 p-2"
                role="text"
              >
                Master key concepts and hands-on skills with clarity and confidence. Learn what truly matters, the right way, thorough, practical, and easy to understand.
              </p>
            </CardSpotlight>
          </motion.div>
          <motion.div variants={cardVariants} role="listitem">
            <CardSpotlight className="h-40 w-full max-w-md hover:shadow-2xl transition-all duration-300">
              <p 
                className="text-xl font-bold relative z-20 text-white flex items-center gap-2 mt-2"
                role="heading"
                aria-level={3}
              >
                <img 
                  src="src/assets/chaicode/chai-white.svg" 
                  alt="ChaiCode logo" 
                  className="w-10 h-10"
                  aria-hidden="true"
                />
                You finish it
              </p>
              <p 
                className="text-neutral-300 mt-4 relative z-20 text-sm mb-3 p-2"
                role="text"
              >
                Our cohort are a collaborative journey, students learn together, stay motivated, and complete the course on time as a community.
              </p>
            </CardSpotlight>
          </motion.div>
          <motion.div variants={cardVariants} role="listitem">
            <CardSpotlight className="h-40 w-full max-w-md hover:shadow-2xl transition-all duration-300">
              <p 
                className="text-xl font-bold relative z-20 text-white flex items-center gap-2 mt-2"
                role="heading"
                aria-level={3}
              >
                <img 
                  src="src/assets/chaicode/chai-white.svg" 
                  alt="ChaiCode logo" 
                  className="w-10 h-10"
                  aria-hidden="true"
                />
                Industry Guests
              </p>
              <p 
                className="text-neutral-300 mt-4 relative z-20 text-sm mb-3 p-2"
                role="text"
              >
                We are connected with industry experts and regularly invite them into our classes for engaging, fun, and insightful sessions with students.
              </p>
            </CardSpotlight>
          </motion.div>
        </div>

        {/* Middle Column */}
        <motion.div 
          className="flex justify-center" 
          variants={cardVariants}
          role="complementary"
          aria-label="Instructor profile"
        >
          <CardSpotlight className="h-[513px] w-full max-w-md flex flex-col items-center justify-between py-6 px-4 hover:shadow-2xl transition-all duration-300">
            <img 
              src="src/assets/images/hitesh-sir.jpeg" 
              alt="Hitesh Choudhary - Instructor" 
              className="rounded-lg w-48 h-48 object-cover shadow-md"
            />
            <div className="text-center mt-4">
              <p 
                className="text-2xl font-bold text-white"
                role="heading"
                aria-level={3}
              >
                Hitesh Choudhary
              </p>
              <p 
                className="text-neutral-300 mt-2 text-sm"
                role="text"
              >
                Retired from corporate and now a full-time YouTuber. Ex-founder of LCO (acquired), ex-CTO and Sr. Director at PW.
                Runs 2 YT channels (950k & 470k), visited 43 countries.
              </p>
              <div className="mt-4">
                <p 
                  className="text-xl font-semibold text-white"
                  role="heading"
                  aria-level={4}
                >
                  Approach
                </p>
                <p 
                  className="text-neutral-300 text-sm"
                  role="text"
                >
                  Project-based courses with peer learning and bounties loaded with activities.
                </p>
              </div>
            </div>
            <nav 
              className="flex gap-4 text-white"
              role="navigation"
              aria-label="Social media links"
            >
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
              >
                <FaLinkedin />
              </a>
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="YouTube channel"
              >
                <FaYoutube />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Instagram profile"
              >
                <FaInstagram />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Twitter profile"
              >
                <FaTwitter/>
              </a>
            </nav>
          </CardSpotlight>
        </motion.div>

        {/* Right Column */}
        <div 
          className="flex flex-col gap-4 items-center md:items-start"
          role="list"
          aria-label="Additional features of ChaiCode"
        >
          <motion.div variants={cardVariants} role="listitem">
            <CardSpotlight className="h-40 w-full max-w-md hover:shadow-2xl transition-all duration-300">
              <p 
                className="text-xl font-bold relative z-20 text-white flex items-center gap-2 mt-2"
                role="heading"
                aria-level={3}
              >
                <img 
                  src="src/assets/chaicode/chai-white.svg" 
                  alt="ChaiCode logo" 
                  className="w-10 h-10"
                  aria-hidden="true"
                />
                Code and Chill
              </p>
              <p 
                className="text-neutral-300 mt-4 relative z-20 text-sm mb-3 p-2"
                role="text"
              >
                Coding should be fun, not frightening. It might feel tough at first, but with time and practice, everything starts to click and fall in place.
              </p>
            </CardSpotlight>
          </motion.div>
          <motion.div variants={cardVariants} role="listitem">
            <CardSpotlight className="h-40 w-full max-w-md hover:shadow-2xl transition-all duration-300">
              <p 
                className="text-xl font-bold relative z-20 text-white flex items-center gap-2 mt-2"
                role="heading"
                aria-level={3}
              >
                <img 
                  src="src/assets/chaicode/chai-white.svg" 
                  alt="ChaiCode logo" 
                  className="w-10 h-10"
                  aria-hidden="true"
                />
                Improve Communication
              </p>
              <p 
                className="text-neutral-300 mt-4 relative z-20 text-sm mb-3 p-2"
                role="text"
              >
                One of the best ways to boost communication skills is to practice it. Our peer classes make it happen where co-learners teach, share, and grow together.
              </p>
            </CardSpotlight>
          </motion.div>
          <motion.div variants={cardVariants} role="listitem">
            <CardSpotlight className="h-40 w-full max-w-md hover:shadow-2xl transition-all duration-300">
              <p 
                className="text-xl font-bold relative z-20 text-white flex items-center gap-2 mt-2"
                role="heading"
                aria-level={3}
              >
                <img 
                  src="src/assets/chaicode/chai-white.svg" 
                  alt="ChaiCode logo" 
                  className="w-10 h-10"
                  aria-hidden="true"
                />
                Bounties
              </p>
              <p 
                className="text-neutral-300 mt-4 relative z-20 text-sm mb-3 p-2"
                role="text"
              >
                Every cohort comes with exciting cash prizes and some even feature a MacBook giveaway! It's our way of keeping the motivation high and the learning fun.
              </p>
            </CardSpotlight>
          </motion.div>
        </div>
      </motion.div>
      <MovingBorderDemo/>
    </section>
  );
}

export default CardSpotlightDemo;
