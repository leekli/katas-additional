const { palindrome } = require("./palindrome.js");

describe("palindrome tests:", () => {
  test("returns true if string length is less than 1", () => {
    expect(palindrome("a")).toEqual(true);
  });
  test("returns false if string is palindrome (3 characters)", () => {
    expect(palindrome("cat")).toEqual(false);
  });
  test("returns true if string is palindrome (3 words, ignore white space and is case insensitive)", () => {
    expect(palindrome("Acrobats stab orca")).toEqual(true);
  });
  test("returns true if string is palindrome (8 words, ignore white space and is case insensitive)", () => {
    expect(palindrome("Are we not drawn onward to new era")).toEqual(true);
  });
});
