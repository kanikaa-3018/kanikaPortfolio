import { Typewriter } from 'react-simple-typewriter';
import React from 'react';

const TypewriterEffect = () => {
  return (
    <h2
      className="text-xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent animate-pulse transition-all duration-500 ease-in-out text-center"
      style={{ fontFamily: '"Orbitron", "Share Tech Mono", monospace' }}
    >
      <Typewriter
        words={[
          "Full Stack Developer 💻",
          "Competitive Programmer 🧠",
          "AI Enthusiast 🤖",
          "Always Curious 🚀",
        ]}
        loop={true}
        cursor
        cursorStyle="|"
        typeSpeed={60}
        deleteSpeed={40}
        delaySpeed={1800}
      />
    </h2>
  );
};

export default TypewriterEffect;
