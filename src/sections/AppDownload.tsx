'use client';

import { motion } from "framer-motion";
import { FaGooglePlay, FaApple } from "react-icons/fa";
import LogoLight from "@/assets/chaicode/chaicode-white.svg";

export function AppDownload() {
    return (
      <section className="w-full relative py-16 sm:py-24 md:py-32 overflow-hidden">
        {/* Glow Behind the Phone */}
        <div className="absolute top-1/2 left-1/2 w-[700px] h-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 opacity-30 blur-3xl z-0" />
  
        {/* Main Content */}
        <div className="relative z-10 max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between px-6 sm:px-10 gap-12">
          {/* Right Side - Text Section */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 text-center md:text-left"
          >
<div 
        className="px-20 mt-20"
        role="presentation"
      >
        <h4 
          className="text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium text-black dark:text-white mt-20"
          role="heading"
          aria-level={2}
        >
          Learn and Code Anywhere
        </h4>

        <p 
          className="text-sm lg:text-base max-w-2xl my-4 mx-auto text-neutral-500 text-center font-normal dark:text-neutral-300"
          role="text"
        >
            Our app is designed to make learning easy and accessible. Whether you're
            at home or on the move, you can access your courses anytime, anywhere.
        </p>
      </div>
  
            {/* Features List with Icons */}
            <ul className="text-left text-neutral-500 dark:text-neutral-400 mb-10 space-y-6 text-sm sm:text-base">
              {[
                { icon: "⚡", text: "Offline course access" },
                { icon: "🔔", text: "Live session notifications" },
                { icon: "📱", text: "Revision while commuting" },
              ].map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="flex items-center gap-4 bg-gradient-to-r from-orange-100 to-orange-200 dark:from-orange-800 dark:to-orange-900 p-4 rounded-xl shadow-md hover:shadow-lg transition-all"
                >
                  <span className="flex items-center justify-center text-orange-500 text-2xl bg-orange-300 dark:bg-orange-700 w-12 h-12 rounded-full shadow-md">
                    {item.icon}
                  </span>
                  <span className="text-neutral-800 dark:text-neutral-200 font-medium">
                    {item.text}
                  </span>
                </motion.li>
              ))}
            </ul>
  
            {/* Download Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start hidden md:flex">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-6 rounded-lg shadow-lg transition-all text-sm"
              >
                <FaApple className="text-lg" />
                Download on the App Store
              </a>
  
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-6 rounded-lg shadow-lg transition-all text-sm"
              >
                <FaGooglePlay className="text-lg" />
                Download on Google Play
              </a>
            </div>
          </motion.div>
  
          {/* Left Side - Phone */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 flex justify-center"
          >
            <div className="relative w-[260px] sm:w-[300px] md:w-[340px] h-[520px] sm:h-[580px] md:h-[640px] bg-gradient-to-b from-neutral-800 to-neutral-900 rounded-[2.5rem] p-4 shadow-2xl flex flex-col gap-4 overflow-hidden border-4 border-neutral-700">
              {/* Notch */}
              <div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-2 rounded-full bg-neutral-600" />
  
              {/* Inside Phone Content */}
              <div className="flex flex-col h-full">
                {/* Header - Logo Only */}
                <div className="flex justify-center items-center h-12 bg-orange-500 rounded-t-[1.5rem] ">
                  <img
                    src={LogoLight}
                    alt="ChaiCode Logo - Dark"
                    className="w-[80px] md:w-[100px]"
                    width={100}
                    height={100}
                    aria-hidden="true"
                    loading="lazy"
                  />
                </div>
  
                {/* Cards Section */}
                <div className="flex-1 mt-4 overflow-y-auto scrollbar-hide">
                  {[
                    { title: "React Native Masterclass" },
                    { title: "Full Stack JavaScript" },
                    { title: "AI with JavaScript" },
                  ].map((course, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.2 }}
                      className="bg-neutral-700 dark:bg-neutral-800 rounded-xl p-4 flex flex-col gap-2 shadow-md hover:scale-[1.02] transition-transform mb-4"
                    >
                      <div className="text-white font-medium text-sm sm:text-base">
                        {course.title}
                      </div>
                      <div className="flex justify-end">
                        <button className="bg-orange-500 hover:bg-orange-600 text-white text-[10px] sm:text-xs font-semibold py-1 px-3 rounded-md transition-all">
                          Enroll Now
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </div>
                {/* Footer - Gradient Effect */}
                <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-neutral-800 to-transparent rounded-b-[2.5rem] pointer-events-none" />
                {/* Footer - Download Buttons */}
                <div className="absolute bottom-4 md:left-1/2 md:-translate-x-1/2 md:w-full flex flex-col md:flex-row md:justify-center justify-end gap-4 mb-5 mx-auto sm:mx-0 ">
                    <a
                      href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-3 bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-4 rounded-lg shadow-lg transition-all text-sm"
                    >
                      <FaApple className="text-lg" />
                      Download
                    </a>
                    <a
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-3 bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-4 rounded-lg shadow-lg transition-all text-sm"
                    >
                      <FaGooglePlay className="text-lg" />
                      Download
                    </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    );
  }
