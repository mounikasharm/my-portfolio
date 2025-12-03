import React, { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <h2 className="logo">Mounika M</h2>

      {/* Desktop Menu */}
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#certificates">Certificates</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      {/* Hamburger Icon */}
      <div className="hamburger" onClick={() => setOpen(!open)}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Mobile Menu */}
      <ul className={`mobile-menu ${open ? "open" : ""}`}>
        <li><a onClick={() => setOpen(false)} href="#home">Home</a></li>
        <li><a onClick={() => setOpen(false)} href="#about">About</a></li>
        <li><a onClick={() => setOpen(false)} href="#projects">Projects</a></li>
        <li><a onClick={() => setOpen(false)} href="#certificates">Certificates</a></li>
        <li><a onClick={() => setOpen(false)} href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
