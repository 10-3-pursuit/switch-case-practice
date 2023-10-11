const { getTransportMode } = require("../");

describe("getTransportMode", () => {
  it("should return Walking for distance > 0 && <= 0.5", () => {
    const input = 0.5;
    const actual = getTransportMode(input);
    const expected = "Walking";
    expect(actual).toBe(expected);
  });

  it("should return Bicycle for distance <= 5", () => {
    const input = 3;
    const actual = getTransportMode(input);
    const expected = "Bicycle";
    expect(actual).toBe(expected);
  });

  it("should return an error for negative distances", () => {
    const input = -3;
    const actual = getTransportMode(input);
    const expected = "Distance cannot be negative.";
    expect(actual).toBe(expected);
  });
});
