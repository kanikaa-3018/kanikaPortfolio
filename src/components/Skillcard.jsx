import React from "react";
import { motion } from "framer-motion";

const SkillBar = ({ name, level, color }) => (
  <div className="mb-4">
    <div className="flex justify-between mb-1 text-sm font-semibold text-white">
      <span>{name}</span>
      <span>{level}%</span>
    </div>
    <div className="w-full h-3 bg-gray-700 rounded-full overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: `${level}%` }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className={`h-full rounded-full`}
        style={{ background: color }}
      />
    </div>
  </div>
);

const SkillCard = ({ title, skills }) => (
  <div className="bg-[#1c1c1c] rounded-2xl p-6 shadow-lg w-full sm:w-[45%] md:w-[40%] lg:w-[30%] hover:scale-[1.03] transition-all duration-300 border border-gray-700">
    <h3 className="text-white text-xl font-bold mb-4 tracking-wide">{title}</h3>
    {skills.map((skill, idx) => (
      <SkillBar key={idx} {...skill} />
    ))}
  </div>
);

export default SkillCard;
