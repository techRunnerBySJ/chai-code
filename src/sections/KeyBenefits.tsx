import { CardSpotlight } from "@/components/ui/card-spotlight";
import { JoinNowButton } from "../layout/Join-Now-Button";
import LogoLight from "@/assets/chaicode/chai-white.svg";
import LogoDark from "@/assets/chaicode/chai-gray.svg";
import { motion } from "framer-motion";

export function KeyBenefits() {
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

  const alumniVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section 
      className="w-full"
      role="region"
      aria-label="Key benefits of ChaiCode"
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
          Key Benefits
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
        className="grid grid-row-1 md:grid-cols-3 gap-6 px-4 md:px-20 mb-10"
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
          aria-label="Primary benefits"
        >
          <motion.div variants={cardVariants} role="listitem">
            <CardSpotlight className="h-40 w-full max-w-md bg-transparent shadow-xl hover:shadow-2xl transition-all duration-300 dark:border-2 border-0">
              <div className="flex flex-col w-full h-full px-6 py-4 bg-white/90 dark:bg-black/90 hover:bg-white dark:hover:bg-black transition-colors duration-300">
                <p 
                  className="text-xl font-bold relative z-20 flex items-center gap-2 mt-2 text-black dark:text-white"
                  role="heading"
                  aria-level={3}
                >
                  <img
                    src={LogoDark}
                    alt="ChaiCode Logo - Light"
                    className="block dark:hidden"
                    width={32}
                    height={32}
                    aria-hidden="true"
                  />
                  <img
                    src={LogoLight}
                    alt="ChaiCode Logo - Dark"
                    className="hidden dark:block"
                    width={32}
                    height={32}
                    aria-hidden="true"
                  />
                  Taught By Professional
                </p>
                <p 
                  className="text-neutral-600 dark:text-neutral-300 mt-4 relative z-20 text-sm mb-3 p-2"
                  role="text"
                >
                  Our cohorts are being taught by top industry experties and educators.
                </p>
              </div>
            </CardSpotlight>
          </motion.div>
          <motion.div variants={cardVariants} role="listitem">
            <CardSpotlight className="h-40 w-full max-w-md bg-transparent shadow-xl hover:shadow-2xl transition-all duration-300 dark:border-2 border-0">
              <div className="flex flex-col w-full h-full px-6 py-4 bg-white/90 dark:bg-black/90 hover:bg-white dark:hover:bg-black transition-colors duration-300">
                <p 
                  className="text-xl font-bold relative z-20 flex items-center gap-2 mt-2 text-black dark:text-white"
                  role="heading"
                  aria-level={3}
                >
                  <img
                    src={LogoDark}
                    alt="ChaiCode Logo - Light"
                    className="block dark:hidden"
                    width={32}
                    height={32}
                    aria-hidden="true"
                  />
                  <img
                    src={LogoLight}
                    alt="ChaiCode Logo - Dark"
                    className="hidden dark:block"
                    width={32}
                    height={32}
                    aria-hidden="true"
                  />
                  Bounties
                </p>
                <p 
                  className="text-neutral-600 dark:text-neutral-300 mt-4 relative z-20 text-sm mb-3 p-2"
                  role="text"
                >
                  Earn rewards, from cash to MacBook. Keeps you motivated to work hard.
                </p>
              </div>
            </CardSpotlight>
          </motion.div>
        </div>

        {/* Middle Column */}
        <div 
          className="flex flex-col gap-4 items-center md:items-start"
          role="list"
          aria-label="Learning environment benefits"
        >
          <motion.div variants={cardVariants} role="listitem">
            <CardSpotlight className="h-40 w-full max-w-md bg-transparent shadow-xl hover:shadow-2xl transition-all duration-300 dark:border-2 border-0">
              <div className="flex flex-col w-full h-full px-6 py-4 bg-white/90 dark:bg-black/90 hover:bg-white dark:hover:bg-black transition-colors duration-300">
                <p 
                  className="text-xl font-bold relative z-20 flex items-center gap-2 mt-2 text-black dark:text-white"
                  role="heading"
                  aria-level={3}
                >
                  <img
                    src={LogoDark}
                    alt="ChaiCode Logo - Light"
                    className="block dark:hidden"
                    width={32}
                    height={32}
                    aria-hidden="true"
                  />
                  <img
                    src={LogoLight}
                    alt="ChaiCode Logo - Dark"
                    className="hidden dark:block"
                    width={32}
                    height={32}
                    aria-hidden="true"
                  />
                  Coding Hostels
                </p>
                <p 
                  className="text-neutral-600 dark:text-neutral-300 mt-4 relative z-20 text-sm mb-3 p-2"
                  role="text"
                >
                  There is nothing like night discussion with fellow learners and solving bugs.
                </p>
              </div>
            </CardSpotlight>
          </motion.div>
          <motion.div variants={cardVariants} role="listitem">
            <CardSpotlight className="h-40 w-full max-w-md bg-transparent shadow-xl hover:shadow-2xl transition-all duration-300 dark:border-2 border-0">
              <div className="flex flex-col w-full h-full px-6 py-4 bg-white/90 dark:bg-black/90 hover:bg-white dark:hover:bg-black transition-colors duration-300">
                <p 
                  className="text-xl font-bold relative z-20 flex items-center gap-2 mt-2 text-black dark:text-white"
                  role="heading"
                  aria-level={3}
                >
                  <img
                    src={LogoDark}
                    alt="ChaiCode Logo - Light"
                    className="block dark:hidden"
                    width={32}
                    height={32}
                    aria-hidden="true"
                  />
                  <img
                    src={LogoLight}
                    alt="ChaiCode Logo - Dark"
                    className="hidden dark:block"
                    width={32}
                    height={32}
                    aria-hidden="true"
                  />
                  Peer Code Reviews
                </p>
                <p 
                  className="text-neutral-600 dark:text-neutral-300 mt-4 relative z-20 text-sm mb-3 p-2"
                  role="text"
                >
                  With our internal tools like Masterji, every code assignment gets feedback to improve your code.
                </p>
              </div>
            </CardSpotlight>
          </motion.div>
        </div>

        {/* Right Column */}
        <div 
          className="flex flex-col gap-4 items-center md:items-start"
          role="list"
          aria-label="Additional learning benefits"
        >
          <motion.div variants={cardVariants} role="listitem">
            <CardSpotlight className="h-40 w-full max-w-md bg-transparent shadow-xl hover:shadow-2xl transition-all duration-300 dark:border-2 border-0">
              <div className="flex flex-col w-full h-full px-6 py-4 bg-white/90 dark:bg-black/90 hover:bg-white dark:hover:bg-black transition-colors duration-300">
                <p 
                  className="text-xl font-bold relative z-20 flex items-center gap-2 mt-2 text-black dark:text-white"
                  role="heading"
                  aria-level={3}
                >
                  <img
                    src={LogoDark}
                    alt="ChaiCode Logo - Light"
                    className="block dark:hidden"
                    width={32}
                    height={32}
                    aria-hidden="true"
                  />
                  <img
                    src={LogoLight}
                    alt="ChaiCode Logo - Dark"
                    className="hidden dark:block"
                    width={32}
                    height={32}
                    aria-hidden="true"
                  />
                  Leet Lab
                </p>
                <p 
                  className="text-neutral-600 dark:text-neutral-300 mt-4 relative z-20 text-sm mb-3 p-2"
                  role="text"
                >
                  Our in house built LeetCode style platform that helps you to understand foundation of programming language.
                </p>
              </div>
            </CardSpotlight>
          </motion.div>
          <motion.div variants={cardVariants} role="listitem">
            <CardSpotlight className="h-40 w-full max-w-md bg-transparent shadow-xl hover:shadow-2xl transition-all duration-300 dark:border-2 border-0">
              <div className="flex flex-col w-full h-full px-6 py-4 bg-white/90 dark:bg-black/90 hover:bg-white dark:hover:bg-black transition-colors duration-300">
                <p 
                  className="text-xl font-bold relative z-20 flex items-center gap-2 mt-2 text-black dark:text-white"
                  role="heading"
                  aria-level={3}
                >
                  <img
                    src={LogoDark}
                    alt="ChaiCode Logo - Light"
                    className="block dark:hidden"
                    width={32}
                    height={32}
                    aria-hidden="true"
                  />
                  <img
                    src={LogoLight}
                    alt="ChaiCode Logo - Dark"
                    className="hidden dark:block"
                    width={32}
                    height={32}
                    aria-hidden="true"
                  />
                  Revision Classes
                </p>
                <p 
                  className="text-neutral-600 dark:text-neutral-300 mt-4 relative z-20 text-sm mb-3 p-2"
                  role="text"
                >
                  We have so many peer classes by fellow learners that you get so many chances to learn that topic.
                </p>
              </div>
            </CardSpotlight>
          </motion.div>
        </div>

        {/* Alumni Network Section */}
        <motion.div 
          className="w-full h-auto bg-transparent shadow-2xl md:col-span-3 dark:border-2 border-0"
          variants={alumniVariants}
          role="complementary"
          aria-label="Alumni network and job opportunities"
        >
          <div 
            className="flex flex-col md:flex-row w-full h-full shadow-2xl overflow-hidden"
            role="presentation"
          >
            {/* Left Section - Grid Logos */}
            <motion.div 
              className="md:w-1/3 w-full p-4 bg-white dark:bg-black flex justify-center items-center"
              variants={alumniVariants}
              role="presentation"
            >
              <div 
                className="grid grid-cols-5 gap-3 w-full h-full justify-center items-center"
                role="presentation"
              >
                {[
                  "https://cdn-icons-png.flaticon.com/512/5968/5968866.png",
                  "https://cdn-icons-png.flaticon.com/512/174/174857.png",
                  "https://randomuser.me/api/portraits/men/32.jpg",
                  "https://randomuser.me/api/portraits/women/44.jpg",
                  "https://cdn-icons-png.flaticon.com/512/732/732221.png",
                  "https://cdn-icons-png.flaticon.com/512/2111/2111463.png",
                  "https://cdn-icons-png.flaticon.com/512/733/733553.png",
                  "https://cdn-icons-png.flaticon.com/512/733/733558.png",
                  "https://randomuser.me/api/portraits/men/76.jpg",
                  "https://randomuser.me/api/portraits/women/68.jpg"
                ].map((src, idx) => (
                  <motion.img
                    key={idx}
                    src={src}
                    className="w-14 h-14 md:w-16 md:h-16 rounded-full border-2 border-purple-400 shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out"
                    alt={`Company logo ${idx + 1}`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    role="presentation"
                  />
                ))}
              </div>
            </motion.div>

            {/* Right Section - Text */}
            <motion.div 
              className="md:w-2/3 w-full px-6 py-4 flex flex-col justify-center dark:bg-transparent bg-white"
              variants={alumniVariants}
              role="article"
            >
              <p 
                className="text-xl font-bold relative z-20 flex items-center gap-2 mt-2 text-black dark:text-white"
                role="heading"
                aria-level={3}
              >
                <img
                  src={LogoDark}
                  alt="ChaiCode Logo - Light"
                  className="block dark:hidden"
                  width={32}
                  height={32}
                  aria-hidden="true"
                />
                <img
                  src={LogoLight}
                  alt="ChaiCode Logo - Dark"
                  className="hidden dark:block"
                  width={32}
                  height={32}
                  aria-hidden="true"
                />
                Alumni Network and Job Listings
              </p>
              <p 
                className="text-neutral-500 dark:text-neutral-300 mt-4 relative z-20 text-sm mb-3 p-2"
                role="text"
              >
                The alumni network you always wished for in your college. Connect, collaborate, and build real-world projects together.
                Our HR team regularly shares job opportunities you can apply to instantly.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      <JoinNowButton/>
    </section>
  );
}

export default KeyBenefits;
