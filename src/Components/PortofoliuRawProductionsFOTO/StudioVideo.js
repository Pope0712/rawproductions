import React, { useState, useEffect, useRef } from "react";
import "./Video.css";
import Footer from '../LandingPage/Footer';
import Calendar from '../LandingPage/Calendar';
import PacheteStudio from '../PortofoliuRawProductionsFOTO/PacheteStudio';

// Import background video
import backgroundVideo from "../video/FundalPrtflVideo1.mp4";

// Import thumbnails
import thumb1 from "../images/Thumbnails-Studio/RealEstate.jpg";
import thumb2 from "../images/Thumbnails-Studio/Amnesya.jpeg";
import thumb3 from "../images/Thumbnails-Studio/Carousel + Audi.jpg";
import thumb4 from "../images/Thumbnails-Studio/CHR.jpg";
import thumb5 from "../images/Thumbnails-Studio/Mire.jpg";
import thumb6 from "../images/Thumbnails-Studio/Opia.jpeg";
import thumb7 from "../images/Thumbnails-Studio/Cabinet Kineto.jpg";
import thumb8 from "../images/Thumbnails-Studio/Reclama SH.jpg";
import thumb9 from "../images/Thumbnails-Studio/Revelion SH 2025.jpg";
import thumb10 from "../images/Thumbnails-Studio/A7III.jpg";
import thumb11 from "../images/Thumbnails-Studio/Vibe Bar.jpg";


const VideoStudio = () => {
  const videos = [
    { 
      id: "01", 
      title: "Video Real Estate", 
      youtubeId: "D9G4rLRbId8",
      thumbnail: thumb1,
      previewUrl: "https://www.youtube.com/embed/D9G4rLRbId8?autoplay=1&mute=1&controls=0&showinfo=0"
    },
    { 
      id: "02", 
      title: "Aftermovie Amnesya Pool Party", 
      youtubeId: "qHhqyyJxstk",
      thumbnail: thumb2,
      previewUrl: "https://www.youtube.com/embed/qHhqyyJxstk?autoplay=1&mute=1&controls=0&showinfo=0"
    },
    { 
      id: "03", 
      title: "Carousel + Masina", 
      youtubeId: "EbIoU4cICOo",
      thumbnail: thumb3,
      previewUrl: "https://www.youtube.com/embed/EbIoU4cICOo?autoplay=1&mute=1&controls=0&showinfo=0"
    },
    { 
      id: "04", 
      title: "Chr", 
      youtubeId: "3zlpGL4KJCo",
      thumbnail: thumb4,
      previewUrl: "https://www.youtube.com/embed/3zlpGL4KJCo?autoplay=1&mute=1&controls=0&showinfo=0"
    },
    { 
      id: "05", 
      title: "Groom Style", 
      youtubeId: "D6GlQGCLy58",
      thumbnail: thumb5,
      previewUrl: "https://www.youtube.com/embed/D6GlQGCLy58?autoplay=1&mute=1&controls=0&showinfo=0"
    },
    { 
      id: "06", 
      title: "Opia Opening", 
      youtubeId: "hG1kVimzpak",
      thumbnail: thumb6,
      previewUrl: "https://www.youtube.com/embed/hG1kVimzpak?autoplay=1&mute=1&controls=0&showinfo=0"
    },
    { 
      id: "07", 
      title: "Cabinet Kineto", 
      youtubeId: "4KENmbN-jXk",
      thumbnail: thumb7,
      previewUrl: "https://www.youtube.com/embed/4KENmbN-jXk?autoplay=1&mute=1&controls=0&showinfo=0"
    },
    { 
      id: "08", 
      title: "Studio Harmony", 
      youtubeId: "ax0JqGlRs3s",
      thumbnail: thumb8,
      previewUrl: "https://www.youtube.com/embed/ax0JqGlRs3s?autoplay=1&mute=1&controls=0&showinfo=0"
    },
    { 
      id: "09", 
      title: "Revelion 2025 Studio Harmony", 
      youtubeId: "qyK9ILwdjM4",
      thumbnail: thumb9,
      previewUrl: "https://www.youtube.com/embed/qyK9ILwdjM4?autoplay=1&mute=1&controls=0&showinfo=0"
    },
    { 
      id: "10", 
      title: "Rig Build Fast Forward", 
      youtubeId: "UAOINAmVZNs",
      thumbnail: thumb10,
      previewUrl: "https://www.youtube.com/embed/UAOINAmVZNs?autoplay=1&mute=1&controls=0&showinfo=0"
    },
    { 
      id: "11", 
      title: "Reel Vibe Bar", 
      youtubeId: "YMDRr6TODgs",
      thumbnail: thumb11,
      previewUrl: "https://www.youtube.com/embed/YMDRr6TODgs?autoplay=1&mute=1&controls=0&showinfo=0"
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

        <div className="video-grid final-grid">
          {videos.slice(9).map((video) => (
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
        <PacheteStudio />
      </div>
      
      <Calendar />
      <Footer />
    </>
  );
};

export default VideoStudio;