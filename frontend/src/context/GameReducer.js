import { calculatePPS } from "../utils/calculatePPS";
import { calculateCost } from "../utils/calculateCost";
import { calculateUnlocks } from "../utils/calculateUnlocks";

export function gameReducer(state, action) {
  switch (action.type) {
    case "EARN_POINTS": {
      return {
        ...state,
        currencies: {
          ...state.currencies,
          [action.currency]: {
            ...state.currencies[action.currency],
            amount: state.currencies[action.currency].amount + action.value,
          },
        },
      };
    }

    case "BUY_UPGRADE": {
      const { currency, upgradeId } = action;
      const currencyData = state.currencies[currency];
      const upgrade = state.upgrades[currency].find((u) => u.id === upgradeId);

      if (!upgrade) return state;

      // Fondos suficientes
      if (currencyData.amount < upgrade.cost) return state;

      // Compras máximas
      if (upgrade.maxPurchases && upgrade.purchased >= upgrade.maxPurchases)
        return state;

      // Pagar costo
      const newAmount = currencyData.amount - upgrade.cost;

      // Nuevo costo con helper
      const newCost = calculateCost(
        upgrade.cost,
        upgrade.purchased + 1,
        upgrade.costMultiplier
      );

      // Actualizar upgrades
      const upgradeList = state.upgrades[currency].map((u) =>
        u.id === upgradeId
          ? {
              ...u,
              purchased: u.purchased + 1,
              cost: newCost,
            }
          : u
      );

      // Recalcular PPS
      const newPps = calculatePPS(upgradeList);

      // Nuevo estado base
      let newState = {
        ...state,
        currencies: {
          ...state.currencies,
          [currency]: {
            ...currencyData,
            amount: newAmount,
            pps: newPps,
          },
        },
        upgrades: {
          ...state.upgrades,
          [currency]: upgradeList,
        },
      };

      // ✅ Usar helper de desbloqueos
      newState = calculateUnlocks(newState, upgrade);

      return newState;
    }

    default:
      return state;
  }
}
