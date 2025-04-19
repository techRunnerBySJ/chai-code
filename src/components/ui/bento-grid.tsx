import { HoverBorderGradientDemo } from "@/layout/BuyNow";
import { cn } from "@/lib/utils";
import React, { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface BentoGridProps {
  className?: string;
  children?: React.ReactNode;
  role?: string;
  "aria-label"?: string;
}

export const BentoGrid = ({
  className,
  children,
  role = "list",
  "aria-label": ariaLabel = "Grid of items",
}: BentoGridProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -420 : 420,
        behavior: "smooth",
      });
    }
  };

  return (
    <div 
      className="relative"
      role="region"
      aria-label="Scrollable grid container"
    >
      {/* Scroll Buttons */}
      <button
        className="absolute left-5 top-1/2 z-10 -translate-y-1/2 rounded-full p-2 shadow-md"
        style={{
          background: "var(--brand-color)",
        }}
        onClick={() => scroll("left")}
        aria-label="Scroll left"
      >
        <FaChevronLeft />
      </button>
      <button
        className="absolute right-5 top-1/2 z-10 -translate-y-1/2 rounded-full p-2 shadow-md"
        style={{
          background: "var(--brand-color)",
        }}
        onClick={() => scroll("right")}
        aria-label="Scroll right"
      >
        <FaChevronRight />
      </button>

      {/* Scrollable Container */}
      <div
        ref={scrollRef}
        className={cn(
          "flex overflow-hidden space-x-4 px-10 py-4 snap-x snap-mandatory",
          className
        )}
        role={role}
        aria-label={ariaLabel}
      >
        {React.Children.map(children, (child) => (
          <div 
            className="min-w-[400px] max-w-[400px] snap-start"
            role="listitem"
          >
            {child}
          </div>
        ))}
      </div>
    </div>
  );
};

interface BentoGridItemProps {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  src?: string;
  actualPrice?: string;
  discountPrice?: string;
  // buttonUrl?: string; // TODO
  role?: string;
  "aria-label"?: string;
}

export const BentoGridItem = ({
  className,
  title,
  description,
  src,
  actualPrice,
  discountPrice,
  // buttonUrl, // TODO
  role = "article",
  "aria-label": ariaLabel,
}: BentoGridItemProps) => {
  return (
    <div
      className={cn(
        "relative group/bento shadow-input row-span-1 flex flex-col justify-between space-y-4 rounded-xl border border-neutral-200 bg-white p-4 transition duration-200 hover:shadow-xl dark:border-white/[0.2] dark:bg-neutral-900",
        className,
      )}
      role={role}
      aria-label={ariaLabel}
    >
      {/* 🔥 Status Tag */}
      <span 
        className="absolute top-2 left-2 z-10 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 px-3 py-1 text-xs font-bold text-white shadow-md"
        role="status"
        aria-label="New course"
      >
        New
      </span>

      {/* Your iframe */}
      <div 
        className="relative w-full h-[200px]"
        role="presentation"
      >
        <iframe
          className="absolute top-0 left-0 w-full h-full rounded-xl"
          src={src}
          title={title as string}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          aria-label={`Video content for ${title}`}
        />
      </div>
      <div 
        className="transition duration-200 group-hover/bento:translate-x-2"
        role="contentinfo"
      >
        <div 
          className="mt-2 mb-2 font-sans font-bold text-neutral-600 dark:text-white"
          role="heading"
          aria-level={3}
        >
          {title}
        </div>
        <div 
          className="font-sans text-xs font-normal text-neutral-600 dark:text-white"
          role="text"
        >
          {description}
        </div>
        <div 
          className="flex items-center gap-2 mt-2"
          role="presentation"
        >
          <span 
            className="dark:text-white text-black/70 text-sm line-through"
            role="text"
            aria-label={`Original price: ₹${actualPrice}`}
          >
            ₹{actualPrice}
          </span>
          <span 
            className="text-lg font-semibold text-pop-out"
            role="text"
            aria-label={`Discounted price: ₹${discountPrice}`}
          >
            ₹{discountPrice}
          </span>
        </div>
        <HoverBorderGradientDemo />
      </div>
    </div>
  );
};
