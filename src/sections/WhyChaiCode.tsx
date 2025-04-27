import { FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
import { motion } from "framer-motion";
import HiteshSir from "@/assets/images/hitesh-sir.jpeg";
import { JoinNowButton } from "@/layout/Join-Now-Button";


export function WhyChaiCodeCards() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const leftCards = [
    {
      title: "Comprehensive Curriculum",
      description:
        "Master key concepts and hands-on skills with clarity and confidence. Learn what truly matters, the right way, thorough, practical, and easy to understand.",
      icon: "src/assets/chaicode/chai-white.svg",
    },
    {
      title: "You finish it",
      description:
        "Our cohort is a collaborative journey. Students learn together, stay motivated, and complete the course on time as a community.",
      icon: "src/assets/chaicode/chai-white.svg",
    },
    {
      title: "Industry Guests",
      description:
        "We are connected with industry experts and regularly invite them into our classes for engaging, fun, and insightful sessions with students.",
      icon: "src/assets/chaicode/chai-white.svg",
    },
  ];

  const rightCards = [
    {
      title: "Code and Chill",
      description:
        "Coding should be fun, not frightening. It might feel tough at first, but with time and practice, everything starts to click and fall in place.",
      icon: "src/assets/chaicode/chai-white.svg",
    },
    {
      title: "Improve Communication",
      description:
        "One of the best ways to boost communication skills is to practice it. Our peer classes make it happen where co-learners teach, share, and grow together.",
      icon: "src/assets/chaicode/chai-white.svg",
    },
    {
      title: "Bounties",
      description:
        "Every cohort comes with exciting cash prizes and some even feature a MacBook giveaway! It's our way of keeping the motivation high and the learning fun.",
      icon: "src/assets/chaicode/chai-white.svg",
    },
  ];

  return (
    <section
      className="w-full"
      role="region"
      aria-label="Why choose ChaiCode section"
    >
      <div className="px-20 mt-20" role="presentation">
        <h4
          className="text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium text-black dark:text-white mt-20"
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
        className="grid grid-cols-1 lg:grid-cols-7 gap-6 px-4 md:px-20 mb-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        role="presentation"
      >
        {/* Left Cards */}
        <div className="col-span-2 flex flex-col gap-4">
          {leftCards.map((card, index) => (
            <motion.div key={index} variants={cardVariants} role="listitem">
              <div className="relative bg-white dark:bg-neutral-900 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6">
                <div className="absolute -top-6 left-6 w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center shadow-md">
                  <img
                    src={card.icon}
                    alt={`${card.title} icon`}
                    className="w-6 h-6"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="text-xl font-bold text-black dark:text-white mt-8">
                  {card.title}
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-300 mt-4">
                  {card.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Middle Card (Hitesh Sir) */}
        <motion.div
          variants={cardVariants}
          role="listitem"
          className="col-span-3 flex flex-col items-center justify-center bg-white dark:bg-neutral-900 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8"
        >
          <img
            src={HiteshSir}
            alt="Hitesh Choudhary"
            className="w-32 h-32 rounded-full shadow-md mb-6"
          />
          <h3 className="text-2xl font-bold text-black dark:text-white">
            Hitesh Choudhary
          </h3>
          <p className="text-sm text-neutral-600 dark:text-neutral-300 mt-4 text-center">
            Retired from corporate and now a full-time YouTuber. Ex-founder of
            LCO (acquired), ex-CTO and Sr. Director at PW. Runs 2 YT channels
            (950k & 470k), visited 43 countries.
          </p>
          <p className="text-sm text-neutral-600 dark:text-neutral-300 mt-4 text-center">
            <strong>Approach:</strong> Project-based courses with peer learning
            and bounties loaded with activities.
          </p>
          <div className="flex gap-4 mt-4">
            <a href="#" className="text-neutral-600 dark:text-neutral-300">
              <FaLinkedin size={20} />
            </a>
            <a href="#" className="text-neutral-600 dark:text-neutral-300">
              <FaYoutube size={20} />
            </a>
            <a href="#" className="text-neutral-600 dark:text-neutral-300">
              <FaInstagram size={20} />
            </a>
            <a href="#" className="text-neutral-600 dark:text-neutral-300">
              <FaTwitter size={20} />
            </a>
          </div>
        </motion.div>

        {/* Right Cards */}
        <div className="col-span-2 flex flex-col gap-4">
          {rightCards.map((card, index) => (
            <motion.div key={index} variants={cardVariants} role="listitem">
              <div className="relative bg-white dark:bg-neutral-900 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6">
                <div className="absolute -top-6 left-6 w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center shadow-md">
                  <img
                    src={card.icon}
                    alt={`${card.title} icon`}
                    className="w-6 h-6"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="text-xl font-bold text-black dark:text-white mt-8">
                  {card.title}
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-300 mt-4">
                  {card.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
      <JoinNowButton/>

    </section>
  );
}

export default WhyChaiCodeCards;


