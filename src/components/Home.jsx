import React, { useEffect, useRef } from "react";
import { FaReact, FaNodeJs, FaGithub } from "react-icons/fa";
import { SiJavascript, SiMongodb, SiExpress } from "react-icons/si";

export default function HomeSection() {
  const typingRef = useRef(null);

  useEffect(() => {
    const titles = [
      "Full Stack Developer",
      "Python Developer",
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
      }, 90);
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
        minHeight: "100vh",
        background: "linear-gradient(180deg, #020202, #090909, #050505)",
        color: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        textAlign: "center",
        padding: "0 20px",
        overflow: "hidden",
      }}
    >
      {/* Glowing Background Orbs */}
      <div className="glow orb1"></div>
      <div className="glow orb2"></div>

      {/* MAIN TITLE */}
      <h1 className="home-title">
        Hi, I'm <span style={{ color: "#9ae8ff" }}>Mounika M</span>
      </h1>

      {/* Typing */}
      <h2 ref={typingRef} className="typing-title"></h2>

      {/* Tagline */}
      <p className="home-tagline">
        I build modern, interactive, fast, and visually stunning web applications
        with MERN Stack + React animations......
      </p>

      {/* Floating Tech Icons */}
      <div className="floating-icons">
        <FaReact className="float-icon react" />
        <FaNodeJs className="float-icon node" />
        <SiJavascript className="float-icon js" />
        <SiMongodb className="float-icon mongo" />
        <FaGithub className="float-icon git" />
        <SiExpress className="float-icon express" />
      </div>

      {/* CSS */}
      <style>
        {`
          /* TEXT Styles */
          .home-title {
            font-size: clamp(2.2rem, 6vw, 4rem);
            font-weight: 800;
            background: linear-gradient(90deg,#00eaff,#e700ff);
            -webkit-background-clip: text;
            color: transparent;
            text-shadow: 0 0 25px rgba(0,234,255,0.4);
            animation: fadeDown 1.2s ease;
            padding: 0 10px;
            line-height: 1.2;
          }

          .typing-title {
            font-size: clamp(1.2rem, 5vw, 2.2rem);
            margin-top: 10px;
            height: 40px;
            letter-spacing: 1px;
            animation: fadeIn 1.8s ease;
          }

          .home-tagline {
            margin-top: 12px;
            font-size: clamp(0.9rem, 4vw, 1.2rem);
            opacity: 0.85;
            max-width: 620px;
            animation: fadeUp 2s ease;
            padding: 0 12px;
          }

          /* Glowing Orbs */
          .glow {
            position: absolute;
            width: 320px;
            height: 320px;
            border-radius: 50%;
            filter: blur(100px);
            opacity: 0.33;
            animation: pulse 6s infinite alternate;
          }
          .orb1 { background: #00eaff; top: 12%; left: 12%; }
          .orb2 { background: #ff3cff; bottom: 12%; right: 10%; }

          /* Floating Icons */
          .float-icon {
            position: absolute;
            font-size: clamp(2rem, 7vw, 3.2rem);
            opacity: 0.15;
            animation: float 6s ease-in-out infinite;
          }
          .react { top: 16%; left: 8%; animation-delay: 0.2s; }
          .node { top: 30%; right: 10%; animation-delay: 0.4s; }
          .js { bottom: 20%; left: 12%; animation-delay: 0.6s; }
          .mongo { top: 60%; right: 15%; animation-delay: 0.8s; }
          .git { bottom: 16%; right: 10%; animation-delay: 1s; }
          .express { top: 75%; left: 12%; animation-delay: 1.2s; }

          /* Animations */
          @keyframes float {
            0% { transform: translateY(0); opacity: 0.15; }
            50% { transform: translateY(-16px); opacity: 0.25; }
            100% { transform: translateY(0); opacity: 0.15; }
          }

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

          /* Responsive fixes */
          @media (max-width: 480px) {
            .glow {
              width: 220px;
              height: 220px;
              filter: blur(90px);
            }
          }
        `}
      </style>
    </section>
  );
}
