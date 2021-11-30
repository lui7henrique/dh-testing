const { randomIntFromInterval } = require("../utils/randomNumber");
const { sum } = require("../calc.js");

describe("Sum", () => {
  for (i = 0; i < 20; i++) {
    const firstNumber = randomIntFromInterval(0, 100);
    const secondNumber = randomIntFromInterval(0, 100);
    const result = firstNumber + secondNumber;

    test(`[${i}] ${firstNumber} + ${secondNumber} = ${result}`, () => {
      expect(sum(firstNumber, secondNumber)).toBe(result);
    });
  }
});
