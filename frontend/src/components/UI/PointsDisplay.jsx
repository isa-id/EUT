import React from "react";
import { useGame } from "@/context/GameContext";

const PointsDisplay = () => {
  const { state } = useGame();

  return (
    <div className="points-display">
      {state.currencies.points.isUnlocked && (
        <p>Points: {state.currencies.points.amount}</p>
      )}
      {state.currencies.sids.isUnlocked && (
        <p>SIDs: {state.currencies.sids.amount}</p>
      )}
      {state.currencies.riddle.isUnlocked && (
        <p>Riddles: {state.currencies.riddle.amount}</p>
      )}
    </div>
  );
};

export default PointsDisplay;
