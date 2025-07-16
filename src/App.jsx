import React, { useState } from "react";
import "./App.css";
import HeroSection from "./pages/HeroSection";
import Overview from "./pages/Overview";
import Navbar from "./components/Navbar";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import ExperienceSection from "./pages/Experience";
import AchievementsSection from "./pages/Achievements";
import ContactForm from "./pages/Contact";
import Footer from "./pages/Footer";
// (Optional) Remove these if not used
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";

function App() {
  const [count, setCount] = useState(0); // You can remove this if you're not using it

  return (
    <>
    <Navbar/>
      <HeroSection />
      <Overview/>
      <Skills/>
      <Projects/>
      {/* <ExperienceSection/> */}
      <AchievementsSection/>
      <ContactForm/>
      <Footer/>
    </>
  );
}

export default App;
