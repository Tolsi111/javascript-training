const diceGameSimulation = require("./dice-game-simulation");

test("Dice Game Simulation", () => {
  const numSimulations = 5;
  const simulationResults = diceGameSimulation(numSimulations);

  simulationResults.forEach((result) => {
    console.log(`Simulation Result: ${result.finalResult}`);

    // result.rolls.forEach((roll) => {
    //   console.log(
    //     `  Dice 1: ${roll.dice1}, Dice 2: ${roll.dice2}, Sum: ${roll.sum}, Result: ${roll.result}`
    //   );
    // });
  });
});
//what's the error there?
