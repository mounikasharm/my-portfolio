import React, { useEffect, useRef } from "react";

export default function Home() {
  const typingRef = useRef(null);

  useEffect(() => {
    const texts = [
      "MERN Stack Developer",
      "React.js Enthusiast",
      "Node.js Backend Builder",
      "MongoDB & Express.js Developer",
    ];

    let index = 0;
    let charIndex = 0;

    const type = () => {
      if (typingRef.current) {
        typingRef.current.textContent = texts[index].slice(0, charIndex);
      }
      charIndex++;

      if (charIndex > texts[index].length) {
        setTimeout(() => {
          charIndex = 0;
          index = (index + 1) % texts.length;
        }, 700);
      }

      setTimeout(type, 110);
    };

    type();
  }, []);

  const isMobile = window.innerWidth <= 768;

  const styles = {
    section: {
      minHeight: "100vh",
      width: "100%",
      padding: isMobile ? "80px 18px 40px" : "120px 60px",
      background: "linear-gradient(to bottom, #000, #0a0a0a)",
      color: "white",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: isMobile ? "center" : "flex-start",
      textAlign: isMobile ? "center" : "left",
      animation: "fadeIn 1.2s ease-out",
    },

    title: {
      fontSize: isMobile ? "34px" : "54px",
      fontWeight: "800",
      lineHeight: isMobile ? "1.3" : "1.15",
      marginBottom: "10px",
    },

    gradientName: {
      background: "linear-gradient(90deg,#4fd1ff,#bb61ff,#ff79c6)",
      WebkitBackgroundClip: "text",
      color: "transparent",
      display: "inline-block",
    },

    typing: {
      fontSize: isMobile ? "19px" : "26px",
      fontWeight: "700",
      marginBottom: "20px",
      minHeight: "30px",
      color: "#4fd1ff",
      opacity: 0.9,
      animation: "slideUp 0.8s ease",
    },

    subtitle: {
      maxWidth: "480px",
      fontSize: isMobile ? "15px" : "18px",
      lineHeight: "1.7",
      color: "#d3d3d3",
      marginBottom: "38px",
    },

    buttonWrapper: {
      display: "flex",
      gap: isMobile ? "14px" : "18px",
      flexDirection: isMobile ? "column" : "row",
      width: isMobile ? "100%" : "auto",
    },

    btnPrimary: {
      padding: "12px 34px",
      borderRadius: "30px",
      background: "linear-gradient(90deg,#4fd1ff,#bb61ff)",
      color: "#fff",
      fontWeight: "700",
      textDecoration: "none",
      fontSize: isMobile ? "15px" : "16px",
      width: isMobile ? "100%" : "auto",
      textAlign: "center",
      boxShadow: "0 0 12px rgba(79,209,255,0.4)",
      transition: "0.2s",
    },

    btnOutline: {
      padding: "12px 34px",
      borderRadius: "30px",
      border: "2px solid #4fd1ff",
      color: "#4fd1ff",
      fontWeight: "700",
      textDecoration: "none",
      fontSize: isMobile ? "15px" : "16px",
      width: isMobile ? "100%" : "auto",
      textAlign: "center",
      transition: "0.2s",
    },
  };

  return (
    <section id="home" style={styles.section}>
      <h1 style={styles.title}>
        Hi, I'm <span style={styles.gradientName}>Mounika</span>
      </h1>

      <h2 ref={typingRef} style={styles.typing}></h2>

      <p style={styles.subtitle}>
        I build modern, responsive and high-performance MERN stack applications.
      </p>

      <div style={styles.buttonWrapper}>
        <a href="#projects" style={styles.btnPrimary}>View Projects</a>
        <a href="#contact" style={styles.btnOutline}>Hire Me</a>
      </div>

      <style>
        {`
          @keyframes fadeIn {
            0% { opacity: 0; transform: translateY(25px); }
            100% { opacity: 1; transform: translateY(0); }
          }

          @keyframes slideUp {
            0% { opacity: 0; transform: translateY(10px); }
            100% { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>
    </section>
  );
}
