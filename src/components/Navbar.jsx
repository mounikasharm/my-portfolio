import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

function Navbar() {
  const [open, setOpen] = useState(false);

  const navStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "16px 22px",
    background: "rgba(0,0,0,0.7)",
    backdropFilter: "blur(6px)",
    position: "sticky",
    top: 0,
    zIndex: 2000,
  };

  const linkStyle = {
    color: "white",
    textDecoration: "none",
    fontSize: "16px",
    fontWeight: 600,
  };

  return (
    <nav style={navStyle}>
      {/* LOGO */}
      <h2 style={{ 
        color: "white",
        fontWeight: 800,
        fontSize: "24px",
        letterSpacing: "1px"
      }}>
        Mounika
      </h2>

      {/* DESKTOP MENU */}
      <div className="desktop-menu" style={{ display: "flex", gap: "28px" }}>
        {["Home", "About", "Projects", "Certificates", "Contact"].map((item) => (
          <a key={item} href={`#${item.toLowerCase()}`} style={linkStyle}>
            {item}
          </a>
        ))}
      </div>

      {/* HAMBURGER */}
      <GiHamburgerMenu
        className="mobile-icon"
        size={28}
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
          /* Mobile dropdown */
          .mobile-menu {
            position: absolute;
            top: 62px;
            right: 16px;
            background: #0d0d0d;
            width: 70%;
            padding: 18px 20px;
            border-radius: 12px;
            display: flex;
            flex-direction: column;
            gap: 14px;
            border: 1px solid rgba(255,255,255,0.06);
          }

          /* Slide animation */
          @keyframes slideDown {
            0% { opacity: 0; transform: translateY(-10px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          .animate-slide {
            animation: slideDown 0.3s ease-out;
          }

          /* MOBILE VIEW */
          @media (max-width: 768px) {
            .desktop-menu {
              display: none !important;
            }
            .mobile-icon {
              display: block !important;
            }
            nav {
              padding: 14px 18px !important;
            }
            nav h2 {
              font-size: 20px !important;
            }
          }
        `}
      </style>
    </nav>
  );
}

export default Navbar;
