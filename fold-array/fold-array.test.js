const { foldArray } = require("./fold-array.js");

describe("foldArray() Tests:", () => {
  test("returns an empty array if passed an empty array", () => {
    expect(foldArray([], 1)).toEqual([]);
  });
  test("returns the same array if passed an array of only 1 element", () => {
    expect(foldArray([1], 1)).toEqual([1]);
  });
  test("returns a folded array if passed an array of 2 items, folded once", () => {
    expect(foldArray([1, 2], 1)).toEqual([3]);
  });
  test("returns a folded array with middle index not folded as array if of odd length, folded once", () => {
    expect(foldArray([1, 2, 3], 1)).toEqual([4, 2]);
  });
  test("returns a folded array when passed an array of even elements, folded once", () => {
    expect(foldArray([1, 2, 3, 10, 34, 100], 1)).toEqual([101, 36, 13]);
  });
  test("returns a folded array when passed an array of even elements, folded twice", () => {
    expect(foldArray([1, 2, 3, 10, 34, 100], 2)).toEqual([114, 36]);
  });
});
