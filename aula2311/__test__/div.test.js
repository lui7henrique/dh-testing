const { randomIntFromInterval } = require("../utils/randomNumber");
const { div } = require("../calc.js");

describe("Division", () => {
  for (i = 0; i < 20; i++) {
    const firstNumber = randomIntFromInterval(0, 100);
    const secondNumber = randomIntFromInterval(0, 100);
    const result = firstNumber / secondNumber;

    test(`[${i}] ${firstNumber} / ${secondNumber} = ${result}`, () => {
      expect(div(firstNumber, secondNumber)).toBe(result);
    });
  }
});
