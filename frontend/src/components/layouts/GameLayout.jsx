import React from "react";
import PinnedBar from "../UI/PinnedBar";
import PointsDisplay from "../UI/PointsDisplay";
import UpgradesGrid from "../UI/UpgradesGrid";

export default function GameLayout() {
  return (
    <div className="game-layout">
      <PinnedBar />
      <PointsDisplay />
      <UpgradesGrid />
    </div>
  );
}
