export const gameReducer = (state, action) => {
  switch (action.type) {
    case "ADD_POINTS":
      return {
        ...state,
        currencies: {
          ...state.currencies,
          P: state.currencies.P + action.payload,
        },
      };

    case "BUY_UPGRADE":
      return {
        ...state,
        upgrades: {
          ...state.upgrades,
          [action.payload]: state.upgrades[action.payload] + 1,
        },
        pps: state.pps * action.multiplier, // ejemplo de efecto upgrade
      };

    default:
      return state;
  }
};
