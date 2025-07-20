import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const experiences = [
  {
    title: "SWE Co-op Intern",
    company: "AlgoUniversity",
    duration: "May 2025 - Present",
    description:
      "Contributing to backend infrastructure and feature development using Node.js, PostgreSQL, and TypeScript as part of a structured co-op program.",
  },
  {
    title: "Full Stack Developer Intern",
    company: "Tinker Tutor",
    duration: "Jul 2025 - Aug 2025",
    description:
      "Worked on the core platform using MERN stack, implemented user authentication, and optimized frontend performance with efficient React patterns.",
  },
  {
    title: "Hackathon Participant",
    company: "10+ hackathons",
    duration: "2022 - Present",
    description:
      "Participated in 10+ national and international hackathons; developed innovative solutions across domains like edtech, AI, and fintech.",
  },
  {
    title: "Shefi'13 Scholar",
    company: "Shefi Foundation",
    duration: "2023",
    description:
      "Selected as a Shefi'13 Scholar for academic excellence and social impact; engaged in leadership-building workshops and mentoring programs.",
  },
  {
    title: "Top 2.2 Round Qualifier",
    company: "Flipkart GRID 5.0",
    duration: "June 2025",
    description:
      "Advanced to Round 2.2 among thousands of participants; solved real-world problem statements related to system design and scalability.",
  },
  {
    title: "Head of Content",
    company: "Google Developer Group (GDG), IIIT Gwalior",
    duration: "2024 - Present",
    description:
      "Led content strategy for technical events, managed speaker sessions, and mentored junior members in community contributions.",
  },
  {
    title: "Executive Member",
    company: "Manchtantra (Dramatics Society)",
    duration: "2023 - Present",
    description:
      "Organized and performed in college-level stage plays; contributed to scriptwriting, direction, and event coordination.",
  },
  {
    title: "Finalist",
    company: "Odoo Hackathon 2025",
    duration: "July 2025",
    description:
      "Selected as a finalist team after clearing the first virtual round; showcased in the grand finale among top national teams.",
  },
];


const Experience = () => {
  const navigate = useNavigate();
  return (
    <section
      className="w-full bg-black text-white py-20 px-4 sm:px-10 relative"
      id="experience"
    >
      {/* Title */}
      <div className="relative flex items-center justify-center mb-14 px-4 sm:px-10">
        {/* Absolutely Centered Heading */}
        <motion.h2
          className="absolute left-1/2 transform -translate-x-1/2 text-4xl sm:text-5xl font-extrabold text-white bg-clip-text  drop-shadow-lg animate-gradient"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          My Experience
        </motion.h2>

        {/* View All Button - Pushed to Right */}
        <motion.button
          className="ml-auto px-5 py-2 rounded-xl backdrop-blur-md bg-white/10 text-white border border-white/20 hover:bg-white/20 transition duration-300 text-sm sm:text-base z-10"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate("/myexperience")}
        >
          View All
        </motion.button>
      </div>

      {/* Fading edges */}
      <div className="absolute top-0 left-0 w-24 h-full z-10 bg-gradient-to-r from-black to-transparent pointer-events-none" />
      <div className="absolute top-0 right-0 w-24 h-full z-10 bg-gradient-to-l from-black to-transparent pointer-events-none" />

      {/* Scroll container */}
      <div className="overflow-hidden w-full">
        <motion.div
          className="flex gap-8"
          initial={{ x: 0 }}
          animate={{ x: "-50%" }}
          transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
        >
          {[...experiences, ...experiences].map((exp, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05, rotate: 1 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="min-w-[340px] max-w-[360px] bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl shadow-lg relative group"
            >
              {/* Animated Glow */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-600 blur opacity-20 group-hover:opacity-40 transition duration-300 rounded-2xl z-0" />
              <div className="relative z-10">
                <h3 className="text-xl font-semibold text-cyan-400 mb-1">
                  {exp.title}
                </h3>
                <p className="text-sm text-gray-300 mb-1">{exp.company}</p>
                <p className="text-xs text-gray-500 mb-3 italic">
                  {exp.duration}
                </p>
                <p className="text-sm text-gray-200 leading-snug whitespace-normal">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
