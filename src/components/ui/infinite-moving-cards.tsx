"use client";

import { JoinNowButton } from "@/layout/Join-Now-Button";
import { cn } from "@/lib/utils";
import React, { useEffect, useState, ReactElement } from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
  role = "complementary",
  "aria-label": ariaLabel = "Scrolling content",
}: {
  items: {
    quote: string | ReactElement;
    name: string;
    title: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
  role?: string;
  "aria-label"?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, [items]);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards",
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse",
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "100s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "400s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "100s");
      }
    }
  };
  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className,
      )}
      role={role}
      aria-label={ariaLabel}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-4",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]",
        )}
        role="list"
        aria-label="Scrolling items"
      >
        {items.map((item, idx) => (
          <li
            className="relative shrink-0 rounded-2xl "
            key={`${idx}-${item.name}`}
            role="listitem"
            aria-label={`Item ${idx + 1}`}
          >
            <blockquote role="article">
              <div
                aria-hidden="true"
                className="user-select-none pointer-events-none absolute -top-0.5 -left-0.5 -z-1 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
              ></div>
              <span 
                className="relative z-20 text-sm leading-[1.6] font-normal text-neutral-800 dark:text-gray-100"
                role="text"
              >
                {item.quote}
              </span>
              <div 
                className="relative z-20 mt-6 flex flex-row items-center"
                role="presentation"
              >
                <span 
                  className="flex flex-col gap-1"
                  role="presentation"
                >
                  <span 
                    className="text-sm leading-[1.6] font-normal text-neutral-500 dark:text-gray-400"
                    role="text"
                  >
                    {item.name}
                  </span>
                  <span 
                    className="text-sm leading-[1.6] font-normal text-neutral-500 dark:text-gray-400"
                    role="text"
                  >
                    {item.title}
                  </span>
                </span>
              </div>
            </blockquote>
          </li>
        ))}
      </ul>
      <span 
        className="flex items-center justify-center"
        role="presentation"
      >
        <JoinNowButton />
      </span>
    </div>
  );
};
