const { randomIntFromInterval } = require("../utils/randomNumber");
const { squared } = require("../calc.js");

describe("Squared", () => {
  for (i = 0; i < 20; i++) {
    const firstNumber = randomIntFromInterval(0, 100);
    const result = firstNumber * firstNumber;

    test(`[${i}] ${firstNumber} ^ 2 = ${result}`, () => {
      expect(squared(firstNumber)).toBe(result);
    });
  }
});
