import React, { useEffect, useRef, useState } from "react";
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
  }: {
    items: typeof topicLinks;
    direction?: "left" | "right";
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
        if (isHovered) {
          animationFrame = requestAnimationFrame(step);
          return;
        }
  
        if (direction === "right") {
          scrollPosition += speed;
          if (scrollPosition >= container.scrollWidth / 2) {
            scrollPosition = 0;
          }
        } else {
          scrollPosition -= speed;
          if (scrollPosition <= -container.scrollWidth / 2) {
            scrollPosition = 0;
          }
        }
  
        container.scrollLeft = scrollPosition;
        animationFrame = requestAnimationFrame(step);
      };
  
      // Start the animation
      animationFrame = requestAnimationFrame(step);
      
      return () => {
        if (animationFrame) {
          cancelAnimationFrame(animationFrame);
        }
      };
    }, [direction, isHovered]);
  
    return (
      <div 
        className="relative w-full overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          ref={scrollRef}
          className="scroll-container scrollbar-hide"
          style={{ 
            display: "flex",
            gap: "1rem",
            padding: "0.5rem",
            width: "100%",
            overflowX: "hidden",
            whiteSpace: "nowrap"
          }}
        >
          {[...items, ...items].map((item, idx) => (
            <motion.button
              key={`${item.id}-${idx}`}
              className="p-[2px] relative min-w-[120px] flex-shrink-0 cursor-pointer group"
              whileHover={{ 
                scale: 1.1,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.open(item.link, "_blank")}
              title="Go to YouTube"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-600 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="px-4 py-2 bg-orange-200 rounded-[6px] relative group-hover:bg-transparent transition-all duration-300 text-black">
                {item.label}
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    );
  };
  
export const TopicsCloud = () => {
  const rows = [
    topicLinks.slice(0, 15), // First row with 15 items
    topicLinks.slice(15, 30), // Second row with 15 items
  ];

  return (
    <>
    <div className="px-20 mt-20">
    <h4 className="text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium text-black dark:text-white">
    Topics Cloud
    </h4>

    <p className="text-sm lg:text-base  max-w-2xl  my-4 mx-auto text-neutral-500 text-center font-normal dark:text-neutral-300">
      From Image generation to video generation, Everything AI has APIs for
      literally everything. It can even create this website copy for you.
    </p>
  </div>
    <div className="w-full space-y-4">
      {rows.map((row, index) => (
        <Row 
          key={index} 
          items={row} 
          direction="right"
        />
      ))}
    </div>
    </>
  );
};
