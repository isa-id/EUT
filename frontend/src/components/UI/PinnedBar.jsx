import React from "react";
import { useGame } from "@/context/GameContext";

const PinnedBar = () => {
  const { state } = useGame();

  return (
    <div className="pinned-bar">
      {Object.values(state.currencies).map((currency, index) =>
        currency.isunlocked ? (
          <div key={index} className="currency-info">
            <span className="currency-name">{currency.name}:</span>
            <span className="currency-amount">{currency.amount.toFixed(2)}</span>
            <span className="currency-pps">(+{currency.pps.toFixed(2)}/s)</span>
          </div>
        ) : null
      )}
    </div>
  );
};

export default PinnedBar;
