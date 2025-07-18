import { motion } from "framer-motion";
import React from "react";
import algo from "../assets/algo.jpg";
import intern from "../assets/intern.jpg";
import hog from "../assets/hog.png";
import post from "../assets/post.png";
import pa from "../assets/pa.jpg";
import cc from "../assets/cc.jpg";
import hack from "../assets/hack.jpg";
const experiences = [
  {
    title: "ATF Tech Fellow",
    org: "AlgoUniversity",
    duration: "June 2024 - Present",
    desc: "Selected as one of 100 fellows across India for the Advanced Tech Fellowship by AlgoUniversity. Trained in high-performance engineering and system design.",
    img: algo,
  },
  {
    title: "Co-op SWE Intern",
    org: "AlgoUniversity",
    duration: "April 2024 - July 2024",
    desc: "Worked on scalable full-stack features across multiple microservices. Contributed to internal tools and optimized backend workflows.",
    img: intern,
  },
  {
    title: "Postman Student Expert",
    org: "Postman",
    duration: "May 2024",
    desc: "Completed Postman's Student Expert certification covering APIs, requests, testing, and collections. Gained hands-on experience with Postman tooling.",
    img: post,
  },
  {
    title: "Winner - HackNovate 6.0",
    org: "ABES Engineering College",
    duration: "March 2024",
    desc: "Won first place in HackNovate 6.0 for building a linux mint based Operating system- HogwartsOS.",
    img: hog,
  },
  {
    title: "Project Admin",
    org: "GirlScript Summer of Code (GSSoC 2025)",
    duration: "May 2025 - Present",
    desc: "Leading and mentoring open-source contributors under GSSoC'25. Managing PR reviews, contributor onboarding, and project enhancements.",
    img: pa,
  },
  //   {
  //     title: "Mentee",
  //     org: "Codescafe Mentorship Program",
  //     duration: "Feb 2024 - April 2024",
  //     desc: "Mentored under industry experts on DSA, system design, and full-stack projects. Collaborated with peers on weekly challenges and reviews.",
  //     img: "/images/codescafe.png",
  //   },
  {
    title: "Participant - Hackstreet",
    org: "JIIT Noida",
    duration: "March 2024",
    desc: "Built a prototype during a 24-hour hackathon on AI + education. Implemented a personalized study assistant with NLP-based quiz generation.",
    img: hack,
  },
  {
    title: "Finalist - CodeClash",
    org: "Lets code Community",
    duration: "April 2024",
    desc: "Reached finals of CodeClash, solving advanced algorithmic challenges under time constraints. Competed among top 20 out of 800+ participants.",
    img: cc,
  },
];

export default function DetailedExperience() {
  return (
    <section id="experience" className="py-20 px-4 sm:px-10 bg-black">
      {/* Header */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl sm:text-5xl font-bold text-white text-center mb-16 mt-16 relative inline-block"
        style={{ fontFamily: "Orbitron, sans-serif" }}
      >
        <span className="relative z-10">
          Achievements & Certifications {" "}
          <span className="absolute bottom-0 left-0 w-full h-[2px] bg-white rounded-full" />
        </span>
      </motion.h2>

      {/* Timeline */}
      <div className="relative pl-6 border-l-2 border-cyan-500 space-y-16 max-w-3xl mx-auto">
        {experiences.map((exp, idx) => (
          <motion.div
            key={idx}
            className="relative ml-4"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            viewport={{ once: true }}
          >
            {/* Circle Marker */}
            <span className="absolute -left-6 top-4 w-4 h-4 bg-cyan-500 rounded-full shadow-md shadow-fuchsia-500/30" />

            {/* Card */}
            <div className="bg-zinc-900 p-5 sm:p-6 rounded-xl border border-white/10 shadow-md hover:shadow-fuchsia-500/30 transition-all duration-300">
              <div className="flex flex-col sm:flex-row items-center sm:items-start sm:gap-6">
                {/* Responsive Image */}
                <img
                  src={exp.img}
                  alt={exp.title}
                  className="w-full sm:w-64 h-48 object-cover rounded-lg border border-zinc-700 mb-4 sm:mb-0"
                />

                {/* Text Content */}
                <div className="text-center sm:text-left">
                  <h3 className="text-xl font-semibold text-white">
                    {exp.title}
                  </h3>
                  <p className="text-sm text-cyan-400 italic">{exp.org}</p>
                  <p className="text-sm text-gray-400 mb-2">{exp.duration}</p>
                  <p className="text-sm text-gray-300">{exp.desc}</p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
