// Please do not change the name of this function
const uniqueAndOrdered = (args) => {
  const newOrderedArray = [];
  let previousValue = null;

  for (let i = 0; i < args.length; i++) {
    if (args[i] !== previousValue) {
      newOrderedArray.push(args[i]);
    }

    previousValue = args[i];
  }

  return newOrderedArray;
};

console.log(uniqueAndOrdered([1, 1, 1, 1, 1, 2, 2, 2, 3, 3, 1, 1])); // [1, 2, 3, 1];
console.log(uniqueAndOrdered("AaAAABBBCCCc")); // ['A', 'a', 'A', 'B', 'C', 'c']
console.log(uniqueAndOrdered("nnoorrtthhccooddeerrss")); // ['n', 'o', 'r', 't', 'h', 'c', 'o', 'd', 'e', 'r', 's'];

module.exports = { uniqueAndOrdered };
