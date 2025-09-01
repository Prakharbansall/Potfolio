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
            Hi, I'm Prakhar — a full-stack developer who thrives on solving real business problems with code.<br /><br />
            My strengths are rapid prototyping, clean UI/UX, and building scalable systems that just work. I love collaborating with ambitious teams and founders who value speed, reliability, and a user-first mindset.<br /><br />
            What drives me? The challenge of turning ideas into products that make a difference. Whether it's automating workflows, improving performance, or making apps more accessible, I bring energy and ownership to every project.<br /><br />
            If you're a startup, agency, or business looking for someone who can deliver results (not just code), let's connect!
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
