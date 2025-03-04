import React, { useState, useEffect } from "react";
import "./Nunta.css";
import localVideo from "../video/FundalMajorat.mp4";
import NavBarRAW from "./NavBarRAW";
import Footer from '../LandingPage/Footer';
import Calendar from '../LandingPage/Calendar';
import PacheteMajorat from '../PortofoliuRawProductionsFOTO/PacheteMajorat';

// Import local images
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
import img56 from "../images/Majorat/Majorat (56).jpg";
import img57 from "../images/Majorat/Majorat (57).jpg";
import img58 from "../images/Majorat/Majorat (58).jpg";
import img59 from "../images/Majorat/Majorat (59).jpg";
import img60 from "../images/Majorat/Majorat (60).jpg";
import img61 from "../images/Majorat/Majorat (61).jpg";
import img62 from "../images/Majorat/Majorat (62).jpg";
import img63 from "../images/Majorat/Majorat (63).jpg";
import img64 from "../images/Majorat/Majorat (64).jpg";
import img65 from "../images/Majorat/Majorat (65).jpg";
import img66 from "../images/Majorat/Majorat (66).jpg";
import img67 from "../images/Majorat/Majorat (67).jpg";
import img68 from "../images/Majorat/Majorat (68).jpg";
import img69 from "../images/Majorat/Majorat (69).jpg";
import img70 from "../images/Majorat/Majorat (70).jpg";
import img71 from "../images/Majorat/Majorat (71).jpg";
import img72 from "../images/Majorat/Majorat (72).jpg";
import img73 from "../images/Majorat/Majorat (73).jpg";
import img74 from "../images/Majorat/Majorat (74).jpg";
import img75 from "../images/Majorat/Majorat (75).jpg";
import img76 from "../images/Majorat/Majorat (76).jpg";
import img77 from "../images/Majorat/Majorat (77).jpg";
import img78 from "../images/Majorat/Majorat (78).jpg";
import img79 from "../images/Majorat/Majorat (79).jpg";
import img80 from "../images/Majorat/Majorat (80).jpg";
import img81 from "../images/Majorat/Majorat (81).jpg";
import img82 from "../images/Majorat/Majorat (82).jpg";
import img83 from "../images/Majorat/Majorat (83).jpg";
import img84 from "../images/Majorat/Majorat (84).jpg";
import img85 from "../images/Majorat/Majorat (85).jpg";
import img86 from "../images/Majorat/Majorat (86).jpg";
import img87 from "../images/Majorat/Majorat (87).jpg";
import img88 from "../images/Majorat/Majorat (88).jpg";
import img89 from "../images/Majorat/Majorat (89).jpg";
import img90 from "../images/Majorat/Majorat (90).jpg";
import img91 from "../images/Majorat/Majorat (91).jpg";
import img92 from "../images/Majorat/Majorat (92).jpg";
import img93 from "../images/Majorat/Majorat (93).jpg";
import img94 from "../images/Majorat/Majorat (94).jpg";
import img95 from "../images/Majorat/Majorat (95).jpg";
import img96 from "../images/Majorat/Majorat (96).jpg";
import img97 from "../images/Majorat/Majorat (97).jpg";
import img98 from "../images/Majorat/Majorat (98).jpg";
import img99 from "../images/Majorat/Majorat (99).jpg";
import img100 from "../images/Majorat/Majorat (100).jpg";
import img101 from "../images/Majorat/Majorat (101).jpg";
import img102 from "../images/Majorat/Majorat (102).jpg";
import img103 from "../images/Majorat/Majorat (103).jpg";
import img104 from "../images/Majorat/Majorat (104).jpg";
import img105 from "../images/Majorat/Majorat (105).jpg";
import img106 from "../images/Majorat/Majorat (106).jpg";
import img107 from "../images/Majorat/Majorat (107).jpg";
import img108 from "../images/Majorat/Majorat (108).jpg";
import img109 from "../images/Majorat/Majorat (109).jpg";
import img110 from "../images/Majorat/Majorat (110).jpg";
import img111 from "../images/Majorat/Majorat (111).jpg";
import img112 from "../images/Majorat/Majorat (112).jpg";
import img113 from "../images/Majorat/Majorat (113).jpg";
import img114 from "../images/Majorat/Majorat (114).jpg";
import img115 from "../images/Majorat/Majorat (115).jpg";
import img116 from "../images/Majorat/Majorat (116).jpg";
import img117 from "../images/Majorat/Majorat (117).jpg";
import img118 from "../images/Majorat/Majorat (118).jpg";
import img119 from "../images/Majorat/Majorat (119).jpg";
import img120 from "../images/Majorat/Majorat (120).jpg";
import img121 from "../images/Majorat/Majorat (121).jpg";
import img122 from "../images/Majorat/Majorat (122).jpg";
import img123 from "../images/Majorat/Majorat (123).jpg";
import img124 from "../images/Majorat/Majorat (124).jpg";
import img125 from "../images/Majorat/Majorat (125).jpg";
import img126 from "../images/Majorat/Majorat (126).jpg";
import img127 from "../images/Majorat/Majorat (127).jpg";
import img128 from "../images/Majorat/Majorat (128).jpg";
import img129 from "../images/Majorat/Majorat (129).jpg";
import img130 from "../images/Majorat/Majorat (130).jpg";
import img131 from "../images/Majorat/Majorat (131).jpg";
import img132 from "../images/Majorat/Majorat (132).jpg";
import img133 from "../images/Majorat/Majorat (133).jpg";
import img134 from "../images/Majorat/Majorat (134).jpg";
import img135 from "../images/Majorat/Majorat (135).jpg";
import img136 from "../images/Majorat/Majorat (136).jpg";
import img137 from "../images/Majorat/Majorat (137).jpg";
import img138 from "../images/Majorat/Majorat (138).jpg";
import img139 from "../images/Majorat/Majorat (139).jpg";
import img140 from "../images/Majorat/Majorat (140).jpg";
import img141 from "../images/Majorat/Majorat (141).jpg";
import img142 from "../images/Majorat/Majorat (142).jpg";
import img143 from "../images/Majorat/Majorat (143).jpg";
import img144 from "../images/Majorat/Majorat (144).jpg";
import img145 from "../images/Majorat/Majorat (145).jpg";
import img146 from "../images/Majorat/Majorat (146).jpg";
import img147 from "../images/Majorat/Majorat (147).jpg";
import img148 from "../images/Majorat/Majorat (148).jpg";
import img149 from "../images/Majorat/Majorat (149).jpg";
import img150 from "../images/Majorat/Majorat (150).jpg";
import img151 from "../images/Majorat/Majorat (151).jpg";
import img152 from "../images/Majorat/Majorat (152).jpg";
import img153 from "../images/Majorat/Majorat (153).jpg";
import img154 from "../images/Majorat/Majorat (154).jpg";
import img155 from "../images/Majorat/Majorat (155).jpg";
import img156 from "../images/Majorat/Majorat (156).jpg";
import img157 from "../images/Majorat/Majorat (157).jpg";
import img158 from "../images/Majorat/Majorat (158).jpg";
import img159 from "../images/Majorat/Majorat (159).jpg";
import img160 from "../images/Majorat/Majorat (160).jpg";
import img161 from "../images/Majorat/Majorat (161).jpg";
import img162 from "../images/Majorat/Majorat (162).jpg";
import img163 from "../images/Majorat/Majorat (163).jpg";


// Array with local images
const images = [
  img1, img2, img3, img4, img5, img6, img7, img8, img9, img10,
  img11, img12, img13, img14, img15, img16, img17, img18, img19, img20,
  img21, img22, img23, img24, img25, img26, img27, img28, img29, img30,
  img31, img32, img33, img34, img35, img36, img37, img38, img39, img40,
  img41, img42, img43, img44, img45, img46, img47, img48, img49, img50,
  img51, img52, img53, img54, img55, img56, img57, img58, img59, img60,
  img61, img62, img63, img64, img65, img66, img67, img68, img69, img70,
  img71, img72, img73, img74, img75, img76, img77, img78, img79, img80,
  img81, img82, img83, img84, img85, img86, img87, img88, img89, img90,
  img91, img92, img93, img94, img95, img96, img97, img98, img99, img100,
  img101, img102, img103, img104, img105, img106, img107, img108, img109, img110,
  img111, img112, img113, img114, img115, img116, img117, img118, img119, img120,
  img121, img122, img123, img124, img125, img126, img127, img128, img129, img130,
  img131, img132, img133, img134, img135, img136, img137, img138, img139, img140,
  img141, img142, img143, img144, img145, img146, img147, img148, img149, img150,
  img151, img152, img153, img154, img155, img156, img157, img158, img159, img160,
  img161, img162, img163,
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