import "./hero.css";
import ParticleBackground from "./ParticleBackground";
import FloatingThree from "./three";
import { useEffect, useRef, useState } from "react";

export default function Hero() {
  const heroRef = useRef(null);
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });
  const [showThree, setShowThree] = useState(true);

  // Mouse move for floating offset + hide-on-scroll
  useEffect(() => {
    let target = { x: 0, y: 0 };
    let current = { x: 0, y: 0 };

    function handleMouseMove(e) {
      target.x = (e.clientX / window.innerWidth - 0.5) * 40;
      target.y = (e.clientY / window.innerHeight - 0.5) * 40;
    }

    function animate() {
      current.x += (target.x - current.x) * 0.05;
      current.y += (target.y - current.y) * 0.05;
      setMouseOffset({ ...current });
      requestAnimationFrame(animate);
    }

    window.addEventListener("mousemove", handleMouseMove);
    animate();

    const onScroll = () => {
      const atTop = (window.scrollY || window.pageYOffset || 0) < 40;
      setShowThree(atTop);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div className="hero-root" ref={heroRef}>
      {/* Animated gradient background */}
      <div
        style={{
          position: "fixed",
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          zIndex: 0,
          background:
            "linear-gradient(120deg, #20639b, #3caea3, #b2f7ef, #112240)",
          backgroundSize: "400% 400%",
          animation: "gradientMove 18s ease-in-out infinite",
        }}
      />

      {/* Particle overlay */}
      <ParticleBackground />

      {/* Hero content */}
      <section
        className="hero-section"
        style={{ position: "relative", zIndex: 1 }}
      >
        <div>
          <h1 className="hero-title">
            Hi, I'm <span className="hero-highlight"> Prakhar Bansal </span>{" "}
            <span role="img" aria-label="waving hand">
              👋
            </span>
          </h1>
          <h2 className="hero-subtitle">Web Developer | Frontend | Backend</h2>
          <div>
            {/* ✅ navigate to /projects route */}
            <button
              className="btn-primary"
              onClick={() =>
                document
                  .getElementById("projects-section")
                  .scrollIntoView({ behavior: "smooth" })
              }
            >
              View Projects
            </button>

            {/* ✅ navigate to /contact route */}
            <button
              className="btn-outline"
              onClick={() =>
                document
                  .getElementById("contact")
                  .scrollIntoView({ behavior: "smooth" })
              }
            >
              Contact Me
            </button>

                          {/* ✅ Download Resume */}
              <button
                className="btn-resume"
                onClick={() => {
                  // Google Drive resume link
                  window.open('https://drive.google.com/file/d/1-oYkf7pxbsrWW4cEJP5UqbS28I8IApn7/view?usp=drive_link', '_blank');
                }}
              >
                📄 Resume
              </button>
          </div>
        </div>
      </section>

      {/* Floating Three.js - Left */}
      <div
        className="hero-three-fixed left"
        style={{
          position: "fixed",
          top: "clamp(56px, 10vh, 120px)",
          left: "1vw",
          zIndex: 100,
          transform: `translate(${mouseOffset.x}px, ${mouseOffset.y}px)`,
          opacity: showThree ? 1 : 0,
          transition: "opacity 200ms ease",
        }}
      >
        <FloatingThree
          style={{
            width: "clamp(120px, 28vw, 200px)",
            height: "clamp(120px, 28vw, 200px)",
          }}
        />
      </div>
      {/* Floating Three.js - Left */}
      <div
        className="hero-three-fixed left"
        style={{
          position: "fixed",
          top: "clamp(56px, 10vh, 120px)",
          left: "1vw",
          zIndex: 100,
          transform: `translate(${mouseOffset.x}px, ${mouseOffset.y}px)`,
          opacity: showThree ? 1 : 0,
          transition: "opacity 200ms ease",
        }}
      >
        <FloatingThree
          style={{
            width: "clamp(120px, 28vw, 200px)",
            height: "clamp(120px, 28vw, 200px)",
          }}
        />
      </div>

      {/* Floating Three.js - Right */}
      <div
        className="hero-three-fixed right"
        style={{
          position: "fixed",
          top: "clamp(56px, 10vh, 120px)",
          right: "3vw",
          zIndex: 100,
          transform: `translate(${-mouseOffset.x}px, ${mouseOffset.y}px)`,
          opacity: showThree ? 1 : 0,
          transition: "opacity 200ms ease",
        }}
      >
        <FloatingThree
          style={{
            width: "clamp(120px, 28vw, 200px)",
            height: "clamp(120px, 28vw, 200px)",
          }}
        />
      </div>

      <style jsx>{`
        /* Hide both when <=1300px */
        @media (max-width: 1300px) {
          .hero-three-fixed {
            display: none;
          }
        }

        /* Show only right one at <=800px */
        @media (max-width: 800px) {
          .hero-three-fixed.right {
            display: block !important;
            top: 16px !important; /* push to top */
            right: 16px !important; /* push to right */
            transform: none !important; /* ✅ override inline transform */
          }
          .hero-three-fixed.right > div {
            width: 90px !important; /* smaller size */
            height: 90px !important;
          }
        }
      `}</style>

      {/* Gradient animation */}
      <style>
        {`
          @keyframes gradientMove {
            0% {background-position: 0% 50%;}
            50% {background-position: 100% 50%;}
            100% {background-position: 0% 50%;}
          }
        `}
      </style>
    </div>
  );
}
