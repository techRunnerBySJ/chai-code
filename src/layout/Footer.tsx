import {
  FaYoutube,
  FaInstagram,
  FaGithub,
  FaLinkedin,
  FaDiscord,
  FaBug,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";
import LogoLight from "@/assets/chaicode/chai-white.svg";
import LogoDark from "@/assets/chaicode/chai-gray.svg";
import { useState } from "react";

function Footer() {
  const [activeLink, setActiveLink] = useState<string | null>(null);

  const handleLinkClick = (url: string) => {
    setActiveLink(url);
  };

  const products = [
    { name: "Courses", href: "https://courses.chaicode.com/learn" },
    { name: "Cohort", href: "https://courses.chaicode.com/learn/view-all?show=batch&type=17" },
    { name: "Coding Hero", href: "https://courses.chaicode.com/learn/batch/about?bundleId=226894" },
    { name: "FreeAPI", href: "https://freeapi.app/" },
    { name: "Masterji", href: "https://masterji.co/login" },
  ];

  const resources = [
    { name: "Docs", href: "https://docs.chaicode.com/" },
    { name: "Privacy Policy", href: "https://www.chaicode.com/privacy-policy" },
    { name: "Terms of Service", href: "https://www.chaicode.com/terms-of-services" },
    { name: "Pricing Policy", href: "https://www.chaicode.com/pricing-policy" },
    { name: "Refund Policy", href: "#" },
  ];

  return (
    <footer
      className="bg-transparent dark:text-white text-black pt-8 md:pt-12 pb-4 md:pb-6"
      role="contentinfo"
      aria-label="Site footer"
    >
      <div
        className="max-w-7xl mx-auto px-4 md:px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 pb-8 md:pb-12"
        role="region"
        aria-label="Footer content"
      >
        {/* Logo + Social */}
        <div
          className="space-y-4 sm:col-span-2 md:col-span-1"
          role="region"
          aria-label="Brand information"
        >
          <div className="flex items-center space-x-2" role="banner">
            <img
              src={LogoDark}
              alt="ChaiCode Logo - Light"
              className="block dark:hidden w-8 md:w-[32px]"
              width={32}
              height={32}
              aria-hidden="true"
              loading="lazy"
            />
            <img
              src={LogoLight}
              alt="ChaiCode Logo - Dark"
              className="hidden dark:block w-8 md:w-[32px]"
              width={32}
              height={32}
              aria-hidden="true"
              loading="lazy"
            />
            <h1 className="text-lg md:text-xl font-bold" aria-label="ChaiCode">
              ChaiCode
            </h1>
          </div>
          <p
            className="text-sm md:text-base text-gray-400"
            aria-label="Tagline"
          >
            Home for programmers
          </p>
          <nav
            aria-label="Social media links"
            className="flex flex-wrap gap-4 text-gray-400"
            role="navigation"
          >
            <a
              href="https://github.com/hiteshchoudhary/chai-backend"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-800 dark:hover:text-white transition-colors"
              aria-label="View our GitHub repositories"
              title="View our GitHub repositories"
            >
              <FaGithub className="w-6 h-6 md:w-5 md:h-5" aria-hidden="true" />
              <span className="sr-only">GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/hiteshchoudhary/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 transition-colors"
              aria-label="Connect with us on LinkedIn"
              title="Connect with us on LinkedIn"
            >
              <FaLinkedin
                className="w-6 h-6 md:w-5 md:h-5"
                aria-hidden="true"
              />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a
              href="https://www.youtube.com/@chaiaurcode"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-600 transition-colors"
              aria-label="Subscribe to our YouTube channel"
              title="Subscribe to our YouTube channel"
            >
              <FaYoutube className="w-6 h-6 md:w-5 md:h-5" aria-hidden="true" />
              <span className="sr-only">YouTube</span>
            </a>
            <a
              href="https://x.com/ChaiCodeHQ"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-800 dark:hover:text-white transition-colors"
              aria-label="Follow us on X (formerly Twitter)"
              title="Follow us on X (Twitter)"
            >
              <FaXTwitter
                className="w-5 h-5 md:w-[18px] md:h-[18px]"
                aria-hidden="true"
              />
              <span className="sr-only">X (Twitter)</span>
            </a>
            <a
              href="https://discord.gg/yourserver"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-500 transition-colors"
              aria-label="Join our Discord community"
              title="Join our Discord community"
            >
              <FaDiscord className="w-6 h-6 md:w-5 md:h-5" aria-hidden="true" />
              <span className="sr-only">Discord</span>
            </a>
            <a
              href="https://instagram.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500 transition-colors"
              aria-label="Follow us on Instagram"
              title="Follow us on Instagram"
            >
              <FaInstagram
                className="w-6 h-6 md:w-5 md:h-5"
                aria-hidden="true"
              />
              <span className="sr-only">Instagram</span>
            </a>
            <a
              href="mailto:techrunner22@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-600 transition-colors"
              aria-label="Report a bug or issue"
              title="Report a bug or issue"
            >
              <FaBug className="w-6 h-6 md:w-5 md:h-5" aria-hidden="true" />
              <span className="sr-only">Report Bug</span>
            </a>
          </nav>
          <p
            className="text-xs md:text-sm text-gray-500 pt-4 md:pt-6"
            aria-label="Copyright information"
          >
            © {new Date().getFullYear()} ChaiCode. All rights reserved.
          </p>
        </div>

        {/* Products */}
        <nav aria-label="Product links" className="mt-2 md:mt-0" role="navigation">
          <h2
            className="text-base md:text-lg font-semibold mb-4 md:mb-6 text-black dark:text-white tracking-wide"
            aria-label="Products section"
          >
            Products
          </h2>
          <ul className="space-y-3 text-gray-400" role="list" aria-label="List of products">
            {products.map((product) => (
              <li key={product.name}>
                <a
                  href={product.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-sm md:text-base transition-all duration-300 ${
                    activeLink === product.href
                      ? 'text-orange-500 scale-105'
                      : 'hover:text-gray-600 dark:hover:text-gray-300 hover:scale-105'
                  }`}
                  onClick={() => handleLinkClick(product.href)}
                  aria-label={`Learn about ${product.name}`}
                  title={`Learn about ${product.name}`}
                >
                  {product.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Resources */}
        <nav aria-label="Resource links" className="mt-2 md:mt-0" role="navigation">
          <h2
            className="text-base md:text-lg font-semibold mb-4 md:mb-6 text-black dark:text-white tracking-wide"
            aria-label="Resources section"
          >
            Resources
          </h2>
          <ul className="space-y-3 text-gray-400" role="list" aria-label="List of resources">
            {resources.map((resource) => (
              <li key={resource.name}>
                <a
                  href={resource.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-sm md:text-base transition-all duration-300 ${
                    activeLink === resource.href
                      ? 'text-orange-500 scale-105'
                      : 'hover:text-gray-600 dark:hover:text-gray-300 hover:scale-105'
                  }`}
                  onClick={() => handleLinkClick(resource.href)}
                  aria-label={`Learn about ${resource.name}`}
                  title={`Learn about ${resource.name}`}
                >
                  {resource.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Animated Text */}
      <div className="pt-4 md:pt-6" role="region" aria-label="Animated text section">
        <div className="h-24 md:h-[10rem] flex items-center justify-center" aria-hidden="true">
          <TextHoverEffect text="CODE with CHAI CODE" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;