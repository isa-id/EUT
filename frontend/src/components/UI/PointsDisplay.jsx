import React from "react";
import { useGame } from "@/context/GameContext";
import { parseCurrency } from "@/utils/parseCurrency";

const PointsDisplay = () => {
  const { state } = useGame();

  return (
    <div className="points-display">
      {state.currencies.points.isUnlocked && (
        <p className="currency-points">Points: {parseCurrency(state.currencies.points.amount)}</p>
      )}
      {state.currencies.sids.isUnlocked && (
        <p className="currency-sids">SIDs: {parseCurrency(state.currencies.sids.amount)}</p>
      )}
      {state.currencies.riddle.isUnlocked && (
        <p className="currency-riddle">Riddles: {parseCurrency(state.currencies.riddle.amount)}</p>
      )}
      {state.currencies.secrets.isUnlocked && (
        <p className="currency-secrets">Secrets: {parseCurrency(state.currencies.secrets.amount)}</p>
      )}
    </div>
  );
};

export default PointsDisplay;
