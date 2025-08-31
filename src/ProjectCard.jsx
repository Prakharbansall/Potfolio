// src/components/Projects/ProjectCard.jsx
import React from "react";

export default function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <div className="project-image">
        <img src={project.image} alt={project.title} />
      </div>
      
      <div className="project-overlay">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>
        
        <div className="project-tech">
          {project.tech.map((t) => (
            <span key={t} className="tech-tag">
              {t}
            </span>
          ))}
        </div>
        
        <div className="project-links">
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-live"
          >
            Live Demo
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-github"
          >
            GitHub
          </a>
        </div>
      </div>

      <style>
        {`
          .project-card {
            position: relative;
            border-radius: 16px;
            overflow: hidden;
            box-shadow: 0 8px 32px rgba(0,0,0,0.15);
            background: #fff;
            height: 400px;
            cursor: pointer;
            transition: all 0.3s ease;
            border: 1px solid rgba(255,255,255,0.1);
          }

          .project-card:hover {
            transform: translateY(-8px);
            box-shadow: 0 16px 48px rgba(0,0,0,0.25);
          }

          .project-image {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            overflow: hidden;
          }

          .project-image img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: all 0.3s ease;
          }

          .project-card:hover .project-image img {
            transform: scale(1.05);
            filter: brightness(0.6);
          }

          .project-overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(135deg, rgba(20,30,50,0.95), rgba(32,99,155,0.9));
            color: #fff;
            opacity: 0;
            transition: opacity 0.3s ease;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 1.5rem;
            text-align: center;
            pointer-events: none;
            backdrop-filter: blur(4px);
            z-index: 10;
            box-sizing: border-box;
          }

          .project-card:hover .project-overlay {
            opacity: 1;
            pointer-events: auto;
          }

          .project-title {
            margin: 0 0 1rem 0;
            font-size: 1.4rem;
            font-weight: 600;
            line-height: 1.3;
            text-align: center;
            width: 100%;
          }

          .project-description {
            font-size: 0.9rem;
            margin-bottom: 1.5rem;
            line-height: 1.4;
            opacity: 0.9;
            text-align: center;
            width: 100%;
            max-width: 280px;
            word-wrap: break-word;
            overflow-wrap: break-word;
          }

          .project-tech {
            margin-bottom: 1.5rem;
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
            gap: 0.5rem;
            width: 100%;
          }

          .tech-tag {
            display: inline-block;
            background: rgba(255,255,255,0.2);
            color: #fff;
            border-radius: 20px;
            padding: 0.3rem 0.8rem;
            font-size: 0.8rem;
            font-weight: 500;
            border: 1px solid rgba(255,255,255,0.3);
            backdrop-filter: blur(10px);
            text-align: center;
          }

          .project-links {
            display: flex;
            gap: 0.8rem;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
            width: 100%;
          }

          .btn-live, .btn-github {
            padding: 0.6rem 1.2rem;
            border-radius: 8px;
            text-decoration: none;
            font-weight: 600;
            font-size: 0.9rem;
            transition: all 0.2s ease;
            cursor: pointer;
            text-align: center;
            white-space: nowrap;
          }

          .btn-live {
            color: #fff;
            background: linear-gradient(135deg, #0070f3, #0056b3);
            border: none;
            box-shadow: 0 4px 12px rgba(0,112,243,0.3);
          }

          .btn-live:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 16px rgba(0,112,243,0.4);
          }

          .btn-github {
            color: #0070f3;
            background: rgba(255,255,255,0.9);
            border: 1px solid rgba(0,112,243,0.3);
          }

          .btn-github:hover {
            transform: translateY(-2px);
            background: #fff;
          }
        `}
      </style>
    </div>
  );
}
