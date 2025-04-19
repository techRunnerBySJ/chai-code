import React, { Suspense } from "react";
import { DotBackgroundDemo } from "./components/ui/background"
import { NavbarDemo } from "./layout/Header"
import { ErrorBoundary } from "react-error-boundary";
import { TopicsCloud } from "./layout/TopicsCloud";
import { FreeApi } from "./layout/FreeApi";

// Lazy load components with proper type casting
const CarouselDemo = React.lazy(() => import("./layout/Udemy"));
const CompaniesSection = React.lazy(() => import("./layout/Companies"));
const AnimatedTestimonialsDemo = React.lazy(() => import("./layout/StudentsFeedback"));
const InfiniteMovingCardsDemo = React.lazy(() => import("./layout/TweetLove"));
const HeroSectionOne = React.lazy(() => import("./sections/HeroSection"));
const BentoGridDemo = React.lazy(() => import("./layout/CohortLiveClasses"));
const KeyBenefits = React.lazy(() => import("./layout/KeyBenefits"));
const CardSpotlightDemo = React.lazy(() => import("./layout/WhyChaiCode"));
const TypewriterEffectSmoothDemo = React.lazy(() => import("./layout/JoinCommunity"));
const Footer = React.lazy(() => import("./layout/Footer"));
const ChatBot = React.lazy(() => import("./layout/ChatBot"));

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

// Loading component
const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
  </div>
);

function App() {
  return (
    <>
      <DotBackgroundDemo>
        <NavbarDemo />
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <Suspense fallback={<LoadingSpinner />}>
            <HeroSectionOne />
            <InfiniteMovingCardsDemo />
            <CompaniesSection />
            <BentoGridDemo/>
            <AnimatedTestimonialsDemo/>
            <CarouselDemo/>
            <KeyBenefits/>
            <CardSpotlightDemo/>
            <TopicsCloud/>
            <FreeApi/>
            <TypewriterEffectSmoothDemo/>
            <Footer/>
            <ChatBot/>
          </Suspense>
        </ErrorBoundary>
      </DotBackgroundDemo>
    </>
  )
}

export default App
