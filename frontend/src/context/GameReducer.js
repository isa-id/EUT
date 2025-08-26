export function gameReducer(state, action) {
  switch (action.type) {
    case "EARN_POINTS":
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

    case "BUY_UPGRADE": {
      const { currency, upgradeId } = action;
      const upgradeList = state.upgrades[currency].map((u) => {
        if (u.id === upgradeId) {
          if (state.currencies[currency].amount >= u.cost) {
            return {
              ...u,
              purchased: u.purchased + 1,
              cost: Math.floor(u.cost * 1.5), // aumenta el costo
            };
          }
        }
        return u;
      });

      const upgrade = state.upgrades[currency].find((u) => u.id === upgradeId);
      if (!upgrade || state.currencies[currency].amount < upgrade.cost) {
        return state; // no puede comprar
      }

      return {
        ...state,
        currencies: {
          ...state.currencies,
          [currency]: {
            ...state.currencies[currency],
            amount: state.currencies[currency].amount - upgrade.cost,
            pps:
              state.currencies[currency].pps +
              (upgrade.ppsBoost || 0) * (upgrade.purchased + 1),
          },
        },
        upgrades: {
          ...state.upgrades,
          [currency]: upgradeList,
        },
      };
    }

    default:
      return state;
  }
}
