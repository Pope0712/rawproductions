import React, { useState, useEffect, useRef } from 'react';
import './ReviewsCarousel.css';

function ReviewsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null);

  const reviews = [
    {
      id: 1,
      name: "Irina & Catalin",
      text: "Vă mulțumim foarte mult🤗🤗 filmarea este super și cadrele foarte bine inspirate…ne simțim ca la Holywood🤗🤗🤗🤗.Cu siguranță vă vom recomanda prietenilor și să ne vedem și la alte evenimente fericite!!!!",
      rating: 5,
      image: "/images/16.jpg"
    },
    {
      id: 2,
      name: "Gabriel & Andreea",
      text: "Deci… abia acum ne-am uitat la trailer și am rămas cu gura căscată amândoi. Piele de găină. Nu ne dăm seama de unde ai putut avea atâta viziune și inspirație, dar zici ca e trailerul unui film foarte mișto. Suntem total șocați, în sensul bun, bineînțeles. Acum, să știi ca ai ridicat așteptările foarte mult în privința filmării 😂 Genial! Pur si simplu, genial!",
      rating: 5,
      image: "/images/17.jpeg"
    },
    {
      id: 3,
      name: "Roxana & Madalin",
      text: "Sunteti criminali 😂😂😂😂😂😂😂😂 partea de la final. Am ras de am murit 😂😂😂😂 bravo, baieti. Apreciem simtul umorului. Roxana nu mai poate de rusine 😂😂😂😂 that s a big plus for me. Multumim din nou pentru tot. Este incredibil ce ati facut.",
      rating: 5,
      image: "/images/13.jpg"
    },
    {
      id: 4,
      name: "Andrei1",
      text: "Wow! 😍 Ma faci sa plang. Sunt superbe😍😍😍Ne-ai emotionat foarte tare. Multumim din suflt pentru rabdare si pentru aceste minunatii😍😍😍ARTA!!!❤️💙❤️",
      rating: 5,
      image: "/images/.jpg"
    },
    {
      id: 5,
      name: "Luca1",
      text: "Noi deja ne gandim sa le scoatem pe toate intr-un album si sa le schimbam din cand in cand in rama😂😂",
      rating: 5,
      image: "/images/.jpg"
    },
    {
      id: 6,
      name: "Andrei3",
      text: "Dupa nunta noastra, ne-au ramas o multime de amintiri minunate, datorita lui Andrei. Este o persoana extrem de creativa, cu cadre si idei extraordinare, care poarta amprenta lui artistica unica. Desi nu am avut nicio idee proprie, i-am oferit toata increderea noastra si l-am lasat sa-si faca treaba, stiind ca suntem pe maini bune. A fost punctual si foarte atent la fiecare detaliu.     Iti multumim din nou pentru tot! Speram ca talentul tau sa fie apreciat de cat mai multe persoane!",
      rating: 5,
      image: "/images/.jpg"
    },
    {
      id: 7,
      name: "Andrei2",
      text: "O echipa tanara care aspira catre pogres constant. Sunt creativi, am observat ca mirii nasii si nuntasii sunt foarte relaxati si pozeaza in ipostaze naturale astfel ca pozele din album vor fi foarte frumoase. Recomand!",
      rating: 5,
      image: "/images/.jpg"
    }, 
  
  ];

  const totalReviews = reviews.length;

  const getVisibleReviews = () => {
    return [
      reviews[(currentIndex - 1 + totalReviews) % totalReviews], // Left card
      reviews[currentIndex], // Center card
      reviews[(currentIndex + 1) % totalReviews], // Right card
    ];
  };

  const changeReview = (direction) => {
    if (direction === 'next') {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalReviews);
    } else {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + totalReviews) % totalReviews);
    }
    resetInterval();
  };

  const resetInterval = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      changeReview('next');
    }, 5000);
  };

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      changeReview('next');
    }, 5000);

    return () => clearInterval(intervalRef.current);
  }, []);

  const visibleReviews = getVisibleReviews();

  return (
    <div className="reviews-section">
      <div className="reviews-header">
        <h2 className="subtitle">RECENZII</h2>
        <h1 className="title">Ce spun clienții noștri</h1>
      </div>
      <div className="testimonial-content">
        <p className="main-testimonial">{visibleReviews[1].text}</p>
        <div className="stars">
          {[...Array(5)].map((_, index) => (
            <span key={index} className="star">★</span>
          ))}
        </div>
      </div>
      <div className="reviews-carousel">
        <div className="reviews-container">
          {visibleReviews.map((review, index) => (
            <div
              key={review.id}
              className={`review-card position-${index}`}
              onClick={() => {
                if (index === 0) changeReview('prev'); // Click pe cardul din stânga
                if (index === 2) changeReview('next'); // Click pe cardul din dreapta
              }}
            >
              <div className="review-content">
                <img
                  src={review.image}
                  alt={review.name}
                  className="review-image"
                />
                <span className="review-name">{review.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ReviewsCarousel;
