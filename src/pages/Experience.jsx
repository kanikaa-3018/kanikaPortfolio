import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const experiences = [
  {
    title: "Software Engineering Intern",
    company: "TechNova Solutions",
    duration: "May 2024 - July 2024",
    description:
      "Developed and optimized RESTful APIs using Node.js and Express, integrated MongoDB for data storage, and improved API performance by 30%.",
  },
  {
    title: "Frontend Developer Intern",
    company: "Creativify",
    duration: "Jan 2024 - Apr 2024",
    description:
      "Designed responsive UI components using React and Tailwind CSS, collaborated with UI/UX designers, and enhanced mobile performance.",
  },
  {
    title: "Open Source Contributor",
    company: "GirlScript Summer of Code",
    duration: "Summer 2023",
    description:
      "Contributed to multiple open source repositories, fixed bugs, wrote documentation, and mentored beginner contributors on Git workflows.",
  },
  {
    title: "Full Stack Developer (Freelance)",
    company: "Freelance Projects",
    duration: "Ongoing",
    description:
      "Built full-stack applications for clients, integrated third-party APIs, and deployed on platforms like Vercel and Netlify.",
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
          className="absolute left-1/2 transform -translate-x-1/2 text-4xl sm:text-5xl font-extrabold text-white bg-clip-text text-transparent drop-shadow-lg animate-gradient"
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
