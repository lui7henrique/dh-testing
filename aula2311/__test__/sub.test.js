const { randomIntFromInterval } = require("../utils/randomNumber");
const { sub } = require("../calc.js");

describe("Sub", () => {
  for (i = 0; i < 20; i++) {
    const firstNumber = randomIntFromInterval(0, 100);
    const secondNumber = randomIntFromInterval(0, 100);
    const result = firstNumber - secondNumber;

    test(`[${i}] ${firstNumber} - ${secondNumber} = ${result}`, () => {
      expect(sub(firstNumber, secondNumber)).toBe(result);
    });
  }
});
