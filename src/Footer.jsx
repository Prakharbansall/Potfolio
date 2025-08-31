

export default function Footer() {
  return (
    <footer
      style={{
        textAlign: "center",
        padding: "1rem 0 1.2rem 0",
        background: "rgba(215, 199, 173, 0.06)",
        fontSize: "1.12rem",
        color: "#1a237e",
        fontWeight: 600,
        letterSpacing: "0.01em",
        borderTop: "2px solidrgb(20, 110, 170)",
        boxShadow: "0 -2px 12px rgba(32, 99, 155, 0.07)",
        position: "relative",
        zIndex: 10,
      }}
    >
      <div>
        &copy; <span style={{ color: "#0070f3" }}>Prakhar bansal</span> 2025
      </div>
      <div
        style={{
          marginTop: "0.5rem",
          fontSize: "1.01rem",
          color: "#0070f3",
          fontWeight: 500,
          background: "rgba(55, 136, 216, 0.85)",
          display: "inline-block",
          padding: "0.3rem 1.1rem",
          borderRadius: "8px",
          boxShadow: "0 2px 8px rgba(32, 99, 155, 0.07)",
        }}
      >
        Built with <span role="img" aria-label="love" style={{ fontSize: "1.15em" }}>❤️</span> using <span style={{ color: "#222", fontWeight: 700 }}>React</span>
      </div>
    </footer>
  );
}

