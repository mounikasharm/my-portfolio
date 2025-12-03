import React, { useEffect, useRef } from "react";

function Home() {
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
        }, 800);
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
        background: "linear-gradient(180deg, #020202, #080808, #000000)",
        color: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "0 20px",
        paddingTop: "0px", // 🔥 removed extra gap
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background Glow Lights */}
      <div style={styles.circleSmall}></div>
      <div style={styles.circleBottom}></div>

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
    fontSize: "30px",
    fontWeight: "800",
    letterSpacing: "1px",
    marginBottom: "10px",
  },

  typing: {
    fontSize: "18px",
    color: "#00c6ff",
    height: "26px",
    marginBottom: "15px",
  },

  subtitle: {
    maxWidth: "420px",
    fontSize: "15px",
    lineHeight: "1.5",
    color: "#cccccc",
    marginBottom: "22px",
  },

  buttonContainer: {
    display: "flex",
    gap: "12px",
    marginTop: "5px",
  },

  primaryBtn: {
    padding: "10px 20px",
    background: "#00c6ff",
    color: "black",
    borderRadius: "6px",
    textDecoration: "none",
    fontWeight: "700",
  },

  secondaryBtn: {
    padding: "10px 20px",
    border: "2px solid #00c6ff",
    color: "white",
    borderRadius: "6px",
    textDecoration: "none",
    fontWeight: "700",
  },

  // Optimized blur lights for mobile
  circleSmall: {
    width: "130px",
    height: "130px",
    borderRadius: "50%",
    background: "rgba(0, 198, 255, 0.20)",
    position: "absolute",
    top: "-20px",
    left: "-20px",
    filter: "blur(40px)",
  },

  circleBottom: {
    width: "140px",
    height: "140px",
    borderRadius: "50%",
    background: "rgba(255, 0, 128, 0.18)",
    position: "absolute",
    bottom: "-30px",
    right: "-20px",
    filter: "blur(40px)",
  }
};

export default Home;
