const { validTriangles } = require("./valid-triangles");

describe("validTriangle() Tests:", () => {
  test("Returns 0 when passed an empty array", () => {
    expect(validTriangles([])).toBe(0);
  });
  test("Returns 0 when passed an array length of less than 3", () => {
    expect(validTriangles([[1]])).toBe(0);
    expect(validTriangles([[1, 2]])).toBe(0);
  });
  test("Returns 0 when passed an array if 3 sides are invalid (two sides combined are equal to third)", () => {
    expect(validTriangles([[5, 10, 25]])).toBe(0);
  });
  test("Returns 1 when passed an array if 3 sides are valid (two sides combined are larger than the third)", () => {
    expect(validTriangles([[5, 4, 5]])).toBe(1);
  });
  test("Returns 1 when passed an 2 arrays and 1 triangle is valid", () => {
    expect(
      validTriangles([
        [5, 10, 25],
        [5, 4, 5],
      ])
    ).toBe(1);
  });
  test("Returns 2 when passed an 3 arrays and 2 triangles are valid", () => {
    expect(
      validTriangles([
        [5, 10, 25],
        [5, 4, 5],
        [542, 586, 419],
      ])
    ).toBe(2);
  });
  test("Returns 4 when passed a bigger data set with 4 valid triangles", () => {
    expect(
      validTriangles([
        [5, 10, 25],
        [5, 4, 5],
        [542, 586, 419],
        [829, 272, 126],
        [660, 514, 367],
        [39, 703, 839],
        [229, 861, 2],
        [235, 952, 840],
        [892, 533, 108],
      ])
    ).toBe(4);
  });
});
