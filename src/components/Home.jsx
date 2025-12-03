import React, { useEffect, useRef } from "react";

function Home() {
  const typingRef = useRef(null);

  // Typing Effect
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

      setTimeout(type, 130);
    };

    type();
  }, []);

  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        background: "linear-gradient(180deg, #020202, #0a0a0a, #050505)",
        color: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "0px 20px",
        paddingTop: "20px",
        position: "relative",
        overflow: "hidden",
        animation: "fadeIn 1.2s ease-out",
      }}
    >
      {/* Glow Background Animation Circles */}
      <div style={styles.circle1}></div>
      <div style={styles.circle2}></div>
      <div style={styles.circle3}></div>

      <h1 style={styles.heading}>
        Hi, I'm <span style={{ color: "#00c6ff" }}>Mounika</span>
      </h1>

      <h2 ref={typingRef} style={styles.typing}></h2>

      <p style={styles.subtitle}>
        I build modern, responsive and interactive web applications.
      </p>

      <div style={styles.buttonContainer}>
        <a href="#projects" style={styles.primaryBtn}>My Projects</a>
        <a href="#contact" style={styles.secondaryBtn}>Hire Me</a>
      </div>
    </section>
  );
}

const styles = {
  heading: {
    fontSize: "36px",
    fontWeight: "800",
    letterSpacing: "1px",
    marginBottom: "8px",
  },

  typing: {
    fontSize: "20px",
    color: "#00c6ff",
    height: "28px",
    marginBottom: "18px",
  },

  subtitle: {
    maxWidth: "480px",
    fontSize: "16px",
    lineHeight: "1.5",
    color: "#cccccc",
    marginBottom: "25px",
  },

  buttonContainer: {
    display: "flex",
    gap: "14px",
    marginTop: "5px",
  },

  primaryBtn: {
    padding: "10px 22px",
    background: "#00c6ff",
    color: "black",
    borderRadius: "6px",
    textDecoration: "none",
    fontWeight: "700",
    transition: "0.3s",
  },

  secondaryBtn: {
    padding: "10px 22px",
    border: "2px solid #00c6ff",
    color: "white",
    borderRadius: "6px",
    textDecoration: "none",
    fontWeight: "700",
    transition: "0.3s",
  },

  // Background Blur Lights
  circle1: {
    width: "220px",
    height: "220px",
    borderRadius: "50%",
    background: "rgba(0, 198, 255, 0.22)",
    position: "absolute",
    top: "-40px",
    left: "-40px",
    filter: "blur(45px)",
    animation: "pulse 6s infinite ease-in-out",
  },
  circle2: {
    width: "200px",
    height: "200px",
    borderRadius: "50%",
    background: "rgba(255, 0, 128, 0.22)",
    position: "absolute",
    bottom: "-30px",
    right: "-30px",
    filter: "blur(45px)",
    animation: "pulse 7s infinite ease-in-out",
  },
  circle3: {
    width: "150px",
    height: "150px",
    borderRadius: "50%",
    background: "rgba(255, 255, 255, 0.08)",
    position: "absolute",
    top: "40%",
    left: "60%",
    filter: "blur(60px)",
    animation: "pulse 8s infinite ease-in-out",
  },
};

export default Home;
