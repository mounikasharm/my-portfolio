import React from "react";
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGithub,
} from "react-icons/fa";
import { SiMongodb, SiExpress, SiDjango, SiPython, SiPostman, SiFirebase, SiPostgresql, SiSqlite } from "react-icons/si";

export default function SkillsSection() {
  const styles = {
    section: {
      padding: "90px 20px",
      background: "linear-gradient(180deg, #050505, #0a0a0d)",
      color: "white",
      textAlign: "center",
    },

    heading: {
      fontSize: "42px",
      fontWeight: "800",
      background: "linear-gradient(90deg,#00eaff,#ff00ff)",
      WebkitBackgroundClip: "text",
      color: "transparent",
      marginBottom: "40px",
      marginTop:'-50px'
    },

    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
      gap: "25px",
      maxWidth: "1100px",
      margin: "0 auto",
      animation: "fadeUp 1s ease",
    },

    card: {
      background: "rgba(255,255,255,0.06)",
      padding: "25px 20px",
      borderRadius: "16px",
      border: "1px solid rgba(255,255,255,0.12)",
      backdropFilter: "blur(10px)",
      transition: "0.4s ease",
      cursor: "pointer",
    },

    icon: {
      fontSize: "45px",
      marginBottom: "12px",
      transition: "0.4s ease",
    },

    label: {
      fontSize: "18px",
      fontWeight: "600",
      letterSpacing: "0.5px",
    },
  };

  const skills = [
    { name: "HTML", icon: <FaHtml5 />, color: "#ff5722" },
    { name: "CSS", icon: <FaCss3Alt />, color: "#2965f1" },
    { name: "JavaScript", icon: <FaJs />, color: "#f7df1e" },
    { name: "React.js", icon: <FaReact />, color: "#61dafb" },
    { name: "Node.js", icon: <FaNodeJs />, color: "#3c873a" },
    { name: "Express.js", icon: <SiExpress />, color: "#ffffff" },
    { name: "MongoDB", icon: <SiMongodb />, color: "#4db33d" },
    { name: "Firebase", icon: <SiFirebase />, color: "#ffa000" },
    { name: "Python", icon: <SiPython />, color: "#ffd343" },
    { name: "Django", icon: <SiDjango />, color: "#0c4b33" },
    { name: "PostgreSQL", icon: <SiPostgresql />, color: "#336791" },
    { name: "SQLite", icon: <SiSqlite />, color: "#0f80cc" },
    { name: "Git & GitHub", icon: <FaGithub />, color: "#fff" },
    { name: "Postman", icon: <SiPostman />, color: "#f76935" },
  ];

  return (
    <section id="skills" style={styles.section}>
      <h2 style={styles.heading}>My Skills</h2>

      <div style={styles.grid}>
        {skills.map((skill) => (
          <div
            key={skill.name}
            style={styles.card}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-10px) scale(1.05)";
              e.currentTarget.style.boxShadow = `0 0 25px ${skill.color}55`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0) scale(1)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <div
              style={{
                ...styles.icon,
                color: skill.color,
              }}
            >
              {skill.icon}
            </div>
            <p style={styles.label}>{skill.name}</p>
          </div>
        ))}
      </div>

      <style>
        {`
        @keyframes fadeUp {
          0% { opacity: 0; transform: translateY(40px); }
          100% { opacity: 1; transform: translateY(0); }
        }
      `}
      </style>
    </section>
  );
}
