import React, { useEffect, useState } from 'react';
import './thirdsection.css';
import ReactPlayer from 'react-player';
const video1 = "https://www.youtube.com/watch?v=wHrc9UksYo0";
const video2 = "https://www.youtube.com/watch?v=WF5lPCb_Vbg";


function ThirdSection() {
  const [showPlayer, setShowPlayer] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");
  const [isMoviesActive, setIsMoviesActive] = useState(false);

  const handleButtonClick = (url) => {
    setVideoUrl(url);
    setShowPlayer(true);
  };

  const handleCloseVideo = () => {
    setShowPlayer(false);
    setVideoUrl("");
    // Close the movie information window
    const $movies = document.querySelector(".movies");
    const $openMovie = document.querySelector(".open");
    
    if ($openMovie) {
      $openMovie.classList.add("hidden");
      $openMovie.classList.remove("open");
      setTimeout(() => {
        $openMovie.classList.remove("hidden");
      }, 450);
    }
    
    if ($movies) {
      $movies.classList.remove("active");
    }
  };

  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => {
        let $loading = document.querySelector('#loading');
        if ($loading) {
          $loading.classList.add('loading--hidden');

          setTimeout(() => {
            $loading.remove();
            init();
          }, 500);
        }
      }, 100);
    };

    const init = () => {
      const $movies = document.querySelector(".movies");
      const $movieAction = document.querySelectorAll(".movie__action");
      const $movieClose = document.querySelectorAll(".close__movie");
      let isOpen = false;

      const resetMovie = () => {
        let $openMovie = document.querySelector(".open");
        if ($openMovie !== null) {
          $openMovie.classList.add("hidden");
          $openMovie.classList.remove("open");
          setTimeout(() => {
            $openMovie.classList.remove("hidden");
          }, 450);
        }
      };

      $movieAction.forEach((element) => {
        element.addEventListener("click", (e) => {
          if (!isOpen || !e.target.parentElement.classList.contains("open")) {
            resetMovie();

            if (!$movies.classList.contains("active")) {
              $movies.classList.add("active");
              setIsMoviesActive(true);
            }

            element.parentElement.classList.add("open");
            isOpen = true;
          }
        });
      });
     
      

      $movieClose.forEach((element) => {
        element.addEventListener("click", (e) => {
          e.stopPropagation();
          resetMovie();
          $movies.classList.remove("active");
          setIsMoviesActive(false);
          isOpen = false;
          
          // Also close video player if it's open
          if (showPlayer) {
            setShowPlayer(false);
            setVideoUrl("");
          }
        });
      });
    };

    handleLoad();

    return () => {
      document.querySelectorAll(".movie__action").forEach((element) => {
        element.removeEventListener("click", () => {});
      });
      document.querySelectorAll(".close__movie").forEach((element) => {
        element.removeEventListener("click", () => {});
      });
    };
  }, [showPlayer]);

  return (
    <>
      <div className='titleFilm-poz'>
        <h1 className='titleFilm'>Film</h1>
      </div>
      <section id="loading" className="loading">
        <div className="lds-ring">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </section>
      <section className={`video__container ${showPlayer ? 'show_video' : ''}`}>
        {showPlayer && (
          <div className="video__wrapper">
            <ReactPlayer
              url={videoUrl}
              controls={true}
              playing={true}
              width="100%"
              height="100%"
              className="react-player"
            />
            <i id="close-video" className="m-closed" onClick={handleCloseVideo}></i>
          </div>
        )}
      </section>
      <section className="movies">
        <article className="movie">
          <div className="movie__number">01</div>
          <div className="movie__sidebar">
            <div className="movie__sidebar--init">
              <div className="separator"></div>
              <button
                className="view__video"
                onClick={() => handleButtonClick(video1)}
              >
                <i className="m-caret-right-solid"></i>
              </button>
              <div className="separator separator-down"></div>
            </div>
            <h2 className="movie__sidebar--name">Nuntă</h2>
            <i className="m-plus"></i>
          </div>
          <div className="movie__content">
            <div className="content">
              <header className="content__header">
                <h2>Nuntă</h2>
              </header>
              <div className="content__raking">
                <i className="m-star-solid active"></i>
                <i className="m-star-solid active"></i>
                <i className="m-star-solid active"></i>
                <i className="m-star-solid active"></i>
                <i className="m-star-solid active"></i>
              </div>
              <p className="content__sipnosis">
              Nunta este despre iubire pură, emoții intense și momente care îți rămân în suflet. Este despre zâmbete sincere, îmbrățișări calde și bucuria de a împărtăși această zi specială cu cei dragi. Fiecare secundă din această zi devine o amintire de neprețuit, care va dăinui pentru totdeauna în inima ta.
              </p>
              <ul className="content__meta">
                
                <li>
                  <strong>Protagoniști:</strong> <strong>Două suflete îndrăgostite</strong>
                </li>
                <li><strong>Premiera:</strong> <strong>Ziua în care au spus „DA”</strong></li>
                <li><strong>Studio:</strong> <strong>RAWProductions</strong></li>
              </ul>
              <hr />
              <ul className="content__featured">
                <li><i className="m-clock"></i> Durata: Pentru totdeauna</li>
                <li><i className="m-movie"></i>  Dragoste, Romantic, Povești Fericite</li>
                <li><i className="m-chart-up"></i> Popularitate: 100% printre cei dragi</li>
              </ul>
            </div>
          </div>
          <div className="movie__action">
            <i className="close__movie m-closed"></i>
          </div>
        </article>
        <article className="movie">
          <div className="movie__number">02</div>
          <div className="movie__sidebar">
            <div className="movie__sidebar--init">
              <div className="separator"></div>
              <button
                className="view__video"
                onClick={() => handleButtonClick(video2)}
              >
                <i className="m-caret-right-solid"></i>
              </button>
              <div className="separator separator-down"></div>
            </div>
            <h2 className="movie__sidebar--name">Botez</h2>
            <i className="m-plus"></i>
          </div>
          <div className="movie__content">
            <div className="content">
              <header className="content__header">
                <h2>Botez</h2>
              </header>
              <div className="content__raking">
                <i className="m-star-solid active"></i>
                <i className="m-star-solid active"></i>
                <i className="m-star-solid active"></i>
                <i className="m-star-solid active"></i>
                <i className="m-star-solid active"></i>
              </div>
              <p className="content__sipnosis">
              Botezul este despre începuturi pure, emoții profunde și momente care îți umplu inima de bucurie. Este despre zâmbetele celor dragi, binecuvântări sincere și iubirea care se revarsă asupra unui suflet atât de mic și prețios. Fiecare clipă din această zi devine o amintire de neuitat, păstrată cu dragoste pentru o viață întreagă.
              </p>
              <ul className="content__meta">
                
                <li>
                  <strong>Protagoniști:</strong> <strong>Un suflet mic și prețios, înconjurat de iubire</strong>
                </li>
                <li><strong>Premiera:</strong> <strong>Ziua în care binecuvântările s-au transformat în amintiri</strong></li>
                <li><strong>Studio:</strong> <strong>RAWProductions</strong></li>
              </ul>
              <hr />
              <ul className="content__featured">
                <li><i className="m-clock"></i>  O iubire fără sfârșit</li>
                <li><i className="m-movie"></i>  Emoție, Binecuvântare, Iubire Pură</li>
                <li><i className="m-chart-up"></i> Popularitate: 100% printre cei care îl iubesc</li>
              </ul>
            </div>
          </div>
          <div className="movie__action">
            <i className="close__movie m-closed"></i>
          </div>
        </article>
        <article className="movie">
          <div className="movie__number">03</div>
          <div className="movie__sidebar">
            <div className="movie__sidebar--init">
              <div className="separator"></div>
              <button
                className="view__video"
                onClick={() => handleButtonClick(video1)}
              >
                <i className="m-caret-right-solid"></i>
              </button>
              <div className="separator separator-down"></div>
            </div>
            <h2 className="movie__sidebar--name">Majorat</h2>
            <i className="m-plus"></i>
          </div>
          <div className="movie__content">
            <div className="content">
              <header className="content__header">
                <h2>Majorat</h2>
              </header>
              <div className="content__raking">
                <i className="m-star-solid active"></i>
                <i className="m-star-solid active"></i>
                <i className="m-star-solid active"></i>
                <i className="m-star-solid active"></i>
                <i className="m-star-solid active"></i>
              </div>
              <p className="content__sipnosis">
              Majoratul marchează primul pas spre maturitate, o zi plină de bucurie, prietenie și momente speciale. Este despre râsete, dans, emoții unice și începutul unei noi etape în viață. Fiecare clipă trăită devine o amintire prețioasă, păstrată în suflet pentru totdeauna.
              </p>
              <ul className="content__meta">
                
                <li>
                  <strong>Protagoniști:</strong> <strong>Un suflet plin de vise și cei care îl susțin </strong>
                </li>
                <li><strong>Premiera:</strong> <strong>Ziua în care tinerețea și bucuria au fost sărbătorite </strong></li>
                <li><strong>Studio:</strong> RAWProductions</li>
              </ul>
              <hr />
              <ul className="content__featured">
                <li><i className="m-clock"></i> O zi de neuitat</li>
                <li><i className="m-movie"></i> Prietenie, Emoție, Celebrare</li>
                <li><i className="m-chart-up"></i> Popularitate: 100% printre cei dragi</li>
              </ul>
            </div>
          </div>
          <div className="movie__action">
            <i className="close__movie m-closed"></i>
          </div>
        </article>
        <article className="movie">
          <div className="movie__number">04</div>
          <div className="movie__sidebar">
            <div className="movie__sidebar--init">
              <div className="separator"></div>
              <button
                className="view__video"
                onClick={() => handleButtonClick(video1)}
              >
                <i className="m-caret-right-solid"></i>
              </button>
              <div className="separator separator-down"></div>
            </div>
            <h2 className="movie__sidebar--name">Studio</h2>
            <i className="m-plus"></i>
          </div>
          <div className="movie__content">
            <div className="content">
              <header className="content__header">
                <h2>Studio</h2>
              </header>
              <div className="content__raking">
                <i className="m-star-solid active"></i>
                <i className="m-star-solid active"></i>
                <i className="m-star-solid active"></i>
                <i className="m-star-solid active"></i>
                <i className="m-star-solid active"></i>
              </div>
              <p className="content__sipnosis">
              Este despre a lăsa o amprentă, despre momente care conectează oameni și inspirații care dau sens. E energia care unește, povestea care trezește emoție și detaliul care face diferența. Pentru noi, fiecare clipă înseamnă posibilitate, iar fiecare idee merită să devină ceva mai mare.
              </p>
              <ul className="content__meta">
                
                <li>
                  <strong>Protagoniști:</strong> <strong>Oameni cu povești de spus și idei care inspiră</strong>
                </li>
                <li><strong>Premiera:</strong> <strong>Fiecare zi în care creativitatea prinde viață</strong></li>
                <li><strong>Studio:</strong> <strong>RAWProductions</strong></li>
              </ul>
              <hr />
              <ul className="content__featured">
                <li><i className="m-clock"></i> Atât cât să creezi ceva memorabil</li>
                <li><i className="m-movie"></i> Creativitate, Impact, Conexiuni</li>
                <li><i className="m-chart-up"></i> Popularitate: Oriunde poveștile contează</li>
              </ul>
            </div>
          </div>
          <div className="movie__action">
            <i className="close__movie m-closed"></i>
          </div>
        </article>
      </section>
    </>
  );
}

export default ThirdSection;