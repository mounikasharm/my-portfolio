import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="nav">
        <h2 className="logo">Mounika</h2>

        {/* DESKTOP MENU */}
        <div className="desktop-menu">
          {["Home", "About", "Projects", "Certificates", "Contact"].map((i) => (
            <a key={i} href={`#${i.toLowerCase()}`} className="nav-link">
              {i}
            </a>
          ))}
        </div>

        {/* HAMBURGER */}
        <GiHamburgerMenu
          size={28}
          className="mobile-icon"
          onClick={() => setOpen(!open)}
        />
      </nav>

      {/* MOBILE MENU */}
      <div className={`mobile-menu ${open ? "open" : ""}`}>
        {["Home", "About", "Projects", "Certificates", "Contact"].map((i) => (
          <a
            key={i}
            href={`#${i.toLowerCase()}`}
            className="mobile-link"
            onClick={() => setOpen(false)}
          >
            {i}
          </a>
        ))}
      </div>

      <style>{`
        /* NAV STYLES */
        .nav {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          height: 58px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 10px;
          background: rgba(0,0,0,0.55);
          backdrop-filter: blur(12px);
          border-bottom: 1px solid rgba(255,255,255,0.1);
          z-index: 9999;
          transition: all 0.3s ease;
        }

        .logo {
          color: #fff;
          font-size: 20px;
          font-weight: 700;
          letter-spacing: 1px;
        }

        /* DESKTOP LINKS */
        .nav-link {
          color: #fff;
          text-decoration: none;
          font-size: 16px;
          font-weight: 600;
          padding: 6px 10px;
          transition: 0.3s ease;
          position: relative;
        }

        .nav-link:hover {
          color: #ffcc66;
        }

        /* underline hover */
        .nav-link::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: -2px;
          width: 0%;
          height: 2px;
          background: #ffcc66;
          transition: 0.3s ease;
        }

        .nav-link:hover::after {
          width: 100%;
        }

        /* MOBILE ICON */
        .mobile-icon {
          color: #fff;
          display: none;
          cursor: pointer;
        }

        /* MOBILE MENU */
        .mobile-menu {
          position: fixed;
          top: 58px;
          left: 0;
          right: 0;
          height: 0;
          overflow: hidden;
          background: rgba(0,0,0,0.95);
          display: flex;
          flex-direction: column;
          gap: 18px;
          padding-left: 0;
          transition: height 0.4s ease, padding 0.3s ease;
          z-index: 9998;
        }

        .mobile-menu.open {
          height: 260px;
          padding: 20px;
        }

        .mobile-link {
          color: #fff;
          font-size: 18px;
          text-decoration: none;
          font-weight: 600;
          text-align: center;
          transition: 0.3s ease;
        }

        .mobile-link:hover {
          color: #ffcc66;
        }

        /* RESPONSIVE */
        @media (max-width: 768px) {
          .desktop-menu {
            display: none;
          }

          .mobile-icon {
            display: block;
          }

          .nav {
            padding: 0 12px;
          }
        }
      `}</style>
    </>
  );
}

export default Navbar;
