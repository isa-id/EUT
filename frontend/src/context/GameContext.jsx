import React, { createContext, useReducer, useContext } from "react";
import { initialCurrencies } from "../data/currencies";
import { initialUpgrades } from "../data/upgrades";
import { gameReducer } from "./gameReducer";

const GameContext = createContext();

const initialState = {
  currencies: initialCurrencies,
  upgrades: initialUpgrades,
};

export function GameProvider({ children }) {
  const [state, dispatch] = useReducer(gameReducer, initialState);

  return (
    <GameContext.Provider value={{ state, dispatch }}>
      {children}
    </GameContext.Provider>
  );
}

export function useGame() {
  return useContext(GameContext);
}
