import React, { useState, useEffect } from "react";
import "./Nunta.css";
import localVideo from "../video/FundalBotez.mp4";
import NavBarRAW from "./NavBarRAW";
import Footer from "../LandingPage/Footer";
import Calendar from "../LandingPage/Calendar";
import PacheteBotez from "../PortofoliuRawProductionsFOTO/PacheteBotez";

// Import local images
import img1 from "../images/Botez/Botez (1).jpg";
import img2 from "../images/Botez/Botez (2).jpg";
import img3 from "../images/Botez/Botez (3).jpg";
import img4 from "../images/Botez/Botez (4).jpg";
import img5 from "../images/Botez/Botez (5).jpg";
import img6 from "../images/Botez/Botez (6).jpg";
import img7 from "../images/Botez/Botez (7).jpg";
import img8 from "../images/Botez/Botez (8).jpg";
import img9 from "../images/Botez/Botez (9).jpg";
import img10 from "../images/Botez/Botez (10).jpg";
import img11 from "../images/Botez/Botez (11).jpg";
import img12 from "../images/Botez/Botez (12).jpg";
import img13 from "../images/Botez/Botez (13).jpg";
import img14 from "../images/Botez/Botez (14).jpg";
import img15 from "../images/Botez/Botez (15).jpg";
import img16 from "../images/Botez/Botez (16).jpg";
import img17 from "../images/Botez/Botez (17).jpg";
import img18 from "../images/Botez/Botez (18).jpg";
import img19 from "../images/Botez/Botez (19).jpg";
import img20 from "../images/Botez/Botez (20).jpg";
import img21 from "../images/Botez/Botez (21).jpg";
import img22 from "../images/Botez/Botez (22).jpg";
import img23 from "../images/Botez/Botez (23).jpg";
import img24 from "../images/Botez/Botez (24).jpg";
import img25 from "../images/Botez/Botez (25).jpg";
import img26 from "../images/Botez/Botez (26).jpg";
import img27 from "../images/Botez/Botez (27).jpg";
import img28 from "../images/Botez/Botez (28).jpg";
import img29 from "../images/Botez/Botez (29).jpg";
import img30 from "../images/Botez/Botez (30).jpg";
import img31 from "../images/Botez/Botez (31).jpg";
import img32 from "../images/Botez/Botez (32).jpg";
import img33 from "../images/Botez/Botez (33).jpg";
import img34 from "../images/Botez/Botez (34).jpg";
import img35 from "../images/Botez/Botez (35).jpg";
import img36 from "../images/Botez/Botez (36).jpg";
import img37 from "../images/Botez/Botez (37).jpg";
import img38 from "../images/Botez/Botez (38).jpg";
import img39 from "../images/Botez/Botez (39).jpg";
import img40 from "../images/Botez/Botez (40).jpg";
import img41 from "../images/Botez/Botez (41).jpg";
import img42 from "../images/Botez/Botez (42).jpg";
import img43 from "../images/Botez/Botez (43).jpg";
import img44 from "../images/Botez/Botez (44).jpg";
import img45 from "../images/Botez/Botez (45).jpg";
import img46 from "../images/Botez/Botez (46).jpg";
import img47 from "../images/Botez/Botez (47).jpg";
import img48 from "../images/Botez/Botez (48).jpg";
import img49 from "../images/Botez/Botez (49).jpg";
import img50 from "../images/Botez/Botez (50).jpg";
import img51 from "../images/Botez/Botez (51).jpg";
import img52 from "../images/Botez/Botez (52).jpg";
import img53 from "../images/Botez/Botez (53).jpg";
import img54 from "../images/Botez/Botez (54).jpg";
import img55 from "../images/Botez/Botez (55).jpg";
import img56 from "../images/Botez/Botez (56).jpg";
import img57 from "../images/Botez/Botez (57).jpg";
import img58 from "../images/Botez/Botez (58).jpg";
import img59 from "../images/Botez/Botez (59).jpg";
import img60 from "../images/Botez/Botez (60).jpg";
import img61 from "../images/Botez/Botez (61).jpg";
import img62 from "../images/Botez/Botez (62).jpg";
import img63 from "../images/Botez/Botez (63).jpg";
import img64 from "../images/Botez/Botez (64).jpg";
import img65 from "../images/Botez/Botez (65).jpg";
import img66 from "../images/Botez/Botez (66).jpg";
import img67 from "../images/Botez/Botez (67).jpg";
import img68 from "../images/Botez/Botez (68).jpg";
import img69 from "../images/Botez/Botez (69).jpg";
import img70 from "../images/Botez/Botez (70).jpg";
import img71 from "../images/Botez/Botez (71).jpg";
import img72 from "../images/Botez/Botez (72).jpg";
import img73 from "../images/Botez/Botez (73).jpg";
import img74 from "../images/Botez/Botez (74).jpg";
import img75 from "../images/Botez/Botez (75).jpg";
import img76 from "../images/Botez/Botez (76).jpg";
import img77 from "../images/Botez/Botez (77).jpg";
import img78 from "../images/Botez/Botez (78).jpg";
import img79 from "../images/Botez/Botez (79).jpg";
import img80 from "../images/Botez/Botez (80).jpg";
import img81 from "../images/Botez/Botez (81).jpg";
import img82 from "../images/Botez/Botez (82).jpg";
import img83 from "../images/Botez/Botez (83).jpg";
import img84 from "../images/Botez/Botez (84).jpg";
import img85 from "../images/Botez/Botez (85).jpg";
import img86 from "../images/Botez/Botez (86).jpg";
import img87 from "../images/Botez/Botez (87).jpg";
import img88 from "../images/Botez/Botez (88).jpg";
import img89 from "../images/Botez/Botez (89).jpg";
import img90 from "../images/Botez/Botez (90).jpg";
import img91 from "../images/Botez/Botez (91).jpg";
import img92 from "../images/Botez/Botez (92).jpg";
import img93 from "../images/Botez/Botez (93).jpg";
import img94 from "../images/Botez/Botez (94).jpg";
import img95 from "../images/Botez/Botez (95).jpg";
import img96 from "../images/Botez/Botez (96).jpg";
import img97 from "../images/Botez/Botez (97).jpg";
import img98 from "../images/Botez/Botez (98).jpg";
import img99 from "../images/Botez/Botez (99).jpg";
import img100 from "../images/Botez/Botez (100).jpg";
import img101 from "../images/Botez/Botez (101).jpg";
import img102 from "../images/Botez/Botez (102).jpg";
import img103 from "../images/Botez/Botez (103).jpg";
import img104 from "../images/Botez/Botez (104).jpg";
import img105 from "../images/Botez/Botez (105).jpg";
import img106 from "../images/Botez/Botez (106).jpg";


// Array with local images
const images = [
   img106, img105, img104, img103, img102, img101, img100,
  img99, img98, img97, img96, img95, img94, img93,
  img92, img91, img90, img89, img88, img87, img86, img85,
  img84, img83, img82, img81, img80, img79, img78,
  img77, img76, img75, img74, img73, img72, img71, img70,
  img69, img68, img67, img66, img65, img64, img63, img62,
  img61, img60, img59, img58, img57, img56, img55, img54,
  img53, img52, img51, img50, img49, img48, img47, img46,
  img45, img44, img43, img42, img41, img40, img39, img38,
  img37, img36, img35, img34, img33, img32, img31, img30,
  img29, img28, img27, img26, img25, img24, img23, img22,
  img21, img20, img19, img18, img17, img16, img15, img14,
  img13, img12, img11, img10, img9, img8, img7, img6,
  img5, img4, img3, img2, img1
];

const Portfolio = () => {
  const [currentIndex, setCurrentIndex] = useState(null);

  useEffect(() => {
    const shouldScrollToPachete = sessionStorage.getItem("scrollToPachete") === "true";
    if (shouldScrollToPachete) {
      const pacheteSection = document.getElementById("pachete");
      if (pacheteSection) {
        pacheteSection.scrollIntoView({ behavior: "smooth" });
      }
      sessionStorage.removeItem("scrollToPachete");
    }

    if (window.location.hash === "#pachete") {
      const pacheteSection = document.getElementById("pachete");
      if (pacheteSection) {
        pacheteSection.scrollIntoView({ behavior: "smooth" });
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
        <div className="video-container1">
          <video autoPlay loop muted playsInline className="narrow-video">
            <source src={localVideo} type="video/mp4" />
            Your browser does not support the video element.
          </video>

          <h2 className="portfolio-title">BOTEZ</h2>
        </div>

        <div className="portfolio-grid">
          {images.map((image, index) => (
            <div
              key={index}
              className="portfolio-item"
              onClick={() => openLightbox(index)}
            >
              <img src={image} alt={`Portfolio Image ${index + 1}`} />
            </div>
          ))}
        </div>

        {currentIndex !== null && (
          <div className="lightbox">
            <button className="lightbox-close" onClick={closeLightbox}>
              &times;
            </button>

            <button className="lightbox-prev" onClick={prevImage}>
              &#8592;
            </button>

            <img
              src={images[currentIndex]}
              alt={`Portfolio Image ${currentIndex + 1}`}
              className="lightbox-image"
            />

            <button className="lightbox-next" onClick={nextImage}>
              &#8594;
            </button>
          </div>
        )}
      </section>

      <div id="pachete">
        <PacheteBotez />
      </div>

      <Calendar />
      <Footer />
    </>
  );
};

export default Portfolio;
