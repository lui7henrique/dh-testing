const { randomIntFromInterval } = require("../utils/randomNumber");
const { div } = require("../calc.js");

describe("Div", () => {
  for (i = 0; i < 20; i++) {
    const firstRandomNumber = randomIntFromInterval(0, 100);
    const secondRandomNumber = randomIntFromInterval(0, 100);
    const divValue = firstRandomNumber / secondRandomNumber;

    test(`${firstRandomNumber} / ${secondRandomNumber} = ${divValue}`, () => {
      expect(div(firstRandomNumber, secondRandomNumber)).toBe(divValue);
    });
  }
});
