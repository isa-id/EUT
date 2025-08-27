// utils/calculateUnlocks.js

/**
 * Revisa si el upgrade desbloquea una nueva currency
 * y actualiza el estado en consecuencia.
 * @param {object} state - Estado actual del juego.
 * @param {object} upgrade - Upgrade comprado.
 * @returns {object} Estado actualizado con desbloqueos (si aplica).
 */
export function calculateUnlocks(state, upgrade) {
  if (!upgrade.unlockCurrency) return state;

  const unlockKey = upgrade.unlockCurrency;

  if (state.currencies[unlockKey]) {
    return {
      ...state,
      currencies: {
        ...state.currencies,
        [unlockKey]: {
          ...state.currencies[unlockKey],
          isUnlocked: true,
        },
      },
    };
  }

  return state;
}
