import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export const LoadingTypewriter = () => {
  const hindiText = "Haanji, kese hai aap sab, swagat hai aapka chai code par!!!!";
  const englishText = "Hi, How are you, welcome on our chai code platform";
  const [hindiIndex, setHindiIndex] = useState(0);
  const [englishIndex, setEnglishIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    if (hindiIndex < hindiText.length) {
      const timeout = setTimeout(() => {
        setHindiIndex(prev => prev + 1);
      }, 50);
      return () => clearTimeout(timeout);
    } else if (englishIndex < englishText.length) {
      const timeout = setTimeout(() => {
        setEnglishIndex(prev => prev + 1);
      }, 400);
      return () => clearTimeout(timeout);
    }
  }, [hindiIndex, englishIndex]);

  // Cursor blink effect
  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white dark:bg-black">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="space-y-4 max-w-2xl mx-auto px-4 text-center"
      >
        <div className="relative inline-block">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
            {hindiText.slice(0, hindiIndex)}
            {hindiIndex < hindiText.length && (
              <span className={`${showCursor ? 'opacity-100' : 'opacity-0'} text-orange-500`}>|</span>
            )}
          </h2>
        </div>
        {hindiIndex === hindiText.length && (
          <div className="relative inline-block mt-4">
            <p className="text-lg md:text-xl lg:text-2xl text-neutral-600 dark:text-neutral-400">
              {englishText.slice(0, englishIndex)}
              {englishIndex < englishText.length && (
                <span className={`${showCursor ? 'opacity-100' : 'opacity-0'} text-orange-500`}>|</span>
              )}
            </p>
          </div>
        )}
      </motion.div>
    </div>
  );
}; 