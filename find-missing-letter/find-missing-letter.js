// Please do not change the name of this function
const findMissingLetter = (arr) => {
  let charTracker = 0;
  let prevTracker = 0;
  let missingChar = 0;

  for (let i = 0; i < arr.length; i++) {
    charTracker = arr[i].charCodeAt(arr[i]);

    if (i > 0) {
      prevTracker = arr[i - 1].charCodeAt(arr[i - 1]);
    }

    if (charTracker - prevTracker > 1 && prevTracker !== 0) {
      missingChar = charTracker - 1;
    }
  }

  return missingChar > 0 ? String.fromCharCode(missingChar) : "";
};

module.exports = { findMissingLetter };
