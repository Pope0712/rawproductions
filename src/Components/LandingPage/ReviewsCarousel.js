import React, { useState, useEffect, useRef } from 'react';
import './ReviewsCarousel.css';

function ReviewsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [testimonialFade, setTestimonialFade] = useState(false);
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
      id: 3,
      name: "Andrei1",
      text: "Wow! 😍 Ma faci sa plang. Sunt superbe😍😍😍Ne-ai emotionat foarte tare. Multumim din suflt pentru rabdare si pentru aceste minunatii😍😍😍ARTA!!!❤️💙❤️",
      rating: 5,
      image: "/images/.jpg"
    },
    {
      id: 3,
      name: "Luca1",
      text: "Noi deja ne gandim sa le scoatem pe toate intr-un album si sa le schimbam din cand in cand in rama😂😂",
      rating: 5,
      image: "/images/.jpg"
    },
    {
      id: 3,
      name: "Andrei3",
      text: "Dupa nunta noastra, ne-au ramas o multime de amintiri minunate, datorita lui Andrei. Este o persoana extrem de creativa, cu cadre si idei extraordinare, care poarta amprenta lui artistica unica. Desi nu am avut nicio idee proprie, i-am oferit toata increderea noastra si l-am lasat sa-si faca treaba, stiind ca suntem pe maini bune. A fost punctual si foarte atent la fiecare detaliu.     Iti multumim din nou pentru tot! Speram ca talentul tau sa fie apreciat de cat mai multe persoane!",
      rating: 5,
      image: "/images/.jpg"
    },
    {
      id: 3,
      name: "Andrei2",
      text: "O echipa tanara care aspira catre pogres constant. Sunt creativi, am observat ca mirii nasii si nuntasii sunt foarte relaxati si pozeaza in ipostaze naturale astfel ca pozele din album vor fi foarte frumoase. Recomand!",
      rating: 5,
      image: "/images/.jpg"
    },

    
    
    
  ];

  const getVisibleReviews = () => {
    const totalReviews = reviews.length;
    return [
      reviews[(currentIndex - 1 + totalReviews) % totalReviews],
      reviews[currentIndex],
      reviews[(currentIndex + 1) % totalReviews]
    ];
  };

  const changeReview = (direction) => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setTestimonialFade(true);
    
    setTimeout(() => {
      if (direction === 'next') {
        setCurrentIndex((prevIndex) => 
          (prevIndex + 1) % reviews.length
        );
      } else {
        setCurrentIndex((prevIndex) => 
          (prevIndex - 1 + reviews.length) % reviews.length
        );
      }
      
      setTimeout(() => {
        setTestimonialFade(false);
      }, 300);
      
      setTimeout(() => {
        setIsAnimating(false);
      }, 200);
    }, 300);

    resetInterval();
  };

  const resetInterval = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(() => changeReview('next'), 5000);
  };

  useEffect(() => {
    intervalRef.current = setInterval(() => changeReview('next'), 5000);
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  const renderStars = () => {
    return (
      <div className="stars">
        {[...Array(5)].map((_, index) => (
          <span key={index} className="star">★</span>
        ))}
      </div>
    );
  };

  return (
    <div className="reviews-section">
      <div className="reviews-header">
        <h2 className="subtitle">RECENZII</h2>
        <h1 className="title">Ce spun clientii nostrii</h1>
      </div>

      <div className="testimonial-content">
        <p className={`main-testimonial ${testimonialFade ? 'fade' : ''}`}>
          {reviews[currentIndex].text}
        </p>
        {renderStars()}
      </div>

      <div className={`reviews-carousel ${isAnimating ? 'animating' : ''}`}>
        <div className="reviews-container">
          {getVisibleReviews().map((review, index) => (
            <button
              key={review.id}
              className={`review-card position-${index}`}
              onClick={() => index !== 1 && changeReview(index === 0 ? 'prev' : 'next')}
            >
              <div className="review-content">
                <img 
                  src={review.image} 
                  alt={review.name}
                  className="review-image"
                />
                <span className="review-name">{review.name}</span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ReviewsCarousel;