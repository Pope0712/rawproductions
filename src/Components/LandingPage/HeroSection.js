import React, { useEffect, useRef, useState } from 'react';
import './HeroSection.css';
import { Link } from 'react-scroll';

function HeroSection() {
  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };
  const ref = useRef(null);

  const carouselRef = useRef(null);
  const listRef = useRef(null);
  const runningTimeRef = useRef(null);
  
  // Add state for tracking cooldown
  const [isInCooldown, setIsInCooldown] = useState(false);

  const timeRunning = 3000;
  const timeAutoNext = 7000;
  const COOLDOWN_TIME = 1000; // 1.5 seconds cooldown

  useEffect(() => {
    const list = listRef.current;
    const carousel = carouselRef.current;
    const runningTime = runningTimeRef.current;

    let runTimeOut;
    let runNextAuto;

    const showSlider = () => {
      if (isInCooldown) return; // Prevent action if in cooldown

      const sliderItemsDom = list.querySelectorAll('.item');
      list.appendChild(sliderItemsDom[0]);
      carousel.classList.add('next');

      // Set cooldown
      setIsInCooldown(true);
      setTimeout(() => {
        setIsInCooldown(false);
      }, COOLDOWN_TIME);

      clearTimeout(runTimeOut);

      runTimeOut = setTimeout(() => {
        carousel.classList.remove('next');
      }, timeRunning);

      clearTimeout(runNextAuto);
      runNextAuto = setTimeout(showSlider, timeAutoNext);

      resetTimeAnimation();
    };

    const resetTimeAnimation = () => {
      runningTime.style.animation = 'none';
      const triggerReflow = runningTime.offsetHeight;
      runningTime.style.animation = 'runningTime 7s linear 1 forwards';
    };

    // Add click event listener to the carousel
    carousel.addEventListener('click', showSlider);

    runNextAuto = setTimeout(showSlider, timeAutoNext);
    resetTimeAnimation();

    return () => {
      clearTimeout(runTimeOut);
      clearTimeout(runNextAuto);
      carousel.removeEventListener('click', showSlider);
    };
  }, [isInCooldown]); // Add isInCooldown to dependencies

  return (
    <>
      <div className="carousel" id="carousel" ref={carouselRef}>
        <div className="list" ref={listRef}>
          <div className="item item-1" style={{ backgroundImage: 'url(./images/1.jpg)' }}>
            <div className="content">
              <div className="title">Majorat</div>
              <div className="btn">
                <button className="btn-link" onClick={() => window.location.href = '/Majorat'}>Vezi mai mult</button>
                <button onClick={() => window.location.href = 'tel:+400745531340'}>Sună acum</button>
              </div>
            </div>
          </div>
          <div className="item item-2" style={{ backgroundImage: 'url(./images/20.jpg)' }}>
            <div className="content">
              <div className="title">Nunta</div>
              <div className="btn">
                <button className="btn-link" onClick={() => window.location.href = '/Nunta'}>Vezi mai mult</button>
                <button onClick={() => window.location.href = 'tel:+400745531340'}>Sună acum</button>
              </div>
            </div>
          </div>
          <div className="item item-3" style={{ backgroundImage: 'url(./images/10.jpg)' }}>
            <div className="content">
              <div className="title">Botez</div>
              <div className="btn">
                <button className="btn-link" onClick={() => window.location.href = '/Botez'}>Vezi mai mult</button>
                <button onClick={() => window.location.href = 'tel:+400745531340'}>Sună acum</button>
              </div>
            </div>
          </div>
          <div className="item item-4" style={{ backgroundImage: 'url(./images/14.jpg)' }}>
            <div className="content">
              <div className="title">Studio</div>
              <div className="btn">
                <button className="btn-link" onClick={() => window.location.href = '/Studio'}>Vezi mai mult</button>
                <button onClick={() => window.location.href = 'tel:+400745531340'}>Sună acum</button>
              </div>
            </div>
          </div>
          <div className="item item-5" style={{ backgroundImage: 'url(./images/11.jpg)' }}>
            <div className="content">
              <div className="title">Majorat</div>
              <div className="btn">
                <button className="btn-link" onClick={() => window.location.href = '/Majorat'}>Vezi mai mult</button>
                <button onClick={() => window.location.href = 'tel:+400745531340'}>Sună acum</button>
              </div>
            </div>
          </div>
          <div className="item item-6" style={{ backgroundImage: 'url(./images/13.jpg)' }}>
            <div className="content">
              <div className="title">Nunta</div>
              <div className="btn">
                <button className="btn-link" onClick={() => window.location.href = '/Nunta'}>Vezi mai mult</button>
                <button onClick={() => window.location.href = 'tel:+400745531340'}>Sună acum</button>
              </div>
            </div>
          </div>
          <div className="item item-7" style={{ backgroundImage: 'url(./images/12.jpg)' }}>
            <div className="content">
              <div className="title">Botez</div>
              <div className="btn">
                <button className="btn-link" onClick={() => window.location.href = '/Botez'}>Vezi mai mult</button>
                <button onClick={() => window.location.href = 'tel:+400745531340'}>Sună acum</button>
              </div>
            </div>
          </div>
          <div className="item item-8" style={{ backgroundImage: 'url(./images/15.jpg)' }}>
            <div className="content">
              <div className="title">Studio</div>
              <div className="btn">
                <button className="btn-link" onClick={() => window.location.href = '/Studio'}>Vezi mai mult</button>
                <button onClick={() => window.location.href = 'tel:+400745531340'}>Sună acum</button>
              </div>
            </div>
          </div>
        </div>

        <div className="timeRunning" ref={runningTimeRef}></div>

        <div className="buttonForScroll">
          <div className="mouse-poz">
            <Link to="SecondSection" spy={true} smooth={true} offset={5} duration={500}>
              <button className="mouse"></button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;