const { findMissingLetter } = require("./find-missing-letter");

describe("findMissingLetter()", () => {
  test("Returns an empty string when passed a complete set of letters with none missing", () => {
    expect(findMissingLetter(["A", "B", "C", "D", "E"])).toEqual("");
  });
  test("Returns 'D' when passed an incomplete set of letters with none missing", () => {
    expect(findMissingLetter(["A", "B", "C", "E"])).toEqual("D");
  });
  test("Returns 'D' when passed an incomplete set of letters with none missing", () => {
    expect(findMissingLetter(["e", "f", "g", "i"])).toEqual("h");
  });
});
