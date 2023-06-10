// Please do not change the name of this function
const validateAndFormatPhone = (str) => {
  if (typeof str !== "string") return "Invalid phone number";
  if (str.length < 10) return "Invalid phone number";

  let newPhoneNum = "";
  let numValid = false;

  const validNumberFormats = [
    "+447",
    "+441",
    "+442",
    "00447",
    "00441",
    "00442",
    "07",
    "01",
    "02",
  ];

  validNumberFormats.forEach((num) => {
    if (str.startsWith(num)) {
      numValid = true;
      newPhoneNum = "+44" + str.slice(num.length - 1);
    }
  });

  return !numValid ? "Invalid phone number" : newPhoneNum;
};

module.exports = { validateAndFormatPhone };
