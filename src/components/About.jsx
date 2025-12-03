import React from "react";

export default function AboutSection() {
  const isMobile = window.innerWidth <= 768;

  const styles = {
    section: {
      padding: isMobile ? "60px 20px" : "90px 20px",
      background: "#000",
      color: "white",
      textAlign: "center",
    },

    container: {
      display: "flex",
      flexDirection: isMobile ? "column" : "row",
      maxWidth: "1050px",
      margin: "0 auto",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "40px",
    },

    heading: {
      fontSize: isMobile ? "32px" : "40px",
      fontWeight: "800",
      marginBottom: "50px",
      color: "white",
      letterSpacing: "1px",
    },

    textBox: {
      flex: "1",
      textAlign: isMobile ? "center" : "left",
      fontSize: isMobile ? "16px" : "18px",
      lineHeight: "1.7",
      color: "#cccccc",
    },

    highlight: {
      color: "#00c6ff",
      fontWeight: 600,
    },

    imgContainer: {
      width: isMobile ? "78%" : "320px",
      borderRadius: "14px",
      overflow: "hidden",
      boxShadow: "0 0 20px rgba(255,255,255,0.08)",
      margin: isMobile ? "0 auto" : "0",
      animation: "fadeIn 1.2s ease",
    },

    img: {
      width: "100%",
      display: "block",
      borderRadius: "14px",
    },

    resumeBtn: {
      display: "inline-block",
      marginTop: "28px",
      padding: "12px 26px",
      background: "#00c6ff",
      color: "#000",
      borderRadius: "8px",
      fontSize: "17px",
      fontWeight: "700",
      textDecoration: "none",
      transition: "0.3s ease",
    },
  };

  return (
    <section id="about" style={styles.section}>
      <h2 style={styles.heading}>About Me</h2>

      <div style={styles.container}>
        
        {/* IMAGE LEFT / OR TOP IN MOBILE */}
        <div style={styles.imgContainer}>
          <img src="/profile.jpeg" style={styles.img} alt="Mounika" />
        </div>

        {/* TEXT */}
        <div style={styles.textBox}>
          <p>
            Hi, I’m <span className={styles.highlight}>Mounika</span>, a
            passionate <span style={styles.highlight}>Full Stack Developer</span>
            who loves building clean and modern web applications.
          </p>

          <p>
            MCA Graduate with <span style={styles.highlight}>77.4%</span> and completed my internship at
            <span style={styles.highlight}> XCEL Corp</span> where I worked on
            real-world MERN and Django projects.
          </p>

          <p>
            <span style={styles.highlight}>Skills:</span> HTML, CSS, JavaScript,
            React.js, Node.js, Express.js, MongoDB, Django, Python,
            PostgreSQL, Git, GitHub, Postman.
          </p>

          <a
            href="/Mounika_M_Resume.pdf"
            download
            style={styles.resumeBtn}
          >
            ⬇ Download Resume
          </a>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
