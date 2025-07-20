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

import React, { useState, useRef, useEffect } from "react";
import GooeyNav from "../components/GooeyNav/GooeyNav.jsx";
import { FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import ks from "../../public/ks.png";

const items = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Skills", href: "/myskills" },
  { label: "Projects", href: "/myprojects" },
  { label: "Experience", href: "/myexperience" },
  { label: "Achievements", href: "/myachievements" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const sidebarRef = useRef(null);

  // Close sidebar on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };
    if (menuOpen) {
      document.body.style.overflow = "hidden";
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.body.style.overflow = "auto";
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.body.style.overflow = "auto";
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <>
      <div className="fixed top-0 left-0 w-full h-[80px] bg-[#0e0e0e] z-[1000] shadow-lg">
        <div className="max-w-7xl mx-auto flex items-center justify-between h-full px-4 sm:px-6">
          {/* Logo */}
          <div
            className="text-white text-xl font-bold tracking-widest"
            style={{ fontFamily: "Orbitron, sans-serif" }}
          >
            <img
              src={ks}
              alt="logo"
              width={48}
              height={48}
              className="object-contain"
            />
          </div>

          {/* Gooey Nav: only on md+ screens */}
          <div className="hidden md:flex justify-center flex-1">
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

          {/* Burger Icon for Mobile */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-white text-3xl"
            >
              {menuOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 bg-black/50 z-[1080]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
            />

            {/* Sidebar */}
            <motion.div
              ref={sidebarRef}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="fixed top-0 right-0 h-screen w-[75%] sm:w-[60%] bg-black/95 backdrop-blur-md z-[1090] p-6 shadow-2xl flex flex-col items-start gap-6"
            >
              <h2
                className="text-white text-3xl font-bold mb-6 mx-auto"
                style={{
                  fontFamily: "'Unica One', cursive",
                  letterSpacing: "2px",
                }}
              >
                Kanika Singhal
              </h2>

              <ul className="space-y-6 w-full">
                {items.map((item, index) => (
                  <li key={index} className="w-full">
                    <Link
                      to={item.href}
                      onClick={closeMenu}
                      className="text-white text-lg font-semibold relative block w-full transition duration-300 hover:text-cyan-400 focus:text-cyan-400 active:text-cyan-400 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 hover:after:w-full focus:after:w-full active:after:w-full after:bg-cyan-400 after:transition-all after:duration-300"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
