const { insertNewValue } = require("./insert-new-value.js");

describe("insertNewValue tests", () => {
  test("returns empty array when passed empty array", () => {
    expect(insertNewValue([])).toEqual([]);
  });
  test("returns original array if no value passed in", () => {
    const arr = [1, 4, 5, 10];
    expect(insertNewValue(arr)).toEqual([1, 4, 5, 10]);
  });
  test("returns mutated array with value inserted in correct place", () => {
    const arr = [1, 4, 5, 10];
    expect(insertNewValue(arr, 2)).toEqual([1, 2, 4, 5, 10]);
  });
  test("returns mutated array with value inserted in correct place", () => {
    const arr = [101, 444, 679, 1939, 1988];
    expect(insertNewValue(arr, 2033)).toEqual([
      101, 444, 679, 1939, 1988, 2033,
    ]);
  });
  test("returns mutated array with value inserted in correct place", () => {
    const arr = [
      1, 10, 19, 21, 23, 27, 34, 45, 67, 78, 87, 92, 103, 120, 130, 140, 159,
      256, 286, 346, 478, 521, 678, 721, 888, 999, 1000,
    ];
    const output = [
      1, 10, 19, 21, 23, 27, 34, 45, 67, 78, 87, 92, 103, 120, 130, 140, 159,
      256, 286, 346, 478, 521, 678, 690, 721, 888, 999, 1000,
    ];
    expect(insertNewValue(arr, 690)).toEqual(output);
  });
});
