// Please do not change the name of this function
const textInDiv = (str, lengthOfLine) => {
  if (lengthOfLine < 15) return "INVALID INPUT";
  if (str.length <= lengthOfLine) return str;
  const newString = [];
  const splitString = str.split(" ");

  let currentNewStringIndex = 0;

  for (let i = 0; i < splitString.length; i++) {
    if (i === 0) newString.push(`${splitString[i]}`);
    if (i > 0) {
      if (
        newString[currentNewStringIndex].length + splitString[i].length >=
        lengthOfLine
      ) {
        newString.push(`${splitString[i]}`);
        currentNewStringIndex++;
      } else if (
        newString[currentNewStringIndex].length + splitString[i].length <=
        lengthOfLine
      ) {
        newString[
          currentNewStringIndex
        ] = `\n${newString[currentNewStringIndex]} ${splitString[i]}\n`;
      }
    }
  }

  return newString.join("");
};

console.log("1 ->", textInDiv("A", 1)); // "INVALID INPUT"
console.log("2 ->", textInDiv("Northcoders", 15)); // "Northcoders"
console.log("3 ->", textInDiv("Northcoders Coding Bootcamp", 15));
console.log("4 ->", textInDiv("Northcoders Coding Bootcamp", 20));
console.log("5 ->", textInDiv("Northcoders Coding Bootcamp", 30));

module.exports = { textInDiv };
