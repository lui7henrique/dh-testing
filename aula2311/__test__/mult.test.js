const { randomIntFromInterval } = require("../utils/randomNumber");

const { mult } = require("../calc.js");

describe("Mult", () => {
  for (i = 0; i < 20; i++) {
    const firstRandomNumber = randomIntFromInterval(0, 100);
    const secondRandomNumber = randomIntFromInterval(0, 100);
    const multValue = firstRandomNumber * secondRandomNumber;

    test(`${firstRandomNumber} * ${secondRandomNumber} = ${multValue}`, () => {
      expect(mult(firstRandomNumber, secondRandomNumber)).toBe(multValue);
    });
  }
});
