import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

function Navbar() {
  const [open, setOpen] = useState(false);

  const navStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    height: "60px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 14px",
    background: "rgba(0,0,0,0.6)",
    backdropFilter: "blur(12px)",
    zIndex: 9999,
  };

  const linkStyle = {
    color: "#fff",
    textDecoration: "none",
    fontSize: "16px",
    fontWeight: 600,
    padding: "8px 0",
    textAlign: "center",
    display: "block",
  };

  return (
    <>
      <nav style={navStyle}>
        <h2 style={{ color: "white", fontSize: "20px", fontWeight: "700" }}>
          Mounika
        </h2>

        {/* DESKTOP MENU */}
        <div className="desktop-menu" style={{ display: "flex", gap: "25px" }}>
          {["Home", "About", "Projects", "Certificates", "Contact"].map((i) => (
            <a key={i} href={`#${i.toLowerCase()}`} style={linkStyle}>
              {i}
            </a>
          ))}
        </div>

        {/* HAMBURGER ICON */}
        <GiHamburgerMenu
          className="mobile-icon"
          size={28}
          color="#fff"
          style={{ cursor: "pointer", display: "none" }}
          onClick={() => setOpen(!open)}
        />
      </nav>

      {/* MOBILE MENU */}
      {open && (
        <div className="mobile-menu">
          {["Home", "About", "Projects", "Certificates", "Contact"].map((i) => (
            <a
              key={i}
              href={`#${i.toLowerCase()}`}
              style={linkStyle}
              onClick={() => setOpen(false)}
            >
              {i}
            </a>
          ))}
        </div>
      )}

      {/* CSS */}
      <style>{`
        body {
          margin: 0;
          padding-top: 60px;
        }

        .mobile-menu {
          position: fixed;
          top: 60px;
          left: 0;
          right: 0;
          background: rgba(0,0,0,0.95);
          padding: 20px 0;
          display: flex;
          flex-direction: column;
          gap: 16px;
          z-index: 9998;
        }

        /* RESPONSIVE DESIGN */
        @media (max-width: 768px) {
          .desktop-menu {
            display: none !important;
          }
          .mobile-icon {
            display: block !important;
          }
        }
      `}</style>
    </>
  );
}

export default Navbar;
