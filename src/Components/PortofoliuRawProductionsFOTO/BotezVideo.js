import React, { useState, useEffect, useRef } from "react";
import "./Video.css";
import Footer from '../LandingPage/Footer';
import Calendar from '../LandingPage/Calendar';
import PacheteBotez from '../PortofoliuRawProductionsFOTO/PacheteBotez';

// Import background video
import backgroundVideo from "../video/FundalPrtflVideo1.mp4";

// Import thumbnails
import thumb1 from "../images/Thumbnails-botez/Dominic.jpg";
import thumb2 from "../images/Thumbnails-botez/Noah.jpg";
import thumb3 from "../images/Thumbnails-botez/Mara.jpg";
import thumb4 from "../images/Thumbnails-botez/Mateo Elian.jpg";
import thumb5 from "../images/Thumbnails-botez/Amalia Maria.jpeg";
import thumb6 from "../images/Thumbnails-botez/Botez Georgia.jpg";
import thumb7 from "../images/Thumbnails-botez/Clara.jpg";
import thumb8 from "../images/Thumbnails-botez/Darius.jpeg";
import thumb9 from "../images/Thumbnails-botez/Ariana Caroline.jpg";
import thumb10 from "../images/Thumbnails-botez/Sebastian Ioan.jpg"; 
import thumb11 from "../images/Thumbnails-botez/Filip Stefan.jpg"; 

const VideoBotez = () => {
  const videos = [
    { id: "01", title: "Sebastian Ioan", youtubeId: "KeI9EHbWFD0", thumbnail: thumb10 },
    { id: "02", title: "Filip Stefan", youtubeId: "RBSdoeaEy3k", thumbnail: thumb11 },
    { id: "03", title: "Dominic", youtubeId: "77yBdUZLCco", thumbnail: thumb1 },
    { id: "04", title: "Noah", youtubeId: "BmZhBXVZiU0", thumbnail: thumb2 },
    { id: "05", title: "Mara", youtubeId: "0kJdh7NjRlc", thumbnail: thumb3 },
    { id: "06", title: "Mateo Elian", youtubeId: "THVJ7bHQGEQ", thumbnail: thumb4 },
    { id: "07", title: "Amalia Maria", youtubeId: "8taUlpvxw2M", thumbnail: thumb5 },
    { id: "08", title: "Georgia", youtubeId: "Qg2hzUCfnEs", thumbnail: thumb6 },
    { id: "09", title: "Clara", youtubeId: "3iLMP01XseY", thumbnail: thumb7 },
    { id: "10", title: "Darius", youtubeId: "rEll_fhdzQ4", thumbnail: thumb8 },
    { id: "11", title: "Ariana Caroline", youtubeId: "_M7U_Iux-iI", thumbnail: thumb9 }
  ];

  const [isPlayerVisible, setPlayerVisible] = useState(false);
  const [activeVideo, setActiveVideo] = useState(null);
  const iframeRefs = useRef({});

  useEffect(() => {
    document.body.style.overflow = isPlayerVisible ? "hidden" : "auto";
    return () => { document.body.style.overflow = "auto"; };
  }, [isPlayerVisible]);

  const handleVideoClick = (video) => {
    setActiveVideo(video);
    setPlayerVisible(true);
  };

  const closePlayer = () => {
    setPlayerVisible(false);
    setActiveVideo(null);
  };

  const VideoThumbnail = ({ video }) => (
    <div className="video-wrapper" onClick={() => handleVideoClick(video)}>
      <div className="thumbnail-container">
        <img src={video.thumbnail} alt={video.title} className="video-thumbnail" />
        <div className="play-overlay">
          <div className="play-icon"></div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <div className="video-page">
        <video className="background-video" autoPlay loop muted>
          <source src={backgroundVideo} type="video/mp4" />
        </video>

        {isPlayerVisible && activeVideo && (
          <div className="video-player-overlay">
            <div className="video-player-container">
              <button className="close-button" onClick={closePlayer} aria-label="Close video" />
              <div className="video-player-title">{activeVideo.title}</div>
              <div className="video-player">
                <iframe
                  src={`https://www.youtube.com/embed/${activeVideo.youtubeId}?autoplay=1`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        )}

        <div className="video-grid">
          {videos.slice(0, 4).map(video => (
            <div key={video.id} className="video-card">
              <div className="video-info">
                <span className="video-id">{video.id}</span>
                <span className="video-title">{video.title}</span>
              </div>
              <VideoThumbnail video={video} />
            </div>
          ))}
        </div>

        <div className="video-special-layout">
          <div className="video-large">
            <div className="video-info">
              <span className="video-id">{videos[4].id}</span>
              <span className="video-title">{videos[4].title}</span>
            </div>
            <VideoThumbnail video={videos[4]} />
          </div>
          <div className="video-small-grid">
            {videos.slice(5, 9).map(video => (
              <div key={video.id} className="video-card">
                <div className="video-info">
                  <span className="video-id">{video.id}</span>
                  <span className="video-title">{video.title}</span>
                </div>
                <VideoThumbnail video={video} />
              </div>
            ))}
          </div>
        </div>

        <div className="video-grid">
          {videos.slice(9).map(video => (
            <div key={video.id} className="video-card">
              <div className="video-info">
                <span className="video-id">{video.id}</span>
                <span className="video-title">{video.title}</span>
              </div>
              <VideoThumbnail video={video} />
            </div>
          ))}
        </div>
      </div>

      <div id="pachete">
        <PacheteBotez />
      </div>
      
      <Calendar />
      <Footer />
    </>
  );
};

export default VideoBotez;
