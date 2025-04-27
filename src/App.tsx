import React, { Suspense, useEffect, useState } from "react";
import { DotBackgroundDemo } from "./components/ui/background"
import { Header } from "./layout/Header"
import { ErrorBoundary } from "react-error-boundary";
import { TopicsCloud } from "./sections/TopicsCloud";
import { FreeApi } from "./sections/FreeApi";
import { motion } from "framer-motion";
import CompaniesSection from "./sections/Companies";
import { AppDownload } from "./sections/AppDownload";

// Lazy load components with proper type casting
const Udemy = React.lazy(() => import("./sections/Udemy"));
const StudentsFeedback = React.lazy(() => import("./sections/StudentsFeedback"));
const TweetLove = React.lazy(() => import("./sections/TweetLove"));
const HeroSectionOne = React.lazy(() => import("./sections/HeroSection"));
const CohortLiveClasses = React.lazy(() => import("./sections/CohortLiveClasses"));
const KeyBenefits = React.lazy(() => import("./sections/KeyBenefits"));
const WhyChaiCodeCards = React.lazy(() => import("./sections/WhyChaiCode"));
const JoinCommunity = React.lazy(() => import("./sections/JoinCommunity"));
const Footer = React.lazy(() => import("./layout/Footer"));
const ChatBot = React.lazy(() => import("./layout/ChatBot"));

// Add global styles for smooth scrolling
const globalStyles = `
  html {
    scroll-behavior: smooth;
    scroll-padding-top: 100px;
  }

  * {
    scroll-margin-top: 100px;
  }
`;

// Error Fallback Component
function ErrorFallback({ error, resetErrorBoundary }: { error: Error; resetErrorBoundary: () => void }) {
  return (
    <div className="p-4 bg-red-50 text-red-800 rounded-lg">
      <h2 className="text-lg font-semibold">Something went wrong:</h2>
      <pre className="mt-2 text-sm">{error.message}</pre>
      <button
        onClick={resetErrorBoundary}
        className="mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
      >
        Try again
      </button>
    </div>
  );
}

// Loading component with typewriter effect
const LoadingTypewriter = () => {
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
      }, 40);
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

function App() {
  useEffect(() => {
    const styleElement = document.createElement('style');
    styleElement.innerHTML = globalStyles;
    document.head.appendChild(styleElement);

    return () => {
      document.head.removeChild(styleElement);
    };
  }, []);

  return (
    <>
      <DotBackgroundDemo>
        <Header />
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <Suspense fallback={<LoadingTypewriter />}>
            <HeroSectionOne />
            <TweetLove />
            <CompaniesSection/>
            <div id="cohort" className="scroll-mt-32">
              <CohortLiveClasses/>
            </div>
            <div id="reviews" className="scroll-mt-32">
              <StudentsFeedback/>
            </div>
            <div id="udemy" className="scroll-mt-32">
              <Udemy/>
            </div>
            <KeyBenefits/>
            <WhyChaiCodeCards/>
            <TopicsCloud/>
            <div id="docs" className="scroll-mt-32">
              <FreeApi/>
            </div>
            <div id="app" className="scroll-mt-32">
              <AppDownload/>
            </div>
            {/* <AppDownload/> */}
            <JoinCommunity/>
            <Footer/>
            <ChatBot/>
          </Suspense>
        </ErrorBoundary>
      </DotBackgroundDemo>
    </>
  )
}

export default App
