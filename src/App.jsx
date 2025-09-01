import React, { useState, useEffect } from "react";
import Hero from "./hero"
import AboutMe from "./AboutMe";
import SkillStack from "./SkillsStack";
import Projects from "./projects";
import Experience from "./Experience";
import Contact from "./Contact";
import Footer from "./Footer";
import Certificates from "./Certificate";
import Loader from "./Loader";
import "./accessibility.css";

export default function App() {
  const [isAppLoading, setIsAppLoading] = useState(true);

  useEffect(() => {
    // Simulate app initialization time
    const timer = setTimeout(() => {
      setIsAppLoading(false);
    }, 800); // Show loader for 800ms instead of 2 seconds

    return () => clearTimeout(timer);
  }, []);

  if (isAppLoading) {
    return <Loader />;
  }

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
