// Pachete.js
import React from 'react';
import './PacheteBotez.css';
import { Link } from "react-scroll"; // Import pentru react-scroll


const PacheteNunta = () => {
  const packages = [
    {
      title: "Primii Pași",
      price: "3.000 RON",
      features: [
        "1 Fotograf & 1 Videograf prezenți la eveniment (biserică și petrecere).",
        "Fotografiile surprind momentele esențiale: ceremonia religioasă, invitații, familia și copilul.",
        "Videoclip highlights (3-5 minute), perfect pentru a surprinde emoțiile zilei.",
        "Film complet al ceremoniei de la biserică și momentele principale de la petrecere.",
        "Materialele livrate digital, printr-un link securizat.",
      ]
    },
    {
      title: "Amintiri de Neuitat",
      price: "5.000 lei",
      features: [
        "1 Fotograf & 1 Videograf prezenți pe toată durata evenimentului (pregătiri, biserică și petrecere).",
        "Ședință foto în alta zi: surprindem detalii intime și emoționante acasă sau într-o locație specială (pregătiri, decor, portrete de familie).",
        "Videoclip highlights (4-6 minute) + film complet editat (1-2 ore), surprinzând toate momentele importante.",
        "Stick USB personalizat, livrat într-o cutie elegantă din sticlă, gravată cu numele copilului și data evenimentului.",
        "Album foto personalizat, dimensiune 30x30 cm, cu imagini din ziua botezului.",
        "Bonus: Drone Footage",
        "Galerie online privată, accesibilă pentru familie și invitați."
      ]
    },
    {
      title: "Zâmbete Infinite",
      price: "6.000 lei",
      features: [
        "1 Fotograf & 1 Videograf, prezenți pe toată durata evenimentului (pregătiri, biserică, petrecere).",
        "Ședință foto înainte de botez: acasă sau într-o locație naturală, surprinzând copilul și familia.",
        "Videoclip highlights (5-8 minute), cu o selecție muzicală personalizată.",
        "Film complet editat (1,5-2,5 ore), surprinzând toate momentele importante.",
        "Stick USB personalizat, livrat într-o cutie elegantă din sticlă, gravată cu numele copilului și data botezului.",
        "Album foto personalizat, dimensiune 40x30 cm, creat cu imagini din ziua botezului.",
        "3 Albume pentru bunici si nasi, dimensiune 20x20 cm, replici ale albumului principal.",
        "Canvas personalizat, dimensiune 60x90 cm, ideal pentru decorul camerei copilului sau al casei.",
        "Drone Footage"
      ]
    },
    {
      "title": "Your Way",
      "price": "Variabil",
      "features": [
        "1 Fotograf (pe durata întregului eveniment) – 1.500 RON",
        "1 Videograf (pe durata întregului eveniment) – 1.500 RON",
        "Asistent fotograf (ajută cu luminile, unghiuri secundare și echipament) – 500 RON",
        "Asistent videograf (ajută cu unghiuri secundare, echipament și stabilizatoare) – 500 RON",
        "Ședință foto înainte de botez (acasă sau într-o locație specială) – 1000 RON",
        "Ședință foto de familie post-eveniment (într-o locație aleasă împreună) – 1000 RON",
        "Cadre aeriene integrate în materialele video finale (Drone Footage) – 200 RON",
        "Stick USB personalizat, livrat într-o cutie elegantă din sticlă gravată – 400 RON",
        "Album foto personalizat (30x30 cm) – 600 RON",
        "Albume pentru bunici sau nași (20x20 cm) – 400 RON/buc.",
        "Canvas personalizat (60x90 cm) – 300 RON",
        
      ],
      "description": "Creează-ți propriul pachet alegând exact serviciile și produsele de care ai nevoie! Selectează din lista noastră pentru a avea parte de o experiență adaptată perfect dorințelor tale."
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

export default PacheteNunta;