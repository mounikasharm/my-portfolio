import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

function Navbar() {
  const [open, setOpen] = useState(false);

  const navStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "16px 24px",
    background: "rgba(0,0,0,0.45)",
    backdropFilter: "blur(10px)",
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    zIndex: 3000,
    borderBottom: "1px solid rgba(255,255,255,0.08)",
  };

  const linkStyle = {
    color: "white",
    textDecoration: "none",
    fontSize: "17px",
    fontWeight: 600,
    letterSpacing: "0.6px",
    padding: "6px 0",
  };

  return (
    <nav style={navStyle}>
      {/* LOGO */}
      <h2
        style={{
          color: "white",
          fontWeight: 800,
          fontSize: "26px",
          letterSpacing: "1px",
          cursor: "pointer",
        }}
      >
        Mounika
      </h2>

      {/* DESKTOP MENU */}
      <div
        className="desktop-menu"
        style={{ display: "flex", gap: "36px", alignItems: "center" }}
      >
        {["Home", "About", "Projects", "Certificates", "Contact"].map((item) => (
          <a key={item} href={`#${item.toLowerCase()}`} style={linkStyle}>
            {item}
          </a>
        ))}
      </div>

      {/* HAMBURGER */}
      <GiHamburgerMenu
        className="mobile-icon"
        size={30}
        color="white"
        style={{ display: "none", cursor: "pointer" }}
        onClick={() => setOpen(!open)}
      />

      {/* MOBILE MENU */}
      {open && (
        <div className="mobile-menu animate-slide">
          {["Home", "About", "Projects", "Certificates", "Contact"].map(
            (item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                style={linkStyle}
                onClick={() => setOpen(false)}
              >
                {item}
              </a>
            )
          )}
        </div>
      )}

      <style>
        {`
          /* Mobile menu container */
          .mobile-menu {
            position: fixed;
            top: 70px;
            right: 16px;
            background: rgba(15,15,15,0.95);
            width: 82%;
            padding: 26px 26px;
            border-radius: 14px;
            display: flex;
            flex-direction: column;
            gap: 20px;
            border: 1px solid rgba(255,255,255,0.08);
            backdrop-filter: blur(12px);
            box-shadow: 0 8px 25px rgba(0,0,0,0.5);
          }

          /* Animation */
          @keyframes slideDown {
            0% { opacity: 0; transform: translateY(-10px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          .animate-slide {
            animation: slideDown 0.3s ease-out;
          }

          /* MOBILE RESPONSIVE */
          @media (max-width: 768px) {
            .desktop-menu {
              display: none !important;
            }
            .mobile-icon {
              display: block !important;
            }

            nav h2 {
              font-size: 22px !important;
            }

            nav {
              padding: 14px 20px !important;
            }
          }
        `}
      </style>
    </nav>
  );
}

export default Navbar;
