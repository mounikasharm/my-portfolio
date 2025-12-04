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
        }, 900);
      }

      setTimeout(type, 95);
    };

    type();
  }, []);

  const isMobile = window.innerWidth <= 768;

  const styles = {
    section: {
      minHeight: "100vh",
      width: "100%",
      padding: isMobile ? "100px 20px 40px" : "120px 70px",
      background:
        "linear-gradient(135deg, #060606, #0b0b0b, #111, #0d0d0d, #000)",
      color: "white",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      animation: "fadeInSlow 1.4s ease-out forwards",
      textAlign: isMobile ? "center" : "left",
      alignItems: isMobile ? "center" : "flex-start",
    },

    title: {
      fontSize: isMobile ? "36px" : "60px",
      fontWeight: "900",
      lineHeight: "1.2",
      marginBottom: "15px",
      animation: "slideDown 1s ease-out",
    },

    gradientName: {
      background: "linear-gradient(90deg,#4fd1ff,#d16bff,#ff79c6,#ffcc70)",
      WebkitBackgroundClip: "text",
      color: "transparent",
      textShadow: "0 0 18px rgba(255,255,255,0.15)",
    },

    typing: {
      fontSize: isMobile ? "20px" : "28px",
      fontWeight: "700",
      marginBottom: "22px",
      minHeight: "32px",
      color: "#4fd1ff",
      letterSpacing: "0.5px",
      animation: "slideUp 1s ease",
    },

    subtitle: {
      maxWidth: "580px",
      fontSize: isMobile ? "16px" : "20px",
      lineHeight: "1.8",
      color: "#d7d7d7",
      marginBottom: "40px",
      animation: "fadeUp 1.2s ease-out",
    },

    buttonWrapper: {
      display: "flex",
      gap: isMobile ? "14px" : "20px",
      flexDirection: isMobile ? "column" : "row",
      width: isMobile ? "100%" : "auto",
    },

    btnPrimary: {
      padding: "14px 38px",
      borderRadius: "40px",
      background: "linear-gradient(90deg,#4fd1ff,#a763ff)",
      color: "#fff",
      fontWeight: "700",
      textDecoration: "none",
      fontSize: isMobile ? "16px" : "18px",
      width: isMobile ? "100%" : "auto",
      textAlign: "center",
      boxShadow: "0 0 15px rgba(79,209,255,0.5)",
      transition: "0.3s",
    },

    btnOutline: {
      padding: "14px 38px",
      borderRadius: "40px",
      border: "2px solid #4fd1ff",
      color: "#4fd1ff",
      fontWeight: "700",
      textDecoration: "none",
      fontSize: isMobile ? "16px" : "18px",
      width: isMobile ? "100%" : "auto",
      textAlign: "center",
      transition: "0.3s",
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
        Skilled in React, Node.js, MongoDB, and UI/UX-driven web development.
      </p>

      <div style={styles.buttonWrapper}>
        <a href="#projects" style={styles.btnPrimary}>View Projects</a>
        <a href="#contact" style={styles.btnOutline}>Hire Me</a>
      </div>

      <style>{`
        @keyframes fadeInSlow {
          0% { opacity: 0; transform: translateY(40px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        @keyframes slideUp {
          0% { opacity: 0; transform: translateY(18px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        @keyframes fadeUp {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }

        @keyframes slideDown {
          0% { opacity: 0; transform: translateY(-20px);}
          100% { opacity: 1; transform: translateY(0);}
        }
      `}</style>
    </section>
  );
}
