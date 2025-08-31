// src/components/SkillBar.jsx
import React from "react";

export default function SkillBar({ name, icon, level }) {
  return (
    <div style={{ marginBottom: "1rem" }}>
      <div style={{ display: "flex", alignItems: "center", marginBottom: 4 }}>
        <span style={{ fontSize: 22, marginRight: 10 }}>{icon}</span>
        <span style={{ fontWeight: 600, color: "#20639b", minWidth: 90 }}>
          {name}
        </span>
        <span
          style={{
            marginLeft: "auto",
            color: "#3caea3",
            fontWeight: 500,
          }}
        >
          {level}%
        </span>
      </div>
      <div
        style={{
          background: "#e0e7ef",
          borderRadius: 8,
          height: 8,
          width: "100%",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            width: `${level}%`,
            height: "100%",
            background: "linear-gradient(90deg, #3caea3 0%, #20639b 100%)",
            borderRadius: 8,
            transition: "width 0.6s",
          }}
        />
      </div>
    </div>
  );
}
