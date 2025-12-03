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

    // ⭐ Added new projects from your resume ⭐

    {
      title: "BookEcho",
      description:
        "A Django-based bookshop platform that lets users exchange old books for discounts on new purchases.",
      tech: ["Django", "HTML/CSS", "JavaScript"],
    },
    {
      title: "Organic Web Store",
      description:
        "An online store for buying chemical-free organic products with secure checkout and clean UI.",
      tech: ["PHP", "CSS", "SQL"],
    },
    {
      title: "Online Banking System",
      description:
        "A banking web application with user login, money transfer, transaction history, and admin controls.",
      tech: ["PHP", "MySQL", "HTML/CSS"],
    },
    {
      title: "Online Mobile Shopping",
      description:
        "A mobile e-commerce platform with product search, filters, cart system, and secure authentication.",
      tech: ["Java", "SQL", "HTML"],
    },
  ];

  return (
    <section
      id="projects"
      style={{
        padding: "90px 20px",
        background: "linear-gradient(180deg, #020202, #090909, #050505)",
        color: "white",
        textAlign: "center",
      }}
    >
      {/* Heading */}
      <h2
        style={{
          fontSize: "2.8rem",
          background: "linear-gradient(90deg,#7ef0ff,#c97bff)",
          WebkitBackgroundClip: "text",
          color: "transparent",
          animation: "fadeDown 1.2s ease",
        }}
      >
        My Projects
      </h2>

      {/* Projects Grid */}
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: 30,
          animation: "fadeUp 1.4s ease",
        }}
      >
        {projects.map((p, i) => (
          <div
            key={i}
            style={{
              padding: 22,
              borderRadius: 14,
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.07)",
              backdropFilter: "blur(10px)",
              boxShadow: "0 20px 50px rgba(0,0,0,0.5)",
              transition: "transform .35s ease, box-shadow .35s ease",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-10px) scale(1.03)";
              e.currentTarget.style.boxShadow =
                "0 35px 80px rgba(0, 234, 255, 0.12)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0) scale(1)";
              e.currentTarget.style.boxShadow =
                "0 20px 50px rgba(0,0,0,0.5)";
            }}
          >
            <h3 style={{ color: "#9ad8ff", marginBottom: 10, fontSize: "1.4rem" }}>
              {p.title}
            </h3>

            <p style={{ color: "#d6eaff", marginBottom: 16 }}>{p.description}</p>

            {/* Tech Badges */}
            {p.tech.map((t, idx) => (
              <span
                key={idx}
                style={{
                  display: "inline-block",
                  padding: "6px 12px",
                  borderRadius: 10,
                  marginRight: 6,
                  marginTop: 8,
                  fontSize: "0.8rem",
                  background: "rgba(0,234,255,0.08)",
                  border: "1px solid rgba(0,234,255,0.2)",
                  color: "#eaffff",
                }}
              >
                {t}
              </span>
            ))}
          </div>
        ))}
      </div>

      {/* Animations */}
      <style>{`
        @keyframes fadeUp {
          0% { opacity: 0; transform: translateY(40px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        @keyframes fadeDown {
          0% { opacity: 0; transform: translateY(-30px); }
          100% { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
