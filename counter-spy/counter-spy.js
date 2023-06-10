// Please do not change the name of this function
function counterSpy(names) {
  // Your code here
  const nonSpyArray = [];

  if (names.length === 0) return nonSpyArray;

  names.forEach((name) => {
    if (
      !name.toLowerCase().includes("y") &&
      !name.toLowerCase().includes("s") &&
      !name.toLowerCase().includes("p")
    ) {
      nonSpyArray.push(name);
    }
  });

  return nonSpyArray.sort();
}

module.exports = counterSpy;
