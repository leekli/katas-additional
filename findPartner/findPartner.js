// Please do not change the name of this function
const findPartner = (students, directions) => {
  if (students === undefined || directions === undefined)
    return "Missing arguments.";

  if (students.length === 0) return "Students list is empty.";

  const validDirections = ["right", "left", "up", "down"];

  const containsOnlyValidDirections = (array1, array2) => {
    return array1.every((direction) => {
      return array2.includes(direction);
    });
  };

  // Check the directions array only contains valid directions of: right, left, up, down
  if (!containsOnlyValidDirections(directions, validDirections))
    return "Invalid direction(s) given.";

  const newPartnersArray = [];

  const moveMap = {
    right: 1,
    left: -1,
  };

  let index = 0;

  for (let i = 0; i < directions.length; i++) {
    if (directions[i] !== "up") {
      if (index + moveMap[directions[i]] >= 0) {
        newPartnersArray.push(students[0][index + moveMap[directions[i]]]);
        index += moveMap[directions[i]];
      } else {
        index = students[0].length - 1;
        newPartnersArray.push(students[0][index]);
      }
    }
  }

  return newPartnersArray;
};

module.exports = { findPartner };
