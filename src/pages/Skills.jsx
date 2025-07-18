// import React from "react";
// import InfiniteMenu from "../components/InfiniteMenu/InfiniteMenu.jsx";
// import skillsData from "../assets/skillsData.js";

// const Skills = () => {
//   return (
//     <section
//       id="skills"
//       className="w-full bg-black text-white px-4 sm:px-6 md:px-12 py-12 sm:py-16"
//     >
//       {/* Heading */}
//       <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-4 sm:mb-6 leading-tight">
//         My Skills
//       </h2>

//       {/* Subtitle */}
//       <p className="text-center text-gray-400 text-base sm:text-lg mb-6 max-w-xl mx-auto px-2 leading-relaxed">
//         Here’s a glimpse of the technologies I love working with – from sleek frontends and powerful backends, to creative tools and futuristic AI magic.
//       </p>

//       {/* Infinite Menu */}
//       <div
//         className="relative w-full"
//         style={{ height: "450px" }}
//       >
//         <InfiniteMenu items={skillsData} />
//       </div>
//     </section>
//   );
// };

// export default Skills;

import React, { useState } from "react";
import { motion } from "framer-motion";
import InfiniteMenu from "../components/InfiniteMenu/InfiniteMenu.jsx";
import skillsData from "../assets/skillsData.js";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const Skills = () => {
  const [activeTooltip, setActiveTooltip] = useState(null);

  const handleTap = (index) => {
    setActiveTooltip(activeTooltip === index ? null : index);
  };

  return (
    <section
      id="skills"
      className="w-full bg-black text-white px-4 sm:px-6 md:px-12 py-12 sm:py-16"
    >
      {/* Heading */}
      <motion.h2
        className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-4 sm:mb-6 leading-tight"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={0}
      >
        My Skills
      </motion.h2>

      {/* Subtitle */}
      <motion.p
        className="text-center text-gray-400 text-base sm:text-lg mb-6 max-w-xl mx-auto px-2 leading-relaxed"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={1}
      >
        Here’s a glimpse of the technologies I love working with – from sleek
        frontends and powerful backends, to creative tools and futuristic AI
        magic.
      </motion.p>

      {/* Desktop Infinite Scroll */}
      <motion.div
        className="hidden md:block"
        style={{ height: "450px" }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <InfiniteMenu items={skillsData} />
      </motion.div>

      {/* Mobile Skills Grid */}
      <div className="grid grid-cols-4 gap-6 md:hidden mt-8">
        {skillsData.map((skill, idx) => (
          <motion.div
            key={idx}
            className="relative flex flex-col items-center group"
            onClick={() => handleTap(idx)}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.05 }}
            whileTap={{ scale: 0.9 }}
          >
            {/* Icon with spin effect */}
            <motion.img
              src={skill.image}
              alt={skill.title}
              className={`w-14 h-14 sm:w-16 sm:h-16 transition-transform duration-500 ease-in-out ${
                activeTooltip === idx ? "rotate-[360deg]" : ""
              } group-hover:rotate-[360deg]`}
              whileTap={{ rotate: 360 }}
              transition={{ type: "spring", stiffness: 300 }}
            />

            {/* Tooltip */}
            <motion.div
              className={`absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 z-10 pointer-events-none ${
                activeTooltip === idx ? "opacity-100" : "opacity-0"
              } group-hover:opacity-100 transition-opacity duration-300`}
              initial={{ opacity: 0 }}
              animate={{ opacity: activeTooltip === idx ? 1 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative bg-white text-black text-sm font-semibold px-3 py-1 rounded shadow-md whitespace-nowrap">
                {skill.title}
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white rotate-45 -mt-1 z-[-1]"></div>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
