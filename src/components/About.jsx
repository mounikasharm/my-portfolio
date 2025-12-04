import React from "react";

export default function AboutSection() {
  const isMobile = window.innerWidth <= 768;
  const imageSize = isMobile ? "260px" : "320px"; // increased size

  const styles = {
    section: {
      padding: "90px 20px",
      background: "#0b0c10",
      color: "white",
    },

    container: {
      maxWidth: "1150px",
      margin: "0 auto",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "50px",
    },

    /* --- PROFILE IMAGE CIRCLE --- */
    leftImageBox: {
      width: imageSize,
      height: imageSize,
      borderRadius: "50%",
      border: "5px solid #1f4fff",
      background: "transparent",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden",
    },

    profileImage: {
      width: "115%",      // zoomed out slightly to show more face
      height: "115%",
      borderRadius: "50%",
      objectFit: "cover",

      objectPosition: "center -20px", 
      // 👆 moves image upward to avoid cropping chin
    },

    heading: {
      fontSize: "40px",
      fontWeight: "800",
      marginBottom: "15px",
      background: "linear-gradient(90deg, #7ef0ff, #ba7bff)",
      WebkitBackgroundClip: "text",
      color: "transparent",
    },

    textBlock: {
      fontSize: "17px",
      lineHeight: "1.8",
      color: "#d9e7ff",
      marginBottom: "20px",
    },

    bullet: {
      color: "#8cd1ff",
      fontWeight: 700,
    },

    resumeButton: {
      marginTop: "25px",
      padding: "12px 28px",
      fontSize: "16px",
      fontWeight: 700,
      borderRadius: "30px",
      textDecoration: "none",
      color: "white",
      background: "linear-gradient(90deg, #4b6bfb, #8a4dfc)",
      display: "inline-block",
      boxShadow: "0 0 18px rgba(120,80,255,0.4)",
    },

    mobile: {
      display: "flex",
      flexDirection: "column-reverse",
      alignItems: "center",
      textAlign: "center",
      gap: "30px",
    },
  };

  return (
    <section id="about" style={styles.section}>
      <div style={isMobile ? styles.mobile : styles.container}>
        
        {/* PROFILE IMAGE */}
        <div style={styles.leftImageBox}>
          <img src="/profile.jpeg" alt="Mounika" style={styles.profileImage} />
        </div>

        {/* ABOUT TEXT */}
        <div>
          <h2 style={styles.heading}>About Me</h2>

          <p style={styles.textBlock}>
            Hello! I’m <strong>Mounika</strong>, a passionate 
            <span style={styles.bullet}> Full Stack Developer</span> who loves
            building clean, functional, and modern web applications.
          </p>

          <p style={styles.textBlock}>
            I completed my MCA with 
            <span style={styles.bullet}> 77.4%</span> and completed a full-stack 
            internship at <span style={styles.bullet}>XCEL Corp</span>.
          </p>

          <p style={styles.textBlock}>
            <span style={styles.bullet}>Technical Skills:</span> HTML, CSS,
            JavaScript, React.js, Node.js, Django, Python, MongoDB, SQL, Git, GitHub.
          </p>

          <a href="/Mounika_M_Resume.pdf" download style={styles.resumeButton}>
            ⬇ Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}
