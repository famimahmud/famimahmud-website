import React from "react";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="bg-white text-gray-900 font-sans">
      <Navbar />
      <HeroSection />
      <AboutSection />

      <div id="projects"></div>
      <ProjectsSection />

      <ContactSection />
    </div>
  );
};

export default App;
