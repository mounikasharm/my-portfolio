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
        }, 900);
      }

      setTimeout(type, 120);
    };
    type();
  }, []);

  return (
    <section id="home" style={styles.section}>
      {/* Glow */}
      <div style={styles.glowTop}></div>
      <div style={styles.glowBottom}></div>

      <div style={styles.contentWrapper}>
        <h1 style={styles.title}>
          Hi, I'm{" "}
          <span
            style={{
              background: "linear-gradient(90deg,#4fd1ff,#bb61ff)",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            Mounika
          </span>
        </h1>

        <h2 ref={typingRef} style={styles.typing}></h2>

        <p style={styles.subtitle}>
          I build fast, responsive and modern web applications using the MERN
          stack.
        </p>

        <div style={styles.buttonRow}>
          <a href="#projects" style={styles.btnPrimary}>
            Projects
          </a>
          <a href="#contact" style={styles.btnOutline}>
            Hire Me
          </a>
        </div>
      </div>

      {/* Mobile Only Styling */}
      <style>
        {`
        @media (max-width: 768px) {
          #home {
            padding-top: 90px !important;
            padding-bottom: 70px !important;
          }

          #home h1 {
            font-size: 36px !important;
            line-height: 1.2 !important;
          }

          #home h2 {
            font-size: 18px !important;
          }

          #home p {
            font-size: 15px !important;
            padding: 0 10px !important;
          }

          .button-row a {
            font-size: 14px !important;
            padding: 9px 20px !important;
          }
        }
      `}
      </style>
    </section>
  );
}

const styles = {
  section: {
    minHeight: "100vh",
    background: "#000",
    color: "#fff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "0 22px",
    textAlign: "center",
    position: "relative",
    overflow: "hidden",
  },

  contentWrapper: {
    zIndex: 10,
    maxWidth: "500px",
    animation: "fadeUp 1.2s ease",
  },

  title: {
    fontSize: "40px",
    fontWeight: "800",
    marginBottom: "10px",
  },

  typing: {
    fontSize: "20px",
    minHeight: "26px",
    marginBottom: "18px",
    fontWeight: "600",
    background: "linear-gradient(90deg,#4fd1ff,#bb61ff)",
    WebkitBackgroundClip: "text",
    color: "transparent",
  },

  subtitle: {
    fontSize: "16px",
    lineHeight: "1.7",
    color: "#d8d8d8",
    marginBottom: "22px",
  },

  buttonRow: {
    display: "flex",
    justifyContent: "center",
    gap: "14px",
  },

  btnPrimary: {
    padding: "12px 28px",
    background: "linear-gradient(90deg,#4fd1ff,#bb61ff)",
    color: "#fff",
    fontWeight: "700",
    textDecoration: "none",
    borderRadius: "30px",
  },

  btnOutline: {
    padding: "12px 28px",
    borderRadius: "30px",
    border: "2px solid #4fd1ff",
    color: "#4fd1ff",
    fontWeight: "700",
    textDecoration: "none",
  },

  glowTop: {
    position: "absolute",
    top: "-90px",
    left: "-70px",
    width: "220px",
    height: "220px",
    background: "rgba(0, 200, 255, 0.25)",
    borderRadius: "50%",
    filter: "blur(90px)",
  },

  glowBottom: {
    position: "absolute",
    bottom: "-100px",
    right: "-70px",
    width: "240px",
    height: "240px",
    background: "rgba(255, 0, 130, 0.25)",
    borderRadius: "50%",
    filter: "blur(90px)",
  },
};

/* FadeUp Animation */
const styleSheet = document.createElement("style");
styleSheet.innerHTML = `
@keyframes fadeUp {
  0% { opacity: 0; transform: translateY(30px); }
  100% { opacity: 1; transform: translateY(0); }
}`;
document.head.appendChild(styleSheet);

export default Home;
