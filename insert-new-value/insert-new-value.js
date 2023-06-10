// Please do not change the name of this function
const insertNewValue = (arr, val) => {
  if (val === undefined) return arr;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > val) {
      arr.splice(i, 0, val);
      return arr;
    } else if (arr[arr.length - 1] < val) {
      arr.push(val);
    }
  }

  return arr;
};

module.exports = { insertNewValue };
