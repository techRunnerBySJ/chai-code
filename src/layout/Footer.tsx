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

function Footer() {
  const products = [
    { name: "Courses", href: "#" },
    { name: "Cohort", href: "#" },
    { name: "Coding Hero", href: "#", highlight: true },
    { name: "FreeAPI", href: "#" },
    { name: "Masterji", href: "#" },
  ];

  const resources = [
    { name: "Docs", href: "#" },
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Pricing Policy", href: "#" },
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
            />
            <img
              src={LogoLight}
              alt="ChaiCode Logo - Dark"
              className="hidden dark:block w-8 md:w-[32px]"
              width={32}
              height={32}
              aria-hidden="true"
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
              href="https://github.com/yourusername/issues/new"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-600 transition-colors"
              aria-label="Report a bug or issue"
              title="Report a bug or issue"
            >
              <FaBug className="w-6 h-6 md:w-5 md:h-5" aria-hidden="true" />
              <span className="sr-only">Report Bug</span>
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
              href="https://x.com/yourusername"
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
              href="https://youtube.com/yourusername"
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
              href="https://github.com/yourusername"
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
              href="https://linkedin.com/yourusername"
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
            className="text-base md:text-lg font-semibold mb-2 md:mb-3 text-black dark:text-white"
            aria-label="Products section"
          >
            Products
          </h2>
          <ul className="space-y-2 text-gray-400" role="list" aria-label="List of products">
            {products.map((product) => (
              <li key={product.name}>
                <a
                  href={product.href}
                  className={`text-sm md:text-base hover:text-gray-600 dark:hover:text-gray-300 transition-colors ${
                    product.highlight ? "text-orange-500 hover:text-orange-600" : ""
                  }`}
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
            className="text-base md:text-lg font-semibold mb-2 md:mb-3 text-black dark:text-white"
            aria-label="Resources section"
          >
            Resources
          </h2>
          <ul className="space-y-2 text-gray-400" role="list" aria-label="List of resources">
            {resources.map((resource) => (
              <li key={resource.name}>
                <a
                  href={resource.href}
                  className="text-sm md:text-base hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
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