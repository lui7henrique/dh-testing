const { randomIntFromInterval } = require("../utils/randomNumber");
const { sub } = require("../calc.js");

describe("Sub", () => {
  for (i = 0; i < 20; i++) {
    const firstRandomNumber = randomIntFromInterval(0, 100);
    const secondRandomNumber = randomIntFromInterval(0, 100);
    const subvalue = firstRandomNumber - secondRandomNumber;

    test(`${firstRandomNumber} - ${secondRandomNumber} = ${subvalue}`, () => {
      expect(sub(firstRandomNumber, secondRandomNumber)).toBe(subvalue);
    });
  }
});
