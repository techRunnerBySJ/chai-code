import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import {
  FaInstagram,
  FaGithub,
  FaLinkedin,
  FaYoutube,
  FaTwitter,
  FaUsers, FaGraduationCap, FaFileAlt, FaStar
} from "react-icons/fa";
import { IoMdLogIn, IoMdMoon, IoMdSunny } from "react-icons/io"; // 🌙🌞 icons
import LogoLight from "@/assets/chaicode/chaicode-white.svg";
import LogoDark from "@/assets/chaicode/chaicode-black.svg";

// Add smooth scroll function with offset
const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    const headerOffset = 100; // Account for fixed header and give space for animations
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
  }
};

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-0" />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [isDark, setIsDark] = useState(false);

  // Toggle theme by adding/removing 'dark' on <html>
  const toggleTheme = () => {
    const html = document.documentElement;
    if (html.classList.contains("dark")) {
      html.classList.remove("dark");
      setIsDark(false);
    } else {
      html.classList.add("dark");
      setIsDark(true);
    }
  };

  // On load: detect system preference or class
  useEffect(() => {
    if (document.documentElement.classList.contains("dark")) {
      setIsDark(true);
    }
  }, []);

  return (
    <div
    className={cn(
      "fixed top-0 inset-x-0 z-50 px-4 border-b border-gray-200 dark:border-slate-800 backdrop-blur-md bg-white/70 dark:bg-[#0f172a]/70",
      className
    )}
  >
  
      <div className="relative flex items-center justify-between h-16">
        {/* LEFT: Logo */}
        <div className="flex items-center space-x-4 font-bold text-lg text-gray-900 dark:text-white">
          <span className="tracking-wide">
          <img
        src={LogoDark}
        alt="ChaiCode Logo - Light"
        className="block dark:hidden"
        width={100}
        height={100}
      />
      {/* Dark mode logo */}
      <img
        src={LogoLight}
        alt="ChaiCode Logo - Dark"
        className="hidden dark:block"
        width={100}
        height={100}
      />
          </span>
        </div>

{/* CENTER: COHORT + Links */}
<div className="absolute left-1/2 transform -translate-x-1/2">
  <div className="flex items-center space-x-6 font-semibold text-sm text-gray-900 dark:text-white">
    {/* COHORT with blinking dot */}
    <button 
      onClick={() => scrollToSection('cohort')}
      className="flex items-center gap-1 hover:text-purple-500 transition cursor-pointer"
    >
      <span className="relative flex h-3 w-3">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500 opacity-75"></span>
        <span className="relative inline-flex h-3 w-3 rounded-full bg-red-600"></span>
      </span>
      <FaUsers className="ml-1" />
      <span>COHORT</span>
    </button>

    {/* Udemy */}
    <button 
      onClick={() => scrollToSection('udemy')}
      className="flex items-center gap-1 hover:text-purple-500 transition cursor-pointer"
    >
      <FaGraduationCap />
      <span>Udemy</span>
    </button>

    {/* Docs */}
    <button 
      onClick={() => scrollToSection('docs')}
      className="flex items-center gap-1 hover:text-purple-500 transition cursor-pointer"
    >
      <FaFileAlt />
      <span>Docs</span>
    </button>

    {/* Reviews */}
    <button 
      onClick={() => scrollToSection('reviews')}
      className="flex items-center gap-1 hover:text-purple-500 transition cursor-pointer"
    >
      <FaStar />
      <span>Reviews</span>
    </button>
  </div>
</div>


        {/* RIGHT: Social Icons + Theme Toggle */}
        <div className="flex items-center space-x-4">
          <a
            href="https://linkedin.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-blue-600 dark:text-white dark:hover:text-blue-400 transition"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href="https://youtube.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-red-600 dark:text-white dark:hover:text-red-400 transition"
            aria-label="YouTube"
          >
            <FaYoutube size={20} />
          </a>
          <a
            href="https://twitter.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-blue-400 dark:text-white dark:hover:text-blue-300 transition"
            aria-label="Twitter"
          >
            <FaTwitter size={20} />
          </a>
          <a
            href="https://instagram.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-pink-500 dark:text-white dark:hover:text-pink-400 transition"
            aria-label="Instagram"
          >
            <FaInstagram size={20} />
          </a>
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-black dark:text-white dark:hover:text-gray-300 transition"
            aria-label="GitHub"
          >
            <FaGithub size={20} />
          </a>

          {/* Theme toggle button */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            aria-label="Toggle theme"
          >
            {isDark ? (
              <IoMdSunny size={20} className="text-yellow-400" />
            ) : (
              <IoMdMoon size={20} className="text-gray-700" />
            )}
          </button>

          <button
              onClick={()=>window.open("https://courses.chaicode.com/learn/account/signup", "_blank")}
             className="text-gray-700 hover:text-black dark:text-white dark:hover:text-gray-300 transition"
              aria-label="Toggle theme"
          >
            {isDark ? (
              <IoMdLogIn size={20}/>
            ) : (
              <IoMdLogIn size={20} />
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
