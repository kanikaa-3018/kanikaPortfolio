// import React from 'react';
// import GooeyNav from "../components/GooeyNav/GooeyNav.jsx";

// const Navbar = () => {
//   const items = [
//     { label: "Home", href: "#" },
//     { label: "About", href: "#about" },
//     { label: "Skills", href: "#skills" },
//     { label: "Projects", href: "#projects" },
//     { label: "Experience", href: "#experience" },
//     { label: "Achievements", href: "#achievements" },
//     { label: "Contact", href: "#contact" },
//   ];

//   return (
//     <div
//       style={{
//         height: '80px',
//         width: '100%',
//         backgroundColor: '#0e0e0e',
//         position: 'fixed',
//         top: 0,
//         left: 0,
//         zIndex: 1000, 
//       }}
//       className="flex justify-center items-center"
//     >
//       <GooeyNav
//         items={items}
//         particleCount={15}
//         particleDistances={[90, 10]}
//         particleR={100}
//         initialActiveIndex={0}
//         animationTime={600}
//         timeVariance={300}
//         colors={[1, 2, 3, 1, 2, 3, 1, 4]}
//       />
//     </div>
//   );
// };

// export default Navbar;

import React, { useState } from "react";
import GooeyNav from "../components/GooeyNav/GooeyNav.jsx";
import { FiMenu, FiX } from "react-icons/fi";

const items = [
  { label: "Home", href: "#" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      {/* Main Navbar */}
      <div className="fixed top-0 left-0 w-full h-[80px] bg-[#0e0e0e] z-[1000] flex items-center justify-between px-4 sm:px-6">
        {/* Left Logo */}
        <div className="text-white text-xl font-bold tracking-widest" style={{ fontFamily: "Orbitron, sans-serif" }}>
          KS
        </div>

        {/* GooeyNav - Desktop only */}
        <div className="hidden md:flex justify-center w-full">
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

        {/* Burger Icon - Mobile only */}
        <div className="md:hidden z-[1100]">
          <button onClick={toggleMenu} className="text-white text-2xl">
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Sidebar Menu - Mobile */}
      <div
        className={`fixed top-0 right-0 h-screen w-[70%] sm:w-[60%] bg-black/95 backdrop-blur-md z-[1090] p-6 transform transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <div className="text-white text-2xl font-semibold mb-8">
          Navigation
        </div>
        <ul className="space-y-6">
          {items.map((item, index) => (
            <li key={index}>
              <a
                href={item.href}
                onClick={closeMenu}
                className="text-white text-lg font-medium transition duration-300 relative inline-block after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-cyan-400 hover:after:w-full hover:text-cyan-400 after:transition-all after:duration-300"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
