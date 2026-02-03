import { calculatePPS } from "../utils/calculatePPS";
import { calculateCost } from "../utils/calculateCost";
import { calculateUnlocks } from "../utils/calculateUnlocks";
import { getUnlockScript, getStartGameScript } from "../data/tutorialScripts";

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
      const unlocksResult = calculateUnlocks(newState, upgrade);
      
      // CHECK FOR SPECIFIC UPGRADE ID (First purchase)
      if (upgrade.id === "p0") { 
          const messages = getStartGameScript();
          return {
             ...unlocksResult,
             tutorial: {
                 ...state.tutorial, 
                 visible: true,
                 current: messages[0],
                 queue: messages.slice(1),
             }
          }
      }
      
      // Si hubo cambios en desbloqueos (un nuevo currency unlocked)
      const newCurrencyKey = upgrade.unlockCurrency;
      if (newCurrencyKey && !state.currencies[newCurrencyKey]?.isUnlocked && unlocksResult.currencies[newCurrencyKey]?.isUnlocked) {
         
         const currencyName = newCurrencyKey.charAt(0).toUpperCase() + newCurrencyKey.slice(1);
         
         // Get script from configuration
         const messages = getUnlockScript(currencyName);

         return {
             ...unlocksResult,
             tutorial: {
                 ...state.tutorial, 
                 visible: true,
                 current: messages[0],
                 queue: messages.slice(1),
             }
         }
      }

      return unlocksResult;
    }

    case "NEXT_TUTORIAL_STEP": {
      const nextQueue = [...state.tutorial.queue];
      const nextMessage = nextQueue.shift(); // Get next or undefined

      if (nextMessage) {
          return {
              ...state,
              tutorial: {
                  ...state.tutorial,
                  current: nextMessage,
                  queue: nextQueue,
              }
          }
      } else {
          // No more messages, close
          return {
            ...state,
            tutorial: {
                ...state.tutorial,
                visible: false,
                current: null,
                queue: []
            },
          };
      }
    }
    
    // Legacy support or alias
    case "CLOSE_TUTORIAL": {
      return {
        ...state,
        tutorial: {
          ...state.tutorial,
          visible: false,
          current: null,
          queue: []
        },
      };
    }

    default:
      return state;
  }
}
