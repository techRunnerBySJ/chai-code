import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const topicLinks = [
  { id: 1, label: "HTML", link: "https://www.youtube.com/watch?v=pQN-pnXPaVg" },
  { id: 2, label: "CSS", link: "https://www.youtube.com/watch?v=yfoY53QXEnI" },
  { id: 3, label: "JavaScript", link: "https://www.youtube.com/watch?v=W6NZfCO5SIk" },
  { id: 4, label: "TypeScript", link: "https://www.youtube.com/watch?v=BwuLxPH8IDs" },
  { id: 5, label: "React", link: "https://www.youtube.com/watch?v=bMknfKXIFA8" },
  { id: 6, label: "Angular", link: "https://www.youtube.com/watch?v=2OHbjep_WjQ" },
  { id: 7, label: "Vue", link: "https://www.youtube.com/watch?v=FXpIoQ_rT_c" },
  { id: 8, label: "Svelte", link: "https://www.youtube.com/watch?v=UGj2vgAjeks" },
  { id: 9, label: "Node.js", link: "https://www.youtube.com/watch?v=TlB_eWDSMt4" },
  { id: 10, label: "Express", link: "https://www.youtube.com/watch?v=L72fhGm1tfE" },
  { id: 11, label: "MongoDB", link: "https://www.youtube.com/watch?v=4e3ZjzGwt3E" },
  { id: 12, label: "SQL", link: "https://www.youtube.com/watch?v=HXV3zeQKqGY" },
  { id: 13, label: "PostgreSQL", link: "https://www.youtube.com/watch?v=qw--VYLpxG4" },
  { id: 14, label: "Firebase", link: "https://www.youtube.com/watch?v=9kRgVxULbag" },
  { id: 15, label: "AWS", link: "https://www.youtube.com/watch?v=ulprqHHWlng" },
  { id: 16, label: "Azure", link: "https://www.youtube.com/watch?v=IE3PZzCLjB0" },
  { id: 17, label: "GCP", link: "https://www.youtube.com/watch?v=HGer3i8xjwM" },
  { id: 18, label: "DevOps", link: "https://www.youtube.com/watch?v=x2J0P6xJ7U4" },
  { id: 19, label: "Docker", link: "https://www.youtube.com/watch?v=fqMOX6JJhGo" },
  { id: 20, label: "Kubernetes", link: "https://www.youtube.com/watch?v=X48VuDVv0do" },
  { id: 21, label: "Git", link: "https://www.youtube.com/watch?v=USjZcfj8yxE" },
  { id: 22, label: "GitHub", link: "https://www.youtube.com/watch?v=RGOj5yH7evk" },
  { id: 23, label: "CI/CD", link: "https://www.youtube.com/watch?v=1Uu0F1j3Q5Y" },
  { id: 24, label: "Jenkins", link: "https://www.youtube.com/watch?v=FxG3Fh2Xj9U" },
  { id: 25, label: "Terraform", link: "https://www.youtube.com/watch?v=7xngnjfIlK4" },
  { id: 26, label: "Python", link: "https://www.youtube.com/watch?v=_uQrJ0TkZlc" },
  { id: 27, label: "Next.js", link: "https://www.youtube.com/watch?v=6BozpmSjk-Y" },
  { id: 28, label: "Tailwind", link: "https://www.youtube.com/watch?v=mr15Xzb1Ook" },
  { id: 29, label: "Figma", link: "https://www.youtube.com/watch?v=FTFaQWZBqQ8" },
  { id: 30, label: "Web Security", link: "https://www.youtube.com/watch?v=GJDI9B5oWCw" },
];

const Row = ({
  items,
  direction = "right",
  searchQuery,
}: {
  items: typeof topicLinks;
  direction?: "left" | "right";
  searchQuery: string;
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const speed = 1;
    let animationFrame: number;
    let scrollPosition = 0;

    const step = () => {
      if (isHovered || searchQuery) {
        animationFrame = requestAnimationFrame(step);
        return;
      }

      if (direction === "right") {
        scrollPosition += speed;
        if (scrollPosition >= container.scrollWidth - container.clientWidth) {
          scrollPosition = 0;
        }
      } else {
        scrollPosition -= speed;
        if (scrollPosition <= 0) {
          scrollPosition = container.scrollWidth - container.clientWidth;
        }
      }

      container.scrollLeft = scrollPosition;
      animationFrame = requestAnimationFrame(step);
    };

    animationFrame = requestAnimationFrame(step);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [direction, isHovered, searchQuery]);

  useEffect(() => {
    if (searchQuery && scrollRef.current) {
      const index = items.findIndex((item) =>
        item.label.toLowerCase().includes(searchQuery.toLowerCase())
      );
      if (index !== -1) {
        const container = scrollRef.current;
        const target = container.children[index] as HTMLElement;
        container.scrollTo({
          left: target.offsetLeft - container.offsetWidth / 2 + target.offsetWidth / 2,
          behavior: "smooth",
        });
      }
    }
  }, [searchQuery, items]);

  return (
    <div
      className="relative w-full overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      role="region"
      aria-label={`Scrolling topics row ${direction === "right" ? "1" : "2"}`}
    >
      <div
        ref={scrollRef}
        className="scroll-container scrollbar-hide flex gap-4 px-4 py-2 overflow-x-hidden whitespace-nowrap"
        role="list"
        aria-label="List of technology topics"
      >
        {items.map((item, idx) => (
          <motion.button
            key={`${item.id}-${idx}`}
            className="relative min-w-[140px] h-[50px] flex-shrink-0 cursor-pointer group  text-orange-500 font-semibold shadow-md rounded-lg px-6 py-2 hover:bg-orange-100 hover:shadow-lg transition-all duration-300 border border-orange-200"
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.2 },
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.open(item.link, "_blank")}
            title={`Watch ${item.label} tutorial on YouTube`}
            role="listitem"
            aria-label={`${item.label} tutorial video`}
          >
            <div
              className="relative text-center"
              role="presentation"
            >
              {item.label}
            </div>
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export const TopicsCloud = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const rows = [
    topicLinks.slice(0, 15), // First row with 15 items
    topicLinks.slice(15, 30), // Second row with 15 items
  ];

  return (
    <section
      className="w-full"
      role="region"
      aria-label="Technology topics cloud"
    >
      <div className="px-20 mt-20" role="presentation">
        <h4
          className="text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium text-black dark:text-white"
          role="heading"
          aria-level={2}
        >
          Topics Cloud
        </h4>

        <p
          className="text-sm lg:text-base max-w-2xl my-4 mx-auto text-neutral-500 text-center font-normal dark:text-neutral-300"
          role="text"
        >
          You can find videos and courses on topics and much more
        </p>

        {/* Search Input */}
        <div className="mt-6 mb-6 flex justify-center items-center gap-2 px-4">
          <div className="relative w-full max-w-md">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search topics..."
              className="w-full pl-10 pr-4 py-3 text-sm border border-gray-300 dark:border-gray-700 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-orange-500 dark:focus:ring-orange-400 dark:bg-gray-800 dark:text-white text-gray-800 transition-all duration-300 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-800"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 dark:text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-4.35-4.35M16.65 10.35a6.3 6.3 0 11-12.6 0 6.3 6.3 0 0112.6 0z"
              />
            </svg>
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-red-500 text-white rounded-full p-1 h-6 w-6 flex items-center justify-center shadow-md hover:bg-red-600 transition-all duration-300"
                aria-label="Clear search"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="w-full space-y-4" role="presentation">
        {rows.map((row, index) => (
          <Row
            key={index}
            items={row}
            direction={index % 2 === 0 ? "right" : "left"}
            searchQuery={searchQuery}
          />
        ))}
      </div>
    </section>
  );
};

export default TopicsCloud;