export const initialUpgrades = {
  points: [
    { id: "p0", label: "Start generating P$/s", cost: 0, ppsBoost: 1, purchased: 0, maxPurchases: 1, costMultiplier: 1 },
    { id: "p1", label: "+1 P$/s", cost: 10, ppsBoost: 1, purchased: 0, costMultiplier: 1.2 },
    { id: "p2", label: "+2 P$/s", cost: 25, ppsBoost: 2, purchased: 0, maxPurchases: 5, costMultiplier: 1.4 },
    { id: "p3", label: "x2 P$/s", cost: 200, multiplier: 2, purchased: 0, maxPurchases: 1, costMultiplier: 2.0 },
    { id: "p4", label: "+10 P$/s", cost: 500, ppsBoost: 10, purchased: 0, costMultiplier: 1.3 },
    { id: "p5", label: "+25 P$/s", cost: 1200, ppsBoost: 25, purchased: 0, costMultiplier: 1.4 },
    { id: "p6", label: "x3 P$/s", cost: 5000, multiplier: 3, purchased: 0, maxPurchases: 1, costMultiplier: 3.0 },
    { id: "p7", label: "+100 P$/s", cost: 8000, ppsBoost: 100, purchased: 0, costMultiplier: 1.5 },
    { id: "p8", label: "+250 P$/s", cost: 20000, ppsBoost: 250, purchased: 0, costMultiplier: 1.5 },
    { id: "p9", label: "x5 P$/s", cost: 100000, multiplier: 5, purchased: 0, maxPurchases: 1, costMultiplier: 4.0 },
    { id: "p10", label: "+1000 P$/s", cost: 250000, ppsBoost: 1000, purchased: 0, costMultiplier: 1.6 },
    { id: "p11", label: "Unlock S$/s", cost: 1000000, purchased: 0, maxPurchases: 1, unlockCurrency: "sids", costMultiplier: 1 },
  ],

  sids: [
    { id: "s1", label: "Start S$/s", cost: 0, ppsBoost: 1, purchased: 0, maxPurchases: 1, costMultiplier: 1 },
    { id: "s2", label: "+1 S$/s", cost: 50, ppsBoost: 1, purchased: 0, costMultiplier: 1.3 },
    { id: "s3", label: "+5 S$/s", cost: 200, ppsBoost: 5, purchased: 0, costMultiplier: 1.4 },
    { id: "s4", label: "x2 S$/s", cost: 1000, multiplier: 2, purchased: 0, maxPurchases: 1, costMultiplier: 2.5 },
    { id: "s5", label: "+20 S$/s", cost: 2500, ppsBoost: 20, purchased: 0, costMultiplier: 1.4 },
    { id: "s6", label: "+50 S$/s", cost: 6000, ppsBoost: 50, purchased: 0, costMultiplier: 1.5 },
    { id: "s7", label: "x3 S$/s", cost: 15000, multiplier: 3, purchased: 0, maxPurchases: 1, costMultiplier: 3.0 },
    { id: "s8", label: "+200 S$/s", cost: 40000, ppsBoost: 200, purchased: 0, costMultiplier: 1.5 },
    { id: "s9", label: "+500 S$/s", cost: 100000, ppsBoost: 500, purchased: 0, costMultiplier: 1.6 },
    { id: "s10", label: "x5 S$/s", cost: 500000, multiplier: 5, purchased: 0, maxPurchases: 1, costMultiplier: 4.0 },
    { id: "s11", label: "+2000 S$/s", cost: 2000000, ppsBoost: 2000, purchased: 0, costMultiplier: 1.7 },
    { id: "s12", label: "Unlock R$/s", cost: 5000000, purchased: 0, maxPurchases: 1, unlockCurrency: "riddle", costMultiplier: 1 },
  ],

  riddle: [
    { id: "r1", label: "Start R$/s", cost: 0, ppsBoost: 1, purchased: 0, maxPurchases: 1, costMultiplier: 1 },
    { id: "r2", label: "+1 R$/s", cost: 100, ppsBoost: 1, purchased: 0, costMultiplier: 1.4 },
    { id: "r3", label: "+10 R$/s", cost: 500, ppsBoost: 10, purchased: 0, costMultiplier: 1.5 },
    { id: "r4", label: "x2 R$/s", cost: 2500, multiplier: 2, purchased: 0, maxPurchases: 1, costMultiplier: 2.5 },
    { id: "r5", label: "+50 R$/s", cost: 6000, ppsBoost: 50, purchased: 0, costMultiplier: 1.5 },
    { id: "r6", label: "+100 R$/s", cost: 15000, ppsBoost: 100, purchased: 0, costMultiplier: 1.6 },
    { id: "r7", label: "x3 R$/s", cost: 50000, multiplier: 3, purchased: 0, maxPurchases: 1, costMultiplier: 3.5 },
    { id: "r8", label: "+500 R$/s", cost: 150000, ppsBoost: 500, purchased: 0, costMultiplier: 1.7 },
    { id: "r9", label: "+1000 R$/s", cost: 400000, ppsBoost: 1000, purchased: 0, costMultiplier: 1.8 },
    { id: "r10", label: "x5 R$/s", cost: 1500000, multiplier: 5, purchased: 0, maxPurchases: 1, costMultiplier: 5.0 },
    { id: "r11", label: "+5000 R$/s", cost: 5000000, ppsBoost: 5000, purchased: 0, costMultiplier: 2.0 },
    { id: "r12", label: "Unlock T$/s", cost: 25000000, purchased: 0, maxPurchases: 1, unlockCurrency: "secrets", costMultiplier: 1 },
  ],

  secrets: [
     { id: "t1", label: "Start T$/s", cost: 0, ppsBoost: 1, purchased: 0, maxPurchases: 1, costMultiplier: 1 },
     { id: "t2", label: "+1 T$/s", cost: 500, ppsBoost: 1, purchased: 0, costMultiplier: 2.0 },
  ]
};
