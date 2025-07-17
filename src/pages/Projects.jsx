import React, { useState } from "react";
import { FiGrid, FiList, FiGithub, FiExternalLink } from "react-icons/fi";
import ChromaGrid from "../components/ChromaGrid/ChromaGrid.jsx";
import StarBorder from "../Animations/StarBorder/StarBorder.jsx";
import databasefile from "../assets/databasefile.png";
import Thumbnail from "../assets/Thumbnail.png";
import codearena from "../assets/codearena.png";
import c2 from "../assets/c2.png";
import c3 from "../assets/c3.png";
import c4 from "../assets/c4.png";
import c5 from "../assets/c5.png";
import w1 from "../assets/w1.png";
import w2 from "../assets/w2.png";
import w3 from "../assets/w3.png";
import w5 from "../assets/w5.png";
import h2 from "../assets/h2.jpg";
import h3 from "../assets/h3.png";
import h4 from "../assets/h4.jpg";
import h5 from "../assets/h5.jpg";
import { FiArrowRight } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const projects = [
  {
    name: "CodeArena",
    subtitle: "Online Code Playground",
    description:
      "CodeArena is a real-time collaborative code editor built for developers, students, and teams to experiment and build code live. It supports syntax highlighting using Monaco Editor, seamless real-time preview, and collaborative editing via WebSockets.",
    stack: ["React", "Monaco Editor", "Node.js", "WebSockets"],
    images: [codearena, c2, c3, c4, c5],
    github: "https://github.com/kanikaa-3018/contest_onlinejudge",
    live: "https://contest-onlinejudge.vercel.app/",
    funFact: "No bugs lived past the 3 AM testing sprint!",
    meme: "https://img.buzzfeed.com/buzzfeed-static/static/2018-08/3/19/asset/buzzfeed-prod-web-06/sub-buzz-19699-1533338825-5.png?downsize=900:*&output-format=auto&output-quality=auto",
    gradient: "linear-gradient(145deg, #FF00FF, #000)",
    borderColor: "#FF00FF",
  },
  {
    name: "W3nity",
    subtitle: "Web3 Community Portal",
    description:
      "W3nity is a Web3-powered community platform designed to bridge creators, developers, and blockchain enthusiasts. With decentralized identity, smart contract integrations, NFT profile showcases, and IPFS-based content hosting — it's a digital home for the decentralized web.",
    stack: ["Next.js", "Solidity", "Ethers.js", "IPFS"],
    images: [w1, w2, w3, w5],
    github: "https://github.com/kanikaa-3018/W3nity",
    live: "https://w3nity.vercel.app/",
    funFact: "I tried defi farming and lost 0.01 ETH… Still counts as XP.",
    meme: "data:image/jpeg;base64,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",
    gradient: "linear-gradient(145deg, #00FFFF, #000)",
    borderColor: "#00FFFF",
  },
  {
    name: "HogwartsOS",
    subtitle: "Magical Sorting Simulator",
    description:
      "HogwartsOS is a magical sorting simulation platform inspired by the Harry Potter universe. It offers an interactive quiz to determine your house, complete with animated transitions, wand-based UI interactions, and real-time Firebase backend.",
    stack: ["Vue.js", "Firebase", "Tailwind CSS", "Linux", "ElectronJS"],
    images: [Thumbnail, h2, h3, h4, h5],
    github: "https://github.com/kanikaa-3018/Hogwarts-OS",
    live: "https://github.com/kanikaa-3018/Hogwarts-OS",
    funFact: "I nearly got sorted into Slytherin… but coffee intervened.",
    meme: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSErrDNyRB3FF7BMDbHXvlDy36Gt9VOMEl12A&s",
    gradient: "linear-gradient(145deg, #9400D3, #000)",
    borderColor: "#9400D3",
  },
];

const Projects = () => {
  // const navigate = useNavigate();
  const [view, setView] = useState("grid");
  const [imageIndexes, setImageIndexes] = useState({});

  const handlePrev = (i, length) => {
    setImageIndexes((prev) => ({
      ...prev,
      [i]: prev[i] === 0 || prev[i] === undefined ? length - 1 : prev[i] - 1,
    }));
  };

  const handleNext = (i, length) => {
    setImageIndexes((prev) => ({
      ...prev,
      [i]: prev[i] === length - 1 || prev[i] === undefined ? 0 : prev[i] + 1,
    }));
  };

  return (
    <section
      className="w-full min-h-screen bg-black text-white px-6 sm:px-16 py-24"
      id="projects"
    >
      <div className="relative flex items-center justify-between mb-12">
        {/* Centered Title */}
        <h2 className="absolute left-1/2 transform -translate-x-1/2 text-4xl sm:text-5xl font-extrabold text-center">
          Projects
        </h2>

        {/* Toggle Buttons on the Right */}
        <div className="ml-auto flex gap-4 text-xl">
          <button
            onClick={() => setView("grid")}
            className={`p-2 rounded-full transition ${
              view === "grid" ? "bg-white text-black" : "bg-white/10 text-white"
            }`}
            title="Grid View"
          >
            <FiGrid />
          </button>
          <button
            onClick={() => setView("list")}
            className={`p-2 rounded-full transition ${
              view === "list" ? "bg-white text-black" : "bg-white/10 text-white"
            }`}
            title="List View"
          >
            <FiList />
          </button>
        </div>
      </div>

      {/* Grid view using ChromaGrid */}
      {view === "grid" ? (
        <div style={{ height: "auto", position: "relative" }}>
          <ChromaGrid
            items={projects.map((proj) => ({
              image: proj.images[0],
              title: proj.name,
              subtitle: proj.subtitle,
              handle: (
                <div className="flex flex-col items-center gap-2 text-sm h-[200px] justify-center">
                  <p className="italic text-white/80">
                    {proj.description.slice(0, 100)}...
                  </p>
                  <div className="flex flex-wrap gap-2 text-xs">
                    {proj.stack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3 items-center mt-2">
                    <StarBorder
                      as="a"
                      href={proj.github}
                      target="_blank"
                      rel="noreferrer"
                      color="white"
                      speed="5s"
                      className="text-xs"
                    >
                      GitHub
                    </StarBorder>
                    <StarBorder
                      as="a"
                      href={proj.live}
                      target="_blank"
                      rel="noreferrer"
                      color="cyan"
                      speed="5s"
                      className="text-xs"
                    >
                      View Project
                    </StarBorder>
                  </div>
                </div>
              ),
              borderColor: proj.borderColor,
              gradient: proj.gradient,
              url: proj.live,
            }))}
          />
          <button
            // onClick={() => navigate("/projects")}
            className="group relative inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#1f1f1f] via-[#2a2a2a] to-[#1a1a1a] text-white font-semibold shadow-md hover:shadow-xl transition duration-300 border border-white/10 hover:border-white/30 mt-8"
          >
            <span className="text-sm sm:text-base">Show Projects</span>
            <FiArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
            <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-10 bg-white transition duration-300"></span>
          </button>
        </div>
      ) : (
        // List view
        <div className="space-y-12">
          {projects.map((proj, i) => {
            const index = imageIndexes[i] || 0;

            return (
              <div
                key={i}
                className="flex flex-col lg:flex-row gap-6 bg-[#111827] text-white p-6 rounded-3xl shadow-xl"
              >
                {/* Image carousel */}
                <div className="lg:w-3/4 flex flex-col md:flex-row gap-6 text-left">
                  <div className="relative w-full md:w-2/5">
                    <img
                      src={proj.images[index]}
                      alt={proj.name}
                      className="rounded-xl object-cover h-[200px] w-full shadow"
                    />
                    <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-3 items-center px-2">
                      <button
                        onClick={() => handlePrev(i, proj.images.length)}
                        className="bg-white/10 hover:bg-white/20 text-white p-2 px-3 rounded-full"
                      >
                        &#8592;
                      </button>
                      <button
                        onClick={() => handleNext(i, proj.images.length)}
                        className="bg-white/10 hover:bg-white/20 text-white p-2 px-3 rounded-full"
                      >
                        &#8594;
                      </button>
                    </div>
                  </div>

                  {/* Project text */}
                  <div className="flex-1 space-y-3">
                    <h3 className="text-2xl font-bold border-b border-white/10 pb-1">
                      {proj.name}
                    </h3>
                    <p className="text-sm font-semibold text-gray-300">
                      {proj.subtitle}
                    </p>
                    <p className="text-sm italic text-gray-400">
                      {proj.description}
                    </p>
                    <div className="flex flex-wrap gap-2 pt-2">
                      {proj.stack.map((tech, idx) => (
                        <span
                          key={idx}
                          className="text-xs px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-4 text-lg pt-4 items-center flex-wrap">
                      <a href={proj.github} target="_blank" rel="noreferrer">
                        <FiGithub className="hover:text-blue-400" />
                      </a>
                      <a href={proj.live} target="_blank" rel="noreferrer">
                        <FiExternalLink className="hover:text-blue-400" />
                      </a>
                      <StarBorder
                        as="a"
                        href={proj.live}
                        target="_blank"
                        rel="noreferrer"
                        color="cyan"
                        speed="5s"
                        className="text-xs custom-class"
                      >
                        View Project
                      </StarBorder>
                    </div>
                  </div>
                </div>

                {/* Fun Fact + Meme */}
                <div className="lg:w-1/4 bg-black border border-white/10 rounded-xl p-4 flex flex-col justify-between shadow text-left">
                  <p className="text-sm italic mb-4 text-yellow-300">
                    "{proj.funFact}"
                  </p>
                  <img
                    src={proj.meme}
                    alt="Meme"
                    className="rounded-lg object-cover h-40 w-full"
                  />
                </div>
              </div>
            );
          })}

          <button
            // onClick={() => navigate("/projects")}
            className="group relative inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#1f1f1f] via-[#2a2a2a] to-[#1a1a1a] text-white font-semibold shadow-md hover:shadow-xl transition duration-300 border border-white/10 hover:border-white/30 mt-8"
          >
            <span className="text-sm sm:text-base">Show Projects</span>
            <FiArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
            <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-10 bg-white transition duration-300"></span>
          </button>
        </div>
      )}
    </section>
  );
};

export default Projects;
