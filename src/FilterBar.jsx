// src/components/Projects/FilterBar.jsx
import React from "react";

export default function FilterBar({ filters, current, setFilter }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "1rem",
        marginBottom: "2rem",
      }}
    >
      {filters.map((f) => (
        <button
          key={f.value}
          onClick={() => setFilter(f.value)}
          style={{
            padding: "0.5rem 1.5rem",
            borderRadius: "20px",
            border: current === f.value ? "2px solid #0070f3" : "1px solid #ccc",
            background: current === f.value ? "#e6f0fa" : "#fff",
            color: "#222",
            fontWeight: current === f.value ? "bold" : "normal",
            cursor: "pointer",
            transition: "all 0.2s",
          }}
        >
          {f.label}
        </button>
      ))}
    </div>
  );
}
