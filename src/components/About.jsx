import React from "react";

export default function AboutSection() {
  const styles = {
    section: {
      padding: "80px 20px",
      background: "linear-gradient(180deg, #020202, #090909, #050505)",
      color: "white",
      textAlign: "center",
    },

    heading: {
      fontSize: "42px",
      fontWeight: "800",
      background: "linear-gradient(90deg, #7ef0ff, #c97bff)",
      WebkitBackgroundClip: "text",
      color: "transparent",
      marginBottom: "50px",
    },

    container: {
      maxWidth: "1100px",
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      alignItems: "center",
      gap: "40px",
    },

    /* MOBILE FIX → 2 column image + text */
    mobileContainer: {
      display: "grid",
      gridTemplateColumns: "120px auto",
      alignItems: "center",
      gap: "20px",
    },

    imgCard: {
      padding: "4px",
      background: "linear-gradient(90deg,#00eaff,#e700ff)",
      borderRadius: "14px",
    },

    img: {
      width: "100%",
      height: "120px",
      borderRadius: "12px",
      objectFit: "cover",
    },

    textBox: {
      textAlign: "left",
      lineHeight: "1.7",
      fontSize: "17px",
      color: "#d6eaff",
    },

    bullet: {
      color: "#9ad8ff",
      fontWeight: 600,
    },

    resumeBtn: {
      marginTop: "25px",
      padding: "12px 25px",
      fontSize: "16px",
      fontWeight: 700,
      borderRadius: "10px",
      textDecoration: "none",
      color: "white",
      display: "inline-block",
      background: "linear-gradient(90deg, #00eaff, #ff00ff)",
      boxShadow: "0 0 15px rgba(0, 234, 255, 0.4)",
    },
  };

  const isMobile = window.innerWidth <= 768;

  return (
    <section id="about" style={styles.section}>
      <h2 style={styles.heading}>About Me</h2>

      <div style={isMobile ? styles.mobileContainer : styles.container}>
        
        {/* Image */}
        <div style={styles.imgCard}>
          <img src="/profile.jpeg" style={styles.img} alt="Mounika" />
        </div>

        {/* Text */}
        <div style={styles.textBox}>
          <p>
            Hi, I’m <strong>Mounika</strong>, a passionate
            <span style={styles.bullet}> Full Stack Developer (MERN + Django)</span>
            who loves creating modern and user-friendly applications.
          </p>

          <p>
            I completed my MCA with <span style={styles.bullet}>77.4%</span> and
            completed a full-stack internship at <span style={styles.bullet}>XCEL Corp</span>.
          </p>

          <p>
            <span style={styles.bullet}>Technical Skills:</span> HTML, CSS,
            JavaScript, React.js, Node.js, Django, Python, MongoDB, Git, GitHub, SQL.
          </p>

          <a href="/Mounika_M_Resume.pdf" download style={styles.resumeBtn}>
            ⬇ Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}
