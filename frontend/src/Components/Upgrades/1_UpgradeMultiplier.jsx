import React, { useState } from "react";
import UpgradeButton from "./UpgradeButton";

export default function UpgradeMultiplier({ points, setPoints, setPointsPerSecond }) {
  const [cost, setCost] = useState(50);
  const [purchasedTimes, setPurchased] = useState(0);

  const buyUpgrade = () => {
    if (points >= cost && purchasedTimes < 10) {
      setPoints(prev => prev - cost);
      setPointsPerSecond(prev => prev + 1); // Aumenta PPS
      setCost(prev => Math.floor(prev * 1.5)); // Subida de costo progresiva
      setPurchased(prev => prev + 1);
    }
  };

  return (
    <UpgradeButton
      cost={cost}
      label={purchasedTimes >= 10 ? "Máximo alcanzado (10/10)" : "Mejora: +1 P$/s"}
      onUpgrade={purchasedTimes >= 10 ? undefined : buyUpgrade}
      disabled={points < cost || purchasedTimes >= 10}
    />
  );
}
