const counterSpy = require("./counter-spy");

describe("counterSpy() Tests", () => {
  test("Returns an empty array", () => {
    expect(counterSpy([])).toEqual([]);
  });
  test("Returns an empty array if an array of 1 element contains either 's', 'p' or 'y'", () => {
    expect(counterSpy(["Daryl"])).toEqual([]);
  });
  test("Returns a 1 element array if an array of 3 element contains either 's', 'p' or 'y'", () => {
    expect(counterSpy(["Daryl", "Harriet", "James"])).toEqual(["Harriet"]);
  });
  test("Returns a 2 element array if an array of 5 element contains either 's', 'p' or 'y'", () => {
    expect(counterSpy(["Sam", "Daryl", "Chris", "Harriet", "Mauro"])).toEqual([
      "Harriet",
      "Mauro",
    ]);
  });
  test("Returns a sorted array of 2 items", () => {
    expect(counterSpy(["Mauro", "Harriet"])).toEqual(["Harriet", "Mauro"]);
  });
  test("Returns a sorted array of 3 items", () => {
    expect(counterSpy(["Sam", "Harriet", "Adrian", "Mauro"])).toEqual([
      "Adrian",
      "Harriet",
      "Mauro",
    ]);
  });
});
