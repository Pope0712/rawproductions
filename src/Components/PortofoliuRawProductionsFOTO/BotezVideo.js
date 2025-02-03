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

const VideoBotez = () => {
  const videos = [
    {
      id: "01",
      title: "Dominic",
      youtubeId: "77yBdUZLCco",
      thumbnail: thumb1,
      previewUrl: "https://www.youtube.com/embed/77yBdUZLCco?autoplay=1&mute=1&controls=0&showinfo=0",
    },
    {
      id: "02",
      title: "Noah",
      youtubeId: "BmZhBXVZiU0",
      thumbnail: thumb2,
      previewUrl: "https://www.youtube.com/embed/BmZhBXVZiU0?autoplay=1&mute=1&controls=0&showinfo=0",
    },
    {
      id: "03",
      title: "Mara",
      youtubeId: "0kJdh7NjRlc",
      thumbnail: thumb3,
      previewUrl: "https://www.youtube.com/embed/0kJdh7NjRlc?autoplay=1&mute=1&controls=0&showinfo=0",
    },
    {
      id: "04",
      title: "Mateo Elian",
      youtubeId: "THVJ7bHQGEQ",
      thumbnail: thumb4,
      previewUrl: "https://www.youtube.com/embed/THVJ7bHQGEQ?autoplay=1&mute=1&controls=0&showinfo=0",
    },
    {
      id: "05",
      title: "Amalia Maria",
      youtubeId: "8taUlpvxw2M",
      thumbnail: thumb5,
      previewUrl: "https://www.youtube.com/embed/8taUlpvxw2M?autoplay=1&mute=1&controls=0&showinfo=0",
    },
    {
      id: "06",
      title: "Georgia",
      youtubeId: "Qg2hzUCfnEs",
      thumbnail: thumb6,
      previewUrl: "https://www.youtube.com/embed/Qg2hzUCfnEs?autoplay=1&mute=1&controls=0&showinfo=0",
    },
    {
      id: "07",
      title: "Clara",
      youtubeId: "3iLMP01XseY",
      thumbnail: thumb7,
      previewUrl: "https://www.youtube.com/embed/3iLMP01XseY?autoplay=1&mute=1&controls=0&showinfo=0",
    },
    {
      id: "08",
      title: "Darius",
      youtubeId: "rEll_fhdzQ4",
      thumbnail: thumb8,
      previewUrl: "https://www.youtube.com/embed/rEll_fhdzQ4?autoplay=1&mute=1&controls=0&showinfo=0",
    },
    {
      id: "09",
      title: "Ariana Caroline",
      youtubeId: "_M7U_Iux-iI",
      thumbnail: thumb9,
      previewUrl: "https://www.youtube.com/embed/_M7U_Iux-iI?autoplay=1&mute=1&controls=0&showinfo=0",
    },
  ];

  const [isPlayerVisible, setPlayerVisible] = useState(false);
  const [activeVideo, setActiveVideo] = useState(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState({});
  const iframeRefs = useRef({});

  useEffect(() => {
    if (isPlayerVisible) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isPlayerVisible]);

  const stopAllPreviews = () => {
    Object.values(iframeRefs.current).forEach(iframe => {
      if (iframe) {
        iframe.src = iframe.src;
      }
    });
    setIsVideoPlaying({});
  };

  const handleMouseEnter = (videoId) => {
    Object.entries(iframeRefs.current).forEach(([id, iframe]) => {
      if (id !== videoId && iframe) {
        iframe.src = iframe.src;
      }
    });
    setIsVideoPlaying(prev => ({ ...prev, [videoId]: true }));
  };

  const handleMouseLeave = (videoId) => {
    if (iframeRefs.current[videoId]) {
      iframeRefs.current[videoId].src = iframeRefs.current[videoId].src;
    }
    setIsVideoPlaying(prev => ({ ...prev, [videoId]: false }));
  };

  const handleVideoClick = (video) => {
    stopAllPreviews();
    setActiveVideo(video);
    setPlayerVisible(true);
  };

  const closePlayer = () => {
    setPlayerVisible(false);
    setActiveVideo(null);
  };

  const VideoThumbnail = ({ video }) => {
    const isPlaying = isVideoPlaying[video.id];

    const handleContainerMouseLeave = (e) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const isLeaving =
        e.clientY < rect.top ||
        e.clientY > rect.bottom ||
        e.clientX < rect.left ||
        e.clientX > rect.right;

      if (isLeaving) {
        handleMouseLeave(video.id);
      }
    };

    return (
      <div
        className="video-wrapper"
        onClick={(e) => {
          e.stopPropagation();
          handleVideoClick(video);
        }}
        onMouseLeave={handleContainerMouseLeave}
      >
        {isPlaying ? (
          <div className="video-preview-container">
            <iframe
              ref={el => (iframeRefs.current[video.id] = el)}
              className="video-element"
              src={video.previewUrl}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        ) : (
          <div
            className="thumbnail-container"
            onMouseEnter={() => handleMouseEnter(video.id)}
          >
            <img
              src={video.thumbnail}
              alt={video.title}
              className="video-thumbnail"
            />
            <div className="play-overlay">
              <div className="play-icon"></div>
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <>
      <div className="video-page">
        <video className="background-video" autoPlay loop muted>
          <source src={backgroundVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {isPlayerVisible && (
          <div className="video-player-overlay">
            <div className="video-player-container">
              <button
                className="close-button"
                onClick={closePlayer}
                aria-label="Close video"
              />
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
          {videos.slice(0, 4).map((video) => (
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
            {videos.slice(5, 9).map((video) => (
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