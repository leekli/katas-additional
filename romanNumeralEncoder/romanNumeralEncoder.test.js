const { romanNumeralEncoder } = require("./romanNumeralEncoder");

describe("Roman Numberal tests: ", () => {
  test("Returns an empty string when passed nothing into the function", () => {
    const output = romanNumeralEncoder();
    expect(output).toBe("");
  });
  test("Returns the value 'nulla' when passed in the number 0 which does not exist in the roman numeral system", () => {
    const output = romanNumeralEncoder(0);
    expect(output).toBe("nullus");
  });
  test("Returns the roman numeral value if the num is exactly one of the base numbers of 1, 5, 10,50, 100, 500 or 1000", () => {
    expect(romanNumeralEncoder(1)).toBe("I");
    expect(romanNumeralEncoder(5)).toBe("V");
    expect(romanNumeralEncoder(10)).toBe("X");
    expect(romanNumeralEncoder(50)).toBe("L");
    expect(romanNumeralEncoder(100)).toBe("C");
    expect(romanNumeralEncoder(500)).toBe("D");
    expect(romanNumeralEncoder(1000)).toBe("M");
  });
  test("Returns the roman numeral value if the num is exactly one of the six instances of subtraction in the roman numeral system of 4, 9, 40, 90, 400 or 900", () => {
    expect(romanNumeralEncoder(4)).toBe("IV");
    expect(romanNumeralEncoder(9)).toBe("IX");
    expect(romanNumeralEncoder(40)).toBe("XL");
    expect(romanNumeralEncoder(90)).toBe("XC");
    expect(romanNumeralEncoder(400)).toBe("CD");
    expect(romanNumeralEncoder(900)).toBe("CM");
  });
  test("Returns the roman numeral value when passed a single digit", () => {
    expect(romanNumeralEncoder(2)).toBe("II");
    expect(romanNumeralEncoder(8)).toBe("VIII");
  });
  test("Returns the roman numeral value when passed a double digit", () => {
    expect(romanNumeralEncoder(17)).toBe("XVII");
    expect(romanNumeralEncoder(60)).toBe("LX");
    expect(romanNumeralEncoder(75)).toBe("LXXV");
    expect(romanNumeralEncoder(91)).toBe("XCI");
  });
});
