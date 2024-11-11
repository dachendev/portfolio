import CssBaseline from "@mui/material/CssBaseline";
import React from "react";
import About from "./components/About";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import WorkExperience from "./components/WorkExperience";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

const App: React.FC = () => {
  return (
    <>
      <CssBaseline />
      <div>
        <Navbar />
        <Hero />
        <About />
        <WorkExperience />
        <Projects />
        <Skills />
        <Footer />
      </div>
    </>
  );
};

export default App;
