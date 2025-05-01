import  { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import {
  FaInstagram,
  FaGithub,
  FaLinkedin,
  FaYoutube,
  FaDiscord,
  FaUsers, FaGraduationCap, FaFileAlt, FaStar, FaBars, FaTimes, FaBug
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
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

export function Header() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-0" />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [isDark, setIsDark] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState<string | null>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (url: string) => {
    setActiveLink(url);
    window.open(url, '_blank');
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
    const html = document.documentElement;
    if (!html.classList.contains("dark")) {
      html.classList.add("dark"); // Add the 'dark' class to the <html> element by default
    }
    setIsDark(true); // Update the state to reflect dark mode
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 px-4 border-gray-200 backdrop-blur-md bg-white/70 dark:bg-black",
        className
      )}
      role="banner"
      aria-label="Main navigation"
    >
      <div className="relative flex items-center justify-between h-16">
        {/* LEFT: Logo */}
        <div 
          className="flex items-center space-x-4 font-bold text-lg text-gray-900 dark:text-white cursor-pointer" 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          role="button"
          aria-label="Return to top"
          tabIndex={0}
          title="Return to top"
        >
          <span className="tracking-wide">
            <img
              src={LogoDark}
              alt="ChaiCode Logo - Light"
              className="block dark:hidden w-[100px] md:w-[150px]"
              width={100}
              height={100}
              aria-hidden="true"
            />
            {/* Dark mode logo */}
            <img
              src={LogoLight}
              alt="ChaiCode Logo - Dark"
              className="hidden dark:block w-[100px] md:w-[150px]"
              width={100}
              height={100}
              aria-hidden="true"
            />
          </span>
        </div>

        {/* CENTER: Navigation Links - Hidden on mobile */}
        <nav 
          className="hidden md:block absolute left-1/2 transform -translate-x-1/2"
          role="navigation"
          aria-label="Main menu"
        >
          <div className="flex items-center space-x-8 font-semibold text-sm text-gray-900 dark:text-white">
            <a 
              href="https://courses.chaicode.com/learn/view-all?show=batch&type=17"
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-2 transition-all duration-300 cursor-pointer ${
                activeLink === 'https://courses.chaicode.com/learn/view-all?show=batch&type=17'
                  ? 'text-orange-500 scale-105'
                  : 'hover:text-purple-500 hover:scale-105'
              }`}
              onClick={() => handleNavClick('https://courses.chaicode.com/learn/view-all?show=batch&type=17')}
              aria-label="Navigate to Cohort section"
              title="View our coding cohorts"
            >
              <span className="relative flex h-3 w-3" aria-hidden="true">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500 opacity-75"></span>
                <span className="relative inline-flex h-3 w-3 rounded-full bg-red-600"></span>
              </span>
              <FaUsers className="ml-1" aria-hidden="true" />
              <span className="font-medium tracking-wide">COHORT</span>
            </a>

            <a 
              href="https://courses.chaicode.com/learn"
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-2 transition-all duration-300 cursor-pointer ${
                activeLink === 'https://courses.chaicode.com/learn'
                  ? 'text-orange-500 scale-105'
                  : 'hover:text-purple-500 hover:scale-105'
              }`}
              onClick={() => handleNavClick('https://courses.chaicode.com/learn')}
              aria-label="Navigate to Courses section"
              title="Explore our courses"
            >
              <FaGraduationCap aria-hidden="true" />
              <span className="font-medium tracking-wide">Courses</span>
            </a>

            <a 
              href="https://docs.chaicode.com/"
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-2 transition-all duration-300 cursor-pointer ${
                activeLink === 'https://docs.chaicode.com/'
                  ? 'text-orange-500 scale-105'
                  : 'hover:text-purple-500 hover:scale-105'
              }`}
              onClick={() => handleNavClick('https://docs.chaicode.com/')}
              aria-label="Navigate to Documentation section"
              title="View documentation"
            >
              <FaFileAlt aria-hidden="true" />
              <span className="font-medium tracking-wide">Docs</span>
            </a>

            <a 
              href="https://courses.chaicode.com/learn/batch/about?bundleId=226894"
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-2 transition-all duration-300 cursor-pointer ${
                activeLink === 'https://courses.chaicode.com/learn/batch/about?bundleId=226894'
                  ? 'text-orange-500 scale-105'
                  : 'hover:text-purple-500 hover:scale-105'
              }`}
              onClick={() => handleNavClick('https://courses.chaicode.com/learn/batch/about?bundleId=226894')}
              aria-label="Navigate to Coding Hero section"
              title="Learn about Coding Hero"
            >
              <FaStar aria-hidden="true" />
              <span className="font-medium tracking-wide">Coding Hero</span>
            </a>
          </div>
        </nav>

        {/* RIGHT: Social Icons + Theme Toggle + Menu Button */}
        <div 
          className="flex items-center space-x-4"
          role="toolbar"
          aria-label="Header actions"
        >
          {/* Social Icons - Hidden on mobile */}
          <div 
            className="hidden md:flex items-center space-x-4"
            role="navigation"
            aria-label="Social media links"
          >
            <a 
              href="https://github.com/hiteshchoudhary/chai-backend" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-700 hover:text-black dark:text-white dark:hover:text-gray-300 transition"
              aria-label="View our GitHub repositories"
              title="View our GitHub repositories"
            >
              <FaGithub size={20} aria-hidden="true" />
              <span className="sr-only">GitHub</span>
            </a>

            <a 
              href="https://www.linkedin.com/in/hiteshchoudhary/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-700 hover:text-blue-600 dark:text-white dark:hover:text-blue-400 transition"
              aria-label="Connect with us on LinkedIn"
              title="Connect with us on LinkedIn"
            >
              <FaLinkedin size={20} aria-hidden="true" />
              <span className="sr-only">LinkedIn</span>
            </a>

            <a 
              href="https://www.youtube.com/@chaiaurcode" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-700 hover:text-red-600 dark:text-white dark:hover:text-red-400 transition"
              aria-label="Subscribe to our YouTube channel"
              title="Subscribe to our YouTube channel"
            >
              <FaYoutube size={20} aria-hidden="true" />
              <span className="sr-only">YouTube</span>
            </a>

            <a 
              href="https://x.com/ChaiCodeHQ" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-700 hover:text-black dark:text-white dark:hover:text-gray-300 transition"
              aria-label="Follow us on X (formerly Twitter)"
              title="Follow us on X (Twitter)"
            >
              <FaXTwitter size={18} aria-hidden="true" />
              <span className="sr-only">X (Twitter)</span>
            </a>

            <a 
              href="https://discord.gg/yourserver" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-700 hover:text-indigo-600 dark:text-white dark:hover:text-indigo-400 transition"
              aria-label="Join our Discord community"
              title="Join our Discord community"
            >
              <FaDiscord size={20} aria-hidden="true" />
              <span className="sr-only">Discord</span>
            </a>

            <a 
              href="https://instagram.com/yourusername" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-700 hover:text-pink-500 dark:text-white dark:hover:text-pink-400 transition"
              aria-label="Follow us on Instagram"
              title="Follow us on Instagram"
            >
              <FaInstagram size={20} aria-hidden="true" />
              <span className="sr-only">Instagram</span>
            </a>

            <a 
              href="mailto:techrunner22@gmail.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-700 hover:text-red-600 dark:text-white dark:hover:text-red-400 transition"
              aria-label="Report a bug or issue"
              title="Report a bug or issue"
            >
              <FaBug size={20} aria-hidden="true" />
              <span className="sr-only">Report Bug</span>
            </a>
          </div>

          {/* Theme Toggle */}
          <button 
            onClick={toggleTheme} 
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
            title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
          >
            {isDark ? (
              <IoMdSunny size={20} className="text-yellow-400" aria-hidden="true" />
            ) : (
              <IoMdMoon size={20} className="text-gray-700" aria-hidden="true" />
            )}
          </button>

          {/* Login Button */}
          <button 
            onClick={() => window.open("https://courses.chaicode.com/learn/account/signup", "_blank")} 
            className="text-black flex items-center hover:text-black dark:text-white dark:hover:text-gray-300 transition  px-5 rounded-sm"
            style={{
              backgroundColor: 'var(--brand-color)',
              border: 'none',
              cursor: 'pointer',
              fontSize: '16px',
              fontWeight: 'bold',
            }}
            aria-label="Sign up or log in to your account"
            title="Sign up or log in to your account"
          >
            <span className="me-2 mt-2 mb-2">Login</span>
            <IoMdLogIn size={20} aria-hidden="true" />
          </button>

          {/* Hamburger Menu Button - Visible only on mobile */}
          <button 
            onClick={toggleMenu} 
            className="md:hidden p-2 text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            title={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? (
              <FaTimes size={20} aria-hidden="true" />
            ) : (
              <FaBars size={20} aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu - Slides down when menu is open */}
      <div 
        id="mobile-menu"
        className={`md:hidden fixed left-0 right-0 top-[64px] transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
        }`}
        role="navigation"
        aria-label="Mobile menu"
        aria-hidden={!isMenuOpen}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 bg-white dark:bg-black border-b border-gray-200 dark:border-gray-700 shadow-lg text-black dark:text-white">
          <button 
            onClick={() => handleNavClick('https://courses.chaicode.com/learn/view-all?show=batch&type=17')} 
            className="w-full flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            aria-label="Navigate to Cohort section"
            title="View our coding cohorts"
          >
            <FaUsers aria-hidden="true" />
            <span>COHORT</span>
            <span className="relative flex h-2 w-2 ml-1" aria-hidden="true">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-red-600"></span>
            </span>
          </button>

          <button 
            onClick={() => handleNavClick('https://courses.chaicode.com/learn')} 
            className="w-full flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            aria-label="Navigate to Udemy section"
            title="Explore our Udemy courses"
          >
            <FaGraduationCap aria-hidden="true" />
            <span>Udemy</span>
          </button>

          <button 
            onClick={() => handleNavClick('https://docs.chaicode.com/')} 
            className="w-full flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            aria-label="Navigate to Documentation section"
            title="View documentation"
          >
            <FaFileAlt aria-hidden="true" />
            <span>Docs</span>
          </button>

          <button 
            onClick={() => handleNavClick('https://courses.chaicode.com/learn/batch/about?bundleId=226894')} 
            className="w-full flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            aria-label="Navigate to Reviews section"
            title="Read student reviews"
          >
            <FaStar aria-hidden="true" />
            <span>Reviews</span>
          </button>
          
          {/* Social Icons in Mobile Menu */}
          <div 
            className="flex items-center justify-around py-3 border-t border-gray-200 dark:border-gray-700"
            role="navigation"
            aria-label="Social media links"
          >
            <a 
              href="https://github.com/hiteshchoudhary/chai-backend" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-700 hover:text-red-600 dark:text-white dark:hover:text-red-400 transition"
              aria-label="Report a bug or issue"
              title="Report a bug or issue"
            >
              <FaBug size={20} aria-hidden="true" />
              <span className="sr-only">Report Bug</span>
            </a>

            <a 
              href="https://discord.gg/yourserver" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-700 hover:text-indigo-600 dark:text-white dark:hover:text-indigo-400 transition"
              aria-label="Join our Discord community"
              title="Join our Discord community"
            >
              <FaDiscord size={20} aria-hidden="true" />
              <span className="sr-only">Discord</span>
            </a>

            <a 
              href="https://x.com/ChaiCodeHQ" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-700 hover:text-black dark:text-white dark:hover:text-gray-300 transition"
              aria-label="Follow us on X (formerly Twitter)"
              title="Follow us on X (Twitter)"
            >
              <FaXTwitter size={18} aria-hidden="true" />
              <span className="sr-only">X (Twitter)</span>
            </a>

            <a 
              href="https://www.linkedin.com/in/hiteshchoudhary/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-700 hover:text-blue-600 dark:text-white dark:hover:text-blue-400 transition"
              aria-label="Connect with us on LinkedIn"
              title="Connect with us on LinkedIn"
            >
              <FaLinkedin size={20} aria-hidden="true" />
              <span className="sr-only">LinkedIn</span>
            </a>

            <a 
              href="https://www.youtube.com/@chaiaurcode" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-700 hover:text-red-600 dark:text-white dark:hover:text-red-400 transition"
              aria-label="Subscribe to our YouTube channel"
              title="Subscribe to our YouTube channel"
            >
              <FaYoutube size={20} aria-hidden="true" />
              <span className="sr-only">YouTube</span>
            </a>

            <a 
              href="https://instagram.com/yourusername" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-700 hover:text-pink-500 dark:text-white dark:hover:text-pink-400 transition"
              aria-label="Follow us on Instagram"
              title="Follow us on Instagram"
            >
              <FaInstagram size={20} aria-hidden="true" />
              <span className="sr-only">Instagram</span>
            </a>

            <a 
              href="https://github.com/hiteshchoudhary/chai-backend" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-700 hover:text-black dark:text-white dark:hover:text-gray-300 transition"
              aria-label="View our GitHub repositories"
              title="View our GitHub repositories"
            >
              <FaGithub size={20} aria-hidden="true" />
              <span className="sr-only">GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
