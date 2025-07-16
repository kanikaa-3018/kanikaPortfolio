import React from "react";
import TiltedCard from "../components/TiltedCard/TiltedCard";
import { FaCode, FaPaintBrush } from "react-icons/fa";
import {
  FiCpu,
  FiFeather,
  FiActivity,
  FiCoffee,
  FiZap,
  FiTrendingUp,
} from "react-icons/fi";
import GlassIcons from "../components/GlassIcons/GlassIcons";

const Card = ({ title, subtitle, desc, color = "white" }) => (
  <div className="relative group p-5 h-full rounded-2xl bg-[#0c0c1f] overflow-hidden transition-all duration-300 shadow-md hover:shadow-cyan-500/30">
    {/* Border Animation on Hover */}
    <span className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-cyan-400 z-10 pointer-events-none animate-borderDraw" />

    {/* Card Content */}
    <div className="relative z-20 text-center flex flex-col justify-center h-full">
      <p className={`text-sm font-semibold text-${color} mb-1`}>{subtitle}</p>
      <h3 className="text-xl font-bold text-white">{title}</h3>
      <p className="mt-2 text-sm text-gray-300">{desc}</p>
    </div>
  </div>
);

const Overview = () => {
  const cpItems = [
    { icon: <FiTrendingUp />, color: "blue", label: "Specialist – Codeforces" },
    { icon: <FiZap />, color: "yellow", label: "Knight – LeetCode" },
    { icon: <FiCpu />, color: "red", label: "3★ – CodeChef" },
    { icon: <FaCode />, color: "indigo", label: "500+ Problems Solved" },
    { icon: <FiActivity />, color: "green", label: "Active Contestant" },
  ];

  const cpStats = [
    {
      platform: "Codeforces",
      rank: "Specialist",
      logo: "https://sta.codeforces.com/s/61182/images/codeforces-logo-with-telegram.png",
      color: "from-[#2f2f95] to-[#4c4cdd]",
      link: "https://codeforces.com/profile/yourprofile",
    },
    {
      platform: "LeetCode",
      rank: "Knight",
      logo: "https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png",
      color: "from-yellow-800 to-yellow-500",
      link: "https://leetcode.com/yourprofile",
    },
    {
      platform: "CodeChef",
      rank: "3★",
      logo: "https://s3.amazonaws.com/codechef_shared/sites/all/themes/abessive/cc-logo.svg",
      color: "from-[#5B4638] to-[#8D6E63]",
      link: "https://www.codechef.com/users/yourprofile",
    },
  ];

  return (
    <section className="w-full bg-black text-white px-6 sm:px-12 py-16">
      <h2 className="text-4xl sm:text-5xl font-extrabold text-center mb-16">
        About Me
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Column 1 */}
        <div className="h-[450px] flex flex-col gap-4">
          <div className="flex-1">
            <TiltedCard
              imageSrc="https://images.unsplash.com/vector-1743446708614-75e82327d3c6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzR8fGFic3RyYWN0fGVufDB8MHwwfHx8MA%3D%3D"
              altText="Full Stack Developer"
              captionText="Kanika | Full Stack Dev"
              containerHeight="100%"
              containerWidth="100%"
              imageHeight="100%"
              imageWidth="100%"
              rotateAmplitude={10}
              scaleOnHover={1.05}
              showTooltip={false}
              displayOverlayContent={true}
              overlayContent={
                <div className="flex flex-col items-center justify-center text-white text-center px-4 h-full">
                  <h3 className="text-xl font-bold mt-4 pl-8">
                    Full Stack Developer
                  </h3>
                  <p className="text-sm">
                    Building smooth frontends and solid backends.
                  </p>
                </div>
              }
            />
          </div>
          <div className="grid grid-cols-2 gap-4  ">
            <Card
              title="Creative Chaos"
              subtitle="All-Rounder"
              desc="From designing posters to anchoring events - I wear many hats and still stay grounded."
              color="yellow-400"
            />
            <Card
              title="Curious Learner"
              subtitle="Exploring More"
              desc="Currently diving into AI, devtools, agent AI's and orchestration - curiosity is the engine."
              color="green-400"
            />
          </div>
        </div>

        {/* Column 2 */}
        <div className="h-auto flex flex-col justify-center bg-white/5 backdrop-blur-md rounded-2xl p-6 shadow-inner border border-white/10 transition-all duration-500 hover:shadow-2xl">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white text-center mb-4 tracking-wide animate-fade-in">
            Competitive Programmer
          </h3>
          <p className="text-sm sm:text-base text-gray-300 text-center mb-2 px-4">
            I love solving algorithmic problems and taking part in contests.
            Here's a snapshot of my CP journey:
          </p>

          {/* CP Platform Cards */}
          <div className="flex-1 overflow-y-auto animate-slide-in-bottom">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
              {cpStats.map((stat, index) => (
                <a
                  key={index}
                  href={stat.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`bg-gradient-to-br ${stat.color} rounded-xl p-4 flex flex-col items-center text-white shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300`}
                >
                  <img
                    src={stat.logo}
                    alt={stat.platform}
                    className="h-10 mb-2 object-contain grayscale hover:grayscale-0 transition duration-300"
                  />
                  <p className="text-sm opacity-80">{stat.platform}</p>
                  <h3 className="text-lg font-bold">{stat.rank}</h3>
                </a>
              ))}
            </div>

            {/* Timeline-style Achievements */}
            <div className="mt-10 space-y-4 px-2">
              
              <div className="relative border-l-2 border-cyan-500 pl-6 space-y-4 text-sm text-gray-300">
                <div className="relative">
                  <span className="absolute left-[-12px] top-1 w-3 h-3 bg-cyan-400 rounded-full animate-ping" />
                  <p>
                    ATF Fellow – <strong>AlgoUniversity, 2024</strong>
                  </p>
                </div>
                <div className="relative">
                  <span className="absolute left-[-12px] top-1 w-3 h-3 bg-cyan-400 rounded-full animate-ping" />
                  <p>
                    Finalist – <strong>CodeClash Coding Contest</strong>
                  </p>
                </div>
                
                <div className="relative">
                  <span className="absolute left-[-12px] top-1 w-3 h-3 bg-cyan-400 rounded-full animate-ping" />
                  <p>
                    <strong>CodeChef Starters</strong> 3★ Contest – Top 2%
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Column 3 */}
        <div className="h-[450px] flex flex-col gap-4">
          <div className="flex-1">
            <Card
              title="B.Tech in Information Technology"
              subtitle="ABV-IIITM Gwalior · 2023–2027"
              desc="Currently pursuing my Bachelor's in IT from ABV Indian Institute of Information Technology & Management, Gwalior. Passionate about software development, research, and solving real-world problems with tech."
              color="blue-500"
            />
          </div>

          {/* TiltedCard with Weeknd Image & Hobbies */}
          <div className="flex-1">
            <TiltedCard
              imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSdzwTSFf242I9ds2WOBg89QZslCM3zuVBOg&s"
              altText="The Weeknd"
              captionText=""
              containerHeight="100%"
              containerWidth="100%"
              imageHeight="100%"
              imageWidth="100%"
              rotateAmplitude={10}
              scaleOnHover={1.05}
              showTooltip={false}
              displayOverlayContent={true}
              overlayContent={
                <div className="flex flex-col items-center justify-center text-black text-center px-4 h-full">
                  <h3 className="text-xl font-bold mt-3">Hobbies & Vibes</h3>
                  <p className="text-sm">
                    Music on loop (The Weeknd, duh), late-night design binges,
                    writing when emotions overflow, and sipping coffee like it’s
                    a personality.
                  </p>
                </div>
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Overview;
