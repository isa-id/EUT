import  React from "react";
import { useEffect } from "react";
import UpgradeMultiplier from "../Components/Upgrades/UpgradeMultiplier";
import "./EUT.css";

export default function EUT({ points, setPoints }) {
  const [pointsPerSecond, setPointsPerSecond] = React.useState(1);
  // Intervalo de 0.1s
  useEffect(() => {
    const interval = setInterval(() => {
      setPoints((prev) => prev + pointsPerSecond / 10);
    }, 100);
    return () => clearInterval(interval);
  }, [pointsPerSecond, setPoints]);

  return (
    <main className="EUT-BG">
      <div className="page-1">
        <div className="upgrades-container">
          <UpgradeMultiplier
            points={points}
            setPoints={setPoints}
            setPPS={setPointsPerSecond}
          />
        </div>
      </div>
    </main>
  );
}
