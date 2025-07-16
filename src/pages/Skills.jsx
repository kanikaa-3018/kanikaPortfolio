import React from "react";
import InfiniteMenu from "../components/InfiniteMenu/InfiniteMenu.jsx";
import skillsData from "../assets/skillsData.js";

const Skills = () => {
  return (
    <section id="skills" className="w-full bg-black text-white px-6 sm:px-12 py-16">
      <h2 className="text-4xl sm:text-5xl font-extrabold text-center mb-6">
        My Skills
      </h2>
      <p className="text-center text-gray-400 text-lg mb-6 max-w-2xl mx-auto">
        Here’s a glimpse of the technologies I love working with – from sleek frontends and powerful backends, to creative tools and futuristic AI magic.
      </p>
      <div style={{ height: "600px", position: "relative" }}>
        <InfiniteMenu items={skillsData} />
      </div>
    </section>
  );
};

export default Skills;
