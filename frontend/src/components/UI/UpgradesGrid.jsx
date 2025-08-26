import React from "react";
import { useGame } from "@/context/GameContext";

const UpgradesGrid = () => {
  const { state, dispatch } = useGame(); // ✅ hook directamente

  return (
    <div className="upgrades-grid">
      {Object.values(state.upgrades).map((upgrade, index) => (
        <div key={index} className="upgrade-item">
          <span>{upgrade.name}</span>
          <span>Level: {upgrade.level}</span>
        </div>
      ))}
    </div>
  );
};

export default UpgradesGrid;
