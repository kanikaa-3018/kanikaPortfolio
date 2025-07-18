import React, { useState } from "react";
import { motion } from "framer-motion";

const AboutMe = () => {
  const [isRun, setIsRun] = useState(false);
  const [command, setCommand] = useState("");
  const [invalidCommand, setInvalidCommand] = useState(false);

  const handleCommand = (e) => {
    if (e.key === "Enter") {
      const trimmed = command.trim();
      if (trimmed === "npx kanika") {
        setIsRun(true);
        setInvalidCommand(false);
      } else {
        setIsRun(false);
        setInvalidCommand(true);
      }
    }
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6 },
    }),
  };

  return (
    <section className="min-h-screen bg-[#0e0e10] text-gray-200 font-sans px-4 sm:px-6 py-20 mt-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10">
        {/* VS Code Column */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="bg-[#1e1e1e] rounded-xl shadow-xl overflow-hidden w-full md:w-1/2"
        >
          {/* Header */}
          <div
            className="bg-[#2d2d2d] text-white px-4 py-2 flex items-center justify-between text-sm"
            style={{ fontFamily: "Orbitron, sans-serif" }}
          >
            <span>📁 kanika_cp_stats.js</span>
            <span className="text-[#d4d4d4]">VSCode</span>
          </div>

          {/* Code Block */}
          <pre className="px-4 sm:px-6 py-4 text-sm leading-relaxed text-[#9cdcfe] font-mono min-h-[260px] overflow-x-auto">
            {isRun
              ? `const handleCP = () => {
  const platforms = ["Codeforces", "LeetCode", "CodeChef"];
  const achievements = [
    { site: "Codeforces", rating: "Specialist (1500+)" },
    { site: "CodeChef", rating: "3★", rank: "Global Top 2000" },
    { site: "LeetCode", problemsSolved: 650 }
  ];

  return { platforms, achievements };
};`
              : invalidCommand
              ? `// Unknown command...
// System breach detected ⚠️
// Initializing self-destruct in 3...2... just kidding.

throw new Error("💥 Invalid command: '${command}'");`
              : `// Enter command below to view Kanika's CP stats...
// hint: try "npx kanika"`}
          </pre>

          {/* Input Terminal */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="bg-black text-green-400 font-mono px-4 py-3 border-t border-[#2d2d2d]"
          >
            <p className="text-sm mb-1">{">"} Type command to fetch CP stats</p>
            <input
              type="text"
              placeholder="npx kanika"
              value={command}
              onChange={(e) => setCommand(e.target.value)}
              onKeyDown={handleCommand}
              className="w-full bg-black text-green-400 outline-none border-none placeholder:text-green-600"
            />
          </motion.div>
        </motion.div>

        {/* About Me Column */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="w-full md:w-1/2 flex flex-col space-y-6 text-[#d1d5db]"
        >
          <motion.h2
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl font-bold text-white mb-8 relative inline-block text-center"
            style={{ fontFamily: "Orbitron, sans-serif" }}
          >
            <span className="relative z-10">
              About Me{" "}
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-white rounded-full" />
            </span>
          </motion.h2>

          {[
            `I'm Kanika Singhal, a passionate Full-Stack Developer pursuing my B.Tech in IT from IIIT Gwalior. I love building systems that are not just functional, but intuitive and enjoyable to use. I specialize in the MERN stack, crafting clean, scalable backend systems and dynamic, responsive frontends.`,
            `Some of my notable real-world projects include a full-fledged competitive programming platform that combines a contest tracker, an AI-powered online judge, and smart features like hint generation, code feedback, and edge case prediction. I’ve also built tools like Hogwarts OS — a custom-built operating system for fun and learning.`,
            `Beyond academics and CP, I’ve won many national-level coding competitions and actively contribute to open-source. I believe in building for the community — from helpful dev tools to AI-based solutions.`,
            `I'm also deeply involved in CP: rated Specialist on Codeforces, 3★ on CodeChef, and solved over 650+ LeetCode problems.`,
            `I’m currently seeking internship opportunities in full-stack or AI-integrated development teams where I can work on real-world products that create impact.`,
          ].map((para, i) => (
            <motion.p
              key={i}
              variants={fadeUp}
              custom={i + 1}
              className="text-md leading-relaxed max-w-3xl"
            >
              {para}
            </motion.p>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;
