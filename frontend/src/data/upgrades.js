export const initialUpgrades = {
  points: [
    {
      id: "p0",
      label: "Start generating P$/s",
      cost: 0,
      ppsBoost: 1, // empieza a generar
      purchased: 0,
      maxPurchases: 1,
      costMultiplier: 1,
    },
    {
      id: "p1",
      label: "+1 P$/s",
      cost: 10,
      ppsBoost: 1,
      purchased: 0,
      costMultiplier: 1.2,
    },
    {
      id: "p2",
      label: "x2 P$/s",
      cost: 200,
      multiplier: 2,
      purchased: 0,
      maxPurchases: 1,
      costMultiplier: 2.0,
    },
    {
      id: "p3",
      label: "+5 P$/s",
      cost: 500,
      ppsBoost: 5,
      purchased: 0,
      costMultiplier: 1.3,
    },
    {
      id: "p4",
      label: "x3 P$/s",
      cost: 1500,
      multiplier: 3,
      purchased: 0,
      maxPurchases: 1,
      costMultiplier: 2.5,
    },
    {
      id: "p5",
      label: "+20 P$/s",
      cost: 5000,
      ppsBoost: 20,
      purchased: 0,
      costMultiplier: 1.4,
    },
    {
      id: "p6",
      label: "x5 P$/s",
      cost: 20000,
      multiplier: 5,
      purchased: 0,
      maxPurchases: 1,
      costMultiplier: 3.0,
    },
    {
      id: "p7",
      label: "Unlock S$/s",
      cost: 1,
      purchased: 0,
      maxPurchases: 1,
      unlockCurrency: "sids", // 🔓 desbloquea sids
      costMultiplier: 1,
    },
  ],

  sids: [
    {
      id: "s1",
      label: "+1 S$/s",
      cost: 0,
      ppsBoost: 1,
      purchased: 0,
      maxPurchases: 1,
      costMultiplier: 1.3,
    },
    {
      id: "s2",
      label: "x2 S$/s",
      cost: 2000,
      multiplier: 2,
      purchased: 0,
      maxPurchases: 1,
      costMultiplier: 2.0,
    },
    {
      id: "s3",
      label: "Unlock R$/s",
      cost: 1, // 👈 ahora se compra con S$
      purchased: 0,
      maxPurchases: 1,
      unlockCurrency: "riddle", // 🔓 desbloquea riddles usando S$
      costMultiplier: 1,
    },
  ],

  riddle: [
    {
      id: "r1",
      label: "+1 R$/s",
      cost: 0,
      ppsBoost: 1,
      purchased: 0,
      maxPurchases: 1,
      costMultiplier: 1.5,
    },
    {
      id: "r2",
      label: "x2 R$/s",
      cost: 500,
      multiplier: 2,
      purchased: 0,
      maxPurchases: 1,
      costMultiplier: 2.0,
    },
  ],
};
