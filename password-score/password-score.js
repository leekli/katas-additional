// Please do not change the name of this function
const passwordScore = (password) => {
  if (!password || password.length === 0) return 0;

  function checkForSpecialChars(word) {
    const specialChars = "!@£#$%^&*";

    for (let i = 0; i < specialChars.length; i++) {
      if (word.includes(specialChars[i])) {
        return true;
      }
    }

    return false;
  }

  let score = 0;

  if (/\w{1,3}/g.test(password)) score = 1;
  if (/\w{4,8}/g.test(password)) score = 2;
  if (/\w{9,}/g.test(password)) score = 3;
  if (/\w{9,}\d/g.test(password)) score = 4;
  if (
    password.length > 8 &&
    /[\w\d,!@£#$%^&*]/g.test(password) &&
    checkForSpecialChars(password)
  )
    score = 5;
  if (/\w{12,}\d/g.test(password)) score = 6;
  if (
    password.length >= 12 &&
    /[\w\d,!@£#$%^&*]/g.test(password) &&
    checkForSpecialChars(password)
  )
    score = 7;

  return score;
};

module.exports = { passwordScore };
