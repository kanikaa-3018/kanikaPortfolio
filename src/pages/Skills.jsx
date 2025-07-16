import React from "react";
import InfiniteMenu from "../components/InfiniteMenu/InfiniteMenu.jsx";
import skillsData from "../assets/skillsData.js";

const Skills = () => {
  return (
    <section
      id="skills"
      className="w-full bg-black text-white px-4 sm:px-6 md:px-12 py-12 sm:py-16"
    >
      {/* Heading */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-4 sm:mb-6 leading-tight">
        My Skills
      </h2>

      {/* Subtitle */}
      <p className="text-center text-gray-400 text-base sm:text-lg mb-6 max-w-xl mx-auto px-2 leading-relaxed">
        Here’s a glimpse of the technologies I love working with – from sleek frontends and powerful backends, to creative tools and futuristic AI magic.
      </p>

      {/* Infinite Menu */}
      <div
        className="relative w-full"
        style={{ height: "450px" }}
      >
        <InfiniteMenu items={skillsData} />
      </div>
    </section>
  );
};

export default Skills;
