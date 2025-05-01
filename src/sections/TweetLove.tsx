"use client";

import { useEffect, useRef, useMemo, useState } from "react";
import { InfiniteMovingCards } from "../components/ui/infinite-moving-cards";

function TweetLove() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  // ✅ UseMemo to avoid redefinition on each render
  const embeddedTweets = useMemo(
    () => [
      `<blockquote class="twitter-tweet"><p lang="en" dir="ltr">⭐Day 4 of coding Hero<br>➡️learn about angular<br>➡️start a small project <a href="https://twitter.com/ansh_mishraa04?ref_src=twsrc%5Etfw">@ansh_mishraa04</a> bounties dena ho to tshirt mat dena ,mera size 3 xl he 😂,keyboard ka window key kam nhani kar raha he, solve kar dena <a href="https://twitter.com/Hiteshdotcom?ref_src=twsrc%5Etfw">@Hiteshdotcom</a> <a href="https://twitter.com/hashtag/chaicode?src=hash&amp;ref_src=twsrc%5Etfw">#chaicode</a> <a href="https://twitter.com/hashtag/WebDevelopment?src=hash&amp;ref_src=twsrc%5Etfw">#WebDevelopment</a> <a href="https://t.co/qn82DacsXR">pic.twitter.com/qn82DacsXR</a></p>&mdash; Rasmiranjan Sahoo (@Rasmiranjan09) <a href="https://twitter.com/Rasmiranjan09/status/1909291399985369213?ref_src=twsrc%5Etfw">April 7, 2025</a></blockquote>`,

      `<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Day-1 of GenAi Cohort<br>Explored transformer architecture<br>Covered topics like vector embeddings,positional encoding, multi-head attention etc<br>Also set up and created models of mega project for Webdev cohort.<a href="https://twitter.com/hashtag/chaicode?src=hash&amp;ref_src=twsrc%5Etfw">#chaicode</a><a href="https://twitter.com/Hiteshdotcom?ref_src=twsrc%5Etfw">@Hiteshdotcom</a> <a href="https://twitter.com/piyushgarg_dev?ref_src=twsrc%5Etfw">@piyushgarg_dev</a> <a href="https://twitter.com/nirudhuuu?ref_src=twsrc%5Etfw">@nirudhuuu</a> <a href="https://twitter.com/mukulpadwal?ref_src=twsrc%5Etfw">@mukulpadwal</a> <a href="https://twitter.com/yntpdotme?ref_src=twsrc%5Etfw">@yntpdotme</a> <a href="https://t.co/T7I6HTQnNK">pic.twitter.com/T7I6HTQnNK</a></p>&mdash; Aakarsh Verma (@AakarshVer83770) <a href="https://twitter.com/AakarshVer83770/status/1909398387520053649?ref_src=twsrc%5Etfw">April 8, 2025</a></blockquote>`,

      `<blockquote class="twitter-tweet"><p lang="en" dir="ltr">📢 In case you missed the update, here are the important links!🔗<br><br>🚀 Gen AI Cohort<br><a href="https://t.co/PeMfEWusaS">https://t.co/PeMfEWusaS</a><br><br>💻 Web Dev Cohort<br><a href="https://t.co/86s8k6wo4P">https://t.co/86s8k6wo4P</a><br><br>🎯 Udemy Web Dev Mastery<br><a href="https://t.co/avoa8e4fcU">https://t.co/avoa8e4fcU</a><br><br>(1/n)</p>&mdash; Chai Aur Code (@ChaiCodeHQ) <a href="https://twitter.com/ChaiCodeHQ/status/1904133878291517574?ref_src=twsrc%5Etfw">March 24, 2025</a></blockquote>`,
    ],
    []
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true); // Load tweets when the section is visible
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const loadTwitterScript = () => {
      // Define Twitter widget interface
      interface TwitterWidget {
        widgets: {
          load: (element: HTMLElement | null) => void;
        };
      }

      // Check if Twitter widget is already loaded
      if ((window as unknown as { twttr: unknown }).twttr) {
        ((window as unknown as { twttr: TwitterWidget }).twttr as TwitterWidget).widgets.load(containerRef.current);
      } else {
        const script = document.createElement("script");
        script.src = "https://platform.twitter.com/widgets.js";
        script.async = true;
        script.onload = () => {
          ((window as unknown as { twttr: TwitterWidget }).twttr as TwitterWidget).widgets.load(containerRef.current);
        };
        document.body.appendChild(script);
      }
    };

    loadTwitterScript();
  }, [isVisible]); // ✅ Only load tweets when visible

  return (
    <section
      ref={containerRef}
      className="min-h-[40rem] flex flex-col antialiased bg-transparent items-center justify-center relative overflow-hidden"
      role="region"
      aria-label="Community tweets section"
    >
      <div className="px-20 mt-20" role="presentation">
        <h4
          className="text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium text-black dark:text-white"
          role="heading"
          aria-level={2}
        >
          Tweet Love
        </h4>

        <p
          className="text-sm lg:text-base max-w-2xl my-4 mx-auto text-neutral-500 text-center font-normal dark:text-neutral-300"
          role="text"
        >
          Love that we get from our community
        </p>
      </div>

      {isVisible && (
        <InfiniteMovingCards
          items={embeddedTweets.map((html) => ({
            quote: (
              <div
                className="w-[350px] min-h-[200px] [&>blockquote]:w-full"
                dangerouslySetInnerHTML={{ __html: html }}
                role="article"
                aria-label="Community tweet"
              />
            ),
            name: "",
            title: "",
          }))}
          direction="right"
          speed="slow"
          role="complementary"
          aria-label="Scrolling tweets"
        />
      )}
    </section>
  );
}

export default TweetLove;