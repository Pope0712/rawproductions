import React from "react";
import "./fotografii.css";

function SecondSection() {
  return (
    <div className="second-section-container">
      <div className="second-section-wrapper">
        <h1 className="second-section-header">Fotografii</h1>
        <div className="second-section-content">
          {/* Rândul 1 */}
          <div className="second-section-row">
            <div className="second-section-card">
              <h2>Nunta</h2>
              <i 
                className="fas fa-arrow-right" 
                onClick={() => {
                  window.location.assign('/Nunta');
                }}
                style={{ cursor: 'pointer' }}
              ></i>
             
              <div className="second-section-pic"></div>
              <button></button>
            </div>
            <div className="second-section-card second-section-card2">
              <h2>Botez</h2>
              <i 
                className="fas fa-arrow-right"
                onClick={() => {
                  window.location.assign('/Botez');
                }}
                style={{ cursor: 'pointer' }}
              ></i>
              
              <div className="second-section-pic"></div>
              <button></button>
            </div>
          </div>
          {/* Rândul 2 */}
          <div className="second-section-row">
            <div className="second-section-card second-section-card3">
              <h2>Majorat</h2>
              <i 
                className="fas fa-arrow-right"
                onClick={() => {
                  window.location.assign('/Majorat');
                }}
                style={{ cursor: 'pointer' }}
              ></i>
              
              <div className="second-section-pic"></div>
              <button></button>
            </div>
            <div className="second-section-card second-section-card4">
              <h2>Studio</h2>
              <i 
                className="fas fa-arrow-right"
                onClick={() => {
                  window.location.assign('/Studio');
                }}
                style={{ cursor: 'pointer' }}
              ></i>
              
              <div className="second-section-pic"></div>
              <button></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SecondSection;