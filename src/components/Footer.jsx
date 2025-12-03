import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  const styles = {
    footer: {
      marginTop: "0px",
      padding: "55px 20px 25px",
      background: "linear-gradient(180deg, #050505, #0a0a0d)",
      color: "white",
      textAlign: "center",
      position: "relative",
      overflow: "hidden",
    },

    glowLine: {
      position: "absolute",
      width: "100%",
      height: "2px",
      background:
        "linear-gradient(90deg, transparent, #00eaff, #ff00ff, transparent)",
      top: 0,
      left: 0,
      animation: "glowMove 6s linear infinite",
      opacity: 0.5,
    },

    socialRow: {
      display: "flex",
      justifyContent: "center",
      gap: "30px",
      marginBottom: "15px",
    },

    iconBox: {
      fontSize: "35px",
      cursor: "pointer",
      transition: "0.35s ease",
    },

    copyright: {
      marginTop: "10px",
      fontSize: "14px",
      opacity: 0.65,
      letterSpacing: "0.5px",
    },
  };

  return (
    <footer style={styles.footer}>
      <div style={styles.glowLine}></div>

      {/* SOCIAL ICONS */}
      <div style={styles.socialRow}>
        {/* GitHub */}
        <a
          href="https://github.com/mounikasharm"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "white" }}
        >
          <FaGithub
            style={styles.iconBox}
            onMouseEnter={(e) => {
              e.target.style.color = "#00eaff";
              e.target.style.transform = "scale(1.3) rotate(-5deg)";
              e.target.style.textShadow = "0 0 14px #00eaff";
            }}
            onMouseLeave={(e) => {
              e.target.style.color = "#fff";
              e.target.style.transform = "scale(1)";
              e.target.style.textShadow = "none";
            }}
          />
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/mounika-m-21367b279/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "white" }}
        >
          <FaLinkedin
            style={styles.iconBox}
            onMouseEnter={(e) => {
              e.target.style.color = "#0077ff";
              e.target.style.transform = "scale(1.3) rotate(5deg)";
              e.target.style.textShadow = "0 0 14px #0077ff";
            }}
            onMouseLeave={(e) => {
              e.target.style.color = "#fff";
              e.target.style.transform = "scale(1)";
              e.target.style.textShadow = "none";
            }}
          />
        </a>
      </div>

      <p style={styles.copyright}>
        © {new Date().getFullYear()} Mounika M — All Rights Reserved
      </p>

      <style>
        {`
        @keyframes glowMove {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}
      </style>
    </footer>
  );
}
