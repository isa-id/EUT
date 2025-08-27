// utils/calculateCost.js

/**
 * Calcula el nuevo costo de un upgrade después de comprarlo.
 * @param {number} currentCost - Costo actual del upgrade.
 * @param {number} purchased - Número de veces que se ha comprado el upgrade.
 * @param {number} multiplier - Multiplicador de costo (default 1.5).
 * @returns {number} Nuevo costo escalado.
 */
export function calculateCost(currentCost, purchased, multiplier = 1.5) {
  return Math.floor(currentCost * multiplier ** purchased);
}
