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

  const benefits = [
    {
      title: "Taught By Professionals",
      description:
        "Our cohorts are being taught by top industry experts and educators.",
    },
    {
      title: "Bounties",
      description:
        "Earn rewards, from cash to MacBook. Keeps you motivated to work hard.",
    },
    {
      title: "Coding Hostels",
      description:
        "There is nothing like night discussions with fellow learners and solving bugs.",
    },
    {
      title: "Peer Code Reviews",
      description:
        "With our internal tools like Masterji, every code assignment gets feedback to improve your code.",
    },
    {
      title: "Leet Lab",
      description:
        "Our in-house built LeetCode-style platform helps you understand the foundation of programming.",
    },
    {
      title: "Revision Classes",
      description:
        "We have so many peer classes by fellow learners that you get multiple chances to learn each topic.",
    },
  ];

  return (
    <section
      className="w-full"
      role="region"
      aria-label="Key benefits of ChaiCode"
    >
      <div className="px-20 mt-20" role="presentation">
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

      {/* Benefits Cards */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 md:px-16 lg:px-20 mb-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        role="presentation"
      >
        {benefits.map((benefit, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            role="listitem"
            className="relative bg-white dark:bg-neutral-900 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 group"
          >
            {/* Gradient Overlay on Hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-orange-200 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl z-0"></div>

            {/* Card Content */}
            <div className="relative z-10">
              <div className="flex items-center gap-4">
                <img
                  src={LogoDark}
                  alt="ChaiCode Logo - Light"
                  className="block dark:hidden"
                  width={40}
                  height={40}
                  aria-hidden="true"
                />
                <img
                  src={LogoLight}
                  alt="ChaiCode Logo - Dark"
                  className="hidden dark:block"
                  width={40}
                  height={40}
                  aria-hidden="true"
                />
                <h3 className="text-xl font-bold text-black dark:text-white">
                  {benefit.title}
                </h3>
              </div>
              <p className="text-sm text-neutral-600 dark:text-neutral-300 mt-4">
                {benefit.description}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>

{/* Alumni Network Section */}
<motion.div
  className="relative bg-white dark:bg-neutral-900 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 mx-6 md:mx-16 lg:mx-20 group mb-10"
  variants={{
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  }}
  role="complementary"
  aria-label="Alumni network and job opportunities"
>
  {/* Gradient Overlay on Hover */}
  <div className="absolute inset-0 bg-gradient-to-r from-orange-200 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl px-6 md:px-16 lg:px-20 z-0"></div>

  {/* Alumni Content */}
  <div className="relative z-10 flex flex-col md:flex-row w-full h-full">
    {/* Left Section - Grid Logos */}
    <div
      className="md:w-1/3 w-full p-4 flex justify-center items-center"
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
          "https://randomuser.me/api/portraits/women/68.jpg",
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
    </div>

    {/* Right Section - Text */}
    <div
      className="md:w-2/3 w-full px-6 py-4 flex flex-col justify-center"
      role="article"
    >
      <p
        className="text-xl font-bold flex items-center gap-2 mt-2 text-black dark:text-white"
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
      <p className="text-sm text-neutral-600 dark:text-neutral-300 mt-4">
        The alumni network you always wished for in your college. Connect,
        collaborate, and build real-world projects together. Our HR team
        regularly shares job opportunities you can apply to instantly.
      </p>
    </div>
  </div>
</motion.div>

      <JoinNowButton />
    </section>
  );
}

export default KeyBenefits;