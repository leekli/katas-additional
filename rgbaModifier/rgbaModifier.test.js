const { rgbaModifier } = require("./rgbaModifier");

describe("rgbaModifier Tests", () => {
  test("Returns an error message string if missing any of the 3 arguments or incorrect arguments passed through", () => {
    let output = rgbaModifier();
    expect(output).toBe("Missing arguments");
    output = rgbaModifier("", 0, 0);
    expect(output).toBe("Missing arguments");
    output = rgbaModifier("", 0);
    expect(output).toBe("Missing arguments");
  });
  test("Returns a string", () => {
    const output = rgbaModifier("rgba(100,100,100,0.6)", 50, 1);
    expect(typeof output).toBe("string");
  });
  test("Returns the same RGBA values when passed a 0 percent and 0 opactity value", () => {
    const output = rgbaModifier("rgba(100,100,100,0.6)", 0, 0);
    expect(output).toBe("rgba(100,100,100,0.6)");
  });
  test("Returns the new RGBA value of only the new opacity value applied when only an opacity value is given as an argument, no RGB values changed", () => {
    const output = rgbaModifier("rgba(100,100,100,0.6)", 0, 0.3);
    expect(output).toBe("rgba(100,100,100,0.3)");
  });
  test("Returns the new RGBA value of only the new RGB values applied when only a percent value is given as an argument, no opacity value changed", () => {
    const output = rgbaModifier("rgba(100,100,100,0.6)", 50, 0);
    expect(output).toBe("rgba(150,150,150,0.6)");
  });
  test("Returns both the new RGB and opacity values when passed both values to be amended using whole numbers", () => {
    const output = rgbaModifier("rgba(100,100,100,0.6)", 50, 1);
    expect(output).toBe("rgba(150,150,150,1)");
  });
  test("Returns both the new RGB and opacity values when passed both values to be amended using decimal numbers using positive numbers", () => {
    let output = rgbaModifier("rgba(50,100,20,0.6)", 20, 0.4);
    expect(output).toBe("rgba(60,120,24,0.4)");
  });
  test("Returns both the new RGB and opacity values when passed both values to be amended using decimal numbers and a negative RGB value to reduce by (and can round the integers)", () => {
    let output = rgbaModifier("rgba(44,70,180,0.9)", -30, 0.3);
    expect(output).toBe("rgba(31,49,126,0.3)");
    output = rgbaModifier("rgba(50,78,12,0.8)", -100, 0.5);
    expect(output).toBe("rgba(0,0,0,0.5)");
  });
  test("Returns a new RGBA value where the values cannot exceed 255 or be below 0", () => {
    let output = rgbaModifier("rgba(225,60,160,1)", 90, 0.7);
    expect(output).toBe("rgba(255,114,255,0.7)");
  });
});
