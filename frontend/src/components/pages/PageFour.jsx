import React from "react";
import { useGame } from "../../context/GameContext";
import UpgradeCard from "../Upgrades/UpgradeCard";
import { parseCurrency } from "../../utils/parseCurrency";
import "./Pages.css";

export default function PageFour() {
  const { state, dispatch } = useGame();
  
  const secretsCurrency = state.currencies.secrets;
  const upgrades = state.upgrades.secrets;

  if (!secretsCurrency.isUnlocked) {
    return (
      <div className="page-locked">
        <h2>???</h2>
        <p>This path is shrouded in mystery...</p>
      </div>
    );
  }

  const handleBuy = (upgrade) => {
    dispatch({ type: "BUY_UPGRADE", currency: "secrets", upgradeId: upgrade.id });
  };

  return (
    <main className="page-4">
      <h2>Secrets (T$): {parseCurrency(secretsCurrency.amount)} | PPS: {parseCurrency(secretsCurrency.pps)}</h2>
      
      <div className="upgrades-grid">
        {upgrades.map((upgrade) => {
          const maxed = upgrade.purchased >= (upgrade.maxPurchases || Infinity);
          const affordable = secretsCurrency.amount >= upgrade.cost;

          let buttonText = "Comprar";
          if (maxed) buttonText = "Máximo alcanzado";
          else if (!affordable) buttonText = "Te falta dinero";

          return (
            <UpgradeCard
              key={upgrade.id}
              title={`${upgrade.label} (${upgrade.purchased}/${upgrade.maxPurchases || "∞"})`}
              cost={upgrade.cost}
              currency="secrets"
              disabled={!affordable || maxed}
              maxed={maxed}
              buttonText={buttonText}
              onBuy={() => handleBuy(upgrade)}
            />
          );
        })}
      </div>
    </main>
  );
}
