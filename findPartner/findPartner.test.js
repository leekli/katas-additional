const { findPartner } = require("./findPartner");

describe("findPartner Tests", () => {
  const students = [
    ["Sam", "Harriet", "Mitch", "Jonny", "JD", "Kavita"],
    ["Amul", "Chris", "Mauro", "Ruth", "Haz", "Joshua"],
  ];

  test("Returns an error message if arguments are missing", () => {
    let output = findPartner();
    expect(output).toBe("Missing arguments.");
    output = findPartner(students);
    expect(output).toBe("Missing arguments.");
  });
  test("Returns an error message if an empty array of students if passed in", () => {
    const output = findPartner([], ["right"]);
    expect(output).toBe("Students list is empty.");
  });
  test("Returns an array", () => {
    const directionsArray = ["right"];
    const output = findPartner(students, directionsArray);
    expect(Array.isArray(output)).toBe(true);
  });
  test("Returns a error message if the directions given includes anything other than up, down, left, right", () => {
    const directionsArray = ["right", "left", "up", "down", "x"];
    const output = findPartner(students, directionsArray);
    expect(output).toBe("Invalid direction(s) given.");
  });
  test("Returns the new array containing 1 student when given 1 direction which moves right", () => {
    const directionsArray = ["right"];
    const output = findPartner(students, directionsArray);
    expect(output).toEqual(["Harriet"]);
  });
  test("Returns the new array containing 1 student when given 1 direction which moves left where leftmost item means the array must loop horizontally", () => {
    const directionsArray = ["left"];
    const output = findPartner(students, directionsArray);
    expect(output).toEqual(["Kavita"]);
  });
  test("Returns the new array containing 3 students when given 3 directions of right", () => {
    const directionsArray = ["right", "right", "right"];
    const output = findPartner(students, directionsArray);
    expect(output).toEqual(["Harriet", "Mitch", "Jonny"]);
  });
  test("Returns the new array containing 1 student when given 3 directions which include the 'up' direction but the list does not go up", () => {
    const directionsArray = ["right", "up", "up"];
    const output = findPartner(students, directionsArray);
    expect(output).toEqual(["Harriet"]);
  });
});
