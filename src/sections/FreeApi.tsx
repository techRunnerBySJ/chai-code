import { motion } from "framer-motion";

export const FreeApi = () => {
  return (
    <div 
      className="w-full py-10 relative overflow-hidden"
      role="region"
      aria-label="Free API section"
    >
      <div className="md:px-10 mt-20 mb-10" role="presentation">
        <h4
          className="section-title"
          role="heading"
          aria-level={2}
        >
          Free API - Open Source
        </h4>

      </div>
      {/* Background gradient effect */}
      <div 
        className="absolute inset-0 "
        aria-hidden="true"
      />
      
      <div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative"
        role="main"
      >
        <div 
          className="grid lg:grid-cols-2 gap-12 items-center"
          role="presentation"
        >
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="space-y-6"
            role="article"
            aria-label="API Hub description"
          >
            <motion.h2 
              className="text-xl md:text-2xl lg:text-3xl font-semibold bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              role="heading"
              aria-level={3}
            >
              Unlock Your Potential with Our API Hub
            </motion.h2>
            <motion.p 
              className="text-sm md:text-base text-neutral-600 dark:text-neutral-300 max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              role="text"
            >
              Our API Hub is designed to streamline your learning experience in API handling across
              various programming languages. With this resource, you can effortlessly build and
              showcase your front-end portfolio in both web and mobile applications.
              Join us to enhance your skills and take your coding projects to the next level!
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
              role="presentation"
            >
              <motion.a
                href="https://docs.example.com/freeapi"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-full
                          font-medium text-base shadow-xl shadow-orange-500/20 hover:shadow-orange-500/40
                          transform hover:scale-105 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                role="link"
                aria-label="Visit FreeAPI documentation"
              >
                Check FreeAPI Docs
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Content - Video Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="relative"
            role="complementary"
            aria-label="Video demonstration"
          >
            <div 
              className="absolute inset-0 bg-gradient-to-r from-orange-500 to-amber-500 rounded-2xl transform rotate-1 opacity-30 blur-2xl"
              aria-hidden="true"
            />
            <motion.div
              className="relative bg-white dark:bg-neutral-900 p-6 rounded-2xl border border-neutral-200 dark:border-neutral-800
                         shadow-2xl shadow-orange-500/10"
              whileHover={{ scale: 1.02, rotate: 0 }}
              initial={{ rotate: 1 }}
              transition={{ duration: 0.3 }}
              role="article"
            >
              <div 
                className="aspect-video bg-neutral-100 dark:bg-neutral-800 rounded-lg mb-4 overflow-hidden"
                role="presentation"
              >
                <iframe 
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/xJq0EQMFGyg?si=UgoIh-SY253iFN1a" 
                  title="Free API - Open Source" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  aria-label="Free API tutorial video"
                />
              </div>
              <h3 
                className="text-xl font-semibold text-black dark:text-white mb-1"
                role="heading"
                aria-level={4}
              >
                Checkout our Youtube Video
              </h3>
              <p 
                className="text-sm text-neutral-600 dark:text-neutral-400"
                role="text"
              >
                Watch our comprehensive guide on using FreeAPI
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default FreeApi;
