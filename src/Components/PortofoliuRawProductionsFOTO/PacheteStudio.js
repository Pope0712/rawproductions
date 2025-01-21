// Pachete.js
import React from 'react';
import './PacheteStudio.css';
import { Link } from "react-scroll"; // Import pentru react-scroll


const PacheteStudio = () => {
  const packages = [
    {
      title: "Momente Esențiale",
      price: "300 RON",
      features: [
        "Durată: 1 oră, în studio sau într-o locație exterioară (parc, grădină, etc.).",
        "Fotografii livrate: 20 de imagini editate profesional, livrate digital.",
        "Posibilitatea de a include cadre de familie, portrete individuale sau fotografii cu prietenii.",
        "Livrare digitală: Galerie online privată cu toate fotografiile editate."
      ]
    },
    {
      title: "Reel & Style",
      price: "1.500 RON",
      features: [
        "Durată: 1,5 ore, în studio sau într-o locație aleasă de tine.",
        "1 reel video profesional (15-30 secunde), editat dinamic pentru rețelele sociale.",
        "10 fotografii editate, livrate digital.",
        "Video personalizat: Cadre filmate în funcție de scopul materialului (fashion, lifestyle, promovare personală).",
        "Livrare rapidă: Materialele sunt pregătite în 7 zile lucrătoare."
      ]
    },
    {
      title: "Business Pro",
      price: "2.500 RON",
      features: [
        "Durată: 3 ore, în studio sau la locația afacerii tale (birouri, showroom-uri, restaurante, spații comerciale).",
        "20 de fotografii profesionale pentru site-ul web, materiale de marketing sau rețele sociale (produse, echipă, locație).",
        "1 videoclip corporate (1-2 minute), cu editare cinematică și muzică de fundal inclusă.",
        "2 reels video profesionale (15-30 secunde fiecare), editate dinamic pentru rețelele sociale.",
        "Drone Footage",
      ]
    },
    {
      title: "Real Estate Focus",
      price: "4.500 RON",
      features: [
        "Durată: 4 ore, la locația imobilului (apartamente, case, clădiri de birouri).",
        "Fotografii interioare și exterioare: 25 de imagini editate profesional, care evidențiază detaliile și avantajele proprietății.",
        "Videoclip de prezentare: 1 videoclip de 1-3 minute, cu editare cinematică, care prezintă proprietatea din toate unghiurile.",
        "2 reels video profesionale (15-30 secunde fiecare), editate dinamic pentru rețelele sociale.",
        "Tur virtual 360°: Crearea unui tur virtual care permite potențialilor clienți să exploreze proprietatea online, din confortul casei lor. Turul include puncte de interes interactive și un design intuitiv.",
        "Drone Footage"
      ]
    }
  ];

  return (
    <div className="packages-container">
      <div className="hero-section">
        <img 
          src="./images/5.jpg"
          alt="Car service"
          className="hero-image"
        />
        <div className="hero-content">
          <h1 className="hero-title">
          Pregătit să programezi<br />
             <span>evenimentul?</span>
          </h1>
          <p>Programează o întâlnire online astăzi</p>
        </div>
      </div>

      <section className="pricing-section">
        <div className="pricing-header">
          <h2 className="pricing-subtitle">PACHETE</h2>
          <h3 className="pricing-title">Alege pachetul potrivit pentru tine</h3>
        </div>

        <div className="pricing-cards">
          {packages.map((pkg, index) => (
            <div key={index} className="pricing-card">
              <h3 className="card-title">{pkg.title}</h3>
              <div className="card-price">
                <span></span>{pkg.price}
              </div>
              <ul className="features-list">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="feature-item">
                    <span className="feature-icon"></span>
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
  to="calendar"
  spy={true}
  smooth={true}
  offset={-370}
  duration={1500}
  className="book-button" // Mutăm clasa CSS pe Link
>
  Book Now
</Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default PacheteStudio;