import React, { useState } from "react";

export default function ProjectsSection() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const projects = [
    {
      title: "Village Community Hub",
      description:
        "A digital platform to help rural citizens access schemes, submit service requests, verify delivery status, and communicate with officers.",
      tech: ["React", "MongoDB", "Express", "Node.js"],
    },
    {
      title: "Tele-Track CRM",
      description:
        "A CRM application with call tracking, lead updates, status changes, dashboard analytics, JWT authentication, and role-based login.",
      tech: ["React", "Node.js", "MongoDB", "JWT"],
    },
    {
      title: "BookLoop Marketplace",
      description:
        "A book marketplace where users upload books, preview images, chat via WhatsApp, and filter by categories.",
      tech: ["Django", "Python", "SQLite"],
    },
    {
      title: "BookEcho",
      description:
        "A book exchange system where users trade used books for discounts on new ones.",
      tech: ["Django", "HTML", "CSS"],
    },
  ];

  return (
    <section
      id="projects"
      style={{
        padding: "90px 20px",
        background: "#000000",        // 🔥 FIX WHITE COLOR
        backgroundColor: "#000000",  // 🔥 DOUBLE FIX
        color: "white",
        textAlign: "center",
      }}
    >
      <h2
        style={{
          fontSize: "2.8rem",
          fontWeight: "700",
          background: "linear-gradient(90deg, #7df3ff, #d17bff)",
          WebkitBackgroundClip: "text",
          color: "transparent",
          marginBottom: "20px",
        }}
      >
        Projects
      </h2>

      <div
        style={{
          width: 90,
          height: 4,
          background: "linear-gradient(90deg, #6fc9ff, #b36bff, #ff6bcb)",
          margin: "0 auto 50px",
          borderRadius: 10,
        }}
      ></div>

      {/* GRID */}
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "25px",
        }}
      >
        {projects.map((p, index) => {
          const isOpen = expandedIndex === index;

          return (
            <div
              key={index}
              onClick={() =>
                setExpandedIndex(isOpen ? null : index)
              }
              style={{
                padding: 25,
                borderRadius: 20,
                background: "rgba(255, 255, 255, 0.06)",
                border: "1px solid rgba(255, 255, 255, 0.15)",
                backdropFilter: "blur(12px)",
                boxShadow: "0 5px 25px rgba(0,0,0,0.4)",
                cursor: "pointer",
                transition: "0.3s ease",
                overflow: "hidden",
                height: isOpen ? "auto" : "180px", // 🔥 COLLAPSED HEIGHT
              }}
            >
              {/* TITLE */}
              <h3
                style={{
                  fontSize: "1.4rem",
                  fontWeight: "700",
                  marginBottom: 10,
                  background: "linear-gradient(90deg,#7df3ff,#cc7bff)",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                }}
              >
                {p.title}
              </h3>

              {/* DESCRIPTION → Only show when expanded */}
              {isOpen && (
                <p
                  style={{
                    color: "#d1e7ff",
                    lineHeight: "1.6",
                    marginBottom: 15,
                  }}
                >
                  {p.description}
                </p>
              )}

              {/* TECH → Show only when expanded */}
              {isOpen && (
                <div>
                  {p.tech.map((t, i) => (
                    <span
                      key={i}
                      style={{
                        padding: "6px 12px",
                        marginRight: 6,
                        marginTop: 8,
                        fontSize: "0.8rem",
                        borderRadius: 12,
                        background: "rgba(255,255,255,0.08)",
                        border: "1px solid rgba(255,255,255,0.2)",
                        display: "inline-block",
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              )}

              {/* READ MORE / CLOSE */}
              <p
                style={{
                  marginTop: 12,
                  fontSize: "0.9rem",
                  color: "#7ddaff",
                }}
              >
                {isOpen ? "Close ▲" : "Tap to Read More ▼"}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
