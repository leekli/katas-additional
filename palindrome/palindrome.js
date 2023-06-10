// Please do not change the name of this function
const palindrome = (str) => {
  const strAmended = str.toLowerCase().split(" ").join("");

  if (strAmended.length <= 1) {
    return true;
  } else {
    if (strAmended[0] === strAmended[strAmended.length - 1]) {
      return palindrome(strAmended.slice(1, -1));
    } else {
      return false;
    }
  }
};

module.exports = { palindrome };
