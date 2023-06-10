// Please do not change the name of this function
const rgbaModifier = (rgbaStr, percent, opacity) => {
  if (
    rgbaStr === undefined ||
    rgbaStr.length === 0 ||
    percent === undefined ||
    opacity === undefined
  )
    return "Missing arguments";

  if (percent === 0 && opacity === 0) return rgbaStr;

  const splitRgbaString = rgbaStr
    .replace(/[rgba()]/g, "")
    .split(",")
    .map((num) => Number(num));

  for (let i = 0; i < 3; i++) {
    const newCalc = Math.round(
      splitRgbaString[i] + (percent / 100) * splitRgbaString[i]
    );
    if (newCalc >= 255) {
      splitRgbaString[i] = 255;
    } else {
      splitRgbaString[i] = newCalc;
    }
  }

  if (opacity !== 0) {
    splitRgbaString[3] = opacity;
  }

  return "rgba(" + `${splitRgbaString.join(",")}` + ")";
};

module.exports = { rgbaModifier };
