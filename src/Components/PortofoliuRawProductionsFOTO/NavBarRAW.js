import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavBarRAW.css";

function NavBarRAW() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handlePacheteClick = (e) => {
    e.preventDefault();
    const pacheteSection = document.getElementById('pachete');
    if (pacheteSection) {
      pacheteSection.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="navbar-raw">
      <div className="navbar-logo">
        <Link to="/">RAWProductions</Link>
      </div>
      <nav className={`navbar-links ${isMenuOpen ? "active" : ""}`}>
        <ul>
          <li>
            <Link to="/Nunta">Nunta</Link>
          </li>
          <li>
            <Link to="/Botez">Botez</Link>
          </li>
          <li>
            <Link to="/Majorat">Majorat</Link>
          </li>
          <li>
            <Link to="/Studio">Studio</Link>
          </li>
          <li>
  <a href="#" onClick={handlePacheteClick} className="nav-link">
    Contact
  </a>
</li>
        </ul>
      </nav>
      <div className="navbar-social">
        <a href="https://www.instagram.com/rawproductions.ro?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="https://www.facebook.com/profile.php?id=61564653154533" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-facebook"></i>
        </a>
        <a href="https://maps.app.goo.gl/ZCWxpjDEMsXhSMUL6?g_st=com.google.maps.preview.copy" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-google"></i>
        </a>
        <a href="https://www.tiktok.com/@rawproductions_ro?is_from_webapp=1&sender_device=pc" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-tiktok"></i>
        </a>
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        <i className="fas fa-bars"></i>
      </div>
    </header>
  );
}

export default NavBarRAW;