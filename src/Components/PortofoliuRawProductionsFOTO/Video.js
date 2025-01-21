// Video.jsx
import React, { useState, useEffect, useRef } from "react";
import "./Video.css";
import Footer from '../LandingPage/Footer';
import Calendar from '../LandingPage/Calendar';
import PacheteNunta from '../PortofoliuRawProductionsFOTO/PacheteNunta';

// Import background video
import backgroundVideo from "../video/FundalPrtflVideo1.mp4";

// Import your thumbnails
import thumb1 from "../images/Thumbnails-nunta/Doru & Ellie.jpeg";
import thumb2 from "../images/Thumbnails-nunta/Catalin & Irina.jpg";
import thumb3 from "../images/Thumbnails-nunta/Marian & Irina.jpg";
import thumb4 from "../images/Thumbnails-nunta/Roxana & Madalin.jpg";
import thumb5 from "../images/Thumbnails-nunta/Gabriel & Andreea.jpeg";
import thumb6 from "../images/Thumbnails-nunta/Simona & Adi.jpg";
import thumb7 from "../images/Thumbnails-nunta/Iulia & Adrian.jpg";

const Video = () => {
  const videos = [
    { 
      id: "01", 
      title: "Doru & Ellie", 
      youtubeId: "cNRsdQreFIg",
      thumbnail: thumb1,
      previewUrl: "https://www.youtube.com/embed/cNRsdQreFIg?autoplay=1&mute=1&controls=0&showinfo=0"
    },
    { 
      id: "02", 
      title: "Catalin & Irina", 
      youtubeId: "qt419bIGSic",
      thumbnail: thumb2,
      previewUrl: "https://www.youtube.com/embed/qt419bIGSic?autoplay=1&mute=1&controls=0&showinfo=0"
    },
    { 
      id: "03", 
      title: "Marian & Irina", 
      youtubeId: "jcWM0n39v2o",
      thumbnail: thumb3,
      previewUrl: "https://www.youtube.com/embed/jcWM0n39v2o?autoplay=1&mute=1&controls=0&showinfo=0"
    },
    { 
      id: "04", 
      title: "Roxana & Madalin", 
      youtubeId: "QmZUHTH2U5A",
      thumbnail: thumb4,
      previewUrl: "https://www.youtube.com/embed/QmZUHTH2U5A?autoplay=1&mute=1&controls=0&showinfo=0"
    },
    { 
      id: "05", 
      title: "Gabriel & Andreea", 
      youtubeId: "K6n3pQiFdUE",
      thumbnail: thumb5,
      previewUrl: "https://www.youtube.com/embed/K6n3pQiFdUE?autoplay=1&mute=1&controls=0&showinfo=0"
    },
    { 
      id: "06", 
      title: "Simona & Adi", 
      youtubeId: "Do8WGmWejyE",
      thumbnail: thumb6,
      previewUrl: "https://www.youtube.com/embed/Do8WGmWejyE?autoplay=1&mute=1&controls=0&showinfo=0"
    },
    { 
      id: "07", 
      title: "Iulia & Adrian", 
      youtubeId: "4LGQnUfYTsY",
      thumbnail: thumb7,
      previewUrl: "https://www.youtube.com/embed/4LGQnUfYTsY?autoplay=1&mute=1&controls=0&showinfo=0"
    }
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
        <PacheteNunta />
      </div>
      
      <Calendar />
      <Footer />
    </>
  );
};

export default Video;