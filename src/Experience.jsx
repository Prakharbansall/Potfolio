import React from "react";
import "./Experience.css";

const EXPERIENCE = [
  {
    year: "2025",
    role: "Google Cloud Arcade",
    company: "Google",
    description:
      "Achieved the Champion Milestone in Google Cloud Arcade 2024 (Cohort 2), gaining hands-on cloud skills through labs, quests, and real-world learning.",
  },
  {
    year: "2024",
    role: "Web Developer Intern",
    company: "Eisystem",
    description:
      "Completed my Web Development Internship at EISystems Technologies, gaining hands-on experience with HTML, CSS, Tailwind, and Bootstrap while building and learning through real-world projects",
  },
  {
    year: "2024",
    role: "Web Developer Intern",
    company: "SingleTap",
    description:
      "Successfully completed two enriching internships at SingleTap in SEO and Web Development, gaining valuable hands-on experience in digital optimization and website building.",
  },
];

export default function Experience() {
  return (
    <section className="experience-section" id="experience">
      <div className="experience-container">
        <h2 className="experience-title">Experience</h2>
        <div className="timeline-container">
          <div className="timeline-line"></div>
          {EXPERIENCE.map((item) => (
            <div key={item.year + item.role} className="timeline-item">
              <span className="timeline-dot"></span>
              <div className="experience-content">
                <div className="year-badge">{item.year}</div>
                <div className="experience-details">
                  <div className="role-title">{item.role}</div>
                  <div className="company-name">{item.company}</div>
                  <div className="experience-description">{item.description}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );  
}
