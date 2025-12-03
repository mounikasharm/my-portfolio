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
        }, 600);
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
      background: "#000",
      color: "white",
      padding: isMobile ? "30px 18px" : "80px 50px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: isMobile ? "center" : "left",
      textAlign: isMobile ? "center" : "left",
      animation: "fadeIn 1.4s ease-out",
    },

    title: {
      fontSize: isMobile ? "32px" : "52px",
      fontWeight: "800",
      lineHeight: isMobile ? "1.3" : "1.2",
      marginBottom: "16px",
    },

    gradientName: {
      background: "linear-gradient(90deg,#4fd1ff,#bb61ff)",
      WebkitBackgroundClip: "text",
      color: "transparent",
      display: "inline-block",
    },

    typing: {
      fontSize: isMobile ? "18px" : "26px",
      fontWeight: "700",
      marginBottom: "18px",
      minHeight: "28px",
      color: "#4fd1ff",
      animation: "slideUp 0.9s ease",
    },

    subtitle: {
      maxWidth: "460px",
      fontSize: isMobile ? "15px" : "18px",
      lineHeight: "1.7",
      color: "#dcdcdc",
      marginBottom: "34px",
      opacity: 0.9,
    },

    buttonWrapper: {
      display: "flex",
      gap: isMobile ? "12px" : "18px",
      flexDirection: isMobile ? "column" : "row",
      width: isMobile ? "100%" : "auto",
      marginTop: "10px",
    },

    btnPrimary: {
      padding: "12px 30px",
      borderRadius: "30px",
      background: "linear-gradient(90deg,#4fd1ff,#bb61ff)",
      color: "#fff",
      fontWeight: "700",
      textDecoration: "none",
      fontSize: isMobile ? "15px" : "16px",
      width: isMobile ? "100%" : "auto",
      textAlign: "center",
    },

    btnOutline: {
      padding: "12px 30px",
      borderRadius: "30px",
      border: "2px solid #4fd1ff",
      color: "#4fd1ff",
      fontWeight: "700",
      textDecoration: "none",
      fontSize: isMobile ? "15px" : "16px",
      width: isMobile ? "100%" : "auto",
      textAlign: "center",
    },
  };

  return (
    <section id="home" style={styles.section}>
      <h1 style={styles.title}>
        Hi, I'm <span style={styles.gradientName}>Mounika</span>
      </h1>

      <h2 ref={typingRef} style={styles.typing}></h2>

      <p style={styles.subtitle}>
        I build fast, responsive, and modern web applications using MERN stack.
      </p>

      <div style={styles.buttonWrapper}>
        <a href="#projects" style={styles.btnPrimary}>Projects</a>
        <a href="#contact" style={styles.btnOutline}>Hire Me</a>
      </div>

      <style>
        {`
          @keyframes fadeIn {
            0% { opacity: 0; transform: translateY(20px); }
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
