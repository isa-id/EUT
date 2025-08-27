// src/components/Pages/PageTwo.js
import React from "react";
import { useGame } from "../../context/GameContext";
import UpgradeCard from "../Upgrades/UpgradeCard";
import "./Pages.css";

export default function PageTwo() {
  const { state, dispatch } = useGame();
  const sidsCurrency = state.currencies.sids;

  // 🔒 Bloqueo si Sids no está desbloqueada
  if (!sidsCurrency.isUnlocked) {
    return (
      <main className="page-2">
        <h2>Sids (S$)</h2>
        <p>🔒 Debes desbloquear S$/s comprando la upgrade correspondiente en Points primero.</p>
      </main>
    );
  }

  const upgrades = state.upgrades.sids;

  const handleBuy = (upgrade) => {
    dispatch({ type: "BUY_UPGRADE", currency: "sids", upgradeId: upgrade.id });
  };

  return (
    <main className="page-2">
      <h2>Sids (S$): {sidsCurrency.amount} | PPS: {sidsCurrency.pps}</h2>

      <div className="upgrades-grid">
        {upgrades.map((upgrade) => {
          const maxed = upgrade.purchased >= (upgrade.maxPurchases || Infinity);
          const affordable = sidsCurrency.amount >= upgrade.cost;

          let buttonText = "Comprar";
          if (maxed) buttonText = "Máximo alcanzado";
          else if (!affordable) buttonText = "Te falta dinero";

          return (
            <UpgradeCard
              key={upgrade.id}
              title={`${upgrade.label} (${upgrade.purchased}/${upgrade.maxPurchases || "∞"})`}
              cost={upgrade.cost}
              currency="sids"
              disabled={!affordable || maxed}
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
