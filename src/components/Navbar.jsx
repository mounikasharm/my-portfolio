function Navbar() {
  const navStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px 45px",
    background: "linear-gradient(180deg, #020202, #090909, #050505)",   // SAME AS HOME BG
    borderBottom: "1px solid rgba(255,255,255,0.08)",
    position: "sticky",
    top: 0,
    zIndex: 1500,
    animation: "slideDown 0.9s ease",
  };

  const logoStyle = {
    color: "#9ad8ff",
    fontSize: "26px",
    fontWeight: 800,
    letterSpacing: "1px",
    cursor: "pointer",
    textShadow: "0 0 18px rgba(0,234,255,0.4)",
    transition: "0.3s ease",
  };

  const linkStyle = {
    position: "relative",
    color: "#dff6ff",
    textDecoration: "none",
    fontSize: "16px",
    fontWeight: 600,
    padding: "8px 14px",
    borderRadius: "10px",
    transition: "0.3s ease",
  };

  return (
    <nav style={navStyle}>
      <h2
        style={logoStyle}
        onMouseEnter={(e) => (e.target.style.transform = "scale(1.08)")}
        onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
      >
        Mounika M
      </h2>

      <div style={{ display: "flex", gap: "22px" }}>
        {["Home", "About", "Projects", "Certificates", "Contact"].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            style={linkStyle}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "#ffffff";
              e.currentTarget.style.transform = "translateY(-4px)";
              e.currentTarget.style.setProperty("--underlineWidth", "100%");
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "#dff6ff";
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.setProperty("--underlineWidth", "0%");
            }}
          >
            {item}

            <span
              style={{
                content: "",
                position: "absolute",
                bottom: 0,
                left: 0,
                height: "3px",
                width: "var(--underlineWidth, 0%)",
                background: "linear-gradient(90deg,#00eaff,#ff4dff,#00eaff)",
                borderRadius: "10px",
                transition: "width .35s ease",
                boxShadow: "0 0 8px #00eaff88",
              }}
            ></span>
          </a>
        ))}
      </div>

      <style>
        {`
          @keyframes slideDown {
            0% { opacity: 0; transform: translateY(-40px); }
            100% { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>
    </nav>
  );
}

export default Navbar;
