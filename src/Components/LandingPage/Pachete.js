// Pachete.js
import React from 'react';
import './Pachete.css';
import { Link } from "react-scroll"; // Import pentru react-scroll


const Pachete = () => {
  const packages = [
    {
      title: "Amintiri de Neuitat - Botez", 
      price: "4.500 lei",
      features: [
        "1 Fotograf & 1 Videograf prezenți pe toată durata evenimentului (pregătiri, biserică și petrecere).",
        "Ședință foto înainte de botez: surprindem detalii intime și emoționante acasă sau într-o locație specială (pregătiri, decor, portrete de familie).",
        "Videoclip highlights (4-6 minute) + film complet editat (1-2 ore), surprinzând toate momentele importante.",
        "Stick USB personalizat, livrat într-o cutie elegantă din sticlă, gravată cu numele copilului și data evenimentului.",
        "Album foto personalizat, dimensiune 30x30 cm, cu imagini din ziua botezului.",
        "Bonus: Drone Footage",
        "Galerie online privată, accesibilă pentru familie și invitați."
      ]
    },
    {
      title: "Memories - Nunta",
      price: "7.500 RON",
      features: [
        "1 Fotograf & 1 Videograf prezenți pe durata întregului eveniment.",
        "Ședință foto „Save the Date”: realizată înainte de nuntă, într-o locație specială, perfectă pentru a anunța evenimentul.",
        "Ședință foto în ziua nunții: pregătiri și locații speciale înainte de ceremonie.",
        "Videoclip highlights (4-6 minute) + film complet editat (1-2 ore).",
        "Stick USB personalizat, livrat într-o cutie elegantă din sticlă, gravată cu numele mirilor.",
        "Album foto personalizat, dimensiune 30x30 cm, creat cu imagini din ziua nunții.",
        "2 Albume pentru părinți, dimensiune 20x20 cm, replică a albumului principal.",
        "Ședință foto post-eveniment: o sesiune relaxată, într-o locație specială aleasă împreună.",
        "Bonus: Drone Footage",
      ]
    },
    {
      title: "Glow Party - Majorat",
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
      title: "Reel & Style - Studio",
      price: "1.500 RON",
      features: [
        "Durată: 1,5 ore, în studio sau într-o locație aleasă de tine.",
        "1 reel video profesional (15-30 secunde), editat dinamic pentru rețelele sociale.",
        "10 fotografii editate, livrate digital.",
        "Video personalizat: Cadre filmate în funcție de scopul materialului (fashion, lifestyle, promovare personală).",
        "Livrare rapidă: Materialele sunt pregătite în 7 zile lucrătoare."
      ]
    }
  ];

  return (
    <div className="packages-container" id="packages-container">
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

export default Pachete;