import { motion } from "framer-motion";
import { useRef } from "react";
import React from "react";

export const TiltCard = ({ title, description, image }) => {
  const ref = useRef(null);

  return (
    <motion.div
      ref={ref}
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="relative min-w-[280px] md:min-w-[350px] bg-[#111] rounded-2xl p-4 text-white shadow-lg border border-[#333] hover:border-cyan-500/50"
      style={{
        background: "linear-gradient(145deg, #1e1e1e, #0e0e0e)",
        backdropFilter: "blur(10px)",
      }}
    >
      <div className="overflow-hidden rounded-xl mb-4">
        <img
          src={image}
          alt={title}
          className="w-full h-40 object-cover rounded-xl transition duration-300 hover:scale-105"
        />
      </div>
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-sm text-gray-300 mt-2">{description}</p>
    </motion.div>
  );
};
