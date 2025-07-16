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

import React from "react";
import Squares from "../Backgrounds/Squares/Squares.jsx";
import TextPressure from "../TextAnimations/TextPressure/TextPressure.jsx";
import ShinyText from "../TextAnimations/ShinyText/ShinyText.jsx";
import TypewriterEffect from "../components/TypeWriter.jsx";
import ProfileCard from "../components/ProfileCard/ProfileCard.jsx";
import GlareHover from "../Animations/GlareHover/GlareHover.jsx";
import myimage from "../assets/myimage.jpg";
import myimagehu from "../assets/myimagehu.jpg";
import { FiDownload, FiSend } from "react-icons/fi";
import ScrollVelocity from "../TextAnimations/ScrollVelocity/ScrollVelocity.jsx"; // Adjust path
import TextTrail from "../TextAnimations/TextTrail/TextTrail.jsx";

const HeroSection = () => {
  const velocity = 1.8;

  return (
    <div className="relative flex flex-col md:flex-row items-center justify-between w-full min-h-screen bg-black px-6 sm:px-8 py-20 overflow-hidden">
      {/* Background Squares */}
      <div className="absolute inset-0 z-0 opacity-10">
        <Squares
          speed={0.5}
          squareSize={30}
          direction="diagonal"
          borderColor="#ffffff22"
          hoverFillColor="#222"
        />
      </div>

      {/* Left Section */}
      <div className="relative z-10 w-full md:w-1/2 flex flex-col gap-4 justify-center h-[300px] text-white">
        {/* 👇 Mobile-only Animated Name + Skills */}
        <div className=" md:hidden w-full flex flex-col items-center gap-4 text-center">
          <img
            src={myimagehu}
            alt="Kanika"
            className="w-32 h-32 mt-56 rounded-full object-cover border-4 border-white shadow-lg"
          />

          <h1
            className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-pink-400 to-purple-500 animate-fade-in-up"
            style={{
              fontFamily: "'Figtree', sans-serif",
              animation: "fadeInUp 1s ease-out both",
            }}
          >
            Kanika Singhal
          </h1>

          {/* <div className="text-white">
            <TextTrail text="Kanika Singhal" />
          </div> */}

          {/* <TextTrail
            text="Kanika Singhal"
            fontFamily="Figtree"
            fontWeight="900"
            noiseFactor={1.2}
            noiseScale={0.001}
            rgbPersistFactor={0.95}
            alphaPersistFactor={0.92}
            animateColor={true}
            startColor="#ff6b6b"
            textColor="#ffffff"
            backgroundColor="#1a1a2e"
            colorCycleInterval={2000}
            supersample={2}
          /> */}

          {/* <ScrollVelocity
            texts={["Full Stack", "React.js", "Node.js", "MongoDB", "Tailwind", "AI", "OS Dev", "Open Source"]}
            velocity={velocity}
            className="text-cyan-400 text-lg sm:text-xl font-semibold"
          /> */}
        </div>

        {/* Desktop-only Intro */}
        <p
          className="text-xl text-gray-400 tracking-wide -mb-4 hidden md:block"
          style={{ fontFamily: '"Orbitron", sans-serif' }}
        >
          Hi, I’m
        </p>

        {/* Desktop-only TextPressure + Tagline */}
        <div className="relative h-[250px] md:h-[300px] w-full hidden md:flex items-center justify-start">
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

        {/* Typewriter (shared) */}
        <TypewriterEffect />

        {/* Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mt-6">
          <GlareHover
            glareColor="#ffffff"
            glareOpacity={0.3}
            glareAngle={-30}
            glareSize={300}
            transitionDuration={800}
            playOnce={false}
          >
            <a
              href="/KanikaSinghal_Resume.pdf"
              download
              className="group relative inline-flex items-center justify-center gap-2 px-6 py-2 font-semibold rounded-full text-white transition-all duration-300 shadow-lg "
            >
              <FiDownload className="text-lg group-hover:scale-110 transition-transform" />
              <span>Download Resume</span>
            </a>
          </GlareHover>

          <GlareHover
            glareColor="#00FFFF"
            glareOpacity={0.2}
            glareAngle={45}
            glareSize={250}
            transitionDuration={800}
            playOnce={false}
          >
            <a
              href="#contact"
              className="group relative inline-flex items-center justify-center gap-2 px-6 py-2 font-semibold rounded-full text-white transition-all duration-300 shadow-md "
            >
              <FiSend className="text-lg group-hover:scale-110 transition-transform" />
              <span>Let’s Connect</span>
            </a>
          </GlareHover>
        </div>

        {/* Social Links */}
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

      {/* Desktop ProfileCard */}
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
