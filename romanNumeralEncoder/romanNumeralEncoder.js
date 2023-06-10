// Please do not change the name of this function
const romanNumeralEncoder = (num) => {
  if (num === undefined) return "";
  if (num === 0) return "nullus";

  const romanNumberalLookup = {
    1000: "M",
    900: "CM",
    500: "D",
    400: "CD",
    100: "C",
    90: "XC",
    50: "L",
    40: "XL",
    10: "X",
    9: "IX",
    5: "V",
    4: "IV",
    1: "I",
  };

  if (Object.keys(romanNumberalLookup).includes(String(num)))
    return romanNumberalLookup[String(num)];

  let finalRomanNumeral = "";

  for (let i of Object.keys(romanNumberalLookup).reverse()) {
    let temp = Math.floor(num / i);
    num -= temp * i;
    finalRomanNumeral += romanNumberalLookup[i].repeat(temp);
  }

  return finalRomanNumeral;
};

module.exports = { romanNumeralEncoder };
