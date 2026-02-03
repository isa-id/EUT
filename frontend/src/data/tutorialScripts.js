/**
 * Tutorial scripts configuration.
 * Each script is an array of message objects.
 * Each object can have:
 * - text: The message to display.
 * - pose: The filename of the guide image (without extension). Defaults to 'guide'.
 */

export const getUnlockScript = (currencyName) => {
  return [
    {
      text: `Congratulations! You have unlocked ${currencyName}!`,
      pose: "guide", // New guide
    },
    {
      text: "This is a huge step for your progress. Use it wisely!",
      pose: "guide", // New guide
    },
    {
      text: "And remember, I used to look like this! I'm evolving with you!",
      pose: "guide_old", // Old guide (demonstrating image switch)
    },
  ];
};

export const getStartGameScript = () => {
  return [
    {
      text: "Welcome to the game! You've just started your journey.",
      pose: "guide",
    },
    {
      text: "Click upgrades to earn more points!",
      pose: "guide",
    },
  ];
};
