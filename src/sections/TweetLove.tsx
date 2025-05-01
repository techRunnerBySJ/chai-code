"use client";

import { useEffect, useRef, useState } from "react";
import { LoadingTypewriter } from "../components/ui/loading-typewriter";

interface TwitterWidget {
  widgets: {
    load: (element: HTMLElement | null) => void;
  };
}

declare global {
  interface Window {
    twttr?: TwitterWidget;
  }
}

function TweetLove() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);

  const embeddedTweets = [
    `<blockquote class="twitter-tweet"><p lang="en" dir="ltr">⭐Day 4 of coding Hero... <a href="https://twitter.com/Rasmiranjan09/status/1909291399985369213?ref_src=twsrc%5Etfw">April 7, 2025</a></blockquote>`,
    `<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Day-1 of GenAi Cohort... <a href="https://twitter.com/AakarshVer83770/status/1909398387520053649?ref_src=twsrc%5Etfw">April 8, 2025</a></blockquote>`,
    `<blockquote class="twitter-tweet"><p lang="en" dir="ltr">📢 In case you missed the update... <a href="https://twitter.com/ChaiCodeHQ/status/1904133878291517574?ref_src=twsrc%5Etfw">March 24, 2025</a></blockquote>`,
  ];

  useEffect(() => {
    const loadTwitterScript = () => {
      if (window.twttr) {
        window.twttr.widgets.load(containerRef.current);
        setIsLoading(false);
        return;
      }

      const script = document.createElement("script");
      script.src = "https://platform.twitter.com/widgets.js";
      script.async = true;
      script.onload = () => {
        // Wait for twttr to be available
        const checkTwttr = setInterval(() => {
          if (window.twttr) {
            clearInterval(checkTwttr);
            window.twttr.widgets.load(containerRef.current);
            setIsLoading(false);
          }
        }, 100);

        // Clear interval after 5 seconds if twttr never becomes available
        setTimeout(() => clearInterval(checkTwttr), 5000);
      };
      document.body.appendChild(script);
    };

    loadTwitterScript();

    return () => {
      // Cleanup function
      const existingScript = document.querySelector('script[src="https://platform.twitter.com/widgets.js"]');
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="min-h-[40rem] flex flex-col antialiased bg-transparent items-center justify-center relative overflow-hidden px-4"
      role="region"
      aria-label="Community tweets section"
    >

      <div className="md:px-10 mt-10" role="presentation">
        <h4 className="section-title" role="heading" aria-level={2}>
          Tweet Love
        </h4>
      
        <p className="section-paragraph" role="text">
        Love that we get from our community
        </p>
      </div>

      {isLoading ? (
        <div className="mt-12 flex items-center justify-center">
          <LoadingTypewriter />
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl">
          {embeddedTweets.map((html, index) => (
            <div
              key={index}
              className="w-full min-h-[200px] bg-white dark:bg-neutral-900 shadow-md p-4 rounded-xl"
              dangerouslySetInnerHTML={{ __html: html }}
              role="article"
              aria-label={`Tweet ${index + 1}`}
            />
          ))}
        </div>
      )}
    </section>
  );
}

export default TweetLove;
