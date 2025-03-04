import React from 'react';
import './WhyUs.css';

const features = [
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="currentColor"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M19 3h-4a2 2 0 0 0 -2 2v12a4 4 0 0 0 8 0v-12a2 2 0 0 0 -2 -2" />
        <path d="M13 7.35l-2 -2a2 2 0 0 0 -2.828 0l-2.828 2.828a2 2 0 0 0 0 2.828l9 9" />
        <path d="M7.3 13h-2.3a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h12" />
        <line x1="17" y1="17" x2="17" y2="17.01" />
      </svg>
    ),
    title: 'Povestea ta, spusă pe stilul tău',
    description: 'Fiecare eveniment este unic, iar noi credem că amintirile tale ar trebui să reflecte acest lucru. Ne adaptăm stilul în funcție de personalitatea ta și de vibe-ul evenimentului, pentru ca fiecare fotografie și filmare să spună povestea ta, exact așa cum o visezi.',
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="currentColor"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <polyline points="13 3 13 10 19 10 11 21 11 14 5 14 13 3" />
      </svg>
    ),
    title: 'Amintiri la timp, fără bătăi de cap',
    description: 'Știm cât de nerăbdător ești să retrăiești momentele speciale. De aceea, lucrăm rapid și eficient, livrându-ți fotografiile și videoclipurile la timp, fără compromisuri. Totul este simplu, clar și fără stres pentru tine.',
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="currentColor"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M3 21h4l13 -13a1.5 1.5 0 0 0 -4 -4l-13 13v4" />
        <line x1="14.5" y1="5.5" x2="18.5" y2="9.5" />
        <polyline points="12 8 7 3 3 7 8 12" />
        <line x1="7" y1="8" x2="5.5" y2="9.5" />
        <polyline points="16 12 21 17 17 21 12 16" />
        <line x1="16" y1="17" x2="14.5" y2="18.5" />
      </svg>
    ),
    title: 'Tot ce ai nevoie, într-un singur loc',
    description: 'De la fotografii și filmări, până la albume premium și tablouri canvas, avem tot ce îți trebuie pentru a păstra momentele speciale într-un mod memorabil. Găsești totul la noi, fără să pierzi timp căutând în altă parte.',
  },
];

const WhyUs = () => {
  return (
    <div className="whyus-container" id="whyus-container">
      <div className="whyus-header">
        <span className="whyus-subtitle">De ce să ne alegi pe noi?</span>
        <h2 className="whyus-title">Transpunem momentele tale speciale în amintiri care vor dura o viață.</h2>
        <p className="whyus-description">
        Fiecare eveniment are propria sa poveste, iar noi îl abordăm cu grijă, pasiune și profesionalism. Ne asigurăm că fiecare moment este capturat exact așa cum ți-l imaginezi – natural, plin de emoție și unic. Suntem alături de tine pentru a transforma ziua ta specială într-o amintire care va rămâne vie pentru totdeauna.
        </p>
      </div>
      <div className="whyus-features">
        {features.map((feature, index) => (
          <div className="whyus-feature" key={index}>
            <div className="whyus-icon">{feature.icon}</div>
            <h3 className="whyus-feature-title">{feature.title}</h3>
            <p className="whyus-feature-description">{feature.description}</p>
          </div>
        ))}
      </div>
      <div className="whyus-gradient"></div>
    </div>
  );
};

export default WhyUs;
