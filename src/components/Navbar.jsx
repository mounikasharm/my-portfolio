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
    padding: "0 16px",
    background: "rgba(0,0,0,0.7)",
    backdropFilter: "blur(12px)",
    zIndex: 9999,
  };

  const linkStyle = {
    color: "#fff",
    textDecoration: "none",
    fontSize: "16px",
    fontWeight: 600,
    padding: "8px 0",
    display: "block",
    textAlign: "center",
  };

  return (
    <>
      <nav style={navStyle}>
        <h2 style={{ color: "white", fontSize: "22px", fontWeight: 700 }}>
          Mounika
        </h2>
        <div className="desktop-menu" style={{ display: "flex", gap: "24px" }}>
          {["Home", "About", "Projects", "Certificates", "Contact"].map((i) => (
            <a key={i} href={`#${i.toLowerCase()}`} style={linkStyle}>
              {i}
            </a>
          ))}
        </div>
        <GiHamburgerMenu
          className="mobile-icon"
          size={26}
          color="#fff"
          style={{ cursor: "pointer", display: "none" }}
          onClick={() => setOpen(!open)}
        />
      </nav>

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

      <style>{`
        body {
          margin: 0;
          padding-top: 60px; /* so content sits below navbar */
        }
        .mobile-menu {
          position: fixed;
          top: 60px;
          right: 0;
          left: 0;
          background: rgba(0,0,0,0.9);
          display: flex;
          flex-direction: column;
          gap: 16px;
          padding: 20px;
          z-index: 9998;
        }
        @media (max-width: 768px) {
          .desktop-menu { display: none !important; }
          .mobile-icon { display: block !important; }
        }
      `}</style>
    </>
  );
}

export default Navbar;
