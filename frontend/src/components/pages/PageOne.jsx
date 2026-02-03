// src/components/Pages/PageOne.js
import React from "react";
import { useGame } from "../../context/GameContext";
import UpgradeCard from "../Upgrades/UpgradeCard";
import { parseCurrency } from "@/utils/parseCurrency";
import "./Pages.css";

export default function PageOne() {
  const { state, dispatch } = useGame();

  const points = state.currencies.points;
  const upgrades = state.upgrades.points;

  const started = upgrades.find((u) => u.id === "p0")?.purchased > 0;

  const handleBuy = (upgrade) => {
    dispatch({ type: "BUY_UPGRADE", currency: "points", upgradeId: upgrade.id });
  };

  return (
    <main className="page-1">
      <h2>
        Points (P$): {parseCurrency(points.amount)} | PPS: {parseCurrency(points.pps)}
      </h2>

      <div className="upgrades-grid">
        {upgrades.map((upgrade) => {
          const maxed = upgrade.purchased >= (upgrade.maxPurchases || Infinity);
          const affordable = points.amount >= upgrade.cost;
          const locked = !started && upgrade.id !== "p0";

          let buttonText = "Comprar";
          if (locked) buttonText = "Bloqueado";
          else if (maxed) buttonText = "Máximo alcanzado";
          else if (!affordable) buttonText = "Te falta dinero";

          return (
            <UpgradeCard
              key={upgrade.id}
              title={`${upgrade.label} (${upgrade.purchased}/${upgrade.maxPurchases ?? "∞"})`}
              cost={upgrade.cost}
              currency="points"
              disabled={locked || !affordable || maxed}
              maxed={maxed} // ✅ aplicamos la clase maxed
              buttonText={buttonText}
              onBuy={() => handleBuy(upgrade)}
            />
          );
        })}
      </div>
    </main>
  );
}
