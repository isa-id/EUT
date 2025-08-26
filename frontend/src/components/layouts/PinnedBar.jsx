import React from "react";
import { useGame } from "@/context/GameContext";

const PinnedBar = () => {
  const game = useGame(); // OJO: aquí primero obtenemos el objeto
  console.log("PinnedBar ejecutado ✅", game);

  if (!game) {
    return <div>⚠️ No hay contexto disponible</div>;
  }

  const { state } = game;

  return (
    <div className="pinned-bar">
      <p>P$: {state.currencies.points.amount}</p>
      <p>R$: {state.currencies.riddle.amount}</p>
      <p>S$: {state.currencies.sids.amount}</p>
    </div>
  );
};

export default PinnedBar;
