import React, { createContext, useReducer, useContext, useEffect } from "react";
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

  // 🔹 Motor de generación de recursos
  useEffect(() => {
    const interval = setInterval(() => {
      // Para cada currency, sumamos su PPS al amount
      Object.keys(state.currencies).forEach((currencyKey) => {
        const c = state.currencies[currencyKey];
        if (c.pps > 0) {
          dispatch({
            type: "EARN_POINTS",
            currency: currencyKey,
            value: c.pps,
          });
        }
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [state.currencies]); // 👈 se actualiza si cambia pps

  return (
    <GameContext.Provider value={{ state, dispatch }}>
      {children}
    </GameContext.Provider>
  );
}

export function useGame() {
  const context = useContext(GameContext);
  return context;
}
