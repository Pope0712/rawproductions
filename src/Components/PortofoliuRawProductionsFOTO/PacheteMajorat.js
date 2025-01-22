// Pachete.js
import React from 'react';
import './PacheteMajorat.css';
import { Link } from "react-scroll"; // Import pentru react-scroll


const PacheteMajorat = () => {
  const packages = [
    {
      title: "Startul Petrecerii",
      price: "2.000 lei",
      features: [
        "1 Fotograf & 1 Videograf, prezenți pe durata petrecerii (5-6 ore).",
        "Fotografiile vor surprinde momentele importante: sosirea invitaților, momentele cheie (tort, dansuri) și atmosfera generală.",
        "Videoclip highlights (3-5 minute): surprindem energia și emoțiile petrecerii într-un rezumat scurt.",
        "Film complet editat al petrecerii (1-1,5 ore).",
        "Materialele livrate digital, printr-un link securizat.",
        "Galerie online privată, accesibilă pentru tine și invitații tăi."
      ]
    },
    {
      title: "Glow Party",
      price: "3.000 RON",
      features: [
        "1 Fotograf & 1 Videograf, prezenți pe durata întregului eveniment (7-8 ore).",
        "Ședință foto înainte de petrecere, într-o locație aleasă împreună, pentru portrete individuale și de familie.",
        "Videoclip highlights (4-6 minute): momentele cele mai importante ale serii într-un rezumat captivant.",
        "Film complet editat al petrecerii (1,5-2 ore).",
        "Stick USB personalizat, livrat într-o cutie elegantă din sticlă, gravată cu numele sărbătoritului și data evenimentului.",
        "Album foto personalizat, dimensiune 30x30 cm, creat cu imagini din petrecere și ședința foto pre-eveniment.",
        "Bonus: Drone Footage",
        "Galerie online privată, accesibilă pentru tine și invitații tăi."
      ]
    },
    {
      title: "Golden Moments",
      price: " 4.000 RON",
      features: [
        "1 Fotograf & 1 Videograf, prezenți pe toată durata evenimentului.",
        "Ședință foto înainte de petrecere: portrete creative și de familie într-o locație aleasă împreună.",
        "Ședință foto după eveniment, pentru un vibe relaxat și cadre creative în ținute mai casual.",
        "Videoclip highlights (5-8 minute), editat într-un stil cinematic și dinamic.",
        "Film complet editat (2-3 ore), surprinzând fiecare detaliu al petrecerii.",
        "Film „Behind the Scenes”, cu momente naturale și amuzante surprinse în timpul pregătirilor și petrecerii.",
        "Stick USB personalizat, livrat într-o cutie elegantă din sticlă, gravată cu numele sărbătoritului și data evenimentului.",
        "Album foto personalizat, dimensiune 40x30 cm, creat cu imagini din ședințele foto și petrecere.",
        "Canvas personalizat, dimensiune 60x90 cm, perfect pentru camera sărbătoritului.",
        "Drone Footage",
        "Galerie online privată, accesibilă pentru tine și invitații tăi."
      ]
    },
    {
      "title": "Your Way",
      "price": "Variabil",
      "features": [
        "1 Fotograf (pe durata întregului eveniment) – 1.000 RON",
        "1 Videograf (pe durata întregului eveniment) – 1.000 RON",
        "Asistent fotograf (ajută cu luminile, unghiuri secundare și echipament) – 500 RON",
        "Asistent videograf (ajută cu unghiuri secundare, echipament și stabilizatoare) – 500 RON",
        "Ședință foto înainte de eveniment (într-o locație specială sau acasă) – 200 RON",
        "Stick USB personalizat, livrat într-o cutie elegantă din sticlă gravată – 300 RON",
        "Album foto personalizat (30x30 cm) – 500 RON",
        "Albume pentru părinți (20x20 cm) – 300 RON/buc.",
        "Canvas personalizat (60x90 cm) – 300 RON",
      ],
      "description": "Creează-ți propriul pachet pentru majorat alegând exact serviciile și produsele care contează pentru tine! Selectează din lista noastră pentru a avea parte de o experiență perfect personalizată."
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
  Alege
</Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default PacheteMajorat;