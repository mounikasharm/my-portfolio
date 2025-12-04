import React from "react";

export default function ProjectsSection() {
  const projects = [
    {
      title: "Village Community Hub",
      description:
        "A digital platform to help rural citizens access government schemes, submit service requests, and connect with local officials.",
      tech: ["React", "Express", "MongoDB", "Node.js"],
    },
    {
      title: "Tele-Track CRM",
      description:
        "A CRM application with call tracking, lead management, status updates, dashboard analytics and JWT authentication.",
      tech: ["React", "Node.js", "Express", "MongoDB", "JWT"],
    },
    {
      title: "BookLoop Marketplace",
      description:
        "A book marketplace where users upload books, preview images, chat via WhatsApp, and filter by categories.",
      tech: ["Django", "Python", "SQLite", "HTML/CSS"],
    },
    {
      title: "BookEcho",
      description:
        "A book exchange system where users can trade used books for discounts on new ones.",
      tech: ["Django", "HTML", "CSS", "JavaScript"],
    },
    {
      title: "E-commerce Website",
      description:
        "Secure shopping site with login, product management and user dashboard.",
      tech: ["Java", "SQL", "HTML"],
    },
    {
      title: "Banking System",
      description:
        "A banking web application for handling user transactions and maintaining records.",
      tech: ["PHP", "SQL"],
    },
    {
      title: "Organic Web Store",
      description:
        "Simple e-commerce store to buy organic products online with smooth UI.",
      tech: ["PHP", "CSS", "SQL"],
    },
    {
      title: "Portfolio Website",
      description:
        "My personal animated portfolio with EmailJS integration and responsive UI.",
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
      {/* Heading */}
      <div style={{ marginBottom: 50 }}>
        <h2
          style={{
            fontSize: "2.8rem",
            fontWeight: "700",
            marginBottom: 10,
            background: "linear-gradient(90deg, #7df3ff, #d17bff)",
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
        >
          Projects
        </h2>

        <div
          style={{
            width: 90,
            height: 4,
            background: "linear-gradient(90deg, #6fc9ff, #b36bff, #ff6bcb)",
            margin: "0 auto",
            borderRadius: 10,
          }}
        ></div>
      </div>

      {/* Project Cards Grid */}
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: 25,
          paddingBottom: 20,
        }}
      >
        {projects.map((p, index) => (
          <div
            key={index}
            style={{
              padding: 25,
              borderRadius: 20,
              background: "rgba(255, 255, 255, 0.06)",
              border: "1px solid rgba(255, 255, 255, 0.15)",
              backdropFilter: "blur(12px)",
              boxShadow: "0 10px 35px rgba(0,0,0,0.4)",
              transition: "0.35s ease",
              cursor: "pointer",
              animation: `fadeInUp 0.8s ease ${index * 0.12}s forwards`,
              opacity: 0,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-12px)";
              e.currentTarget.style.boxShadow =
                "0 25px 45px rgba(120,80,255,0.45)";
              e.currentTarget.style.border =
                "1px solid rgba(180,120,255,0.4)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow =
                "0 10px 35px rgba(0,0,0,0.4)";
              e.currentTarget.style.border =
                "1px solid rgba(255, 255, 255, 0.15)";
            }}
          >
            <h3
              style={{
                fontSize: "1.4rem",
                marginBottom: 12,
                background: "linear-gradient(90deg,#7df3ff,#cc7bff)",
                WebkitBackgroundClip: "text",
                color: "transparent",
              }}
            >
              {p.title}
            </h3>

            <p
              style={{
                color: "#d1e7ff",
                marginBottom: 15,
                lineHeight: "1.6",
                fontSize: "0.95rem",
              }}
            >
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
                    background: "rgba(255,255,255,0.08)",
                    border: "1px solid rgba(255,255,255,0.2)",
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
        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(40px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        /* Mobile: 2 projects in one row */
        @media (max-width: 600px) {
          #projects div[style*="grid"] {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 15px !important;
          }

          #projects h2 {
            font-size: 2.2rem;
          }
        }
      `}</style>
    </section>
  );
}
