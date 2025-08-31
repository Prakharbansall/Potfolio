// src/components/Projects/Projects.jsx
import React from "react";
import PROJECTS from "./projectsData";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section 
      style={{ 
        padding: "4rem 2rem",
        position: "relative",
        zIndex: 10,
        minHeight: "100vh"
      }} 
      id="projects-section"
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <h2
          style={{
            textAlign: "center",
            marginBottom: "3rem",
            color: "#fff",
            fontSize: "3rem",
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
            gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
            gap: "2.5rem",
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
