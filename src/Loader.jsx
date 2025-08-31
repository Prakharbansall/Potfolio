import React from "react";
import "./Loader.css";

export default function Loader() {
  return (
    <div className="loader-container">
      {/* Animated background */}
      <div className="animated-bg">
        <div className="bg-circle"></div>
        <div className="bg-circle"></div>
        <div className="bg-circle"></div>
      </div>

      {/* Main loader */}
      <div className="main-loader">
        <div className="loader-ring outer"></div>
        <div className="loader-ring middle"></div>
        <div className="loader-ring inner"></div>
        <div className="loader-core">
          <div className="core-pulse"></div>
        </div>
      </div>

      {/* Floating elements */}
      <div className="floating-elements">
        <div className="float-item"></div>
        <div className="float-item"></div>
        <div className="float-item"></div>
        <div className="float-item"></div>
      </div>

      {/* Loading text with effect */}
      <div className="loading-text">
        <span>L</span>
        <span>O</span>
        <span>A</span>
        <span>D</span>
        <span>I</span>
        <span>N</span>
        <span>G</span>
      </div>

      {/* Progress bar */}
      <div className="progress-container">
        <div className="progress-bar">
          <div className="progress-fill"></div>
        </div>
      </div>
    </div>
  );
}
