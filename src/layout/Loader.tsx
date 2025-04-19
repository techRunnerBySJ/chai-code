import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const TOTAL_LOGOS = 5;

const getRandomX = () => Math.floor(Math.random() * window.innerWidth);
const getRandomDelay = () => Math.random() * 2;

export const LogoRain = ({ logoSrc }: { logoSrc: string }) => {
    console.log("LogoRain rendered", logoSrc);

  const [logos, setLogos] = useState<number[]>([]);

  useEffect(() => {
    setLogos(Array.from({ length: TOTAL_LOGOS }, (_, i) => i));
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {logos.map((id) => (
        <motion.img
          key={id}
          src={logoSrc}
          alt="logo"
          width={32}
          height={32}
          initial={{
            y: -50,
            x: getRandomX(),
            rotate: Math.random() * 20 - 10,
            opacity: 0,
          }}
          animate={{
            y: [ -50, window.innerHeight + 50 ],
            opacity: [0, 1, 0.5, 0],
            rotate: Math.random() * 360,
          }}
          transition={{
            duration: 4 + Math.random() * 2,
            delay: getRandomDelay(),
            ease: "easeInOut",
            repeat: Infinity,
          }}
          className="absolute"
        />
      ))}
    </div>
  );
};

export default LogoRain;
