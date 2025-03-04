import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Footer.css';

function Footer() {
  const location = useLocation();
  const navigate = useNavigate();

  // Definim lista cu toate ID-urile relevante
  const allIds = [
    'SecondSection',
    'react-app__card',
    'whyus-container',
    'form-column',
    'packages-container',
    'carousel',
  ];

  useEffect(() => {
    const hash = location.hash.replace('#', ''); // Obține hash-ul din URL
    const isValidSection = allIds.includes(hash); // Verificăm dacă hash-ul este valid

    if (isValidSection) {
      // Asigură-te că navigarea începe de sus
      window.scrollTo({ top: 0, behavior: 'auto' });

      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          const offset = 0; // Ajustează offset-ul dacă e necesar
          const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
          const offsetPosition = elementPosition + offset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth',
          });
        }
      }, 200); // Delay pentru a permite DOM-ului să fie complet încărcat
    }
  }, [location]);

  const handleNavigation = (path, sectionId, offset = 0) => {
    if (location.pathname === path) {
      // Dacă ești deja pe pagina respectivă, scrollează direct
      scrollToSection(sectionId, offset);
    } else {
      // Navighează către pagina dorită
      navigate(`${path}#${sectionId}`);
    }
  };

  const scrollToSection = (sectionId, offset = 0) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition + offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="footer-container">
      <div className="footer-image-container">
        <img
          src="./images/53.jpg"
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
          <img src="./images/logo.png" alt="RawProductions Logo" className="footer-logo-image" />
        </div>
        <div className="footer-section reach-to-us">
          <h3>Contactați-ne</h3>
          <p>Strada Culturii Nr.47 Vernesti, Buzau</p>
          <p>+40 745 531 340 / +40 787 714 597</p>
          <p>rawproductions.ro@gmail.com</p>
          <p>www.rawproductions.ro</p>
        </div>

        <div className="footer-section opening-hours">
          <h3>Program de funcționare</h3>
          <p>Luni-Vineri: 08:00 - 22:00</p>
          <p>Sâmbătă-Duminică: 10:00 - 16:00</p>
        </div>

        <div className="footer-section quick-links">
          <h3>Link-uri rapide</h3>
          <p
            onClick={() => handleNavigation('/', 'SecondSection', -100)}
            style={{ cursor: 'pointer' }}
          >
            Servicii
          </p>
          <p
            onClick={() => handleNavigation('/', 'react-app__card', -350)}
            style={{ cursor: 'pointer' }}
          >
            Despre noi
          </p>
          <p
            onClick={() => handleNavigation('/', 'whyus-container', -80)}
            style={{ cursor: 'pointer' }}
          >
            De ce să ne alegeți pe noi?
          </p>
          <p
            onClick={() => handleNavigation('/', 'form-column', -150)}
            style={{ cursor: 'pointer' }}
          >
            Contact
          </p>
          <p
            onClick={() => handleNavigation('/', 'packages-container', -90)}
            style={{ cursor: 'pointer' }}
          >
            Pachete
          </p>
          <p
            onClick={() => handleNavigation('/', 'carousel', -70)}
            style={{ cursor: 'pointer' }}
          >
            Acasă
          </p>
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
