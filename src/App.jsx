import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
import DetailedProjects from "./pages/DetailedProjects";
import DetailedExperience from "./pages/DetailedExperience";
import DetailedSkills from "./pages/DetailedSkills";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <Overview />
              <Skills />
              <Projects />
              {/* <ExperienceSection /> */}
              <AchievementsSection />
              <ContactForm />
              <Footer />
            </>
          }
        />

        {/* Detailed Projects Page */}
        <Route path="/myprojects" element={<DetailedProjects />} />
        <Route path="/myachievements" element={<DetailedExperience />} />
        <Route path="/myskills" element={<DetailedSkills />} />
      </Routes>
    </Router>
  );
}

export default App;
