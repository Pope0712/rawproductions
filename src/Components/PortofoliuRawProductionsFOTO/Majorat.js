import React, { useState, useEffect } from "react";
import "./Nunta.css";
import localVideo from "../video/FundalMajorat.mp4";
import NavBarRAW from "./NavBarRAW";
import Footer from '../LandingPage/Footer';
import Calendar from '../LandingPage/Calendar';
import PacheteMajorat from '../PortofoliuRawProductionsFOTO/PacheteMajorat';

// Import local images
// Import local images
import img1 from "../images/Majorat/Majorat (1).jpg";
import img2 from "../images/Majorat/Majorat (2).jpg";
import img3 from "../images/Majorat/Majorat (3).jpg";
import img4 from "../images/Majorat/Majorat (4).jpg";
import img5 from "../images/Majorat/Majorat (5).jpg";
import img6 from "../images/Majorat/Majorat (6).jpg";
import img7 from "../images/Majorat/Majorat (7).jpg";
import img8 from "../images/Majorat/Majorat (8).jpg";
import img9 from "../images/Majorat/Majorat (9).jpg";
import img10 from "../images/Majorat/Majorat (10).jpg";
import img11 from "../images/Majorat/Majorat (11).jpg";
import img12 from "../images/Majorat/Majorat (12).jpg";
import img13 from "../images/Majorat/Majorat (13).jpg";
import img14 from "../images/Majorat/Majorat (14).jpg";
import img15 from "../images/Majorat/Majorat (15).jpg";
import img16 from "../images/Majorat/Majorat (16).jpg";
import img17 from "../images/Majorat/Majorat (17).jpg";
import img18 from "../images/Majorat/Majorat (18).jpg";
import img19 from "../images/Majorat/Majorat (19).jpg";
import img20 from "../images/Majorat/Majorat (20).jpg";
import img21 from "../images/Majorat/Majorat (21).jpg";
import img22 from "../images/Majorat/Majorat (22).jpg";
import img23 from "../images/Majorat/Majorat (23).jpg";
import img24 from "../images/Majorat/Majorat (24).jpg";
import img25 from "../images/Majorat/Majorat (25).jpg";
import img26 from "../images/Majorat/Majorat (26).jpg";
import img27 from "../images/Majorat/Majorat (27).jpg";
import img28 from "../images/Majorat/Majorat (28).jpg";
import img29 from "../images/Majorat/Majorat (29).jpg";
import img30 from "../images/Majorat/Majorat (30).jpg";
import img31 from "../images/Majorat/Majorat (31).jpg";
import img32 from "../images/Majorat/Majorat (32).jpg";
import img33 from "../images/Majorat/Majorat (33).jpg";
import img34 from "../images/Majorat/Majorat (34).jpg";
import img35 from "../images/Majorat/Majorat (35).jpg";
import img36 from "../images/Majorat/Majorat (36).jpg";
import img37 from "../images/Majorat/Majorat (37).jpg";
import img38 from "../images/Majorat/Majorat (38).jpg";
import img39 from "../images/Majorat/Majorat (39).jpg";
import img40 from "../images/Majorat/Majorat (40).jpg";
import img41 from "../images/Majorat/Majorat (41).jpg";
import img42 from "../images/Majorat/Majorat (42).jpg";
import img43 from "../images/Majorat/Majorat (43).jpg";
import img44 from "../images/Majorat/Majorat (44).jpg";
import img45 from "../images/Majorat/Majorat (45).jpg";
import img46 from "../images/Majorat/Majorat (46).jpg";
import img47 from "../images/Majorat/Majorat (47).jpg";
import img48 from "../images/Majorat/Majorat (48).jpg";
import img49 from "../images/Majorat/Majorat (49).jpg";
import img50 from "../images/Majorat/Majorat (50).jpg";
import img51 from "../images/Majorat/Majorat (51).jpg";
import img52 from "../images/Majorat/Majorat (52).jpg";
import img53 from "../images/Majorat/Majorat (53).jpg";
import img54 from "../images/Majorat/Majorat (54).jpg";
import img55 from "../images/Majorat/Majorat (55).jpg";

// Array with local images
const images = [
  img1, img2, img3, img4, img5, img6, img7, img8,
  img9, img10, img11, img12, img13, img14, img15, img16,
  img17, img18, img19, img20, img21, img22, img23, img24,
  img25, img26, img27, img28, img29, img30, img31, img32,
  img33, img34, img35, img36, img37, img38, img39, img40,
  img41, img42, img43, img44, img45, img46, img47, img48,
  img49, img50, img51, img52, img53, img54, img55,
];


const Portfolio = () => {
  const [currentIndex, setCurrentIndex] = useState(null);

  useEffect(() => {
    // Verificăm dacă trebuie să facem scroll la pachete
    const shouldScrollToPachete = sessionStorage.getItem('scrollToPachete') === 'true';
    if (shouldScrollToPachete) {
      const pacheteSection = document.getElementById('pachete');
      if (pacheteSection) {
        pacheteSection.scrollIntoView({ behavior: 'smooth' });
      }
      sessionStorage.removeItem('scrollToPachete');
    }

    // Verificăm și hash-ul din URL
    if (window.location.hash === '#pachete') {
      const pacheteSection = document.getElementById('pachete');
      if (pacheteSection) {
        pacheteSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

  const openLightbox = (index) => {
    setCurrentIndex(index);
  };

  const closeLightbox = () => {
    setCurrentIndex(null);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextImage = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <>
      <NavBarRAW />
      <section className="portfolio">
        {/* Background Video */}
        <div className="video-container1">
          <video autoPlay loop muted playsInline className="narrow-video">
            <source src={localVideo} type="video/mp4" />
            Your browser does not support the video element.
          </video>
          
          {/* Title */}
          <h2 className="portfolio-title">MAJORAT</h2>
        </div>

        {/* Image Grid */}
        <div className="portfolio-grid">
          {images.map((image, index) => (
            <div 
              key={index} 
              className="portfolio-item" 
              onClick={() => openLightbox(index)}
            >
              <img 
                src={image} 
                alt={`Portfolio Image ${index + 1}`} 
              />
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {currentIndex !== null && (
          <div className="lightbox">
            <button 
              className="lightbox-close" 
              onClick={closeLightbox}
            >
              &times;
            </button>
            
            <button 
              className="lightbox-prev" 
              onClick={prevImage}
            >
              &#8592;
            </button>
            
            <img 
              src={images[currentIndex]} 
              alt={`Portfolio Image ${currentIndex + 1}`} 
              className="lightbox-image" 
            />
            
            <button 
              className="lightbox-next" 
              onClick={nextImage}
            >
              &#8594;
            </button>
          </div>
        )}
      </section>
      
      {/* Secțiunea Pachete cu ID pentru scroll */}
      <div id="pachete">
        <PacheteMajorat />
      </div>
      
      <Calendar/>
      <Footer />
    </>
  );
};

export default Portfolio;