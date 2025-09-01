import React from "react";
import "./Loader.css";

export default function Loader() {
  return (
    <div className="loader-container">
      {/* Simple spinning loader */}
      <div className="spinner"></div>
      
      {/* Minimal loading text */}
      <div className="loading-text">Loading...</div>
      
      {/* Simple progress indicator */}
      <div className="progress-bar">
        <div className="progress-fill"></div>
      </div>
    </div>
  );
}
