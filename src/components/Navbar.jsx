import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

function Navbar() {
  const [open, setOpen] = useState(false);

  const navStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "16px 22px",
    background: "rgba(0,0,0,0.55)",
    backdropFilter: "blur(8px)",
    position: "sticky",
    top: 0,
    zIndex: 2000,
    borderBottom: "1px solid rgba(255,255,255,0.05)",
  };

  const linkStyle = {
    color: "white",
    textDecoration: "none",
    fontSize: "16px",
    fontWeight: 600,
    letterSpacing: "0.5px",
  };

  return (
    <nav style={navStyle}>
      {/* LOGO */}
      <h2
        style={{
          color: "white",
          fontWeight: 800,
          fontSize: "24px",
          letterSpacing: "1px",
        }}
      >
        Mounika
      </h2>

      {/* DESKTOP MENU */}
      <div
        className="desktop-menu"
        style={{ display: "flex", gap: "32px", alignItems: "center" }}
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
          /* Mobile menu container */
          .mobile-menu {
            position: absolute;
            top: 64px;
            right: 16px;
            background: rgba(10,10,10,0.95);
            width: 78%;
            padding: 22px 22px;
            border-radius: 12px;
            display: flex;
            flex-direction: column;
            gap: 18px;
            border: 1px solid rgba(255,255,255,0.07);
          }

          /* Animation */
          @keyframes slideDown {
            0% { opacity: 0; transform: translateY(-8px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          .animate-slide {
            animation: slideDown 0.28s ease-out;
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
              font-size: 20px !important;
            }

            nav {
              padding: 12px 18px !important;
            }
          }
        `}
      </style>
    </nav>
  );
}

export default Navbar;
