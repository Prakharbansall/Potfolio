// src/components/SkillStack.jsx
import React from "react";
import skills from "./skillsData";
import SkillBar from "./SkillBarComponent";

export default function SkillStack() {
  return (
    <section
      style={{
        background: "rgba(242,250,252,0.92)",
        borderRadius: "1.5rem",
        boxShadow: "0 4px 24px rgba(40,111,169,0.13)",
        padding: "clamp(1.5rem, 5vw, 2rem)",
        maxWidth: 900,
        margin: "clamp(1rem, 4vw, 2rem) auto",
        fontFamily:
          "'Poppins','Segoe UI','Roboto','Helvetica Neue',Arial,sans-serif",
        display: "block",
        position: "relative",
        zIndex: 2,
      }}
    >
      <h2
        style={{
          fontSize: "clamp(1.8rem, 5vw, 2rem)",
          fontWeight: 700,
          color: "#20639b",
          marginBottom: "clamp(1.5rem, 4vw, 2rem)",
          letterSpacing: "-1px",
          textAlign: "center"
        }}
      >
        Skills &amp; Stack
      </h2>
      <div
        style={{
          display: "flex",
          gap: "clamp(2rem, 5vw, 2.5rem)",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {skills.map((cat) => (
          <div key={cat.category} style={{ 
            flex: "1 1 clamp(250px, 80vw, 300px)",
            minWidth: "clamp(250px, 80vw, 300px)",
            maxWidth: "100%"
          }}>
            <h3
              style={{
                color: "#3caea3",
                fontWeight: 600,
                fontSize: "clamp(1.1rem, 3vw, 1.15rem)",
                marginBottom: "1.2rem",
                letterSpacing: "1px",
                textAlign: "center"
              }}
            >
              {cat.category}
            </h3>
            {cat.items.map((skill) => (
              <SkillBar key={skill.name} {...skill} />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
