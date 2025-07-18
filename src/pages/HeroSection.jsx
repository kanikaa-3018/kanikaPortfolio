// import React from "react";
// import Squares from "../Backgrounds/Squares/Squares.jsx";
// import TextPressure from "../TextAnimations/TextPressure/TextPressure.jsx";
// import ShinyText from "../TextAnimations/ShinyText/ShinyText.jsx";
// import TypewriterEffect from "../components/TypeWriter.jsx";
// import ProfileCard from "../components/ProfileCard/ProfileCard.jsx";
// import GlareHover from "../Animations/GlareHover/GlareHover.jsx";
// import myimage from "../assets/myimage.jpg";
// import { FiDownload, FiSend } from "react-icons/fi";

// const HeroSection = () => {
//   return (
//     <div className="relative flex flex-col md:flex-row items-center justify-between w-full min-h-screen bg-black px-8 py-20 overflow-hidden">
//       {/* Background Squares */}
//       <div className="absolute inset-0 z-0 opacity-10">
//         <Squares
//           speed={0.5}
//           squareSize={30}
//           direction="diagonal"
//           borderColor="#ffffff22"
//           hoverFillColor="#222"
//         />
//       </div>

//       {/* Left Section */}
//       <div className="relative z-10 w-full md:w-1/2 flex flex-col justify-center h-[300px] text-white">
//         {/* Intro */}
//         <p
//           className="text-2xl text-gray-500 tracking-wide z-10 -mb-6"
//           style={{ fontFamily: '"Orbitron", sans-serif' }}
//         >
//           Hi, I’m
//         </p>

//         {/* Animated Name + Overlay Tagline */}
//         <div className="relative h-[300px] flex items-center justify-center">
//           <TextPressure
//             text="Kanika"
//             flex={true}
//             alpha={false}
//             stroke={false}
//             width={true}
//             weight={true}
//             italic={true}
//             textColor="#ffffff"
//             minFontSize={24}
//             className="text-[100px] sm:text-[140px] font-extrabold text-center"
//           />
//           {/* Full-width tagline overlay */}
//           <div className="absolute w-full top-1/2 left-0 transform -translate-y-1/2 bg-black/90 backdrop-blur-md py-3 z-10">
//             <ShinyText
//               text="Saving the world from ugly UIs and spaghetti code!"
//               disabled={false}
//               speed={5}
//               className="custom-class bg-black text-center text-sm sm:text-base font-medium px-4"
//             />
//           </div>
//         </div>

//         {/* Typewriter */}
//         <TypewriterEffect />

//         {/* Buttons */}
//         <div className="flex flex-wrap items-center justify-center gap-4 mt-6">
//           {/* Download Resume */}
//           <GlareHover
//             glareColor="#ffffff"
//             glareOpacity={0.3}
//             glareAngle={-30}
//             glareSize={300}
//             transitionDuration={800}
//             playOnce={false}
//           >
//             <a
//               href="/KanikaSinghal_Resume.pdf"
//               download
//               className="group relative inline-flex items-center justify-center gap-2 px-6 py-2 font-semibold rounded-full text-white transition-all duration-300 shadow-lg"
//             >
//               <FiDownload className="text-white text-lg group-hover:scale-110 transition-transform duration-300" />
//               <span className="z-10">Download Resume</span>
//             </a>
//           </GlareHover>

//           {/* Let’s Connect */}
//           <GlareHover
//             glareColor="#00FFFF"
//             glareOpacity={0.2}
//             glareAngle={45}
//             glareSize={250}
//             transitionDuration={800}
//             playOnce={false}
//           >
//             <a
//               href="#contact"
//               className="group relative inline-flex items-center justify-center gap-2 px-6 py-2 font-semibold rounded-full text-white transition-all duration-300 shadow-md"
//             >
//               <FiSend className="text-white text-lg group-hover:scale-110 transition-transform duration-300" />
//               <span className="z-10">Let’s Connect</span>
//             </a>
//           </GlareHover>
//         </div>

//         {/* Social Links */}
//         <div className="flex gap-6 mt-6 text-xl">
//           <a
//             href="https://github.com/kanikaa-3018"
//             target="_blank"
//             rel="noreferrer"
//             className="hover:text-cyan-400 transition"
//           >
//             <i className="fab fa-github"></i>
//           </a>
//           <a
//             href="https://linkedin.com/in/kanika-singhal"
//             target="_blank"
//             rel="noreferrer"
//             className="hover:text-cyan-400 transition"
//           >
//             <i className="fab fa-linkedin"></i>
//           </a>
//           <a
//             href="mailto:kanika@email.com"
//             className="hover:text-cyan-400 transition"
//           >
//             <i className="fas fa-envelope"></i>
//           </a>
//           <a
//             href="https://twitter.com"
//             target="_blank"
//             rel="noreferrer"
//             className="hover:text-cyan-400 transition"
//           >
//             <i className="fab fa-twitter"></i>
//           </a>
//         </div>
//       </div>

//       {/* Right Side – Profile Card */}
//       <div className="relative z-10 w-full md:w-1/2 flex items-center justify-center">
//         <ProfileCard
//           name="Kanika Singhal"
//           title="Software Developer"
//           handle="kanikaa-3018"
//           status="Online"
//           contactText="Contact Me"
//           avatarUrl={myimage}
//           showUserInfo={true}
//           enableTilt={true}
//           onContactClick={() => console.log("Contact clicked")}
//         />
//       </div>
//     </div>
//   );
// };

// export default HeroSection;

import React, { useEffect, useState } from "react";
import Squares from "../Backgrounds/Squares/Squares.jsx";
import TextPressure from "../TextAnimations/TextPressure/TextPressure.jsx";
import ShinyText from "../TextAnimations/ShinyText/ShinyText.jsx";
import TypewriterEffect from "../components/TypeWriter.jsx";
import ProfileCard from "../components/ProfileCard/ProfileCard.jsx";
import GlareHover from "../Animations/GlareHover/GlareHover.jsx";
import myimagehu from "../assets/myimagehu.jpg";
import PixelTransition from "../Animations/PixelTransition/PixelTransition.jsx";
import { FiDownload, FiSend } from "react-icons/fi";
import FluidGlass from "../components/FluidGlass/FluidGlass.jsx";

const HeroSection = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFlipped((prev) => !prev);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative flex flex-col md:flex-row items-center justify-between w-full min-h-screen bg-black px-6 sm:px-8 py-20 overflow-hidden">
      {/* LEFT SECTION */}
      <div className="relative z-10 w-full md:w-1/2 flex flex-col justify-center text-white">
        {/* Mobile view: Pixel Flip */}
        <div className="md:hidden mb-8 flex justify-center flex-col items-center ">
          <div className="absolute top-[-30px] left-1/2 transform -translate-x-1/2 z-0 w-[280px] h-[280px] opacity-70"></div>
          <div className="w-64 h-64 mt-4">
            <PixelTransition
              flipped={isFlipped}
              className="rounded-xl overflow-hidden"
              firstContent={
                <img
                  src={myimagehu}
                  alt="Kanika"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "16px",
                  }}
                />
              }
              secondContent={
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    display: "grid",
                    placeItems: "center",
                    backgroundColor: "#1a1a1a",
                    borderRadius: "16px",
                  }}
                >
                  <p
                    style={{
                      fontWeight: "bold",
                      fontSize: "1.8rem",
                      color: "#fff",
                      textAlign: "center",
                    }}
                  >
                    Meow!
                  </p>
                </div>
              }
              gridSize={12}
              pixelColor="#ffffff"
              animationStepDuration={0.4}
            />
          </div>
          <p
            style={{
              fontFamily: "'Audiowide', cursive",
              fontSize: "1.8rem",
              color: "#00d9ff",
              marginTop: "12px",
              letterSpacing: "3px",
              textShadow: "0 0 8px rgba(0, 255, 209, 0.6)",
            }}
          >
            Kanika Singhal
          </p>
          <p className="text-md text-gray-400 font-serif mt-4 -mb-4">I'm a</p>
        </div>

        {/* Desktop view: Intro text */}
        <div className="hidden md:block">
          <p
            className="text-2xl text-gray-400 tracking-wide z-10 -mb-6"
            style={{ fontFamily: '"Orbitron", sans-serif' }}
          >
            Hi, I’m
          </p>

          <div className="relative h-[300px] w-full flex items-center justify-start">
            <TextPressure
              text="Kanika"
              flex={true}
              alpha={false}
              stroke={false}
              width={true}
              weight={true}
              italic={true}
              textColor="#ffffff"
              minFontSize={24}
              className="text-[100px] sm:text-[140px] font-extrabold"
            />
            <div className="absolute w-full top-1/2 left-0 transform -translate-y-1/2 bg-black/90 backdrop-blur-md py-3 z-10">
              <ShinyText
                text="Saving the world from ugly UIs and spaghetti code!"
                disabled={false}
                speed={5}
                className="text-center text-sm sm:text-base font-medium px-4"
              />
            </div>
          </div>
        </div>

        {/* Typewriter */}
        <TypewriterEffect />

        {/* Buttons */}
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 mt-6">
          <GlareHover
            glareColor="#ffffff"
            glareOpacity={0.3}
            glareAngle={-30}
            glareSize={300}
            transitionDuration={800}
          >
            <a
              href="/Kanika_Singhal_Resume.pdf"
              download="Kanika_Singhal_Resume.pdf"
              className="group relative inline-flex items-center justify-center gap-2 px-6 py-2 font-semibold rounded-full text-white transition-all duration-300 shadow-lg"
            >
              <FiDownload className="text-white text-lg group-hover:scale-110 transition-transform duration-300" />
              <span>Download Resume</span>
            </a>
          </GlareHover>

          <GlareHover
            glareColor="#00FFFF"
            glareOpacity={0.2}
            glareAngle={45}
            glareSize={250}
            transitionDuration={800}
          >
            <a
              href="mailto:kanikasinghal0308@gmail.com?subject=Let's%20Connect&body=Hi%20Kanika,"
              className="group relative inline-flex items-center justify-center gap-2 px-6 py-2 font-semibold rounded-full text-white transition-all duration-300 shadow-md"
            >
              <FiSend className="text-white text-lg group-hover:scale-110 transition-transform duration-300" />
              <span>Let’s Connect</span>
            </a>
          </GlareHover>
        </div>

        {/* Social Icons */}
        <div className="flex gap-6 mt-6 text-xl justify-center md:justify-start">
          <a
            href="https://github.com/kanikaa-3018"
            target="_blank"
            rel="noreferrer"
            className="hover:text-cyan-400 transition"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://linkedin.com/in/kanika-singhal"
            target="_blank"
            rel="noreferrer"
            className="hover:text-cyan-400 transition"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            href="mailto:kanika@email.com"
            className="hover:text-cyan-400 transition"
          >
            <i className="fas fa-envelope"></i>
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-cyan-400 transition"
          >
            <i className="fab fa-twitter"></i>
          </a>
        </div>
      </div>

      {/* RIGHT SECTION: Profile Card (Desktop Only) */}
      <div className="hidden md:flex relative z-10 w-full md:w-1/2 items-center justify-center">
        <ProfileCard
          name="Kanika Singhal"
          title="Software Developer"
          handle="kanikaa-3018"
          status="Online"
          contactText="Contact Me"
          avatarUrl={myimagehu}
          showUserInfo={true}
          enableTilt={true}
          onContactClick={() => console.log("Contact clicked")}
        />
      </div>
    </div>
  );
};

export default HeroSection;
