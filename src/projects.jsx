// src/components/Projects/Projects.jsx
import React, { useState, useEffect } from "react";
import PROJECTS from "./projectsData";
import ProjectCard from "./ProjectCard";
import Loader from "./Loader";

export default function Projects() {
  const [isLoading, setIsLoading] = useState(true);
  const totalImages = PROJECTS.length;

  useEffect(() => {
    const loadImages = () => {
      let loadedCount = 0;
      
      PROJECTS.forEach((project) => {
        const img = new Image();
        img.onload = () => {
          loadedCount++;
          if (loadedCount === totalImages) {
            // All images loaded, hide loader after a small delay
            setTimeout(() => setIsLoading(false), 500);
          }
        };
        img.onerror = () => {
          // If image fails to load, still count it as loaded
          loadedCount++;
          if (loadedCount === totalImages) {
            setTimeout(() => setIsLoading(false), 500);
          }
        };
        img.src = project.image;
      });
    };

    loadImages();
  }, [totalImages]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <section 
      style={{ 
        padding: "4rem 1rem",
        position: "relative",
        zIndex: 10,
        minHeight: "100vh"
      }} 
      id="projects-section"
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1rem" }}>
        <h2
          style={{
            textAlign: "center",
            marginBottom: "3rem",
            color: "#fff",
            fontSize: "clamp(2rem, 5vw, 3rem)",
            fontWeight: 700,
            background: "linear-gradient(135deg,rgb(78, 112, 109), #20639b)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            textShadow: "0 4px 20px rgba(60, 174, 163, 0.3)",
            position: "relative"
          }}
        >
          My Projects
        </h2>
        
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "clamp(1.5rem, 3vw, 2.5rem)",
            margin: "0 auto",
          }}
        >
          {PROJECTS.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
