const { alphabetReplace } = require("./alphabet-replace");

describe("alphabetReplace() Tests", () => {
  test("Returns an empty string if passed an empty string", () => {
    expect(alphabetReplace("")).toEqual("");
  });
  test("Returns a string with 11 numbers when passed an 11 lettered word with no spaces", () => {
    expect(alphabetReplace("code")).toEqual("3 15 4 5");
  });
  test("Returns a string with 4 numbers when passed a 4 lettered word with no spaces", () => {
    expect(alphabetReplace("Northcoders")).toEqual(
      "14 15 18 20 8 3 15 4 5 18 19"
    );
  });
  test("Returns a string of numbers, when passed a sentence with 2 words and a space, with the space ignored", () => {
    expect(alphabetReplace("expert programming")).toEqual(
      "5 24 16 5 18 20 16 18 15 7 18 1 13 13 9 14 7"
    );
  });
});
