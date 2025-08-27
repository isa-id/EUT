import React, { useState } from "react";
import "./UpgradeCard.css";

export default function UpgradeCard({ title, cost, onBuy, disabled, currency }) {
  const [glow, setGlow] = useState(false);

  const handleBuy = () => {
    if (onBuy) onBuy();
    setGlow(true);
    setTimeout(() => setGlow(false), 500);
  };

  return (
    <div className={`upgrade-card ${glow ? `glow-${currency}` : ""}`}>
      <h3 className="upgrade-title">{title}</h3>
      <p className="upgrade-cost">Costo: {cost}</p>
      <button 
        className={`upgrade-button ${currency}`}  
        onClick={handleBuy} 
        disabled={disabled}
      >
        Comprar
      </button>
    </div>
  );
}
