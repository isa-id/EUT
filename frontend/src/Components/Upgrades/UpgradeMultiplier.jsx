import UpgradeButton from "./UpgradeButton";
import React from "react";
import { useState } from "react";

export default function UpgradeMultiplier({ points, setPoints, setPPS }) {
  const [cost, setCost] = useState(50);
  const [purchasedTimes, setPurchased] = useState(0);
  const buyUpgrade = () => {
    if (points >= cost) {
      setCost((prev) => Math.floor(prev * 1.5));
      setPoints((prev) => prev - cost);
      setPPS((prev) => prev + 1);
      setPurchased((prev) => prev + 1);
    }
  };
  if (purchasedTimes >= 10) {
    return (
    <UpgradeButton
      cost={cost}
      label="Haz alcanzado el máximo (10/10)"
      disabled={points > cost}
    />
  )}
  return (
    <UpgradeButton
      cost={cost}
      label="Mejora: +1 punto/seg"
      onUpgrade={buyUpgrade}
      disabled={points < cost}
    />

    
  );
}
