import React from "react";
import { useGame } from "@/context/GameContext";

const PointsDisplay = () => {
  const { state } = useGame();

  return (
    <div className="points-display">
      {state.currencies.points.isunlocked && (
        <p>Puntos: {state.currencies.points.amount}</p>
      )}
      {state.currencies.riddle.isunlocked && (
        <p>Riddles: {state.currencies.riddle.amount}</p>
      )}
      {state.currencies.sids.isunlocked && (
        <p>SIDs: {state.currencies.sids.amount}</p>
      )}
    </div>
  );
};

export default PointsDisplay;
