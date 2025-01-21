import React, { useState, useEffect } from "react";
import "./Nunta.css";
import localVideo from "../video/FundalStudio2.mp4";
import NavBarRAW from "./NavBarRAW";
import Footer from '../LandingPage/Footer';
import Calendar from '../LandingPage/Calendar';
import PacheteStudio from '../PortofoliuRawProductionsFOTO/PacheteStudio';

// Import local images
import img1 from "../images/Studio/Studio (1).jpg";
import img2 from "../images/Studio/Studio (2).jpg";
import img3 from "../images/Studio/Studio (3).jpg";
import img4 from "../images/Studio/Studio (4).jpg";
import img5 from "../images/Studio/Studio (5).jpg";
import img6 from "../images/Studio/Studio (6).jpg";
import img7 from "../images/Studio/Studio (7).jpg";
import img8 from "../images/Studio/Studio (8).jpg";
import img9 from "../images/Studio/Studio (9).jpg";
import img10 from "../images/Studio/Studio (10).jpg";
import img11 from "../images/Studio/Studio (11).jpg";
import img12 from "../images/Studio/Studio (12).jpg";
import img13 from "../images/Studio/Studio (13).jpg";
import img14 from "../images/Studio/Studio (14).jpg";
import img15 from "../images/Studio/Studio (15).jpg";
import img16 from "../images/Studio/Studio (16).jpg";
import img17 from "../images/Studio/Studio (17).jpg";
import img18 from "../images/Studio/Studio (18).jpg";
import img19 from "../images/Studio/Studio (19).jpg";
import img20 from "../images/Studio/Studio (20).jpg";
import img21 from "../images/Studio/Studio (21).jpg";
import img22 from "../images/Studio/Studio (22).jpg";
import img23 from "../images/Studio/Studio (23).jpg";
import img24 from "../images/Studio/Studio (24).jpg";
import img25 from "../images/Studio/Studio (25).jpg";
import img26 from "../images/Studio/Studio (26).jpg";
import img27 from "../images/Studio/Studio (27).jpg";
import img28 from "../images/Studio/Studio (28).jpg";
import img29 from "../images/Studio/Studio (29).jpg";
import img30 from "../images/Studio/Studio (30).jpg";
import img31 from "../images/Studio/Studio (31).jpg";
import img32 from "../images/Studio/Studio (32).jpg";
import img33 from "../images/Studio/Studio (33).jpg";
import img34 from "../images/Studio/Studio (34).jpg";
import img35 from "../images/Studio/Studio (35).jpg";
import img36 from "../images/Studio/Studio (36).jpg";
import img37 from "../images/Studio/Studio (37).jpg";
import img38 from "../images/Studio/Studio (38).jpg";
import img39 from "../images/Studio/Studio (39).jpg";
import img40 from "../images/Studio/Studio (40).jpg";
import img41 from "../images/Studio/Studio (41).jpg";
import img42 from "../images/Studio/Studio (42).jpg";
import img43 from "../images/Studio/Studio (43).jpg";
import img44 from "../images/Studio/Studio (44).jpg";
import img45 from "../images/Studio/Studio (45).jpg";
import img46 from "../images/Studio/Studio (46).jpg";
import img47 from "../images/Studio/Studio (47).jpg";
import img48 from "../images/Studio/Studio (48).jpg";
import img49 from "../images/Studio/Studio (49).jpg";
import img50 from "../images/Studio/Studio (50).jpg";
import img51 from "../images/Studio/Studio (51).jpg";
import img52 from "../images/Studio/Studio (52).jpg";
import img53 from "../images/Studio/Studio (53).jpg";
import img54 from "../images/Studio/Studio (54).jpg";
import img55 from "../images/Studio/Studio (55).jpg";
import img56 from "../images/Studio/Studio (56).jpg";
import img57 from "../images/Studio/Studio (57).jpg";
import img58 from "../images/Studio/Studio (58).jpg";
import img59 from "../images/Studio/Studio (59).jpg";
import img60 from "../images/Studio/Studio (60).jpg";
import img61 from "../images/Studio/Studio (61).jpg";
import img62 from "../images/Studio/Studio (62).jpg";
import img63 from "../images/Studio/Studio (63).jpg";
import img64 from "../images/Studio/Studio (64).jpg";
import img65 from "../images/Studio/Studio (65).jpg";
import img66 from "../images/Studio/Studio (66).jpg";
import img67 from "../images/Studio/Studio (67).jpg";
import img68 from "../images/Studio/Studio (68).jpg";
import img69 from "../images/Studio/Studio (69).jpg";
import img70 from "../images/Studio/Studio (70).jpg";
import img71 from "../images/Studio/Studio (71).jpg";
import img72 from "../images/Studio/Studio (72).jpg";
import img73 from "../images/Studio/Studio (73).jpg";
import img74 from "../images/Studio/Studio (74).jpg";
import img75 from "../images/Studio/Studio (75).jpg";
import img76 from "../images/Studio/Studio (76).jpg";
import img77 from "../images/Studio/Studio (77).jpg";

// Array with local images
const images = [
  img1, img2, img3, img4, img5, img6, img7, img8,
  img9, img10, img11, img12, img13, img14, img15, img16,
  img17, img18, img19, img20, img21, img22, img23, img24,
  img25, img26, img27, img28, img29, img30, img31, img32,
  img33, img34, img35, img36, img37, img38, img39, img40,
  img41, img42, img43, img44, img45, img46, img47, img48,
  img49, img50, img51, img52, img53, img54, img55, img56,
  img57, img58, img59, img60, img61, img62, img63, img64,
  img65, img66, img67, img68, img69, img70, img71, img72,
  img73, img74, img75, img76, img77,
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
          <h2 className="portfolio-title">STUDIO</h2>
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
        <PacheteStudio />
      </div>
      
      <Calendar/>
      <Footer />
    </>
  );
};

export default Portfolio;