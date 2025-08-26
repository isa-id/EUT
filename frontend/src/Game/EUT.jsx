import React from "react";
import { GameProvider } from "../context/GameContext";
import GameLayout from "../components/layouts/GameLayout";

const EUT = () => {
  return (
    <GameProvider>
      <GameLayout />
    </GameProvider>
  );
};

export default EUT;
