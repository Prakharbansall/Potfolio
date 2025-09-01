import React from "react";
import "./ProjectCard.css";

export default function ProjectCard({ project }) {
  // Icon mapping for tech stack
  const techIcons = {
    'HTML5': '🌐',
    'CSS3': '🎨',
    'JavaScript': '🟨',
    'JS': '🟨',
    'React': '⚛️',
    'Node.js': '🟩',
    'ExpressJS': '🚀',
    'Api': '🔗',
  };

  return (
    <section className="project-card flip-card" role="article" aria-label={`Project: ${project.title}`}> 
      <div className="flip-card-inner">
        <header className="project-image flip-card-front">
          <img 
            src={project.image} 
            alt={`Screenshot of ${project.title} project`}
            loading="lazy"
            decoding="async"
            onLoad={(e) => {
              e.target.style.opacity = '1';
            }}
            style={{
              opacity: 0,
              transition: 'opacity 0.3s ease'
            }}
          />
        </header>
        <div className="project-overlay flip-card-back" tabIndex={0} aria-label={`Details for ${project.title}`}> 
          <h3 className="project-title">{project.title}</h3>
          <p className="project-description">{project.description}</p>
          <div className="project-tech" aria-label="Tech stack">
            {project.tech.map((t) => (
              <span key={t} className="tech-tag" aria-label={t}>
                <span style={{ marginRight: '6px', fontSize: '1.2em' }}>{techIcons[t] || '💻'}</span>
                {t}
              </span>
            ))}
          </div>
          <nav className="project-links" aria-label="Project links">
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-live"
              aria-label={`Live demo of ${project.title}`}
            >
              Live Demo
            </a>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-github"
              aria-label={`GitHub repository for ${project.title}`}
            >
              GitHub
            </a>
          </nav>
        </div>
      </div>
    </section>
  );
}
