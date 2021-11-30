const { randomIntFromInterval } = require("../utils/randomNumber");
const { mult } = require("../calc.js");

describe("Multiplication", () => {
  for (i = 0; i < 20; i++) {
    const firstNumber = randomIntFromInterval(0, 100);
    const secondNumber = randomIntFromInterval(0, 100);
    const result = firstNumber * secondNumber;

    test(`[${i}] ${firstNumber} * ${secondNumber} = ${result}`, () => {
      expect(mult(firstNumber, secondNumber)).toBe(result);
    });
  }
});
