import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="footer-container">
      <div className="footer-image-container">
        <img 
          src='./images/52.jpg' 
          alt="background" 
          className="footer-background-image"
        />

        <div className="footer-text">
          <h2>Gata să programați <span>o întâlnire?</span></h2>
          <p>Contactați-ne astăzi pentru evenimentul dumneavoastră special.</p>
        </div>

        
      </div>

      <div className="footer-content">
      <div className="footer-logo">
          <img src='./images/logo.png' alt="RawProductions Logo" className="footer-logo-image" />
        </div>
        <div className="footer-section reach-to-us">
          <h3>Contactați-ne</h3>
          <p>1271 Gladstone Rd, Nassau, Bahamas</p>
          <p>+40 745 531 340 / +40 787 714 597</p>
          <p>hello@autoworks.com</p>
          <p>www.rawproductions.ro</p>
        </div>

        <div className="footer-section opening-hours">
          <h3>Program de funcționare</h3>
          <p>Luni-Vineri: 08:00 - 22:00</p>
          <p>Sâmbătă-Duminică: 10:00 - 16:00</p>
        </div>

        <div className="footer-section quick-links">
          <h3>Link-uri rapide</h3>
          {/* Scroll links */}
          <p onClick={() => scrollToSection('SecondSection')} style={{cursor: 'pointer'}}>Servicii</p>
          <p onClick={() => scrollToSection('react-app__card')} style={{cursor: 'pointer'}}>Despre noi</p>
          <p onClick={() => scrollToSection('whyus-container')} style={{cursor: 'pointer'}}>De ce să ne alegeți pe noi?</p>
          
          
          
          {/* More scroll links */}
          <p onClick={() => scrollToSection('form-column')} style={{cursor: 'pointer'}}>Contact</p>
          <p onClick={() => scrollToSection('packages-container')} style={{cursor: 'pointer'}}>Pachete</p>
          <p onClick={() => scrollToSection('carousel')} style={{cursor: 'pointer'}}>Acasă</p>
        </div>

        <div className="footer-section newsletter">
          <h3>Abonați-vă la newsletter-ul nostru</h3>
          <p>Înscrieți-vă la newsletter-ul nostru pentru a primi promoții exclusive, noutăți și sfaturi direct în căsuța dumneavoastră de e-mail.</p>
          <input type="email" placeholder="Adresă de e-mail" className="email-input" />
          <button className="submit-button">Trimite</button>
        </div>
      </div>

      <div className="red-bara-bottom"></div>

      <div className="footer-bottom">
        <p>&copy; 2025 RAWProductions. Toate drepturile rezervate.</p>
      </div>
    </div>
  );
}

export default Footer;