import React, { useState, useEffect, useRef } from 'react';
import './FourSection.css';

const FourSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const stats = [
    {
      topText: "Evenimente",
      value: 200,
      displayValue: "200",
      bottomText: "Capturate",
      isRed: true
    },
    {
      topText: "Clienți",
      value: 150,
      displayValue: "150",
      bottomText: "Fericiți",
      isRed: false
    },
    {
      topText: "Ore de ",
      value: 2000,
      displayValue: "2.000+",
      bottomText: "Material Filmate",
      isRed: true
    },
    {
      topText: "Proiecte",
      value: 500,
      displayValue: "500+",
      bottomText: "Finalizate",
      isRed: true
    },
    {
      topText: "Ani",
      value: 8,
      displayValue: "8+",
      bottomText: "de Experiență",
      isRed: true
    },
    {
      topText: "Clienți",
      value: 100,
      displayValue: "100%",
      bottomText: "Satisfăcuți",
      isRed: false
    }
  ];

  const [counters, setCounters] = useState(stats.map(() => 0));

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    stats.forEach((stat, index) => {
      const duration = 2000; // 2 seconds animation
      const steps = 60; // Update every ~33ms
      const increment = stat.value / steps;
      let current = 0;
      let step = 0;

      const timer = setInterval(() => {
        step++;
        current += increment;
        
        if (step === steps) {
          current = stat.value;
          clearInterval(timer);
        }

        setCounters(prev => {
          const newCounters = [...prev];
          newCounters[index] = current;
          return newCounters;
        });
      }, duration / steps);

      return () => clearInterval(timer);
    });
  }, [isVisible]);

  const formatCounter = (value, displayFormat) => {
    if (displayFormat.includes('+') || displayFormat.includes('%')) {
      // Pentru 8+ și 100%, păstrează formatul final fix
      const staticPart = displayFormat.replace(/[0-9.]/g, ''); // Elimină cifrele
      return Math.round(value) + staticPart; // Adaugă + sau % la numărătoare
    }
    if (displayFormat.includes('k')) {
      // Pentru valori mari (ex. 5k)
      return Math.round(value / 100) / 10 + 'k';
    }
    if (Number.isInteger(parseFloat(displayFormat))) {
      // Pentru valori numerice întregi
      return Math.round(value).toString();
    }
    return value.toFixed(1); // Format general pentru alte cazuri
  };
  

  return (
    <div className="success-section" ref={sectionRef}>
      <h2 className="success-title">
        <span className="success-subtitle">Ce rămâne în urmă</span>
        <span className="main-title">Povestea noastră în cifre</span>
      </h2>
      
      <div className="stats-grid">
        {stats.map((stat, index) => (
          <div key={index} className={`stat-item ${index < stats.length - 1 ? 'with-divider' : ''}`}>
            <div className="stat-top-text">{stat.topText}</div>
            <div className={`stat-value ${stat.isRed ? 'red-text' : 'white-text'} ${isVisible ? 'animate' : ''}`}>
              {formatCounter(counters[index], stat.displayValue)}
            </div>
            <div className="stat-bottom-text">{stat.bottomText}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FourSection;