import React from "react";
import { motion } from "framer-motion";
import {
  FaLaptopCode,
  FaUsers,
  FaCodeBranch,
  FaUserGraduate,
  FaCode,
  FaUserEdit,
  FaPenNib,
  FaUserTie,
} from "react-icons/fa";
import {
  SiGithub,
  SiHackclub,
  SiGoogle,
  SiOpenaccess,
} from "react-icons/si";

const experiences = [
  {
    title: "Full Stack Developer Intern",
    company: "Tinker Tutor",
    icon: <FaLaptopCode size={28} />,
    duration: "Jan 2024 - May 2024",
    description:
      "Built scalable dashboard features, integrated video streaming, and optimized MongoDB queries for performance.",
  },
  {
    title: "Content Head",
    company: "GDG IIIT Gwalior",
    icon: <FaUsers size={28} />,
    duration: "Aug 2023 - Present",
    description:
      "Led content creation, handled developer blogs, managed social strategy, and collaborated across tech events.",
  },
  {
    title: "Freelance Full Stack Projects",
    company: "Remote",
    icon: <FaCodeBranch size={28} />,
    duration: "2022 - Present",
    description:
      "Worked on real-world MERN stack projects, REST APIs, admin dashboards, and client-focused deployments.",
  },
  {
    title: "Shefi13 Scholar",
    company: "She Codes Foundation",
    icon: <FaUserGraduate size={28} />,
    duration: "2024",
    description: "Selected as Shefi13 Scholar for exceptional performance and community engagement.",
  },
  {
    title: "Contributor",
    company: "GSSoC'24 | SSOC'24 | SSOC'25",
    icon: <SiGithub size={28} />,
    duration: "2024 - 2025",
    description:
      "Contributed to multiple open-source organizations through various seasonal programs.",
  },
  {
    title: "Contributor",
    company: "Hacktoberfest 2024",
    icon: <FaCode size={28} />,
    duration: "Oct 2024",
    description:
      "Successfully completed Hacktoberfest by contributing to open-source repositories globally.",
  },
  {
    title: "Member",
    company: "Manchtantra, IIITM Gwalior",
    icon: <FaUserTie size={28} />,
    duration: "2023 - Present",
    description: "Active member contributing to campus events, cultural management, and outreach.",
  },
  {
    title: "SheCodes Scholar",
    company: "SheCodes",
    icon: <FaPenNib size={28} />,
    duration: "2023",
    description: "Awarded scholarship for outstanding aptitude in programming and project work.",
  },
];


const MyExperience = () => {
  return (
    <div className="min-h-screen bg-[#0a0f1b] px-4 md:px-8 py-20">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl sm:text-5xl font-bold text-white text-center mb-16 mt-16 relative inline-block"
        style={{ fontFamily: "Orbitron, sans-serif" }}
      >
        <span className="relative z-10">
          Professional Experiences{" "}
          <span className="absolute bottom-0 left-0 w-full h-[2px] bg-white rounded-full" />
        </span>
      </motion.h2>

      <div className="flex flex-col md:flex-row md:flex-wrap gap-10 justify-center items-center md:items-stretch">
        {experiences.map((exp, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            viewport={{ once: true }}
            className="relative group w-full sm:w-[90%] md:w-[30%] bg-[#111827]/40 border border-blue-500/30 backdrop-blur-md rounded-xl shadow-2xl overflow-hidden p-6 transition-all duration-300 hover:scale-[1.03]"
          >
            <div className="absolute top-4 right-4 w-3 h-3 bg-blue-400 rounded-full animate-ping" />
            <div className="flex items-center gap-3 text-blue-300 mb-3">
              <div className="bg-blue-700/30 p-3 rounded-full group-hover:scale-110 transition-transform">
                {exp.icon}
              </div>
              <h3 className="text-xl font-bold">{exp.title}</h3>
            </div>
            <p className="text-sm text-gray-400 mb-2">
              {exp.company} &nbsp;|&nbsp; {exp.duration}
            </p>
            <p className="text-gray-300">{exp.description}</p>

            {/* Glass bubble hover overlay */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500">
              <div className="w-64 h-64 bg-white rounded-full blur-3xl absolute -top-16 -left-16"></div>
              <div className="w-32 h-32 bg-blue-400 rounded-full blur-2xl absolute bottom-0 right-0"></div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default MyExperience;
