import SpotlightCard from "../components/SpotlightCard/SpotlightCard.jsx";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import { motion } from "framer-motion";
import React from "react";
import w1 from "../assets/w1.png"
import codearena from "../assets/codearena.png"
import Thumbnail from "../assets/Thumbnail.png"
import image from "../assets/image.png"
import hope from "../assets/hope.png"

const projects = [
  {
    title: "Contest Tracker + Online Judge",
    description:
      "A full-stack platform that combines coding contest tracking with an online judge. Integrates Codeforces, LeetCode, and CodeChef APIs, featuring AI-powered post-contest analytics, real-time code execution, test case generation, and performance insights.",
    stack: ["MERN", "Docker", "n8n", "AI", "JWT", "TailwindCSS", "Codeforces API"],
    github: "https://github.com/kanikaa-3018/contest_onlinejudge",
    live: "", // Add if deployed
    image: codearena,
  },
  {
    title: "W3nity",
    description:
      "A decentralized Web3 portfolio and community app for developers. Features interactive 3D UI, NFT showcases, Web3 authentication, and personal blogging—all in one immersive network.",
    stack: ["React", "Three.js", "Web3.js", "TailwindCSS", "IPFS", "Metamask"],
    github: "https://github.com/kanikaa-3018/w3nity",
    live: "", // Add if deployed
    image: w1,
  },
  {
    title: "Hogwarts OS",
    description:
      "A custom-built OS developed in C++ with process scheduling (MLFQ), memory management, Gantt chart display, and system call handling. Designed to demonstrate low-level system architecture.",
    stack: ["C++", "MLFQ", "Memory Management", "Gantt Chart", "Syscalls", "Terminal UI"],
    github: "https://github.com/kanikaa-3018/hogwarts-OS",
    live: "", // Not applicable
    image: Thumbnail,
  },
  {
    title: "KayzKoffee",
    description:
      "An elegant and responsive cafe website with a live order panel, user auth, dynamic menu management, and admin dashboard. Designed with a strong aesthetic focus for a premium experience.",
    stack: ["React", "TailwindCSS", "Firebase", "Framer Motion", "Vite"],
    github: "https://github.com/kanikaa-3018/kayzzkoffee",
    live: "", // Add if deployed
    image: image,
  },
  {
    title: "Hope Aesthetics",
    description:
      "A luxury skincare and aesthetics clinic website with smooth scroll, embedded booking options, animated UI, and mobile-first design. Built to reflect brand elegance and user experience.",
    stack: ["HTML", "CSS", "JavaScript", "AOS", "GSAP", "Responsive Design"],
    github: "https://github.com/kanikaa-3018/hope-aestehtics",
    live: "", // Add if deployed
    image: hope,
  },
  {
    title: "MCP Twitter",
    description:
      "A microblogging web app inspired by Twitter, featuring user auth, real-time tweets, comments, likes, and notifications. Built using WebSockets for live feed updates and MERN for backend.",
    stack: ["MERN", "WebSockets", "Redux", "JWT", "TailwindCSS", "MongoDB"],
    github: "https://github.com/kanikaa-3018/mcp-twitter",
    live: "", // Add if deployed
    image: "/images/mcp-twitter.png",
  },
];


const DetailedProjects = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-black text-white px-6 py-14 md:px-24">
      {/* Animated Title */}
      <motion.h1
        className="text-4xl md:text-6xl font-extrabold text-center mb-16 tracking-tight relative inline-block mt-16" style={{ fontFamily: "Orbitron, sans-serif" }}
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        My Projects
        <span className="absolute bottom-0 left-0 w-full h-[2px] bg-white rounded-full" />
      </motion.h1>

      {/* Projects Grid */}
      <div className="grid gap-12 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((proj, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <SpotlightCard
              spotlightColor="rgba(0, 229, 255, 0.08)"
              className="group relative backdrop-blur-md bg-white/5 border border-white/10 hover:scale-[1.03] transition-all duration-300 rounded-xl shadow-lg hover:shadow-cyan-500/20"
            >
              <div className="p-5 relative z-10">
                {/* Image */}
                {proj.image && (
                  <div className="mb-4 overflow-hidden rounded-lg">
                    <motion.img
                      src={proj.image}
                      alt={proj.title}
                      className="rounded-lg w-full object-cover h-40 group-hover:scale-105 transition-transform duration-500"
                      whileHover={{ scale: 1.05 }}
                    />
                  </div>
                )}

                {/* Title */}
                <h2 className="text-xl font-semibold mb-2 text-cyan-400">
                  {proj.title}
                </h2>

                {/* Description */}
                <p className="text-sm text-gray-300 mb-4">{proj.description}</p>

                {/* Stack Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {proj.stack.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-cyan-500/10 px-2 py-1 text-xs rounded-md border border-cyan-400/20 text-cyan-100"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  {proj.github && (
                    <a
                      href={proj.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-cyan-400 transition"
                    >
                      <FiGithub size={20} />
                    </a>
                  )}
                  {proj.live && (
                    <a
                      href={proj.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-green-400 transition"
                    >
                      <FiExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>

              {/* Glowing Border on Hover */}
              <div className="absolute inset-0 rounded-xl border border-transparent group-hover:border-cyan-500 transition-all duration-300 group-hover:animate-pulse pointer-events-none" />
            </SpotlightCard>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default DetailedProjects;
