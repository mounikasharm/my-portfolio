import React from "react";

export default function ProjectsSection() {
  const projects = [
    {
      title: "Village Community Hub",
      description:
        "A digital platform for villagers to submit service requests, access community resources, and connect with officials.",
      tech: ["React", "Django", "REST API", "Firebase Auth"],
    },
    {
      title: "Tele-Track CRM",
      description:
        "Lead management CRM with dashboards, call tracking, status updates, analytics, and JWT authentication.",
      tech: ["React", "Node.js", "Express", "MongoDB", "JWT"],
    },
    {
      title: "BookLoop Marketplace",
      description:
        "A book selling marketplace with image preview, WhatsApp chat, category filtering, and user uploads.",
      tech: ["Django", "Python", "HTML/CSS", "SQLite"],
    },
    {
      title: "Personal Portfolio Website",
      description:
        "A fully animated modern portfolio with projects, certificates, footer animations and EmailJS contact form.",
      tech: ["React", "EmailJS", "CSS Animations"],
    },
  ];

  return (
    <section
      id="projects"
      style={{
        padding: "90px 20px",
        background: "#000",
        color: "white",
        textAlign: "center",
      }}
    >
      {/* Heading with line */}
      <div style={{ marginBottom: 50 }}>
        <h2
          style={{
            fontSize: "2.8rem",
            fontWeight: "700",
            marginBottom: 10,
            color: "white",
          }}
        >
          Projects
        </h2>
        <div
          style={{
            width: 80,
            height: 4,
            background:
              "linear-gradient(90deg, #6fc9ff, #b36bff, #ff6bcb)",
            margin: "0 auto",
            borderRadius: 10,
          }}
        ></div>
      </div>

      {/* Project Cards */}
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: 25,
        }}
      >
        {projects.map((p, index) => (
          <div
            key={index}
            style={{
              padding: 25,
              borderRadius: 18,
              background: "rgba(255, 255, 255, 0.05)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              backdropFilter: "blur(12px)",
              boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
              transition: "0.3s ease",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-10px)";
              e.currentTarget.style.boxShadow =
                "0 20px 40px rgba(140, 75, 255, 0.35)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow =
                "0 10px 30px rgba(0,0,0,0.4)";
            }}
          >
            <h3
              style={{
                fontSize: "1.4rem",
                marginBottom: 10,
                background: "linear-gradient(90deg,#7df3ff,#cc7bff)",
                WebkitBackgroundClip: "text",
                color: "transparent",
              }}
            >
              {p.title}
            </h3>

            <p style={{ color: "#d1e7ff", marginBottom: 15, lineHeight: "1.6" }}>
              {p.description}
            </p>

            <div style={{ marginTop: 10 }}>
              {p.tech.map((t, i) => (
                <span
                  key={i}
                  style={{
                    display: "inline-block",
                    padding: "6px 12px",
                    marginRight: 6,
                    marginTop: 8,
                    fontSize: "0.8rem",
                    borderRadius: 12,
                    background: "rgba(255,255,255,0.07)",
                    border: "1px solid rgba(255,255,255,0.15)",
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Animation */}
      <style>{`
        @media (max-width: 500px) {
          #projects h2 {
            font-size: 2rem;
          }
        }
      `}</style>
    </section>
  );
}
