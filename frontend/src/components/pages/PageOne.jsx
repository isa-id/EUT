import React from "react";
import UpgradeCard from "../Upgrades/UpgradeCard";
import "./PageOne.css";

export default function PageOne() {
  // 🔹 En el futuro esto vendrá desde el contexto
  const upgrades = [
    { title: "+1 P$/s", cost: 50, currency: "points" },
    { title: "x2 P$/s", cost: 200, currency: "points" },
    { title: "+5 P$/s", cost: 500, currency: "points" },
    { title: "x10 P$/s", cost: 2000, currency: "points" },
    { title: "+20 P$/s", cost: 5000, currency: "points" },

    { title: "+1 SID/s", cost: 100, currency: "sids" },
    { title: "x2 SID/s", cost: 500, currency: "sids" },
    { title: "+5 SID/s", cost: 2000, currency: "sids" },
    { title: "x10 SID/s", cost: 8000, currency: "sids" },

    { title: "x10 riddle/s", cost: 8000, currency: "riddle" },
  ];

  return (
    <main className="page-1">
      <h2>Points (P$)</h2>

      <div className="upgrades-grid">
        {upgrades.map((upgrade, index) => (
          <UpgradeCard 
            key={index} 
            title={upgrade.title} 
            cost={upgrade.cost} 
            currency={upgrade.currency} // 👈 se pasa al card
          />
        ))}
      </div>
    </main>
  );
}
