import React, { Suspense, useEffect } from "react";
import { DotBackgroundDemo } from "./components/ui/background"
import { Header } from "./layout/Header"
import { ErrorBoundary } from "react-error-boundary";
import { LoadingTypewriter } from "./components/ui/loading-typewriter";

// Critical components loaded immediately
const HeroSectionOne = React.lazy(() => import("./sections/HeroSection"));

// Secondary components with lower priority
const lazyWithDelay = <T extends { default: React.ComponentType<unknown> }>(
  importFn: () => Promise<T>,
  delay: number = 1000
): Promise<T> =>
  new Promise(resolve => {
    setTimeout(() => importFn().then(resolve), delay);
  });

// Components that can be loaded after initial render
const TopicsCloud = React.lazy(() => lazyWithDelay(() => import("./sections/TopicsCloud")));
const FreeApi = React.lazy(() => lazyWithDelay(() => import("./sections/FreeApi")));
const CompaniesSection = React.lazy(() => lazyWithDelay(() => import("./sections/Companies")));
const AppDownload = React.lazy(() => lazyWithDelay(() => import("./sections/AppDownload")));
const Udemy = React.lazy(() => lazyWithDelay(() => import("./sections/Udemy")));
const StudentsFeedback = React.lazy(() => lazyWithDelay(() => import("./sections/StudentsFeedback")));
const TweetLove = React.lazy(() => import("./sections/TweetLove"));
const CohortLiveClasses = React.lazy(() => lazyWithDelay(() => import("./sections/CohortLiveClasses")));
const KeyBenefits = React.lazy(() => lazyWithDelay(() => import("./sections/KeyBenefits")));
const WhyChaiCodeCards = React.lazy(() => lazyWithDelay(() => import("./sections/WhyChaiCode")));
const JoinCommunity = React.lazy(() => lazyWithDelay(() => import("./sections/JoinCommunity")));
const Footer = React.lazy(() => lazyWithDelay(() => import("./layout/Footer")));
const ChatBot = React.lazy(() => lazyWithDelay(() => import("./layout/ChatBot"), 2000));

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

function App() {
  useEffect(() => {
    const styleElement = document.createElement('style');
    styleElement.innerHTML = globalStyles;
    document.head.appendChild(styleElement);

    // Preload Twitter script
    if (!window.twttr) {
      const script = document.createElement("script");
      script.src = "https://platform.twitter.com/widgets.js";
      script.async = true;
      document.body.appendChild(script);
    }

    return () => {
      document.head.removeChild(styleElement);
    };
  }, []);

  useEffect(() => {
    // Preload critical components after initial render
    const preloadComponents = async () => {
      const componentsToPreload = [
        () => import("./sections/TopicsCloud"),
        () => import("./sections/Companies"),
        () => import("./sections/CohortLiveClasses")
      ];
      
      await Promise.all(componentsToPreload.map(comp => comp()));
    };

    preloadComponents();
  }, []);

  return (
    <>
      <DotBackgroundDemo>
        <Header />
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          {/* Critical content loaded first */}
          <Suspense fallback={<LoadingTypewriter />}>
            <HeroSectionOne />
          </Suspense>

          {/* Secondary content loaded in chunks */}
          <Suspense fallback={null}>
            <TweetLove />
            <CompaniesSection/>
          </Suspense>

          <Suspense fallback={null}>
            <div id="cohort" className="scroll-mt-32">
              <CohortLiveClasses/>
            </div>
            <div id="reviews" className="scroll-mt-32">
              <StudentsFeedback/>
            </div>
          </Suspense>

          <Suspense fallback={null}>
            <div id="udemy" className="scroll-mt-32">
              <Udemy/>
            </div>
            <KeyBenefits/>
            <WhyChaiCodeCards/>
          </Suspense>

          <Suspense fallback={null}>
            <TopicsCloud/>
            <div id="docs" className="scroll-mt-32">
              <FreeApi/>
            </div>
            <div id="app" className="scroll-mt-32">
              <AppDownload/>
            </div>
          </Suspense>

          <Suspense fallback={null}>
            <JoinCommunity/>
            <Footer/>
          </Suspense>

          {/* Load ChatBot with lowest priority */}
          <Suspense fallback={null}>
            <ChatBot/>
          </Suspense>
        </ErrorBoundary>
      </DotBackgroundDemo>
    </>
  );
}

export default App;
