import React from 'react';
import GooeyNav from "../components/GooeyNav/GooeyNav.jsx";

const Navbar = () => {
  const items = [
    { label: "Home", href: "#" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Achievements", href: "#achievements" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <div
      style={{
        height: '80px',
        width: '100%',
        backgroundColor: '#0e0e0e',
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 1000, 
      }}
      className="flex justify-center items-center"
    >
      <GooeyNav
        items={items}
        particleCount={15}
        particleDistances={[90, 10]}
        particleR={100}
        initialActiveIndex={0}
        animationTime={600}
        timeVariance={300}
        colors={[1, 2, 3, 1, 2, 3, 1, 4]}
      />
    </div>
  );
};

export default Navbar;


