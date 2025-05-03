import { InfoAndCtaButton } from "@/layout/BuyNow";
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
        className="absolute left-5 top-1/2 z-10 -translate-y-1/2 rounded-full p-3 bg-orange-500 hover:bg-orange-600 text-white shadow-lg transition-all duration-300 hover:scale-110 cursor-pointer"
        onClick={() => scroll("left")}
        aria-label="Scroll left"
        role="button"
        tabIndex={0}
      >
        <FaChevronLeft className="w-6 h-6" aria-hidden="true" />
      </button>
      <button
        className="absolute right-5 top-1/2 z-10 -translate-y-1/2 rounded-full p-3 bg-orange-500 hover:bg-orange-600 text-white shadow-lg transition-all duration-300 hover:scale-110 cursor-pointer"
        onClick={() => scroll("right")}
        aria-label="Scroll right"
        role="button"
        tabIndex={0}
      >
        <FaChevronRight className="w-6 h-6" aria-hidden="true" />
      </button>

      {/* Scrollable Container */}
      <div
        ref={scrollRef}
        className={cn(
          "flex overflow-hidden space-x-4 px-4 py-4 snap-x snap-mandatory",
          className
        )}
        role={role}
        aria-label={ariaLabel}
        tabIndex={0}
      >
        {React.Children.map(children, (child) => (
          <div
            className="min-w-[280px] max-w-[280px] sm:min-w-[320px] sm:max-w-[320px] md:min-w-[400px] md:max-w-[400px] snap-start"
            role="listitem"
            tabIndex={0}
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
  buttonUrl?: string;
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
  buttonUrl,
  role = "article",
  "aria-label": ariaLabel,
}: BentoGridItemProps) => {
  const discountPercentage = Math.round((1 - Number(discountPrice) / Number(actualPrice)) * 100);

  return (
    <div
      className={cn(
        "relative group/bento shadow-input row-span-1 flex flex-col justify-between space-y-4 rounded-xl border border-neutral-200 bg-white p-4 transition duration-200 hover:shadow-xl dark:border-white/[0.2] dark:bg-neutral-900",
        className
      )}
      role={role}
      aria-label={ariaLabel}
      tabIndex={0}
    >
      {/* 🔥 Status Tag */}
      <span
        className="absolute top-2 left-2 z-10 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 px-2 py-1 text-[10px] sm:text-xs md:text-sm font-bold text-white shadow-md"
        role="status"
        aria-label="New course"
      >
        New
      </span>
    
      {/* Your iframe */}
      <div
        className="relative w-full h-[150px] sm:h-[180px] md:h-[200px]"
        role="presentation"
      >
        <iframe
          className="absolute top-0 left-0 w-full h-full rounded-xl"
          src={src}
          title={title as string}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          aria-label={`Video content for ${title}`}
          loading="lazy"
          role="presentation"
        />
      </div>
      <div
        className="transition duration-200 group-hover/bento:translate-x-2"
        role="contentinfo"
      >
        <div
          className="mt-2 mb-2 font-sans font-bold text-sm sm:text-base md:text-lg text-neutral-600 dark:text-white"
          role="heading"
          aria-level={3}
          aria-label={`Course title: ${title}`}
        >
          {title}
        </div>
        <div
          className="font-sans text-xs sm:text-sm md:text-base font-normal text-neutral-600 dark:text-white"
          role="text"
          aria-label={`Course description: ${description}`}
        >
          {description}
        </div>
        <div
          className="flex items-center gap-2 mt-2"
          role="presentation"
        >
          <span
            className="dark:text-white text-black/70 text-[10px] sm:text-xs md:text-sm line-through"
            role="text"
            aria-label={`Original price: ₹${actualPrice}`}
          >
            ₹{actualPrice}
          </span>
          <span
            className="text-sm sm:text-base md:text-lg font-semibold text-pop-out"
            role="text"
            aria-label={`Discounted price: ₹${discountPrice}`}
          >
            ₹{discountPrice}
          </span>
          <span
            className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm"
            role="text"
            aria-label={`${discountPercentage}% discount`}
          >
            ({discountPercentage}% off)
          </span>
        </div>
        <InfoAndCtaButton 
          buttonUrl={buttonUrl}
        />
      </div>
    </div>
  );
};
