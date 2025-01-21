import React from "react";
import "./SecondSection.css";

const services = [
  {
    id: 1,
    title: "Fotografie de eveniment",
    icon: "fa-solid fa-camera",
    description: "Transformăm momentele care contează în amintiri de neuitat, capturate în cele mai frumoase cadre. Indiferent dacă organizezi o nuntă, un botez sau un alt eveniment special, suntem aici să surprindem emoțiile autentice, bucuria și detaliile care fac diferența. Prin fotografiile noastre, povestea ta va prinde viață, devenind o amintire pe care o vei prețui pentru totdeauna.",
  },
  {
    id: 2,
    title: "Videografie cinematică",
    icon: "fa-solid fa-video",
    description: "Fiecare eveniment spune o poveste plină de emoții, bucurie și momente unice. Prin filmările noastre, surprindem autenticitatea acestor clipe și le transformăm în amintiri care te vor emoționa de fiecare dată. Videoclipurile tale vor păstra magia și esența evenimentului tău, pentru ca momentele speciale să rămână vii și de neuitat.",
  },
  {
    id: 3,
    title: "Albume și produse custom",
    icon: "fa-solid fa-gem",
    description: "Păstrează-ți cele mai frumoase momente aproape, într-un mod care să le dea valoarea pe care o merită. Oferim albume foto elegante, tablouri canvas de calitate și produse personalizate, create pentru a-ți transforma amintirile în ceva unic. Fiecare detaliu este conceput cu grijă, astfel încât momentele tale speciale să rămână vii și prețuite pentru o viață.",
  },
];

function SecondSection() {
  return (
    <section className="services-section" id='SecondSection'>
      <div className="services-header">
        <span className="section-subtitle">CE OFERIM</span>
        <h2 className="section-title">Serviciile noastre</h2>
        <div className="red-bar"></div>
        <div className="red-bar2"></div> {/* Bara roșie actualizată */}
      </div>
      <div className="services-container">
        {services.map((service) => (
          <div className="service-card" key={service.id}>
            <div className="icon-container">
              <i className={service.icon}></i>
            </div>
            <div className="service-details">
              <span className="service-number">{`0${service.id}`}</span>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SecondSection;
