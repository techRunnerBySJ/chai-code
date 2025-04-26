"use client";
import { IconArrowNarrowRight } from "@tabler/icons-react";
import { useState, useRef, useId, useEffect } from "react";
import { InfoAndCtaButton } from "@/layout/BuyNow";

interface SlideData {
  src: string;
  title: string;
  description: string;
  ratings: string;
  status: string;
  buttonUrl: string;
}

interface SlideProps {
  slide: SlideData;
  index: number;
  current: number;
  handleSlideClick: (index: number) => void;
}

const Slide = ({ slide, index, current, handleSlideClick }: SlideProps) => {
  const slideRef = useRef<HTMLLIElement>(null);

  const xRef = useRef(0);
  const yRef = useRef(0);
  const frameRef = useRef<number | null>(null);

  useEffect(() => {
    const animate = () => {
      if (!slideRef.current) return;
      const x = xRef.current;
      const y = yRef.current;
      slideRef.current.style.setProperty("--x", `${x}px`);
      slideRef.current.style.setProperty("--y", `${y}px`);
      frameRef.current = requestAnimationFrame(animate);
    };
    frameRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameRef.current!);
  }, []);

  const handleMouseMove = (event: React.MouseEvent) => {
    const el = slideRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    xRef.current = event.clientX - (r.left + Math.floor(r.width / 2));
    yRef.current = event.clientY - (r.top + Math.floor(r.height / 2));
  };

  const handleMouseLeave = () => {
    xRef.current = 0;
    yRef.current = 0;
  };

  const imageLoaded = (event: React.SyntheticEvent<HTMLImageElement>) => {
    event.currentTarget.style.opacity = "1";
  };

  const { src, title, description, ratings, status, buttonUrl } = slide;

  return (
    <div className="[perspective:1200px] [transform-style:preserve-3d]">
      <li
        ref={slideRef}
        className="relative text-white  max-w-[90vw] w-[600px] h-fit mx-[4vmin] rounded-xl overflow-hidden shadow-xl transition-all duration-300 ease-in-out"
        onClick={() => handleSlideClick(index)}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform:
            current !== index
              ? "scale(0.98) rotateX(8deg)"
              : "scale(1) rotateX(0deg)",
          transformOrigin: "bottom",
        }}
      >
        {/* Main Layout */}
        <div className="flex flex-col md:flex-row bg-[#1D1F2F] dark:bg-[#111] p-6 gap-6 relative">
          {/* Status Tag */}
          <div className="absolute top-4 right-4  text-white text-xs px-3 py-1 rounded-md shadow-md"
          style={{
            backgroundColor: "var(--brand-color)"
          }}
          >
            {status}
          </div>

          {/* Text Section */}
          <div className="flex-[0.7] flex flex-col justify-center gap-4">
            <h2 className="text-2xl font-semibold">{title}</h2>
            <p className="text-sm text-neutral-300 dark:text-neutral-400">{description}</p>
            <div className="md:text-xl text-lg bg-gradient-to-br from-purple-500 to-indigo-600 dark:from-purple-300 dark:to-indigo-400 px-3 py-1 rounded-md w-fit text-white shadow"
            style={{
              backgroundColor: "var(--brand-color)"
            }}
            >
              ⭐ {ratings}
            </div>
            <a
              href={buttonUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-4 w-fit"
            >
             <InfoAndCtaButton/>
            </a>
          </div>

          {/* Image Section */}
          <div className="flex-[0.3]">
            <div className="w-full h-full overflow-hidden rounded-xl border-2 border-gray-300">
              <img
                src={src}
                alt={title}
                onLoad={imageLoaded}
                className="object-cover w-full h-full transition-opacity duration-500 rounded-xl"
                style={{ opacity: current === index ? 1 : 0.6 }}
              />
            </div>
          </div>
        </div>
      </li>
    </div>
  );
};


interface CarouselControlProps {
  type: string;
  title: string;
  handleClick: () => void;
}

const CarouselControl = ({
  type,
  title,
  handleClick,
}: CarouselControlProps) => {
  return (
    <button
      className={`w-10 h-10 flex items-center mx-2 justify-center bg-neutral-200 dark:bg-neutral-800 border-3 border-transparent rounded-full focus:border-[#f9923e] focus:outline-none hover:-translate-y-0.5 active:translate-y-0.5 transition duration-200 ${
        type === "previous" ? "rotate-180" : ""
      }`}
      title={title}
      onClick={handleClick}
    >
      <IconArrowNarrowRight className="text-neutral-600 dark:text-neutral-200" />
    </button>
  );
};

interface CarouselProps {
  slides: SlideData[];
}

export default function Carousel({ slides }: CarouselProps) {
  const [current, setCurrent] = useState(0);

  const handlePreviousClick = () => {
    const previous = current - 1;
    setCurrent(previous < 0 ? slides.length - 1 : previous);
  };

  const handleNextClick = () => {
    const next = current + 1;
    setCurrent(next === slides.length ? 0 : next);
  };

  const handleSlideClick = (index: number) => {
    if (current !== index) {
      setCurrent(index);
    }
  };

  const id = useId();

  return (
    <div
    className="relative w-[90vw] md:w-[70vmin] h-auto md:h-[317px] mx-auto"
    aria-labelledby={`carousel-heading-${id}`}
  >
<ul
  className="flex mx-[-4vmin] transition-transform duration-1000 ease-in-out"
  style={{
    transform: `translateX(-${current * 100}%)`
  }}
  
>

        {slides.map((slide, index) => (
          <Slide
            key={index}
            slide={slide}
            index={index}
            current={current}
            handleSlideClick={handleSlideClick}
          />
        ))}
      </ul>

      <div className="absolute flex justify-center w-full top-[calc(100%+1rem)]">
        <CarouselControl
          type="previous"
          title="Go to previous slide"
          handleClick={handlePreviousClick}
        />

        <CarouselControl
          type="next"
          title="Go to next slide"
          handleClick={handleNextClick}
        />
      </div>
    </div>
  );
}
