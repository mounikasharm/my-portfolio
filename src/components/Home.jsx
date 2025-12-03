import React, { useEffect, useRef } from "react";
import { FaReact, FaNodeJs, FaGithub } from "react-icons/fa";
import { SiJavascript, SiMongodb, SiExpress } from "react-icons/si";

export default function HomeSection() {
  const typingRef = useRef(null);

  useEffect(() => {
    const titles = [
      "Full Stack Developer",
      "Python Developer ",
      "MERN Stack Developer",
      "React.js Developer",
      "Node.js Backend Developer",
    ];

    let index = 0;
    let char = 0;
    let timeout;

    const type = () => {
      timeout = setTimeout(() => {
        if (char < titles[index].length) {
          typingRef.current.textContent += titles[index][char];
          char++;
          type();
        } else {
          erase();
        }
      }, 100);
    };

    const erase = () => {
      timeout = setTimeout(() => {
        if (char > 0) {
          typingRef.current.textContent = titles[index].substring(0, char - 1);
          char--;
          erase();
        } else {
          index = (index + 1) % titles.length;
          type();
        }
      }, 40);
    };

    type();
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section
      id="home"
      style={{
        height: "100vh",
        background: "linear-gradient(180deg, #020202, #090909, #050505)",
        color: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        textAlign: "center",
        overflow: "hidden",
      }}
    >
      {/* 🌈 GLOWING BACKGROUND ORBS */}
      <div className="glow orb1"></div>
      <div className="glow orb2"></div>

      {/* MAIN TITLE */}
      <h1
        style={{
          fontSize: "4rem",
          fontWeight: "800",
          background: "linear-gradient(90deg,#00eaff,#e700ff)",
          WebkitBackgroundClip: "text",
          color: "transparent",
          textShadow: "0 0 25px rgba(0,234,255,0.4)",
          animation: "fadeDown 1.2s ease",
        }}
      >
        Hi, I'm <span style={{ color: "#9ae8ff" }}>Mounika M</span>
      </h1>

      {/* TYPING EFFECT */}
      <h2
        ref={typingRef}
        style={{
          fontSize: "2.2rem",
          marginTop: "10px",
          height: "45px",
          letterSpacing: "1px",
          animation: "fadeIn 1.8s ease",
        }}
      ></h2>

      {/* TAGLINE */}
      <p
        style={{
          marginTop: "12px",
          fontSize: "1.2rem",
          opacity: 0.85,
          maxWidth: "620px",
          animation: "fadeUp 2s ease",
        }}
      >
        I build modern, interactive, fast, and visually stunning web applications
        with MERN Stack + React animations.
      </p>

      {/* FLOATING TECH ICONS */}
      <div className="floating-icons">
        <FaReact style={{ color: "#61DBFB" }} className="float-icon react" />
        <FaNodeJs style={{ color: "#77dd66" }} className="float-icon node" />
        <SiJavascript style={{ color: "#F7E018" }} className="float-icon js" />
        <SiMongodb style={{ color: "#4FAA41" }} className="float-icon mongo" />
        <FaGithub style={{ color: "#ffffff" }} className="float-icon git" />
        <SiExpress style={{ color: "#cccccc" }} className="float-icon express" />
      </div>

      {/* CSS */}
      <style>
        {`
          /* Floating Glow Orbs */
          .glow {
            position: absolute;
            width: 380px;
            height: 380px;
            border-radius: 50%;
            filter: blur(120px);
            opacity: 0.35;
            animation: pulse 6s infinite alternate;
          }
          .orb1 { background: #00eaff; top: 10%; left: 10%; }
          .orb2 { background: #ff3cff; bottom: 10%; right: 10%; }

          /* Floating Icons */
          .float-icon {
            position: absolute;
            font-size: 3rem;
            opacity: 0.15;
            animation: float 6s ease-in-out infinite;
          }
          .react { top: 18%; left: 8%; animation-delay: 0.2s; }
          .node { top: 32%; right: 10%; animation-delay: 0.4s; }
          .js { bottom: 20%; left: 14%; animation-delay: 0.6s; }
          .mongo { top: 60%; right: 15%; animation-delay: 0.8s; }
          .git { bottom: 16%; right: 10%; animation-delay: 1s; }
          .express { top: 74%; left: 12%; animation-delay: 1.2s; }

          @keyframes float {
            0% { transform: translateY(0px); opacity: 0.15; }
            50% { transform: translateY(-18px); opacity: 0.28; }
            100% { transform: translateY(0px); opacity: 0.15; }
          }

          /* Background Animations */
          @keyframes pulse {
            0% { transform: scale(1); }
            100% { transform: scale(1.2); }
          }

          @keyframes fadeDown {
            0% { opacity: 0; transform: translateY(-40px); }
            100% { opacity: 1; transform: translateY(0); }
          }

          @keyframes fadeUp {
            0% { opacity: 0; transform: translateY(40px); }
            100% { opacity: 1; transform: translateY(0); }
          }

          @keyframes fadeIn {
            0% { opacity: 0; }
            100% { opacity: 1; }
          }

        `}
      </style>
    </section>
  );
}
