import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaPython,
  FaReact,
  FaNodeJs,
  FaGithub,
} from "react-icons/fa";
import {
  SiBootstrap,
  SiExpress,
  SiDjango,
  SiMongodb,
  SiSqlite,
  SiPostgresql,
  SiGit,
  SiPostman,
} from "react-icons/si";

export default function SkillsSection() {
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
    <section
      id="skills"
      style={{
        padding: "50px 20px",
        background: "linear-gradient(180deg, #000000, #060606, #0b0b0b)",
        textAlign: "center",
        color: "white",
      }}
    >
      <h2
        style={{
          fontSize: "34px",
          fontWeight: "800",
          background: "linear-gradient(90deg,#7ef0ff,#c97bff)",
          WebkitBackgroundClip: "text",
          color: "transparent",
          marginBottom: "25px",
        }}
      >
        My Skills ⚡
      </h2>

      <div
        style={{
          backdropFilter: "blur(20px)",
          background: "rgba(255,255,255,0.08)",
          borderRadius: "22px",
          border: "1px solid rgba(255,255,255,0.15)",
          padding: "30px 20px",
          maxWidth: "900px",
          margin: "0 auto",
        }}
      >
        <h3 style={{ fontSize: "18px", marginBottom: "10px", color: "#dff7ff" }}>
          💻 Tech Stack
        </h3>

        <div style={gridStyle}>
          {techStack.map((item) => (
            <div
              key={item.name}
              className="skill-card"
              style={{ ...cardStyle, "--shadow-color": item.color }}
            >
              <div style={{ fontSize: "30px", color: item.color }}>
                {item.icon}
              </div>
              <p style={{ fontSize: "14px", fontWeight: 600 }}>{item.name}</p>
            </div>
          ))}
        </div>

        <h3 style={{ marginTop: "30px", fontSize: "18px", color: "#ffdfdf" }}>
          🧰 Tools I Use
        </h3>

        <div style={gridStyle}>
          {tools.map((item) => (
            <div
              key={item.name}
              className="skill-card"
              style={{ ...cardStyle, "--shadow-color": item.color }}
            >
              <div style={{ fontSize: "30px", color: item.color }}>
                {item.icon}
              </div>
              <p style={{ fontSize: "14px", fontWeight: 600 }}>{item.name}</p>
            </div>
          ))}
        </div>
      </div>

      <style>
        {`
          .skill-card {
            transition: 0.3s ease;
          }
          .skill-card:hover {
            transform: scale(1.08);
            box-shadow: 0 0 18px var(--shadow-color);
          }
        `}
      </style>
    </section>
  );
}

const gridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
  gap: "16px",
  marginTop: "10px",
};

const cardStyle = {
  background: "rgba(255,255,255,0.06)",
  padding: "16px 10px",
  borderRadius: "14px",
  border: "1px solid rgba(255,255,255,0.12)",
  textAlign: "center",
  cursor: "pointer",
};
