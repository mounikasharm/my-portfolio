import React, { useEffect, useState } from "react";

export default function AboutSection() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const styles = {
    section: {
      padding: "100px 20px",
      background: "#0b0c10",
      color: "white",
      overflow: "hidden",
    },

    container: {
      maxWidth: "1150px",
      margin: "0 auto",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "60px",
      opacity: 0,
      animation: "fadeIn 1.3s ease forwards",
    },

    mobile: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
      gap: "35px",
      opacity: 0,
      animation: "fadeIn 1.3s ease forwards",
    },

    /* ⭐ UPDATED — MOBILE OPTIMIZED IMAGE BOX */
    leftImageBox: {
      width: isMobile ? "200px" : "280px",
      height: isMobile ? "230px" : "330px",
      borderRadius: "18px",
      padding: "6px",
      background: "linear-gradient(135deg, #4cbfff, #b36bff)",
      boxShadow: "0 0 20px rgba(105,85,255,0.35)",
      animation: "floatUpDown 3s ease-in-out infinite",
    },

    /* ⭐ UPDATED — MOBILE OPTIMIZED IMAGE */
    profileImage: {
      width: "100%",
      height: "100%",
      borderRadius: "14px",
      objectFit: "cover",
    },

    heading: {
      fontSize: "42px",
      fontWeight: "800",
      marginBottom: "20px",
      background: "linear-gradient(90deg, #7ef0ff, #ba7bff)",
      WebkitBackgroundClip: "text",
      color: "transparent",
    },

    textBlock: {
      fontSize: "17px",
      lineHeight: "1.7",
      color: "#d9e7ff",
      marginBottom: "16px",
      animation: "fadeSlide 1.2s ease",
    },

    bullet: {
      color: "#8cd1ff",
      fontWeight: 700,
    },

    resumeButton: {
      marginTop: "25px",
      padding: "14px 32px",
      fontSize: "17px",
      fontWeight: 700,
      borderRadius: "35px",
      textDecoration: "none",
      color: "white",
      background: "linear-gradient(90deg, #4b6bfb, #8a4dfc)",
      display: "inline-block",
      boxShadow: "0 0 22px rgba(120,80,255,0.5)",
      transition: "0.3s",
    },

    keyframes: `
      @keyframes fadeIn {
        from { opacity: 0; transform: translateY(40px); }
        to { opacity: 1; transform: translateY(0); }
      }
      @keyframes fadeSlide {
        from { opacity: 0; transform: translateX(40px); }
        to { opacity: 1; transform: translateX(0); }
      }
      @keyframes floatUpDown {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-10px); }
      }
    `,
  };

  return (
    <>
      <style>{styles.keyframes}</style>

      <section id="about" style={styles.section}>
        <div style={isMobile ? styles.mobile : styles.container}>

          {/* LEFT IMAGE */}
          <div style={styles.leftImageBox}>
            <img src="/profile.jpeg" alt="Mounika" style={styles.profileImage} />
          </div>

          {/* RIGHT TEXT */}
          <div>
            <h2 style={styles.heading}>About Me</h2>

            <p style={styles.textBlock}>
              Hello! I’m <strong>Mounika</strong>, a passionate
              <span style={styles.bullet}> Full Stack Developer</span> skilled in
              building clean, responsive and functional web applications.
            </p>

            <p style={styles.textBlock}>
              I completed my <span style={styles.bullet}>MCA with 77.4%</span> and have
              hands-on experience from my internship at
              <span style={styles.bullet}> XCEL Corp</span>, where I worked with
              React.js, Bootstrap, Node.js and MongoDB.
            </p>

            <p style={styles.textBlock}>
              <span style={styles.bullet}>Technical Skills:</span> HTML, CSS, JavaScript,
              React.js, Node.js, Django, Python, MongoDB, PostgreSQL, Git, GitHub,
              Bootstrap, SQL.
            </p>

            <p style={styles.textBlock}>
              <span style={styles.bullet}>Projects:</span> BookEcho (Django),
              Village Community Hub (MERN), E-commerce Site (Java & SQL),
              Banking System (PHP), Organic Web Store (PHP & SQL).
            </p>

            <p style={styles.textBlock}>
              I love transforming ideas into real working applications and constantly
              growing my development skills.
            </p>

            <a href="/Mounika_M_Resume.pdf" download style={styles.resumeButton}>
              ⬇ Download Resume e
            </a>
          </div>

        </div>
      </section>
    </>
  );
}
