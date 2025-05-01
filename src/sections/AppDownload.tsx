'use client';

import { motion } from "framer-motion";
import { FaGooglePlay, FaApple } from "react-icons/fa";
import { MdDownload, MdNotifications, MdCommute } from "react-icons/md";
import LogoLight from "@/assets/chaicode/chaicode-white.svg";
import { useEffect, useRef } from "react";

export function AppDownload() {
  const featuresRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Tab' && featuresRef.current) {
        const focusableElements = featuresRef.current.querySelectorAll('button, a');
        const firstElement = focusableElements[0] as HTMLElement;
        const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

        if (e.shiftKey && document.activeElement === firstElement) {
          e.preventDefault();
          lastElement.focus();
        } else if (!e.shiftKey && document.activeElement === lastElement) {
          e.preventDefault();
          firstElement.focus();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <section 
      className="w-full relative py-16 sm:py-24 md:py-32 overflow-hidden"
      role="region"
      aria-label="App download section"
    >
      {/* Glow Behind the Phone */}
      <div 
        className="absolute top-1/2 left-1/2 w-[700px] h-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-orange-400 to-orange-00 opacity-30 blur-3xl z-0"
        role="presentation"
        aria-hidden="true"
      />

      {/* Main Content */}
      <div 
        className="relative z-10 max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between px-6 sm:px-10 gap-12"
        role="main"
      >
        {/* Right Side - Text Section */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2 text-center md:text-left"
          role="complementary"
          aria-label="App features and description"
        >
          <div 
            className="md:px-10 md:mt-20"
            role="presentation"
          >
            <h4
              className="section-title"
              role="heading"
              aria-level={2}
            >
              Learn And Code Anywhere
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
          <ul 
            ref={featuresRef}
            className="text-left text-neutral-500 dark:text-neutral-400 mb-10 space-y-6 text-sm sm:text-base"
            role="list"
            aria-label="App features"
          >
            {[
              { icon: <MdDownload size={24} />, text: "Offline course access" },
              { icon: <MdNotifications size={24} />, text: "Live session notifications" },
              { icon: <MdCommute size={24} />, text: "Revision while commuting" },
            ].map((item, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.2,
                  type: "spring",
                  stiffness: 100,
                  damping: 10
                }}
                className="flex items-center gap-4 bg-gradient-to-r from-orange-100 to-orange-200 dark:from-orange-400 dark:to-orange-300 p-4 rounded-xl shadow-md hover:shadow-lg transition-all"
                role="listitem"
                aria-label={`Feature ${index + 1}: ${item.text}`}
                tabIndex={0}
              >
                <motion.span 
                  initial={{ scale: 0.8, rotate: -10 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.2 + 0.2,
                    type: "spring",
                    stiffness: 200,
                    damping: 15
                  }}
                  className="flex items-center justify-center text-orange-200 text-2xl bg-orange-300 dark:bg-orange-700 w-12 h-12 rounded-full shadow-md"
                  role="img"
                  aria-hidden="true"
                >
                  {item.icon}
                </motion.span>
                <motion.span 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.2 + 0.3,
                    type: "spring",
                    stiffness: 100,
                    damping: 10
                  }}
                  className="text-neutral-800 dark:text-neutral-200 font-medium"
                  role="text"
                >
                  {item.text}
                </motion.span>
              </motion.li>
            ))}
          </ul>

          {/* Download Buttons */}
          <div 
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start md:flex"
            role="group"
            aria-label="Download options"
          >
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-6 rounded-lg shadow-lg transition-all text-sm"
              role="button"
              aria-label="Download on the App Store"
              tabIndex={0}
            >
              <FaApple className="text-lg" aria-hidden="true" />
              Download on the App Store
            </a>

            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-6 rounded-lg shadow-lg transition-all text-sm"
              role="button"
              aria-label="Download on Google Play"
              tabIndex={0}
            >
              <FaGooglePlay className="text-lg" aria-hidden="true" />
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
          role="complementary"
          aria-label="App preview"
        >
          <div 
            className="relative w-[260px] sm:w-[300px] md:w-[340px] h-[520px] sm:h-[580px] md:h-[640px] bg-gradient-to-b from-neutral-800 to-neutral-900 rounded-[2.5rem] p-4 shadow-2xl flex flex-col gap-4 overflow-hidden border-4 border-neutral-700"
            role="img"
            aria-label="Phone mockup showing app interface"
          >
            {/* Notch */}
            <div 
              className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-2 rounded-full bg-neutral-600"
              role="presentation"
              aria-hidden="true"
            />

            {/* Inside Phone Content */}
            <div 
              className="flex flex-col h-full"
              role="presentation"
            >
              {/* Header - Logo Only */}
              <div 
                className="flex justify-center items-center h-12 bg-orange-500 rounded-t-[1.5rem]"
                role="banner"
              >
                <img
                  src={LogoLight}
                  alt="ChaiCode Logo"
                  className="w-[80px] md:w-[100px]"
                  width={100}
                  height={100}
                  role="img"
                />
              </div>

              {/* Cards Section */}
              <div 
                className="flex-1 mt-4 overflow-y-auto scrollbar-hide"
                role="list"
                aria-label="Course cards"
              >
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
                    role="listitem"
                    aria-label={`Course: ${course.title}`}
                    tabIndex={0}
                  >
                    <div 
                      className="text-white font-medium text-sm sm:text-base"
                      role="heading"
                      aria-level={3}
                    >
                      {course.title}
                    </div>
                    <div className="flex justify-end">
                      <button 
                        className="bg-orange-500 hover:bg-orange-600 text-white text-[10px] sm:text-xs font-semibold py-1 px-3 rounded-md transition-all"
                        role="button"
                        aria-label={`Enroll in ${course.title}`}
                        tabIndex={0}
                      >
                        Enroll Now
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
              {/* Footer - Gradient Effect */}
              <div 
                className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-neutral-800 to-transparent rounded-b-[2.5rem] pointer-events-none"
                role="presentation"
                aria-hidden="true"
              />
              {/* Footer - Download Buttons */}
              <div 
                className="absolute bottom-4 md:left-1/2 md:-translate-x-1/2 md:w-full hidden md:flex md:flex-row md:justify-center justify-end gap-4 mb-5 mx-auto sm:mx-0"
                role="group"
                aria-label="Mobile download options"
              >
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-4 rounded-lg shadow-lg transition-all text-sm"
                  role="button"
                  aria-label="Download on the App Store"
                  tabIndex={0}
                >
                  <FaApple className="text-lg" aria-hidden="true" />
                  Download
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-4 rounded-lg shadow-lg transition-all text-sm"
                  role="button"
                  aria-label="Download on Google Play"
                  tabIndex={0}
                >
                  <FaGooglePlay className="text-lg" aria-hidden="true" />
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

export default AppDownload;
