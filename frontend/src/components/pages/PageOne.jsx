import React from "react";
import UpgradeCard from "../Upgrades/UpgradeCard";
import "./PageOne.css";

export default function PageOne() {
  // 🔹 Aquí en el futuro vendrán las upgrades desde context/state
  const upgrades = [
    { title: "+1 P$/s", cost: 50 },
    { title: "x2 P$/s", cost: 200 },
    { title: "+5 P$/s", cost: 500 },
    { title: "x10 P$/s", cost: 2000 },
    { title: "+20 P$/s", cost: 5000 },
    { title: "x50 P$/s", cost: 10000 },
    { title: "+100 P$/s", cost: 20000 },
    { title: "x200 P$/s", cost: 40000 },
    { title: "+500 P$/s", cost: 100000 }, // extra para probar el scroll
  ];

  return (
    <main className="page-1">
      <h2>Upgrades</h2>

      <div className="upgrades-grid">
        {upgrades.map((upgrade, index) => (
          <UpgradeCard key={index} title={upgrade.title} cost={upgrade.cost} />
        ))}
      </div>
    </main>
  );
}
