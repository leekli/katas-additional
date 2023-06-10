// Please do not change the name of this function
const alphabetReplace = (str) => {
  let strUpperCaseSplit = str.toUpperCase().split("");
  let replacedLetters = "";

  if (str.length === 0) return replacedLetters;

  const alphabetLookup = {
    A: 1,
    B: 2,
    C: 3,
    D: 4,
    E: 5,
    F: 6,
    G: 7,
    H: 8,
    I: 9,
    J: 10,
    K: 11,
    L: 12,
    M: 13,
    N: 14,
    O: 15,
    P: 16,
    Q: 17,
    R: 18,
    S: 19,
    T: 20,
    U: 21,
    V: 22,
    W: 23,
    X: 24,
    Y: 25,
    Z: 26,
  };

  strUpperCaseSplit.forEach((letter) => {
    if (letter === " ") {
      replacedLetters += "";
    } else {
      replacedLetters += alphabetLookup[letter] + " ";
    }
  });

  return replacedLetters.trim();
};

module.exports = { alphabetReplace };
