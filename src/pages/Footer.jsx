import React from "react";
import { FiGithub, FiLinkedin, FiMail, FiTwitter } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="relative w-full bg-[#0a0a0a] border-t border-white/10 text-white py-10 px-6 sm:px-16">
      {/* Top line animation */}
      <div className="absolute top-0 left-1/2 w-[90%] h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-pulse -translate-x-1/2" />

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start justify-between gap-8 py-12">
        
        {/* Logo or Tagline */}
        <div className="text-center md:text-left space-y-2">
          <h4 className="text-3xl font-bold text-cyan-200">Kanika Singhal</h4>
          <p className="text-xl text-gray-400">
            Crafting code, coffee, and clean UIs ☕
          </p>
        </div>

        {/* Quick Links (Optional) */}
        <div className="hidden md:block">
          <ul className="space-y-2 text-sm text-gray-400">
            <li><a href="#projects" className="hover:text-white transition">Projects</a></li>
            <li><a href="#achievements" className="hover:text-white transition">Achievements</a></li>
            <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
          </ul>
        </div>

        {/* Social Icons */}
        <div className="flex gap-6 text-2xl">
          <a
            href="https://github.com/kanikaa-3018"
            target="_blank"
            rel="noreferrer"
            className="hover:text-cyan-400 transition hover:scale-110"
            title="GitHub"
          >
            <FiGithub />
          </a>
          <a
            href="https://linkedin.com/in/kanikaa-3018"
            target="_blank"
            rel="noreferrer"
            className="hover:text-cyan-400 transition hover:scale-110"
            title="LinkedIn"
          >
            <FiLinkedin />
          </a>
          <a
            href="mailto:kanikaa@example.com"
            className="hover:text-cyan-400 transition hover:scale-110"
            title="Email"
          >
            <FiMail />
          </a>
          <a
            href="https://twitter.com/kanikaa3018"
            target="_blank"
            rel="noreferrer"
            className="hover:text-cyan-400 transition hover:scale-110"
            title="Twitter"
          >
            <FiTwitter />
          </a>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="mt-10 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Kanika Singhal • Built with ☕ & React
      </div>
    </footer>
  );
};

export default Footer;
