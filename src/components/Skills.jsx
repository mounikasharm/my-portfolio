import React from "react";
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGithub, FaPython
} from "react-icons/fa";
import {
  SiMongodb, SiExpress, SiPostman, SiDjango,
  SiBootstrap, SiSqlite, SiTailwindcss, SiGit, SiPostgresql
} from "react-icons/si";

export default function SkillsSection() {

  const container = {
    padding: "90px 20px",
    background: "linear-gradient(180deg, #000000, #060606, #0b0b0b)",
    minHeight: "100vh",
    textAlign: "center",
    color: "white",
  };

  const mainCard = {
    backdropFilter: "blur(20px)",
    background: "rgba(255,255,255,0.08)",
    borderRadius: "22px",
    border: "1px solid rgba(255,255,255,0.15)",
    padding: "35px 22px",
    maxWidth: "900px",
    margin: "0 auto",
    animation: "fadeUp 1s ease"
  };

  const grid = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
    gap: "18px",
    marginTop: "15px",
  };

  const card = {
    background: "rgba(255,255,255,0.06)",
    padding: "18px 10px",
    borderRadius: "14px",
    border: "1px solid rgba(255,255,255,0.12)",
    textAlign: "center",
    transition: "0.3s ease",
    cursor: "pointer"
  };

  const icon = { fontSize: "32px", marginBottom: "6px" };
  const label = { fontSize: "14px", fontWeight: 600 };

  // ⭐ Skills extracted from your RESUME
  const techStack = [
    { name: "HTML5", icon: <FaHtml5 />, color: "#ff5722" },
    { name: "CSS3", icon: <FaCss3Alt />, color: "#2965f1" },
    { name: "JavaScript", icon: <FaJs />, color: "#f7df1e" },
    { name: "Python", icon: <FaPython />, color: "#f2c744" },
    { name: "React.js", icon: <FaReact />, color: "#61dafb" },
    { name: "Bootstrap", icon: <SiBootstrap />, color: "#ad51ff" },
    { name: "Node.js", icon: <FaNodeJs />, color: "#4caf50" },
    { name: "Express.js", icon: <SiExpress />, color: "#ffffff" },
    { name: "Django", icon: <SiDjango />, color: "#0c4b33" },
    { name: "MongoDB", icon: <SiMongodb />, color: "#4db33d" },
    { name: "SQLite", icon: <SiSqlite />, color: "#7cc4ff" },
    { name: "PostgreSQL", icon: <SiPostgresql />, color: "#3e6eab" },
  ];

  const tools = [
    { name: "Git", icon: <SiGit />, color: "#ff7043" },
    { name: "GitHub", icon: <FaGithub />, color: "white" },
    { name: "Postman", icon: <SiPostman />, color: "#f76935" },
    { name: "VS Code", icon: <FaReact />, color: "#1e90ff" },
  ];

  return (
    <section id="skills" style={container}>
      <h2
        style={{
          fontSize: "36px",
          fontWeight: "800",
          background: "linear-gradient(90deg,#7ef0ff,#c97bff)",
          WebkitBackgroundClip: "text",
          color: "transparent",
          marginBottom: "25px",
          animation: "fadeDown 1s ease",
        }}
      >
        My Skills ⚡
      </h2>

      <div style={mainCard}>
        
        {/* TECH STACK */}
        <h3 style={{ fontSize: "20px", marginBottom: "10px", color: "#dff7ff" }}>
          💻 Tech Stack
        </h3>

        <div style={grid}>
          {techStack.map((item) => (
            <div
              key={item.name}
              style={card}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.08)";
                e.currentTarget.style.boxShadow = `0 0 18px ${item.color}60`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <div style={{ ...icon, color: item.color }}>{item.icon}</div>
              <p style={label}>{item.name}</p>
            </div>
          ))}
        </div>

        {/* TOOLS */}
        <h3
          style={{
            marginTop: "34px",
            fontSize: "20px",
            color: "#ffdfdf",
          }}
        >
          🧰 Tools I Use
        </h3>

        <div style={grid}>
          {tools.map((item) => (
            <div
              key={item.name}
              style={card}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.08)";
                e.currentTarget.style.boxShadow = `0 0 18px ${item.color}55`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <div style={{ ...icon, color: item.color }}>{item.icon}</div>
              <p style={label}>{item.name}</p>
            </div>
          ))}
        </div>

      </div>

      {/* ANIMATIONS */}
      <style>{`
        @keyframes fadeUp {
          0% { opacity: 0; transform: translateY(40px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        @keyframes fadeDown {
          0% { opacity: 0; transform: translateY(-25px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        /* MOBILE OPTIMIZATION */
        @media (max-width: 600px) {
          #skills h2 {
            font-size: 28px;
          }

          div[style*="grid"] {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </section>
  );
}
