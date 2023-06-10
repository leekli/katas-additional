const { passwordScore } = require("./password-score.js");

describe("passwordScore tests:", () => {
  test("Returns a score of 0 if the input is empty", () => {
    expect(passwordScore()).toBe(0);
    expect(passwordScore("")).toBe(0);
  });
  test("Returns a score of 1 if the input contains less than four characters", () => {
    expect(passwordScore("bob")).toBe(1);
  });
  test("Returns a score of 2 if the input contains less than nine characters", () => {
    expect(passwordScore("bobbybob")).toBe(2);
  });
  test("Returns a score of 3 if the input contains more than eight characters and are all letters", () => {
    expect(passwordScore("bobbobbob")).toBe(3);
  });
  test("Returns a score of 4 if the input contains more than eight characters and includes a number", () => {
    expect(passwordScore("bobbobbob1")).toBe(4);
  });
  test("Returns a score of 5 if the input contains more than eight characters, a number and a special character", () => {
    expect(passwordScore("bobbob1#2$")).toBe(5);
  });
  test("Returns a score of 6 if the input contains twelve characters and a number", () => {
    expect(passwordScore("bobbobbobbob123")).toBe(6);
  });
  test("Returns a score of 7 if the input contains twelve characters, a number and a special character", () => {
    expect(passwordScore("bobbobbob1!2@3#")).toBe(7);
  });
});
