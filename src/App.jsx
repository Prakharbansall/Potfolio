import React from "react";
import Hero from "./hero"
import AboutMe from "./AboutMe";
import SkillStack from "./SkillsStack";
import Projects from "./projects";
import Experience from "./Experience";
import Contact from "./Contact";
import Footer from "./Footer";
import Certificates from "./Certificate";

export default function App() {
  return (
    <div>
      <Hero />
      <AboutMe />
      <SkillStack/>
      <Projects/>
      <Certificates/> 
      <Experience/>
      <Contact/>
      <Footer/>
      
    </div>
  );
}
