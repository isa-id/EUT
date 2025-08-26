import React from "react";
import PinnedBar from "../UI/PinnedBar";
import PointsDisplay from "../UI/PointsDisplay";
import UpgradesGrid from "../UI/UpgradesGrid";

const GameLayout = () => {
    console.log("GameLayout se montó ✅");
  return (
    <div className="game-layout">
      <PinnedBar />
      <PointsDisplay />
      <UpgradesGrid />
    </div>
  );
};

export default GameLayout;
