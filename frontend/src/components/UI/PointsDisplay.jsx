import React from "react";
import { useGame } from "@/context/GameContext";

const PointsDisplay = () => {
  const { state } = useGame();

  return (
    <div className="points-display">
      {state.currencies.points.isUnlocked && (
        <p className="currency-points">Points: {state.currencies.points.amount}</p>
      )}
      {state.currencies.sids.isUnlocked && (
        <p className="currency-sids">SIDs: {state.currencies.sids.amount}</p>
      )}
      {state.currencies.riddle.isUnlocked && (
        <p className="currency-riddle">Riddles: {state.currencies.riddle.amount}</p>
      )}
    </div>
  );
};

export default PointsDisplay;
