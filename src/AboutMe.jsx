import React from "react";
import "./AboutMe.css";

export default function AboutMe() {
  return (
    <section className="about-section">
      <div className="about-container">
        <img
          src="https://avatars.githubusercontent.com/u/56438949?v=4"
          alt="Prakhar Bansal"
          className="about-img"
        />

        <div>
          <h2 className="about-title">About Me</h2>
          <p className="about-text">
            I’m a passionate web developer who loves building beautiful, performant, and accessible web experiences. I enjoy working across the stack and learning new technologies every day.
          </p>

          <ul className="about-facts">
            <li>
              <span role="img" aria-label="location">📍</span>
              <span className="fact-text">Jaipur, India</span>
            </li>
            <li>
              <span role="img" aria-label="freelance">💼</span>
              <span className="fact-text">
                Freelance: <span className="fact-highlight">Available</span>
              </span>
            </li>
            <li>
              <span role="img" aria-label="interests">🎧</span>
              <span className="fact-text">Interests: Music, Tech, Travel</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
