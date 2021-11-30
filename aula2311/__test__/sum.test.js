const { randomIntFromInterval } = require("../utils/randomNumber");
const { sum } = require("../calc.js");

describe("Sum", () => {
  for (i = 0; i < 20; i++) {
    const firstRandomNumber = randomIntFromInterval(0, 100);
    const secondRandomNumber = randomIntFromInterval(0, 100);
    const sumValue = firstRandomNumber + secondRandomNumber;
    test(`${firstRandomNumber} + ${secondRandomNumber} = ${sumValue}`, () => {
      expect(sum(firstRandomNumber, secondRandomNumber)).toBe(sumValue);
    });
  }
});
