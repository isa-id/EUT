// src/components/Pages/PageThree.js
import React from "react";
import { useGame } from "../../context/GameContext";
import UpgradeCard from "../Upgrades/UpgradeCard";
import { parseCurrency } from "../../utils/parseCurrency";
import "./Pages.css";

export default function PageThree() {
  const { state, dispatch } = useGame();
  const riddleCurrency = state.currencies.riddle;

  // 🔒 Bloqueo si Riddles no está desbloqueada
  if (!riddleCurrency.isUnlocked) {
    return (
      <main className="page-3">
        <h2>Riddles (R$)</h2>
        <p>🔒 Debes desbloquear R$/s comprando la upgrade correspondiente en Sids primero.</p>
      </main>
    );
  }

  const upgrades = state.upgrades.riddle;

  const handleBuy = (upgrade) => {
    dispatch({ type: "BUY_UPGRADE", currency: "riddle", upgradeId: upgrade.id });
  };

  return (
    <main className="page-3">
      <h2>Riddles (R$): {parseCurrency(riddleCurrency.amount)} | PPS: {parseCurrency(riddleCurrency.pps)}</h2>

      <div className="upgrades-grid">
        {upgrades.map((upgrade) => {
          const maxed = upgrade.purchased >= (upgrade.maxPurchases || Infinity);
          const affordable = riddleCurrency.amount >= upgrade.cost;

          let buttonText = "Comprar";
          if (maxed) buttonText = "Máximo alcanzado";
          else if (!affordable) buttonText = "Te falta dinero";

          return (
            <UpgradeCard
              key={upgrade.id}
              title={`${upgrade.label} (${upgrade.purchased}/${upgrade.maxPurchases || "∞"})`}
              cost={upgrade.cost}
              currency="riddle"
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
