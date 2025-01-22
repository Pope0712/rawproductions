// Pachete.js
import React from 'react';
import './PacheteNunta.css';
import { Link } from "react-scroll"; // Import pentru react-scroll


const PacheteNunta = () => {
  const packages = [
    {
      title: " Essentials",
      price: "5.000 RON",
      features: [
        "1 Fotograf & 1 Videograf prezenți pe durata întregului eveniment.",
        "Fotografie și filmare din ziua nunții: biserică, cununie civilă, petrecere.",
        "Materialele livrate digital (link securizat prin Google Drive sau WeTransfer).",
        "Toate fotografiile vor fi selectate și ajustate cu grijă pentru a reflecta cele mai frumoase momente.",
        "Videoclip highlights (3-5 minute) + film complet al nunții.",
        "Galerie online privată, accesibilă pentru tine și invitații tăi.",
        "Livrare rapidă: Materialele vor fi pregătite în 30 de zile."
      ]
    },
    {
      title: "Memories",
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
      title: "Infinity",
      price: "12.000 RON",
      features: [
        "2 Fotografii & 2 Videografi, pentru o acoperire extinsă și cadre surprinse din mai multe perspective.",
        "„Save the Date”: o ședință foto realizată înainte de nuntă, ideală pentru invitații și anunțuri.",
        "Trash the Dress: ședință foto după nuntă, într-o locație spectaculoasă, care adaugă un aer artistic și relaxat poveștii voastre.",
        "Toate fotografiile din ziua nunții sunt selectate, editate și ajustate cu grijă, astfel încât fiecare cadru să surprindă emoțiile și povestea voastră exact așa cum le-ați trăit.",
        "Galerie online privată: acces ușor și rapid pentru tine și invitații tăi.",
        "Videoclip highlights (5-8 minute), cu o selecție muzicală personalizată.",
        "Film complet editat (1,5-2,5 ore), surprinzând toate momentele importante.",
        "Stick USB personalizat, livrat într-o cutie elegantă din sticlă, gravată cu numele mirilor și data nunții.",
        "Album foto personalizat, dimensiune 30x30 cm, creat cu imagini din ziua nunții.",
        "3 Albume pentru părinți si nasi, dimensiune 20x20 cm, replici ale albumului principal.",
        "Canvas personalizat, dimensiune 60x90 cm, ideal pentru decorul casei.",
        "Drone Footage",
        
      ]
    },
    {
      "title": "Your Way",
      "price": "Variabil",
      "features": [
        "1 Fotograf (pe durata întregului eveniment) – 3.500 RON",
        "1 Videograf (pe durata întregului eveniment) – 3.500 RON",
        "Asistent fotograf (ajută cu luminile, unghiuri secundare și echipament) – 1000 RON",
        "Asistent videograf (ajută cu unghiuri secundare, echipament și stabilizatoare) – 1000 RON",
        "Ședință foto „Save the Date” (înainte de nuntă) – 1.000 RON",
        "Ședință foto Trash the Dress (după nuntă) – 1.500 RON",
        "Ședință foto post-eveniment (într-o locație aleasă împreună) – 800 RON",
        "Cadre aeriene integrate în materialele video finale (Drone Footage) – 500 RON",
        "Stick USB personalizat, livrat într-o cutie elegantă din sticlă gravată – 400 RON",
        "Album foto personalizat (30x30 cm) – 500 RON",
        "Albume pentru părinți/năși (20x20 cm) – 300 RON/buc.",
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