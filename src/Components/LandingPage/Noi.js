import React, { useRef, useState } from "react";
import "./Noi.css";

// Import local images
import PopeCover from "../images/Pope Fundal1.jpg";
import PopeTitlu from "../images/Pope Titlu.png";
import Pope from "../images/Pope2.png";

import AndreiCover from "../images/Andrei Fundal.jpg";
import AndreiTitlu from "../images/Andrei Titlu.png";
import Andrei from "../images/Andrei.png";

import CenziCover from "../images/Razvan Fundal.jpg";
import CenziTitlu from "../images/Razvan titlu.png";
import Cenzi from "../images/Razvan.png";

import CristiCover from "../images/Cristi Fundal.jpg";
import CristiTitlu from "../images/Cristi Titlu.png";
import Cristi from "../images/Cristi.png";

import MeryCover from "../images/Mery Fundal1.jpg"; 
import MeryTitlu from "../images/Mery Titlu.png"; 
import Mery from "../images/Mery.png"; 

import LucaCover from "../images/Luca Fundal.jpg"; 
import LucaTitlu from "../images/Luca Titlu.png"; 
import Luca from "../images/Luca.png"; 

import hellboyVideo from "../video/Studio/Coming soon.mp4";

// Card Component
const Card = ({ coverImage, titleImage, characterImage, hoverText }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div 
      className="react-app__card" id="react-app__card"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="react-app__wrapper">
        <img src={coverImage} alt="Cover" className="react-app__cover-image" />
      </div>
      {!isHovered && (
        <div className="react-app__info-icon">
          <svg viewBox="0 0 24 24" fill="white">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
          </svg>
        </div>
      )}
      <img src={titleImage} alt="Title" className="react-app__title" />
      <img src={characterImage} alt="Character" className="react-app__character" />
      <div className="react-app__hover-text">{hoverText}</div>
    </div>
  );
};

// Video Player Component
const VideoPlayer = ({ src }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (!isPlaying) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  const handleVideoEnd = () => {
    setIsPlaying(false);
  };

  return (
    <div className="react-app__video-wrapper">
      <video
        ref={videoRef}
        className="react-app__video-element"
        data-playing={isPlaying}
        controls={isPlaying}
        onEnded={handleVideoEnd}
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="video-overlay" data-playing={isPlaying} onClick={handlePlayPause}>
        {!isPlaying && (
          <div className="play-content">
            <div className="play-button">
              <svg viewBox="0 0 24 24" fill="white">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
            <div className="play-caption">Click pentru a viziona videoclipul</div>
          </div>
        )}
      </div>
    </div>
  );
};

// Main App Component
const Noi = () => {
  return (
    <div id="noi" className="react-app">
      <h1 className="react-app__title">Cine suntem?</h1>
      <div className="react-app__content">
        <div className="react-app__cards">
          <Card
            coverImage={PopeCover}
            titleImage={PopeTitlu}
            characterImage={Pope}
            hoverText="Pasiunea mea este să surprind momentele care contează. Fiecare cadru spune o poveste pe care vreau să o păstrezi mereu."
          />
          <Card
            coverImage={AndreiCover}
            titleImage={AndreiTitlu}
            characterImage={Andrei}
            hoverText="Pentru mine, fotografia înseamnă emoție și autenticitate. Mă bucur să surprind momente care spun povești și rămân vii peste ani."
          />
          <Card
            coverImage={CenziCover}
            titleImage={CenziTitlu}
            characterImage={Cenzi}
            hoverText="Îmi place să surprind detaliile care aduc poveștile la viață. În editare, mă asigur că fiecare imagine strălucește cu naturalețe."
          />
          <Card
            coverImage={CristiCover}
            titleImage={CristiTitlu}
            characterImage={Cristi}
            hoverText="Pentru mine, montajul video este o artă. Mă asigur că fiecare secundă transmite emoție și că rezultatul final este impecabil."
          />
          <Card
            coverImage={MeryCover}
            titleImage={MeryTitlu}
            characterImage={Mery}
            hoverText="Ador să filmez cadre care transmit emoție și energie. Prin editare, transform momentele unice în povești care rămân vii."
          />
          {/* Added sixth card as a copy of Mery's card */}
          <Card
            coverImage={LucaCover}
            titleImage={LucaTitlu}
            characterImage={Luca}
            hoverText="Pentru mine, fiecare fotografie este o combinație de lumină, compoziție și emoție. Caut mereu detaliile care fac diferența."
          />
        </div>
        <div className="react-app__video">
          <VideoPlayer src={hellboyVideo} />
        </div>
      </div>
    </div>
  );
};

export default Noi;