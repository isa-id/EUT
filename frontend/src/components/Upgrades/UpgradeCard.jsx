import React, { useState } from "react";
import "./UpgradeCard.css";

export default function UpgradeCard({ title, cost, onBuy, disabled }) {
  const [glow, setGlow] = useState(false);

  const handleBuy = () => {
    if (onBuy) onBuy();
    // activa el glow visualmente
    setGlow(true);
    setTimeout(() => setGlow(false), 500); // se apaga después de 0.5s
  };

  return (
    <div className={`upgrade-card ${glow ? "glow" : ""}`}>
      <h3 className="upgrade-title">{title}</h3>
      <p className="upgrade-cost">Costo: {cost}</p>
      <button 
        className="upgrade-button" 
        onClick={handleBuy} 
        disabled={disabled}
      >
        Comprar
      </button>
    </div>
  );
}
