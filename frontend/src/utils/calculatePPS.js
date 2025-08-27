// utils/calculatePPS.js

export function calculatePPS(upgradeList) {
  let ppsBase = 0;
  let ppsMultiplier = 1;

  upgradeList.forEach((u) => {
    if (u.purchased > 0) {
      if (u.ppsBoost) {
        ppsBase += u.ppsBoost * u.purchased;
      }
      if (u.multiplier) {
        // elevar a la cantidad comprada
        ppsMultiplier *= u.multiplier ** u.purchased;
      }
    }
  });

  return ppsBase * ppsMultiplier;
}
