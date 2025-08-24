import React, { useState } from "react";
import UpgradeButton from "./UpgradeButton";

export default function UpgradeDuplicate({ points, setPoints, setPointsPerSecond }) {
  const [cost, setCost] = useState(3000);
  const [purchasedTimes, setPurchased] = useState(0);

  const buyUpgrade = () => {
    if (points >= cost && purchasedTimes < 1) {
      setPoints(prev => prev - cost);
      setPointsPerSecond(prev => prev * 2); // Aumenta PPS
      setPurchased(prev => prev + 1);
    }
  };

  return (
    <UpgradeButton
      cost={cost}
      label={purchasedTimes >= 1 ? "Máximo alcanzado (1/1)" : "Duplica tus P$/s"}
      onUpgrade={purchasedTimes >= 1 ? undefined : buyUpgrade}
      disabled={points < cost || purchasedTimes >= 1}
    />
  );
}
