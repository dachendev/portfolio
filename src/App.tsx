import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import React from "react";
import Navbar from "./components/Navbar";
import Education from "./components/Education";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import WorkExperience from "./components/WorkExperience";

const App: React.FC = () => {
  return (
    <>
      <CssBaseline />
      <Container>
        <Navbar />
        <Hero />
        <Education />
        <WorkExperience />
        <Projects />
        <Skills />
        <Footer />
      </Container>
    </>
  );
};

export default App;
