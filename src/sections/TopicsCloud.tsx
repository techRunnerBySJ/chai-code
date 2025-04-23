'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import {
  FaReact,
  FaNodeJs,
  FaCss3Alt,
  FaHtml5,
  FaAngular,
  FaJs,
} from 'react-icons/fa';

const topicsData = [
  {
    id: 'react',
    icon: FaReact,
    color: '#61DBFB',
    label: 'React',
    onClick: () => alert('React clicked!'),
  },
  {
    id: 'node',
    icon: FaNodeJs,
    color: '#68A063',
    label: 'Node.js',
    onClick: () => alert('Node.js clicked!'),
  },
  {
    id: 'css',
    icon: FaCss3Alt,
    color: '#264de4',
    label: 'CSS3',
    onClick: () => alert('CSS clicked!'),
  },
  {
    id: 'html',
    icon: FaHtml5,
    color: '#e34c26',
    label: 'HTML5',
    onClick: () => alert('HTML clicked!'),
  },
  {
    id: 'angular',
    icon: FaAngular,
    color: '#dd1b16',
    label: 'Angular',
    onClick: () => alert('Angular clicked!'),
  },
  {
    id: 'js',
    icon: FaJs,
    color: '#f0db4f',
    label: 'JavaScript',
    onClick: () => alert('JavaScript clicked!'),
  },
  {
    id: 'html',
    icon: FaHtml5,
    color: '#e34c26',
    label: 'HTML5',
    onClick: () => alert('HTML clicked!'),
  },
  {
    id: 'angular',
    icon: FaAngular,
    color: '#dd1b16',
    label: 'Angular',
    onClick: () => alert('Angular clicked!'),
  },
  {
    id: 'js',
    icon: FaJs,
    color: '#f0db4f',
    label: 'JavaScript',
    onClick: () => alert('JavaScript clicked!'),
  },
  {
    id: 'html',
    icon: FaHtml5,
    color: '#e34c26',
    label: 'HTML5',
    onClick: () => alert('HTML clicked!'),
  },
  {
    id: 'angular',
    icon: FaAngular,
    color: '#dd1b16',
    label: 'Angular',
    onClick: () => alert('Angular clicked!'),
  },
  {
    id: 'js',
    icon: FaJs,
    color: '#f0db4f',
    label: 'JavaScript',
    onClick: () => alert('JavaScript clicked!'),
  },
  {
    id: 'html',
    icon: FaHtml5,
    color: '#e34c26',
    label: 'HTML5',
    onClick: () => alert('HTML clicked!'),
  },
  {
    id: 'angular',
    icon: FaAngular,
    color: '#dd1b16',
    label: 'Angular',
    onClick: () => alert('Angular clicked!'),
  },
  {
    id: 'js',
    icon: FaJs,
    color: '#f0db4f',
    label: 'JavaScript',
    onClick: () => alert('JavaScript clicked!'),
  },
  {
    id: 'html',
    icon: FaHtml5,
    color: '#e34c26',
    label: 'HTML5',
    onClick: () => alert('HTML clicked!'),
  },
  {
    id: 'angular',
    icon: FaAngular,
    color: '#dd1b16',
    label: 'Angular',
    onClick: () => alert('Angular clicked!'),
  },
  {
    id: 'js',
    icon: FaJs,
    color: '#f0db4f',
    label: 'JavaScript',
    onClick: () => alert('JavaScript clicked!'),
  },
  {
    id: 'html',
    icon: FaHtml5,
    color: '#e34c26',
    label: 'HTML5',
    onClick: () => alert('HTML clicked!'),
  },
  {
    id: 'angular',
    icon: FaAngular,
    color: '#dd1b16',
    label: 'Angular',
    onClick: () => alert('Angular clicked!'),
  },
  {
    id: 'js',
    icon: FaJs,
    color: '#f0db4f',
    label: 'JavaScript',
    onClick: () => alert('JavaScript clicked!'),
  },
  {
    id: 'html',
    icon: FaHtml5,
    color: '#e34c26',
    label: 'HTML5',
    onClick: () => alert('HTML clicked!'),
  },
  {
    id: 'angular',
    icon: FaAngular,
    color: '#dd1b16',
    label: 'Angular',
    onClick: () => alert('Angular clicked!'),
  },
  {
    id: 'js',
    icon: FaJs,
    color: '#f0db4f',
    label: 'JavaScript',
    onClick: () => alert('JavaScript clicked!'),
  },
];

export function TopicsCloud({ className }: { className?: string }) {
  const totalItems = topicsData.length;
  const columns = 10; // must match grid-cols-* value
  const totalEmpty = columns - totalItems;
  const emptyLeft = Math.floor(totalEmpty / 2);
  const emptyRight = totalEmpty - emptyLeft;

  return (
    <section
      className={cn(
        'relative w-full overflow-hidden py-20 sm:py-24 md:py-28',
        className
      )}
    >
      {/* Glow background */}
      <div
        className="absolute top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-[#A0D2EB33] via-[#D0BDF433] to-[#8458B333] blur-3xl opacity-40 pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">
            Gamified Topics Cloud
          </h2>
          <p className="mt-4 text-lg text-neutral-300">
            Explore topics with glowing energy and gamified vibes
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-6 sm:gap-8 md:gap-10 place-items-center">
          {/* Left Glow Tiles */}
          {Array.from({ length: emptyLeft }).map((_, i) => (
            <GlowTile key={`left-${i}`} delay={i * 0.03} />
          ))}

          {/* Topic Icons */}
          {topicsData.map(({ id, icon: Icon, color, onClick }, i) => (
            <motion.button
              key={`${id}-${i}`}
              onClick={onClick}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                delay: (i + 1) * 0.05,
                duration: 0.6,
                ease: [0.215, 0.61, 0.355, 1],
              }}
              whileHover={{
                scale: 1.1,
                boxShadow: `0 0 15px ${color}99, 0 0 30px ${color}44`,
              }}
              whileTap={{ scale: 0.95 }}
              className="group relative flex h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 items-center justify-center rounded-2xl bg-white/5 dark:bg-white/10 backdrop-blur-md transition-all duration-300 border border-white/10 shadow-md"
              style={{ '--glow-color': color } as React.CSSProperties}
              aria-label={id}
            >
              <div className="absolute inset-0 rounded-2xl pointer-events-none bg-gradient-to-br from-transparent via-transparent to-[var(--glow-color)] opacity-20 transition-opacity duration-300 group-hover:opacity-40" />
              <Icon
                style={{ color }}
                className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 transition-transform duration-300 group-hover:scale-110"
              />
            </motion.button>
          ))}

          {/* Right Glow Tiles */}
          {Array.from({ length: emptyRight }).map((_, i) => (
            <GlowTile key={`right-${i}`} delay={(topicsData.length + i + 1) * 0.05} />
          ))}
        </div>
      </div>
    </section>
  );
}

function GlowTile({ delay }: { delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        delay,
        duration: 0.6,
        ease: [0.215, 0.61, 0.355, 1],
      }}
      className="h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 rounded-2xl bg-gradient-to-br from-[#a0d2eb33] via-[#d0bdf433] to-[#8458b333] backdrop-blur-md border border-white/10 shadow-inner shadow-white/10"
    />
  );
}
