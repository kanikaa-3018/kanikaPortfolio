import { motion } from "framer-motion";
import React from "react";
import {
  FaReact, FaNodeJs, FaGitAlt, FaDocker, FaDatabase,
  FaAws, FaPython, FaJava
} from "react-icons/fa";
import {
  SiMongodb, SiPostgresql, SiJavascript, SiTypescript,
  SiFirebase, SiTailwindcss
} from "react-icons/si";
import { LuLaptop, LuSend } from "react-icons/lu"; // Fallback icons

const skills = {
  "Frontend & UI": [
    { name: "JavaScript", icon: <SiJavascript />, level: 95 },
    { name: "TypeScript", icon: <SiTypescript />, level: 90 },
    { name: "React.js", icon: <FaReact />, level: 92 },
    { name: "Next.js", icon: <FaReact />, level: 85 },
    { name: "Redux", icon: <SiJavascript />, level: 85 },
    { name: "Tailwind CSS", icon: <SiTailwindcss />, level: 95 },
    { name: "Sass", icon: <SiJavascript />, level: 80 },
    { name: "Bootstrap", icon: <SiJavascript />, level: 75 },
    { name: "Framer Motion", icon: <SiJavascript />, level: 85 },
  ],

  "Backend & APIs": [
    { name: "Node.js", icon: <FaNodeJs />, level: 90 },
    { name: "Express.js", icon: <FaNodeJs />, level: 88 },
    { name: "RESTful APIs", icon: <LuSend />, level: 90 },
    { name: "GraphQL", icon: <SiJavascript />, level: 75 },
    { name: "JWT Auth", icon: <SiJavascript />, level: 85 },
    { name: "WebSockets", icon: <SiJavascript />, level: 70 },
  ],

  "Databases": [
    { name: "MongoDB", icon: <SiMongodb />, level: 90 },
    { name: "PostgreSQL", icon: <SiPostgresql />, level: 80 },
    { name: "MySQL", icon: <FaDatabase />, level: 75 },
    { name: "Firebase", icon: <SiFirebase />, level: 80 },
    { name: "Redis", icon: <SiJavascript />, level: 70 },
  ],

  "AI, Data & Python": [
    { name: "Python", icon: <FaPython />, level: 85 },
    { name: "TensorFlow", icon: <SiJavascript />, level: 75 },
    { name: "PyTorch", icon: <SiJavascript />, level: 70 },
    { name: "Pandas", icon: <SiJavascript />, level: 80 },
    { name: "NumPy", icon: <SiJavascript />, level: 85 },
    { name: "OpenCV", icon: <SiJavascript />, level: 65 },
  ],

  "DevOps & Cloud": [
    { name: "Docker", icon: <FaDocker />, level: 85 },
    { name: "Git", icon: <FaGitAlt />, level: 95 },
    { name: "GitHub Actions", icon: <SiJavascript />, level: 80 },
    { name: "AWS", icon: <FaAws />, level: 75 },
    { name: "Azure", icon: <SiJavascript />, level: 70 },
    { name: "Linux", icon: <SiJavascript />, level: 85 },
    { name: "Nginx", icon: <SiJavascript />, level: 70 },
  ],

  "Tools & Platforms": [
    { name: "VS Code", icon: <LuLaptop />, level: 98 },
    { name: "Postman", icon: <LuSend />, level: 90 },
    { name: "Figma", icon: <SiJavascript />, level: 75 },
    { name: "Jira", icon: <SiJavascript />, level: 70 },
    { name: "Notion", icon: <SiJavascript />, level: 80 },
  ]
};


const SkillCard = ({ title, skillList }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="bg-zinc-800 rounded-2xl border border-white/10 shadow-md p-6 w-full sm:w-[30%] space-y-4 hover:shadow-blue-500/30 transition-shadow duration-300"
  >
    <h3 className="text-xl font-semibold text-white tracking-wide border-b border-white/10 pb-2">
      {title}
    </h3>
    <div className="space-y-4">
      {skillList.map((skill, i) => (
        <div key={i}>
          <div className="flex items-center gap-3 text-white">
            <div className="text-lg">{skill.icon}</div>
            <p>{skill.name}</p>
          </div>
          <div className="w-full bg-white/10 rounded-full h-2 mt-2 overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${skill.level}%` }}
              transition={{
                duration: 1,
                delay: i * 0.1,
                ease: "easeInOut"
              }}
              className="h-full bg-gradient-to-r from-sky-400 via-blue-500 to-blue-600"
            />
          </div>
        </div>
      ))}
    </div>
  </motion.div>
);

const DetailedSkills = () => {
  return (
    <div className="py-20 px-6 sm:px-10 lg:px-20 bg-black text-white space-y-12">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-6xl sm:text-4xl font-bold tracking-wider mt-16 text-center text-white relative inline-block font-display"
        style={{ fontFamily: "Orbitron, sans-serif" }}
      >
        Tech Skills
        <span className="absolute bottom-0 left-0 w-full h-[2px] bg-white rounded-full" />
      </motion.h2>

      <div className="flex flex-col sm:flex-row flex-wrap gap-8 justify-center items-stretch">
        {Object.entries(skills).map(([title, list]) => (
          <SkillCard key={title} title={title} skillList={list} />
        ))}
      </div>
    </div>
  );
};

export default DetailedSkills;
