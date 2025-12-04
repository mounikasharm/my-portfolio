import React, { useEffect, useRef } from "react";

function Home() {
  // Typing Effect
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
        }, 1000);
      }

      setTimeout(type, 120);
    };

    type();
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
        textAlign: "center",
        padding: "40px 20px", // FIXED SPACING
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Floating Background Circles */}
      <div style={styles.circle1}></div>
      <div style={styles.circle2}></div>
      <div style={styles.circle3}></div>

      {/* Main Content */}
      <h1 style={styles.heading}>Hi, I'm <span style={{ color: "#00c6ff" }}>Mounika</span></h1>

      <h2 ref={typingRef} style={styles.typing}></h2>

      <p style={styles.subtitle}>
        I build modern, responsive and interactive web applications.
      </p>

      {/* Buttons */}
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
    fontWeight: "bold",
    marginBottom: "10px",
  },

  typing: {
    fontSize: "20px",
    color: "#00c6ff",
    height: "28px",
    marginBottom: "15px",
  },

  subtitle: {
    maxWidth: "500px",
    fontSize: "16px",
    color: "#cccccc",
    marginBottom: "20px",
  },

  buttonContainer: {
    display: "flex",
    gap: "15px",
    marginTop: "10px",
  },

  primaryBtn: {
    padding: "10px 20px",
    background: "#00c6ff",
    color: "black",
    textDecoration: "none",
    borderRadius: "6px",
    fontWeight: "bold",
  },

  secondaryBtn: {
    padding: "10px 20px",
    border: "2px solid #00c6ff",
    color: "white",
    textDecoration: "none",
    borderRadius: "6px",
    fontWeight: "bold",
  },

  // Background circles
  circle1: {
    width: "220px",
    height: "220px",
    borderRadius: "50%",
    background: "rgba(0, 198, 255, 0.2)",
    position: "absolute",
    top: "-40px",
    left: "-40px",
    filter: "blur(40px)",
  },
  circle2: {
    width: "200px",
    height: "200px",
    borderRadius: "50%",
    background: "rgba(255, 0, 128, 0.2)",
    position: "absolute",
    bottom: "-30px",
    right: "-30px",
    filter: "blur(40px)",
  },
  circle3: {
    width: "150px",
    height: "150px",
    borderRadius: "50%",
    background: "rgba(255, 255, 255, 0.1)",
    position: "absolute",
    top: "40%",
    left: "60%",
    filter: "blur(60px)",
  },
};

export default Home;
