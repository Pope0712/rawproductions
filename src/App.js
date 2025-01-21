import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './Components/LandingPage/Navbar';
import NavBarRAWVideo from './Components/PortofoliuRawProductionsFOTO/NavBarRAWVideo';
import './App.css';
import Home from './Components/pages/Home';
import Nunta from './Components/PortofoliuRawProductionsFOTO/Nunta';
import Botez from './Components/PortofoliuRawProductionsFOTO/Botez';
import Majorat from './Components/PortofoliuRawProductionsFOTO/Majorat';
import Studio from './Components/PortofoliuRawProductionsFOTO/Studio';
import Video from './Components/PortofoliuRawProductionsFOTO/Video';
import BotezVideo from './Components/PortofoliuRawProductionsFOTO/BotezVideo';
import MajoratVideo from './Components/PortofoliuRawProductionsFOTO/MajoratVideo';
import StudioVideo from './Components/PortofoliuRawProductionsFOTO/StudioVideo';
import emailjs from '@emailjs/browser';

// Inițializați EmailJS cu cheia publică
emailjs.init("YOUR_PUBLIC_KEY"); // Înlocuiți cu Public Key-ul vostru

function App() {
  return (
    <Router>
      <MainApp />
    </Router>
  );
}

function MainApp() {
  const location = useLocation();

  const videoRoutes = [
    '/Video',
    '/BotezVideo',
    '/MajoratVideo',
    '/StudioVideo',
  ];

  const renderNavbar = () => {
    if (videoRoutes.some((route) => location.pathname.startsWith(route))) {
      return <NavBarRAWVideo />;
    }

    const routesWithoutNavbar = ['/Nunta', '/Botez', '/Majorat', '/Studio'];
    if (routesWithoutNavbar.includes(location.pathname)) {
      return null;
    }

    return <Navbar />;
  };

  return (
    <React.Fragment>
      {renderNavbar()}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Nunta" element={<Nunta />} />
        <Route path="/Botez" element={<Botez />} />
        <Route path="/Majorat" element={<Majorat />} />
        <Route path="/Studio" element={<Studio />} />
        
        <Route path="/Video" element={<Video />} />
        <Route path="/BotezVideo" element={<BotezVideo />} />
        <Route path="/MajoratVideo" element={<MajoratVideo />} />
        <Route path="/StudioVideo" element={<StudioVideo />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;