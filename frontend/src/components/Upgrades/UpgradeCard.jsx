// UpgradeCard.jsx
import React, { useState } from "react";
import "./UpgradeCard.css";
import { useAudio } from "../../context/AudioContext";
import { parseCurrency } from "../../utils/parseCurrency";

export default function UpgradeCard({ title, cost, onBuy, disabled, currency, buttonText, maxed }) {
  const [glow, setGlow] = useState(false);

  const { playSound } = useAudio();
  
  const handleBuy = () => {
    if (onBuy && !disabled) 
    onBuy();
    playSound("/sounds/Touhou Death Sound Effect.mp3"); // efecto de compra
    setGlow(true);
    setTimeout(() => setGlow(false), 500);

    if (disabled) {
      playSound("/sounds/Locked.mp3"); // efecto de error
    }
  };

  return (
    <div className={`upgrade-card ${glow ? `glow-${currency}` : ""}`}>
      <h3 className="upgrade-title">{title}</h3>
      <p className="upgrade-cost"> {maxed ? "Máximo" : "Costo: "+ parseCurrency(cost)}</p>
      <button
        className={`upgrade-button ${currency} ${maxed ? "maxed" : ""}`}
        onClick={handleBuy}
        disabled={disabled}
      >
        {buttonText || "Comprar"}
      </button>
    </div>
  );
}
