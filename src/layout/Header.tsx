import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import {
  FaInstagram,
  FaGithub,
  FaLinkedin,
  FaYoutube,
  FaTwitter,
  FaUsers, FaGraduationCap, FaFileAlt, FaStar, FaBars, FaTimes
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (id: string) => {
    scrollToSection(id);
    setIsMenuOpen(false);
  };

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
      "fixed top-0 inset-x-0 z-50 px-4  border-gray-200  backdrop-blur-md bg-white/70 dark:bg-black",
      className
    )}
  >
  
      <div className="relative flex items-center justify-between h-16">
        {/* LEFT: Logo */}
        <div 
          className="flex items-center space-x-4 font-bold text-lg text-gray-900 dark:text-white cursor-pointer" 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <span className="tracking-wide">
            <img
              src={LogoDark}
              alt="ChaiCode Logo - Light"
              className="block dark:hidden w-[80px] md:w-[100px]"
              width={100}
              height={100}
            />
            {/* Dark mode logo */}
            <img
              src={LogoLight}
              alt="ChaiCode Logo - Dark"
              className="hidden dark:block w-[80px] md:w-[100px]"
              width={100}
              height={100}
            />
          </span>
        </div>

        {/* CENTER: Navigation Links - Hidden on mobile */}
        <nav className="hidden md:block absolute left-1/2 transform -translate-x-1/2">
          <div className="flex items-center space-x-6 font-semibold text-sm text-gray-900 dark:text-white">
            <button onClick={() => handleNavClick('cohort')} className="flex items-center gap-1 hover:text-purple-500 transition cursor-pointer">
              <span className="relative flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500 opacity-75"></span>
                <span className="relative inline-flex h-3 w-3 rounded-full bg-red-600"></span>
              </span>
              <FaUsers className="ml-1" />
              <span>COHORT</span>
            </button>
            <button onClick={() => handleNavClick('udemy')} className="flex items-center gap-1 hover:text-purple-500 transition cursor-pointer">
              <FaGraduationCap />
              <span>Udemy</span>
            </button>
            <button onClick={() => handleNavClick('docs')} className="flex items-center gap-1 hover:text-purple-500 transition cursor-pointer">
              <FaFileAlt />
              <span>Docs</span>
            </button>
            <button onClick={() => handleNavClick('reviews')} className="flex items-center gap-1 hover:text-purple-500 transition cursor-pointer">
              <FaStar />
              <span>Reviews</span>
            </button>
          </div>
        </nav>

        {/* RIGHT: Social Icons + Theme Toggle + Menu Button */}
        <div className="flex items-center space-x-4">
          {/* Social Icons - Hidden on mobile */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="https://linkedin.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-600 dark:text-white dark:hover:text-blue-400 transition" aria-label="LinkedIn">
              <FaLinkedin size={20} />
            </a>
            <a href="https://youtube.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-red-600 dark:text-white dark:hover:text-red-400 transition" aria-label="YouTube">
              <FaYoutube size={20} />
            </a>
            <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-400 dark:text-white dark:hover:text-blue-300 transition" aria-label="Twitter">
              <FaTwitter size={20} />
            </a>
            <a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-pink-500 dark:text-white dark:hover:text-pink-400 transition" aria-label="Instagram">
              <FaInstagram size={20} />
            </a>
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-black dark:text-white dark:hover:text-gray-300 transition" aria-label="GitHub">
              <FaGithub size={20} />
            </a>
          </div>

          {/* Theme Toggle */}
          <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition" aria-label="Toggle theme">
            {isDark ? <IoMdSunny size={20} className="text-yellow-400" /> : <IoMdMoon size={20} className="text-gray-700" />}
          </button>

          {/* Login Button */}
          <button onClick={() => window.open("https://courses.chaicode.com/learn/account/signup", "_blank")} className="text-gray-700 hover:text-black dark:text-white dark:hover:text-gray-300 transition" aria-label="Login">
            <IoMdLogIn size={20} />
          </button>

          {/* Hamburger Menu Button - Visible only on mobile */}
          <button 
            onClick={toggleMenu} 
            className="md:hidden p-2 text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu - Slides down when menu is open */}
      <div 
        className={`md:hidden fixed left-0 right-0 top-[64px] transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 bg-white dark:bg-black border-b border-gray-200 dark:border-gray-700 shadow-lg text-black dark:text-white">
          <button onClick={() => handleNavClick('cohort')} className="w-full flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition">
            <FaUsers />
            <span>COHORT</span>
            <span className="relative flex h-2 w-2 ml-1">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-red-600"></span>
            </span>
          </button>
          <button onClick={() => handleNavClick('udemy')} className="w-full flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition">
            <FaGraduationCap />
            <span>Udemy</span>
          </button>
          <button onClick={() => handleNavClick('docs')} className="w-full flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition">
            <FaFileAlt />
            <span>Docs</span>
          </button>
          <button onClick={() => handleNavClick('reviews')} className="w-full flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition">
            <FaStar />
            <span>Reviews</span>
          </button>
          
          {/* Social Icons in Mobile Menu */}
          <div className="flex items-center justify-around py-3 border-t border-gray-200 dark:border-gray-700">
            <a href="https://linkedin.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-600 dark:text-white dark:hover:text-blue-400 transition">
              <FaLinkedin size={20} />
            </a>
            <a href="https://youtube.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-red-600 dark:text-white dark:hover:text-red-400 transition">
              <FaYoutube size={20} />
            </a>
            <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-400 dark:text-white dark:hover:text-blue-300 transition">
              <FaTwitter size={20} />
            </a>
            <a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-pink-500 dark:text-white dark:hover:text-pink-400 transition">
              <FaInstagram size={20} />
            </a>
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-black dark:text-white dark:hover:text-gray-300 transition">
              <FaGithub size={20} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
