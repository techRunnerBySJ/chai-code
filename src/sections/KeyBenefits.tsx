"use client";

import { JoinNowButton } from "../layout/Join-Now-Button";
import { motion } from "framer-motion";
import { FaChalkboardTeacher, FaGift, FaHome, FaCode, FaLaptopCode, FaBookReader } from 'react-icons/fa';
import { useRef, useState, useEffect } from "react";

export function KeyBenefits() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentFocus, setCurrentFocus] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!containerRef.current) return;

      const benefits = containerRef.current.querySelectorAll('[role="listitem"]');
      const totalBenefits = benefits.length;

      if (e.key === 'ArrowRight') {
        e.preventDefault();
        setCurrentFocus(prev => (prev < totalBenefits - 1 ? prev + 1 : 0));
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        setCurrentFocus(prev => (prev > 0 ? prev - 1 : totalBenefits - 1));
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

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
      icon: <FaChalkboardTeacher size={24} />,
      ariaLabel: "Professional instructors teaching our courses"
    },
    {
      title: "Bounties",
      description:
        "Earn rewards, from cash to MacBook. Keeps you motivated to work hard.",
      icon: <FaGift size={24} />,
      ariaLabel: "Rewards and bounties for course completion"
    },
    {
      title: "Coding Hostels",
      description:
        "There is nothing like night discussions with fellow learners and solving bugs.",
      icon: <FaHome size={24} />,
      ariaLabel: "Coding hostels for collaborative learning"
    },
    {
      title: "Peer Code Reviews",
      description:
        "With our internal tools like Masterji, every code assignment gets feedback to improve your code.",
      icon: <FaCode size={24} />,
      ariaLabel: "Peer code review system for better learning"
    },
    {
      title: "Leet Lab",
      description:
        "Our in-house built LeetCode-style platform helps you understand the foundation of programming.",
      icon: <FaLaptopCode size={24} />,
      ariaLabel: "LeetCode-style practice platform"
    },
    {
      title: "Revision Classes",
      description:
        "We have so many peer classes by fellow learners that you get multiple chances to learn each topic.",
      icon: <FaBookReader size={24} />,
      ariaLabel: "Revision classes for better retention"
    },
  ];

  return (
    <section
      id="benefits"
      className="w-full"
      role="region"
      aria-label="Key benefits of ChaiCode"
      ref={containerRef}
    >
      <div className="md:px-10 mt-20" role="presentation">
        <h4 className="section-title" role="heading" aria-level={2}>
          Key Benefits
        </h4>
      
        <p className="section-paragraph" role="text">
          Cohorts are the best way to learn because you finish the course in a timely manner.
        </p>
      </div>

      {/* Benefits Cards */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 md:px-16 lg:px-20 mb-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        role="list"
        aria-label="List of key benefits"
      >
        {benefits.map((benefit, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            role="listitem"
            className={`relative bg-white dark:bg-neutral-900 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 group ${currentFocus === index ? 'ring-2 ring-orange-500' : ''}`}
            tabIndex={0}
            aria-label={benefit.ariaLabel}
          >
            {/* Gradient Overlay on Hover */}
            <div 
              className="absolute inset-0 bg-gradient-to-r from-orange-200 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl z-0"
              role="presentation"
              aria-hidden="true"
            />

            {/* Card Content */}
            <div className="relative z-10">
              <div className="flex items-center gap-4" role="group" aria-label="Benefit icon and title">
                <div 
                  className="text-orange-500 dark:text-orange-400 group-hover:text-white transition-colors duration-300"
                  role="img"
                  aria-hidden="true"
                >
                  {benefit.icon}
                </div>
                <h3 
                  className="text-xl font-bold text-black dark:text-white group-hover:text-white transition-colors duration-300"
                  role="heading"
                  aria-level={3}
                >
                  {benefit.title}
                </h3>
              </div>
              <p 
                className="text-sm text-neutral-600 dark:text-neutral-300 mt-4 group-hover:text-white/90 transition-colors duration-300"
                role="text"
              >
                {benefit.description}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Alumni Network Section */}
      <motion.div
        className="relative bg-white dark:bg-neutral-900 rounded-xl shadow-lg dark:shadow-neutral-800/50 hover:shadow-2xl dark:hover:shadow-neutral-800 transition-all duration-300 mx-6 md:mx-16 lg:mx-20 group mb-10"
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
        }}
        role="complementary"
        aria-label="Alumni network and job opportunities"
        tabIndex={0}
      >
        {/* Gradient Overlay on Hover */}
        <div 
          className="absolute inset-0 bg-gradient-to-r from-orange-200 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl px-6 md:px-16 lg:px-20 z-0"
          role="presentation"
          aria-hidden="true"
        />

        {/* Alumni Content */}
        <div className="relative z-10 flex flex-col md:flex-row w-full h-full">
          {/* Left Section - Grid Logos */}
          <div
            className="md:w-1/3 w-full p-4 flex justify-center items-center"
            role="presentation"
          >
            <div
              className="grid grid-cols-5 gap-4 w-full h-full justify-center items-center max-w-[360px] mx-auto"
              role="presentation"
            >
              {[
                {
                  src: "https://cdn-icons-png.flaticon.com/512/5968/5968866.png",
                  name: "Company 1"
                },
                {
                  src: "https://cdn-icons-png.flaticon.com/512/174/174857.png",
                  name: "LinkedIn"
                },
                {
                  src: "https://randomuser.me/api/portraits/men/32.jpg",
                  name: "Team Member 1"
                },
                {
                  src: "https://randomuser.me/api/portraits/women/44.jpg",
                  name: "Team Member 2"
                },
                {
                  src: "https://cdn-icons-png.flaticon.com/512/732/732221.png",
                  name: "Company 2"
                },
                {
                  src: "https://cdn-icons-png.flaticon.com/512/2111/2111463.png",
                  name: "Company 3"
                },
                {
                  src: "https://cdn-icons-png.flaticon.com/512/733/733553.png",
                  name: "Company 4"
                },
                {
                  src: "https://cdn-icons-png.flaticon.com/512/733/733558.png",
                  name: "Company 5"
                },
                {
                  src: "https://randomuser.me/api/portraits/men/76.jpg",
                  name: "Team Member 3"
                },
                {
                  src: "https://randomuser.me/api/portraits/women/68.jpg",
                  name: "Team Member 4"
                }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  className="relative group aspect-square w-16 h-16"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  role="img"
                  aria-label={`${item.name} logo`}
                >
                  <div 
                    className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-amber-500/20 rounded-full blur-lg group-hover:opacity-100 transition-opacity opacity-0"
                    role="presentation"
                    aria-hidden="true"
                  />
                  <div className="relative bg-white dark:bg-neutral-800 p-1 rounded-full shadow-lg group-hover:scale-105 transition-transform duration-300 aspect-square">
                    <img
                      src={item.src}
                      className="w-full h-full rounded-full object-contain p-1"
                      alt={`${item.name} logo`}
                      loading="lazy"
                    />
                  </div>
                </motion.div>
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
              Alumni Network and Job Listings
            </p>
            <p 
              className="text-sm text-neutral-600 dark:text-neutral-300 mt-4"
              role="text"
            >
              The alumni network you always wished for in your college. Connect,
              collaborate, and build real-world projects together. Our HR team
              regularly shares job opportunities you can apply to instantly.
            </p>
          </div>
        </div>
      </motion.div>

      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>

      <JoinNowButton />
    </section>
  );
}

export default KeyBenefits;