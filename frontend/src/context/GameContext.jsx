import React, { createContext, useReducer, useContext } from "react";
import { initialCurrencies } from "../data/currencies";
import { initialUpgrades } from "../data/upgrades";
import { gameReducer } from "./gameReducer";

const GameContext = createContext();

console.log("📌 GameContext file cargado:", import.meta.url);

const initialState = {
  currencies: initialCurrencies,
  upgrades: initialUpgrades,
};

export function GameProvider({ children }) {
  console.log("✅ GameProvider montado con initialState:", initialState);

  const [state, dispatch] = useReducer(gameReducer, initialState);

  return (
    <GameContext.Provider value={{ state, dispatch }}>
      {children}
    </GameContext.Provider>
  );
}

export function useGame() {
  const context = useContext(GameContext);
  console.log("useGame hook ejecutado, contexto:", context);
  return context;
}
