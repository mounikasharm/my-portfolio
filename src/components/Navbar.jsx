import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

function Navbar() {
  const [open, setOpen] = useState(false);

  const navStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px 45px",
    background: "linear-gradient(180deg, #020202, #090909, #050505)",
    position: "sticky",
    top: 0,
    zIndex: 1500,
    borderBottom: "1px solid rgba(255,255,255,0.1)",
  };

  const linkStyle = {
    color: "white",
    textDecoration: "none",
    fontSize: "16px",
    fontWeight: 600,
    padding: "8px 14px",
  };

  return (
    <nav style={navStyle}>

      {/* LOGO */}
      <h2 style={{ color: "#9ad8ff", fontWeight: 800, fontSize: "26px" }}>
        Mounika M m
      </h2>

      {/* DESKTOP MENU */}
      <div className="desktop-menu" style={{ display: "flex", gap: "22px" }}>
        {["Home", "About", "Projects", "Certificates", "Contact"].map((item) => (
          <a key={item} href={`#${item.toLowerCase()}`} style={linkStyle}>
            {item}
          </a>
        ))}
      </div>

      {/* HAMBURGER ICON */}
      <GiHamburgerMenu
        className="mobile-icon"
        size={28}
        color="white"
        style={{ display: "none", cursor: "pointer" }}
        onClick={() => setOpen(!open)}
      />

      {/* MOBILE DROPDOWN */}
      {open && (
        <div className="mobile-menu">
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
          /* Mobile menu */
          .mobile-menu {
            position: absolute;
            top: 70px;
            right: 20px;
            background: #111;
            padding: 18px;
            border-radius: 10px;
            display: flex;
            flex-direction: column;
            gap: 12px;
            border: 1px solid rgba(255,255,255,0.08);
          }

          /* MOBILE RESPONSIVE */
          @media (max-width: 768px) {
            .desktop-menu {
              display: none !important; /* hide big menu */
            }
            .mobile-icon {
              display: block !important;
            }
            nav {
              padding: 14px 20px !important;
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
