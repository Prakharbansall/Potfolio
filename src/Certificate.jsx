import React from "react";

const certificates = [
  {
    title: "AI Foundations Associate",
    organization: "ORACLE University",
    year: 2025,
    link: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=6A56D368F5C96321B254E7305FA800969E5F971D65B915CB9B01D48006A678F9",
    image: "./Images/Oracle.jpg",
  },
  {
    title: "Java Script",
    organization: "IBM",
    year: 2024,
    link: "https://courses.jecrc.skillsnetwork.site/certificates/47420d83592a40099ad2a5f874b46dcf",
    image: "./Images/JavaScript.png",
  },
  {
    title: "NodeJS",
    organization: "IBM",
    year: 2024,
    link: "https://courses.jecrc.skillsnetwork.site/certificates/d02c3e60929a480b843f823f697dae41",
    image: "./Images/NodeJs.png",
  },
  {
    title: "Software Engineering",
    organization: "Infosys",
    year: 2024,
    link: "https://verify.onwingspan.com/",
    image: "./Images/Software Engineering.png",
  },
  {
    title: "Web Service",
    organization: "IBM",
    year: 2025,
    link: "https://courses.jecrc.skillsnetwork.site/certificates/886d3f63731f43f086c6e40a328d00db",
    image: "./Images/Web Service.png",
  },
  {
    title: "Web Development using HTML",
    organization: "IBM",
    year: 2024,
    link: "https://courses.jecrc.skillsnetwork.site/certificates/46bea835f38c419ba36c382fe6cb845a",
    image: "./Images/HTML.png",
  },
  {
    title: "IBM Cloud Fundamental",
    organization: "IBM",
    year: 2024,
    link: "https://courses.jecrc.skillsnetwork.site/certificates/f2a20d2f6c1e4dc7bbd46c7d227098fc",
    image: "./Images/Cloud Fundamental.png",
  },  
  {
    title: "Design Thinking",
    organization: "IBM",
    year: 2025,
    link: "https://courses.jecrc.skillsnetwork.site/certificates/11ca7450a3a7467191a0a80d332b6b1f",
    image: "./Images/Design Thinking.jpg",
  },
  {
    title: "Database Volunteer",
    organization: "Aashayein",
    year: 2023,
    link: "Volunteerehttps://media.licdn.com/dms/image/v2/D5622AQGSZrYnQXSgIg/feedshare-shrink_800/feedshare-shrink_800/0/1703349691882?e=1759363200&v=beta&t=bgUF_Ddaqdc9uaXyYnIy1Aj9Cw5WkXSwzSyc_U0F8bk",
    image: "./Images/Database.png",
  },
];

export default function Certificates() {
  return (
    <section
      style={{
        position: "relative",
        zIndex: 10,
        minHeight: "100vh",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <h2
          style={{
            textAlign: "center",
            marginBottom: "3rem",
            color: "#fff",
            fontSize: "3rem",
            fontWeight: 700,
            background: "linear-gradient(135deg,rgb(43, 98, 92), #20639b)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            textShadow: "0 4px 20px rgba(60, 174, 163, 0.3)",
            position: "relative",
          }}
        >
          Certificates
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "2rem",
            margin: "0 auto",
          }}
        >
          {certificates.map((cert, index) => (
            <a
              key={index}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "block",
                textDecoration: "none",
                borderRadius: "15px",
                overflow: "hidden",
                backgroundColor: "#2a2a2a",
                boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
                transition: "all 0.3s ease",
                border: "1px solid #3a3a3a",
                position: "relative",
                zIndex: 1,
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = "translateY(-8px) scale(1.02)";
                e.target.style.boxShadow =
                  "0 16px 48px rgba(60, 174, 163, 0.2)";
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "translateY(0) scale(1)";
                e.target.style.boxShadow = "0 8px 32px rgba(0, 0, 0, 0.3)";
              }}
            >
              <img
                src={cert.image}
                alt={cert.title}
                style={{
                  width: "100%",
                  height: "180px",
                  objectFit: "cover",
                  borderBottom: "1px solid #3a3a3a",
                }}
              />
              <div style={{ padding: "1.5rem" }}>
                <h3
                  style={{
                    fontSize: "1.2rem",
                    marginBottom: "0.5rem",
                    color: "#fff",
                    fontWeight: 600,
                  }}
                >
                  {cert.title}
                </h3>
                <p
                  style={{
                    fontSize: "1rem",
                    color: "#3caea3",
                    marginBottom: "0.25rem",
                    fontWeight: 500,
                  }}
                >
                  {cert.organization}
                </p>
                <p
                  style={{
                    fontSize: "0.9rem",
                    color: "#888",
                    margin: 0,
                  }}
                >
                  {cert.year}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
