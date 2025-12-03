import React, { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);

  const styles = {
    nav: {
      width: "100%",
      padding: "20px 25px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      position: "fixed",
      top: 0,
      background: "transparent",
      zIndex: 1000,
    },
    logo: {
      fontSize: "22px",
      fontWeight: "600",
      color: "#00A8FF",
    },
    navLinks: {
      display: "flex",
      gap: "25px",
    },
    link: {
      color: "white",
      textDecoration: "none",
      fontSize: "15px",
    },

    /* Hamburger */
    hamburger: {
      display: "none",
      flexDirection: "column",
      gap: "5px",
      cursor: "pointer",
    },
    bar: {
      width: "25px",
      height: "3px",
      background: "white",
    },

    /* Mobile Menu */
    mobileMenu: {
      position: "absolute",
      top: "70px",
      right: "20px",
      background: "#111",
      padding: "15px",
      borderRadius: "8px",
      width: "160px",
      display: open ? "flex" : "none",
      flexDirection: "column",
      gap: "12px",
    },

    /* MEDIA QUERY USING JAVASCRIPT */
    hideOnMobile: {
      display: window.innerWidth <= 768 ? "none" : "flex",
      gap: "25px",
    },
    showHamburger: {
      display: window.innerWidth <= 768 ? "flex" : "none",
      flexDirection: "column",
      gap: "5px",
      cursor: "pointer",
    },
  };

  return (
    <nav style={styles.nav}>
      <h2 style={styles.logo}>Mounika M</h2>

      {/* Desktop Menu */}
      <ul style={styles.hideOnMobile}>
        <li><a style={styles.link} href="#home">Home</a></li>
        <li><a style={styles.link} href="#about">About</a></li>
        <li><a style={styles.link} href="#projects">Projects</a></li>
        <li><a style={styles.link} href="#certificates">Certificates</a></li>
        <li><a style={styles.link} href="#contact">Contact</a></li>
      </ul>

      {/* Hamburger */}
      <div style={styles.showHamburger} onClick={() => setOpen(!open)}>
        <span style={styles.bar}></span>
        <span style={styles.bar}></span>
        <span style={styles.bar}></span>
      </div>

      {/* Mobile Menu */}
      <ul style={styles.mobileMenu}>
        <li><a style={styles.link} onClick={() => setOpen(false)} href="#home">Home</a></li>
        <li><a style={styles.link} onClick={() => setOpen(false)} href="#about">About</a></li>
        <li><a style={styles.link} onClick={() => setOpen(false)} href="#projects">Projects</a></li>
        <li><a style={styles.link} onClick={() => setOpen(false)} href="#certificates">Certificates</a></li>
        <li><a style={styles.link} onClick={() => setOpen(false)} href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
