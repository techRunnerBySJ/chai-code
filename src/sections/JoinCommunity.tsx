"use client";
import { TypewriterEffectSmooth } from "../components/ui/typewriter-effect";
import { InfoAndCtaButton } from "../layout/Note";

function JoinCommunity() {
  const words = [
    {
      text: "Join",
    },
    {
      text: "our",
    },
    {
      text: "community",
    },
    {
      text: "where",
    },
    {
      text: "creativity thrives.",
      className: "text-orange-500 dark:text-orange-500",
    },
  ];

  return (
    <div 
      className="flex flex-col items-center justify-center md:h-[20rem]"
      role="region"
      aria-label="Community section"
    >
      {/* <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base  ">
        The road to become a skilled coder starts from here
      </p> */}
      <TypewriterEffectSmooth 
        words={words} 
        aria-label="Community invitation message"
      />
      <div 
        className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4"
        role="group"
        aria-label="Community statistics"
      >
        <InfoAndCtaButton 
          text="80,000+ Active Coders on Discord"
          ariaLabel="Join our Discord community of 80,000+ active coders"
        />
      </div>
    </div>
  );
}

export default JoinCommunity;
