import React from "react";
import {
  FaYoutube,
  FaInstagram,
  FaGithub,
  FaTwitter,
  FaLinkedin,
  FaRegCommentDots,
} from "react-icons/fa";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";
import LogoLight from "@/assets/chaicode/chai-white.svg";
import LogoDark from "@/assets/chaicode/chai-gray.svg";


function Footer() {
  return (
    <footer className="bg-transparent dark:text-white text-black pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 md:px-8 pb-12">
        {/* Logo + Social */}
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
          <img
        src={LogoDark}
        alt="ChaiCode Logo - Light"
        className="block dark:hidden"
        width={32}
        height={32}
      />
      {/* Dark mode logo */}
      <img
        src={LogoLight}
        alt="ChaiCode Logo - Dark"
        className="hidden dark:block"
        width={32}
        height={32}
      />
            <h1 className="text-xl font-bold">ChaiCode</h1>
          </div>
          <p className="text-gray-400">Home for programmers</p>
          <div className="flex space-x-4 text-gray-400 text-lg">
            <FaYoutube />
            <FaInstagram />
            <FaGithub />
            <FaTwitter />
            <FaLinkedin />
            <FaRegCommentDots />
          </div>
          <p className="text-xs text-gray-500 pt-6">
            © 2025 ChaiCode. All rights reserved.
          </p>
        </div>

        {/* Products */}
        <div>
          <h2 className="text-white font-semibold mb-3">Products</h2>
          <ul className="space-y-2 text-gray-400">
            <li>Courses</li>
            <li>Cohort</li>
            <li className="text-orange-500">Coding Hero</li>
            <li>FreeAPI</li>
            <li>Masterji</li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h2 className="text-white font-semibold mb-3">Resources</h2>
          <ul className="space-y-2 text-gray-400">
            <li>Docs</li>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
            <li>Pricing Policy</li>
            <li>Refund Policy</li>
          </ul>
        </div>
      </div>

      {/* Animated Text (Always keep this 👇) */}
      <div className="pt-6">
        <div className="h-[10rem] flex items-center justify-center">
          <TextHoverEffect text="CODE with CHAI CODE" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
