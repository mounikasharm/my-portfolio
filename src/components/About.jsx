import React from "react";

export default function AboutSection() {
  const isMobile = window.matchMedia("(max-width: 768px)").matches;

  const imageSize = isMobile ? "180px" : "280px";

  const styles = {
    section: {
      padding: isMobile ? "50px 20px" : "90px 20px",
      background: "#0b0c10",
      color: "white",
      textAlign: isMobile ? "center" : "left",
    },

    container: {
      maxWidth: "1150px",
      margin: "0 auto",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "40px",
    },

    mobile: {
      display: "flex",
      flexDirection: "column-reverse",
      alignItems: "center",
      gap: "25px",
    },

    leftImageBox: {
      width: imageSize,
      height: imageSize,
      borderRadius: "50%",
      border: "4px solid #1f4fff",
      overflow: "hidden",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "transparent",
    },

    profileImage: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      objectPosition: "center",
      borderRadius: "50%",
    },

    heading: {
      fontSize: isMobile ? "30px" : "40px",
      fontWeight: 800,
      marginBottom: "12px",
      background: "linear-gradient(90deg, #7ef0ff, #ba7bff)",
      WebkitBackgroundClip: "text",
      color: "transparent",
    },

    textBlock: {
      fontSize: isMobile ? "15px" : "17px",
      lineHeight: isMobile ? "1.6" : "1.8",
      color: "#d9e7ff",
      marginBottom: "16px",
    },

    bullet: {
      color: "#8cd1ff",
      fontWeight: 700,
    },

    resumeButton: {
      marginTop: "18px",
      padding: isMobile ? "10px 22px" : "12px 28px",
      fontSize: "15px",
      fontWeight: 700,
      borderRadius: "30px",
      textDecoration: "none",
      color: "white",
      background: "linear-gradient(90deg, #4b6bfb, #8a4dfc)",
      display: "inline-block",
      boxShadow: "0 0 15px rgba(120,80,255,0.4)",
    },
  };

  return (
    <section id="about" style={styles.section}>
      <div style={isMobile ? styles.mobile : styles.container}>

        {/* IMAGE */}
        <div style={styles.leftImageBox}>
          <img src="/profile.jpeg" alt="Mounika" style={styles.profileImage} />
        </div>

        {/* TEXT */}
        <div>
          <h2 style={styles.heading}>About Me</h2>

          <p style={styles.textBlock}>
            Hello! I’m <strong>Mounika M</strong>, a passionate
            <span style={styles.bullet}> Full Stack Developer</span>.
          </p>

          <p style={styles.textBlock}>
            I completed my MCA with
            <span style={styles.bullet}> 77.4%</span> and finished a full-stack
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
