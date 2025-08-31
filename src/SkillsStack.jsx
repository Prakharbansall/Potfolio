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
        padding: "clamp(1.5rem, 4vw, 2rem)",
        maxWidth: 900,
        margin: "clamp(1rem, 3vw, 2rem) auto",
        fontFamily:
          "'Poppins','Segoe UI','Roboto','Helvetica Neue',Arial,sans-serif",
        display: "block",
        position: "relative",
        zIndex: 2,
      }}
    >
      <h2
        style={{
          fontSize: "clamp(1.5rem, 4vw, 2rem)",
          fontWeight: 700,
          color: "#20639b",
          marginBottom: "1.5rem",
          letterSpacing: "-1px",
        }}
      >
        Skills &amp; Stack
      </h2>
      <div
        style={{
          display: "flex",
          gap: "clamp(1.5rem, 4vw, 2.5rem)",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        {skills.map((cat) => (
          <div key={cat.category} style={{ flex: 1, minWidth: "clamp(200px, 40vw, 220px)" }}>
            <h3
              style={{
                color: "#3caea3",
                fontWeight: 600,
                fontSize: "clamp(1rem, 2.5vw, 1.15rem)",
                marginBottom: "1rem",
                letterSpacing: "1px",
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
