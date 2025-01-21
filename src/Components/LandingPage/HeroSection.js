import React, { useEffect, useRef } from 'react';
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
  const nextBtnRef = useRef(null);
  const prevBtnRef = useRef(null);

  const timeRunning = 3000;
  const timeAutoNext = 7000;

  useEffect(() => {
    const nextBtn = nextBtnRef.current;
    const prevBtn = prevBtnRef.current;
    const list = listRef.current;
    const carousel = carouselRef.current;
    const runningTime = runningTimeRef.current;

    let runTimeOut;
    let runNextAuto;

    const showSlider = (type) => {
      const sliderItemsDom = list.querySelectorAll('.item');
      if (type === 'next') {
        list.appendChild(sliderItemsDom[0]);
        carousel.classList.add('next');
      } else {
        list.prepend(sliderItemsDom[sliderItemsDom.length - 1]);
        carousel.classList.add('prev');
      }

      clearTimeout(runTimeOut);

      runTimeOut = setTimeout(() => {
        carousel.classList.remove('next');
        carousel.classList.remove('prev');
      }, timeRunning);

      clearTimeout(runNextAuto);
      runNextAuto = setTimeout(() => {
        nextBtn.click();
      }, timeAutoNext);

      resetTimeAnimation();
    };

    const resetTimeAnimation = () => {
      runningTime.style.animation = 'none';
      const triggerReflow = runningTime.offsetHeight;
      runningTime.style.animation = 'runningTime 7s linear 1 forwards';
    };

    nextBtn.onclick = () => showSlider('next');
    prevBtn.onclick = () => showSlider('prev');

    runNextAuto = setTimeout(() => {
      nextBtn.click();
    }, timeAutoNext);

    resetTimeAnimation();

    return () => {
      clearTimeout(runTimeOut);
      clearTimeout(runNextAuto);
    };
  }, []);

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

        <div className="arrows">
          <button className="prev" ref={prevBtnRef}>Prev</button>
          <button className="next" ref={nextBtnRef}>Next</button>
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