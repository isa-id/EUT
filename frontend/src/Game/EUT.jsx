import React, { useEffect, useState } from "react";
import UpgradeMultiplier from "../Components/Upgrades/1_UpgradeMultiplier";
import UpgradeDuplicate from "../Components/Upgrades/2_UpgradeDuplicate";
import "./EUT.css";

export default function EUT({ points, setPoints, setPps }) {
  const [pointsPerSecond, setPointsPerSecond] = useState(1);

  // Incrementar puntos cada 0.1s
  useEffect(() => {
    const interval = setInterval(() => {
      setPoints(prev => prev + pointsPerSecond / 10);
    }, 100); // 100ms -> 10 ticks por segundo
    return () => clearInterval(interval);
  }, [pointsPerSecond, setPoints]);

  // Sincronizar PPS con App.jsx para la PinBar
  useEffect(() => {
    setPps(pointsPerSecond);
  }, [pointsPerSecond, setPps]);

  return (
    <main className="EUT-BG">
      <div className="page-1">
        <div className="upgrades-grid">
          <div className="upgrade-column">
            <UpgradeMultiplier
              points={points}
              setPoints={setPoints}
              setPointsPerSecond={setPointsPerSecond}
            />
            <UpgradeDuplicate
              points={points}
              setPoints={setPoints}
              setPointsPerSecond={setPointsPerSecond}
            />
          </div>
          <div className="upgrade-column">
            <UpgradeMultiplier
              points={points}
              setPoints={setPoints}
              setPointsPerSecond={setPointsPerSecond}
            />
            <UpgradeDuplicate
              points={points}
              setPoints={setPoints}
              setPointsPerSecond={setPointsPerSecond}
            />
          </div>
          <div className="upgrade-column">
            <UpgradeMultiplier
              points={points}
              setPoints={setPoints}
              setPointsPerSecond={setPointsPerSecond}
            />
            <UpgradeDuplicate
              points={points}
              setPoints={setPoints}
              setPointsPerSecond={setPointsPerSecond}
            />
          </div>
          <div className="upgrade-column">
            <UpgradeMultiplier
              points={points}
              setPoints={setPoints}
              setPointsPerSecond={setPointsPerSecond}
            />
            <UpgradeDuplicate
              points={points}
              setPoints={setPoints}
              setPointsPerSecond={setPointsPerSecond}
            />
          </div>
        </div>
      </div>
    </main>
  );
}