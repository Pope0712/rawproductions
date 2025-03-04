import { useRef, useState, useEffect } from "react";
import React from "react";
import "./Navbar.css";
import { FaBars } from "react-icons/fa";
import { Link } from "react-scroll"; // Import pentru react-scroll

function Navbar() {
  const navRef = useRef();
  const [showNav, setShowNav] = useState(true);
  const [isTop, setIsTop] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 960);

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  const handleLinkClick = () => {
    // Ascunde meniul dacă este pe mobil
    if (isMobile) {
      navRef.current.classList.remove("responsive_nav");
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 960);
    };

    const controlNavbar = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY === 0) {
        setIsTop(true);
        setShowNav(true);
      } else {
        setIsTop(false);
        if (currentScrollY > lastScrollY && currentScrollY > 100) {
          setShowNav(false); // Ascunde bara de navigare la scroll în jos
        } else if (currentScrollY < lastScrollY) {
          setShowNav(true); // Afișează bara de navigare la scroll în sus
        }
      }

      setLastScrollY(currentScrollY);
    };

    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          controlNavbar();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [lastScrollY]);

  return (
    <header
      className={`header ${isTop && !isMobile ? "transparent" : ""} ${
        showNav ? "show" : "hide"
      }`}
    >
      <a href="/" className="logo">
        RAWProductions
      </a>
      <nav className="navbar" ref={navRef}>
        <a href="/Nunta" onClick={handleLinkClick}>Foto</a>
        <a href="/Video" onClick={handleLinkClick}>Video</a>
        <Link
          to="SecondSection"
          spy={true}
          smooth={true}
          offset={0}
          duration={1000}
          as="button"
          onClick={handleLinkClick} // Adaug onClick pentru ascunderea meniului
        >
          <button className="unstyled-button">Servicii</button>
        </Link>
        <Link
          to="react-app"
          spy={true}
          smooth={true}
          offset={-70}
          duration={1200}
          as="button"
          onClick={handleLinkClick} // Adaug onClick pentru ascunderea meniului
        >
          <button className="unstyled-button">Noi</button>
        </Link>
        <Link
          to="packages-container"
          spy={true}
          smooth={true}
          offset={0}
          duration={2500}
          as="button"
          onClick={handleLinkClick} // Adaug onClick pentru ascunderea meniului
        >
          <button className="unstyled-button">Contact</button>
        </Link>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}

export default Navbar;
