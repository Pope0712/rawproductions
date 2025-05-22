import React, { useState, useEffect } from "react";
import "./Nunta.css";
import localVideo from "../video/FundalNunta.mp4";
import NavBarRAW from "./NavBarRAW";
import Footer from '../LandingPage/Footer';
import Calendar from '../LandingPage/Calendar';
import PacheteNunta from '../PortofoliuRawProductionsFOTO/PacheteNunta';

// Import local images
// Import local images
import img1 from "../images/Nunta/Nunta (1).jpg";
import img2 from "../images/Nunta/Nunta (2).jpg";
import img3 from "../images/Nunta/Nunta (3).jpg";
import img4 from "../images/Nunta/Nunta (4).jpg";
import img5 from "../images/Nunta/Nunta (5).jpg";
import img6 from "../images/Nunta/Nunta (6).jpg";
import img7 from "../images/Nunta/Nunta (7).jpg";
import img8 from "../images/Nunta/Nunta (8).jpg";
import img9 from "../images/Nunta/Nunta (9).jpg";
import img10 from "../images/Nunta/Nunta (10).jpg";
import img11 from "../images/Nunta/Nunta (11).jpg";
import img12 from "../images/Nunta/Nunta (12).jpg";
import img13 from "../images/Nunta/Nunta (13).jpg";
import img14 from "../images/Nunta/Nunta (14).jpg";
import img15 from "../images/Nunta/Nunta (15).jpg";
import img16 from "../images/Nunta/Nunta (16).jpg";
import img17 from "../images/Nunta/Nunta (17).jpg";
import img18 from "../images/Nunta/Nunta (18).jpg";
import img19 from "../images/Nunta/Nunta (19).jpg";
import img20 from "../images/Nunta/Nunta (20).jpg";
import img21 from "../images/Nunta/Nunta (21).jpg";
import img22 from "../images/Nunta/Nunta (22).jpg";
import img23 from "../images/Nunta/Nunta (23).jpg";
import img24 from "../images/Nunta/Nunta (24).jpg";
import img25 from "../images/Nunta/Nunta (25).jpg";
import img26 from "../images/Nunta/Nunta (26).jpg";
import img27 from "../images/Nunta/Nunta (27).jpg";
import img28 from "../images/Nunta/Nunta (28).jpg";
import img29 from "../images/Nunta/Nunta (29).jpg";
import img30 from "../images/Nunta/Nunta (30).jpg";
import img31 from "../images/Nunta/Nunta (31).jpg";
import img32 from "../images/Nunta/Nunta (32).jpg";
import img33 from "../images/Nunta/Nunta (33).jpg";
import img34 from "../images/Nunta/Nunta (34).jpg";
import img35 from "../images/Nunta/Nunta (35).jpg";
import img36 from "../images/Nunta/Nunta (36).jpg";
import img37 from "../images/Nunta/Nunta (37).jpg";
import img38 from "../images/Nunta/Nunta (38).jpg";
import img39 from "../images/Nunta/Nunta (39).jpg";
import img40 from "../images/Nunta/Nunta (40).jpg";
import img41 from "../images/Nunta/Nunta (41).jpg";
import img42 from "../images/Nunta/Nunta (42).jpg";
import img43 from "../images/Nunta/Nunta (43).jpg";
import img44 from "../images/Nunta/Nunta (44).jpg";
import img45 from "../images/Nunta/Nunta (45).jpg";
import img46 from "../images/Nunta/Nunta (46).jpg";
import img47 from "../images/Nunta/Nunta (47).jpg";
import img48 from "../images/Nunta/Nunta (48).jpg";
import img49 from "../images/Nunta/Nunta (49).jpg";
import img50 from "../images/Nunta/Nunta (50).jpg";
import img51 from "../images/Nunta/Nunta (51).jpg";
import img52 from "../images/Nunta/Nunta (52).jpg";
import img53 from "../images/Nunta/Nunta (53).jpg";
import img54 from "../images/Nunta/Nunta (54).jpg";
import img55 from "../images/Nunta/Nunta (55).jpg";
import img56 from "../images/Nunta/Nunta (56).jpg";
import img57 from "../images/Nunta/Nunta (57).jpg";
import img58 from "../images/Nunta/Nunta (58).jpg";
import img59 from "../images/Nunta/Nunta (59).jpg";
import img60 from "../images/Nunta/Nunta (60).jpg";
import img61 from "../images/Nunta/Nunta (61).jpg";
import img62 from "../images/Nunta/Nunta (62).jpg";
import img63 from "../images/Nunta/Nunta (63).jpg";
import img64 from "../images/Nunta/Nunta (64).jpg";
import img65 from "../images/Nunta/Nunta (65).jpg";
import img66 from "../images/Nunta/Nunta (66).jpg";
import img67 from "../images/Nunta/Nunta (67).jpg";
import img68 from "../images/Nunta/Nunta (68).jpg";
import img69 from "../images/Nunta/Nunta (69).jpg";
import img70 from "../images/Nunta/Nunta (70).jpg";
import img71 from "../images/Nunta/Nunta (71).jpg";
import img72 from "../images/Nunta/Nunta (72).jpg";
import img73 from "../images/Nunta/Nunta (73).jpg";
import img74 from "../images/Nunta/Nunta (74).jpg";
import img75 from "../images/Nunta/Nunta (75).jpg";
import img76 from "../images/Nunta/Nunta (76).jpg";
import img77 from "../images/Nunta/Nunta (77).jpg";
import img78 from "../images/Nunta/Nunta (78).jpg";
import img79 from "../images/Nunta/Nunta (79).jpg";
import img80 from "../images/Nunta/Nunta (80).jpg";
import img81 from "../images/Nunta/Nunta (81).jpg";
import img82 from "../images/Nunta/Nunta (82).jpg";
import img83 from "../images/Nunta/Nunta (83).jpg";
import img84 from "../images/Nunta/Nunta (84).jpg";
import img85 from "../images/Nunta/Nunta (85).jpg";
import img86 from "../images/Nunta/Nunta (86).jpg";
import img87 from "../images/Nunta/Nunta (87).jpg";
import img88 from "../images/Nunta/Nunta (88).jpg";
import img89 from "../images/Nunta/Nunta (89).jpg";
import img90 from "../images/Nunta/Nunta (90).jpg";
import img91 from "../images/Nunta/Nunta (91).jpg";
import img92 from "../images/Nunta/Nunta (92).jpg";
import img93 from "../images/Nunta/Nunta (93).jpg";
import img94 from "../images/Nunta/Nunta (94).jpg";
import img95 from "../images/Nunta/Nunta (95).jpg";
import img96 from "../images/Nunta/Nunta (96).jpg";
import img97 from "../images/Nunta/Nunta (97).jpg";
import img98 from "../images/Nunta/Nunta (98).jpg";
import img99 from "../images/Nunta/Nunta (99).jpg";
import img100 from "../images/Nunta/Nunta (100).jpg";
import img101 from "../images/Nunta/Nunta (101).jpg";
import img102 from "../images/Nunta/Nunta (102).jpg";
import img103 from "../images/Nunta/Nunta (103).jpg";
import img104 from "../images/Nunta/Nunta (104).jpg";
import img105 from "../images/Nunta/Nunta (105).jpg";
import img106 from "../images/Nunta/Nunta (106).jpg";
import img107 from "../images/Nunta/Nunta (107).jpg";
import img108 from "../images/Nunta/Nunta (108).jpg";
import img109 from "../images/Nunta/Nunta (109).jpg";
import img110 from "../images/Nunta/Nunta (110).jpg";
import img111 from "../images/Nunta/Nunta (111).jpg";
import img112 from "../images/Nunta/Nunta (112).jpg";
import img113 from "../images/Nunta/Nunta (113).jpg";
import img114 from "../images/Nunta/Nunta (114).jpg";
import img115 from "../images/Nunta/Nunta (115).jpg";
import img116 from "../images/Nunta/Nunta (116).jpg";
import img117 from "../images/Nunta/Nunta (117).jpg";
import img118 from "../images/Nunta/Nunta (118).jpg";
import img119 from "../images/Nunta/Nunta (119).jpg";
import img120 from "../images/Nunta/Nunta (120).jpg";
import img121 from "../images/Nunta/Nunta (121).jpg";
import img122 from "../images/Nunta/Nunta (122).jpg";
import img123 from "../images/Nunta/Nunta (123).jpg";
import img124 from "../images/Nunta/Nunta (124).jpg";
import img125 from "../images/Nunta/Nunta (125).jpg";
import img126 from "../images/Nunta/Nunta (126).jpg";
import img127 from "../images/Nunta/Nunta (127).jpg";
import img128 from "../images/Nunta/Nunta (128).jpg";
import img129 from "../images/Nunta/Nunta (129).jpg";
import img130 from "../images/Nunta/Nunta (130).jpg";
import img131 from "../images/Nunta/Nunta (131).jpg";
import img132 from "../images/Nunta/Nunta (132).jpg";
import img133 from "../images/Nunta/Nunta (133).jpg";
import img134 from "../images/Nunta/Nunta (134).jpg";
import img135 from "../images/Nunta/Nunta (135).jpg";
import img136 from "../images/Nunta/Nunta (136).jpg";
import img137 from "../images/Nunta/Nunta (137).jpg";
import img138 from "../images/Nunta/Nunta (138).jpg";
import img139 from "../images/Nunta/Nunta (139).jpg";
import img140 from "../images/Nunta/Nunta (140).jpg";
import img141 from "../images/Nunta/Nunta (141).jpg";
import img142 from "../images/Nunta/Nunta (142).jpg";
import img143 from "../images/Nunta/Nunta (143).jpg";
import img144 from "../images/Nunta/Nunta (144).jpg";
import img145 from "../images/Nunta/Nunta (145).jpg";
import img146 from "../images/Nunta/Nunta (146).jpg";
import img147 from "../images/Nunta/Nunta (147).jpg";
import img148 from "../images/Nunta/Nunta (148).jpg";
import img149 from "../images/Nunta/Nunta (149).jpg";
import img150 from "../images/Nunta/Nunta (150).jpg";
import img151 from "../images/Nunta/Nunta (151).jpg";
import img152 from "../images/Nunta/Nunta (152).jpg";
import img153 from "../images/Nunta/Nunta (153).jpg";
import img154 from "../images/Nunta/Nunta (154).jpg";
import img155 from "../images/Nunta/Nunta (155).jpg";
import img156 from "../images/Nunta/Nunta (156).jpg";
import img157 from "../images/Nunta/Nunta (157).jpg";
import img158 from "../images/Nunta/Nunta (158).jpg";
import img159 from "../images/Nunta/Nunta (159).jpg";
import img160 from "../images/Nunta/Nunta (160).jpg";
import img161 from "../images/Nunta/Nunta (161).jpg";
import img162 from "../images/Nunta/Nunta (162).jpg";
import img163 from "../images/Nunta/Nunta (163).jpg";
import img164 from "../images/Nunta/Nunta (164).jpg";
import img165 from "../images/Nunta/Nunta (165).jpg";
import img166 from "../images/Nunta/Nunta (166).jpg";
import img167 from "../images/Nunta/Nunta (167).jpg";
import img168 from "../images/Nunta/Nunta (168).jpg";
import img169 from "../images/Nunta/Nunta (169).jpg";
import img170 from "../images/Nunta/Nunta (170).jpg";
import img171 from "../images/Nunta/Nunta (171).jpg";
import img172 from "../images/Nunta/Nunta (172).jpg";
import img173 from "../images/Nunta/Nunta (173).jpg";
import img174 from "../images/Nunta/Nunta (174).jpg";
import img175 from "../images/Nunta/Nunta (175).jpg";
import img176 from "../images/Nunta/Nunta (176).jpg";
import img177 from "../images/Nunta/Nunta (177).jpg";
import img178 from "../images/Nunta/Nunta (178).jpg";
import img179 from "../images/Nunta/Nunta (179).jpg";
import img180 from "../images/Nunta/Nunta (180).jpg";
import img181 from "../images/Nunta/Nunta (181).jpg";
import img182 from "../images/Nunta/Nunta (182).jpg";
import img183 from "../images/Nunta/Nunta (183).jpg";
import img184 from "../images/Nunta/Nunta (184).jpg";
import img185 from "../images/Nunta/Nunta (185).jpg";
import img186 from "../images/Nunta/Nunta (186).jpg";
import img187 from "../images/Nunta/Nunta (187).jpg";
import img188 from "../images/Nunta/Nunta (188).jpg";
import img189 from "../images/Nunta/Nunta (189).jpg";
import img190 from "../images/Nunta/Nunta (190).jpg";
import img191 from "../images/Nunta/Nunta (191).jpg";


// Array with local images
const images = [
  img191, img190, img189, img188, img187, img186, img185, img184,
  img183, img182, img181, img180, img179, img178, img177, img176,
  img175, img174, img173, img172, img171, img170, img169, img168,
  img167, img166, img165, img164, img163, img162, img161, img160,
  img159, img158, img157, img156, img155, img154, img153, img152,
  img151, img150, img149, img148, img147, img146, img145, img144,
  img143, img142, img141, img140,
  img139, img138, img137, img136, img135, img134, img133, img132,
  img131, img130, img129, img128, img127, img126, img125, img124,
  img123, img122, img121, img120, img119, img118, img117, img116,
  img115, img114, img113, img112, img111, img110, img109, img108,
  img107, img106, img105, img104, img103, img102, img101, img100,
  img99, img98, img97, img96, img95, img94, img93, img92,
  img91, img90, img89, img88, img87, img86, img85, img84,
  img83, img82, img81, img80, img79, img78, img77, img76,
  img75, img74, img73, img72, img71, img70, img69, img68,
  img67, img66, img65, img64, img63, img62, img61, img60,
  img59, img58, img57, img56, img55, img54, img53, img52,
  img51, img50, img49, img48, img47, img46, img45, img44,
  img43, img42, img41, img40, img39, img38, img37, img36,
  img35, img34, img33, img32, img31, img30, img29, img28,
  img27, img26, img25, img24, img23, img22, img21, img20,
  img19, img18, img17, img16, img15, img14, img13, img12,
  img11, img10, img9, img8, img7, img6, img5, img4,
  img3, img2, img1
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
          <h2 className="portfolio-title">NUNTA</h2>
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
        <PacheteNunta />
      </div>

      <Calendar />
      <Footer />
    </>
  );
};

export default Portfolio;
