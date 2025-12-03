import React from "react";

export default function ProjectsSection() {
  const projects = [
    {
      title: "Village Community Hub",
      description:
        "A digital platform for villagers to submit service requests, access community resources, and connect with officials.",
      tech: ["React", "Django", "REST API", "Firebase Auth"],
      icon: "🌐",
    },
    {
      title: "Tele-Track CRM",
      description:
        "Lead management CRM with dashboards, call tracking, status updates, analytics, and JWT authentication.",
      tech: ["React", "Node.js", "Express", "MongoDB", "JWT"],
      icon: "📞",
    },
    {
      title: "BookLoop Marketplace",
      description:
        "A book selling marketplace with image preview, WhatsApp chat, category filtering, and user uploads.",
      tech: ["Django", "Python", "HTML/CSS", "SQLite"],
      icon: "📚",
    },
    {
      title: "Personal Portfolio Website",
      description:
        "A fully animated modern portfolio with projects, certificates, footer animations and EmailJS contact form.",
      tech: ["React", "EmailJS", "CSS Animations"],
      icon: "💻",
    },
  ];

  return (
    <section
      id="projects"
      style={{
        padding: "100px 20px",
        background: "linear-gradient(180deg,#020202,#090909,#050505)",
        color: "white",
        textAlign: "center",
      }}
    >
      {/* Heading */}
      <h2
        style={{
          fontSize: "2.8rem",
          fontWeight: "800",
          marginBottom: 15,
          background: "linear-gradient(90deg,#7ef0ff,#c97bff)",
          WebkitBackgroundClip: "text",
          color: "transparent",
          animation: "fadeDown 1.2s ease",
          marginTop: "-40px",
        }}
      >
        Projects
      </h2>

      <div
        style={{
          width: 80,
          height: 4,
          background: "linear-gradient(90deg,#6fc9ff,#b36bff,#ff6bcb)",
          margin: "0 auto 60px",
          borderRadius: 10,
        }}
      ></div>

      {/* Cards Grid */}
      <div
        style={{
          maxWidth: "1150px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: 30,
          animation: "fadeUp 1.3s ease",
        }}
      >
        {projects.map((p, index) => (
          <div
            key={index}
            style={{
              padding: 30,
              borderRadius: 18,
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.12)",
              backdropFilter: "blur(12px)",
              boxShadow: "0 12px 45px rgba(0,0,0,0.5)",
              transition: "0.35s ease",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-12px) scale(1.03)";
              e.currentTarget.style.border =
                "1px solid rgba(0,234,255,0.5)";
              e.currentTarget.style.boxShadow =
                "0 25px 70px rgba(0,234,255,0.2)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0) scale(1)";
              e.currentTarget.style.border =
                "1px solid rgba(255,255,255,0.12)";
              e.currentTarget.style.boxShadow =
                "0 12px 45px rgba(0,0,0,0.5)";
            }}
          >
            {/* Icon */}
            <div
              style={{
                fontSize: "2.4rem",
                marginBottom: 12,
                opacity: 0.9,
              }}
            >
              {p.icon}
            </div>

            {/* Project Title */}
            <h3
              style={{
                fontSize: "1.5rem",
                fontWeight: "700",
                marginBottom: 12,
                background: "linear-gradient(90deg,#7df3ff,#cc7bff)",
                WebkitBackgroundClip: "text",
                color: "transparent",
              }}
            >
              {p.title}
            </h3>

            {/* Description */}
            <p
              style={{
                color: "#d1e7ff",
                lineHeight: "1.6",
                fontSize: "0.95rem",
                marginBottom: 18,
              }}
            >
              {p.description}
            </p>

            {/* Tech Stack */}
            <div style={{ marginTop: 10 }}>
              {p.tech.map((t, i) => (
                <span
                  key={i}
                  style={{
                    display: "inline-block",
                    padding: "7px 14px",
                    margin: "6px 6px 0 0",
                    fontSize: "0.8rem",
                    borderRadius: 12,
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.15)",
                    color: "#c6e8ff",
                    transition: "0.3s ease",
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Animations */}
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeDown {
          from { opacity: 0; transform: translateY(-30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @media (max-width: 500px) {
          #projects h2 {
            font-size: 2.2rem;
          }
        }
      `}</style>
    </section>
  );
}
