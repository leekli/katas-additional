// Please do not change the name of this function
const foldArray = (arr, foldTimes) => {
  if (arr.length <= 1) return arr;

  const foldedArray = [];

  if (arr.length === 2) {
    foldedArray.push(arr[0] + arr[arr.length - 1]);
  } else if (arr.length === 3 && arr.length % 2 === 1) {
    foldedArray.push(arr[0] + arr[arr.length - 1], arr[1]);
  } else {
    for (let i = 0; i <= arr.length; i++) {
      foldedArray.push(arr[0] + arr[arr.length - 1]);
      arr.pop();
      arr.shift();
    }
  }

  return foldedArray;
};

module.exports = { foldArray };
