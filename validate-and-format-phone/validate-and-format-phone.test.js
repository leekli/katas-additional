const { validateAndFormatPhone } = require("./validate-and-format-phone");

describe("validateAndFormatPhone Tests", () => {
  test("Returns 'Invalid phone number' if passed an empty string", () => {
    const input = "";
    const output = validateAndFormatPhone(input);
    expect(output).toBe("Invalid phone number");
  });
  test("Returns 'Invalid phone number' if passed a data type which is not a string", () => {
    let input = 0;
    let output = validateAndFormatPhone(input);
    expect(output).toBe("Invalid phone number");
    input = null;
    output = validateAndFormatPhone(input);
    expect(output).toBe("Invalid phone number");
  });
  test("Returns 'Invalid phone number' if passed a string of no numbers and only 'Not a number'", () => {
    const input = "Not a Number";
    const output = validateAndFormatPhone(input);
    expect(output).toBe("Invalid phone number");
  });
  test("Returns 'Invalid phone number' if passed a phone number less than 10 characters long", () => {
    const input = "012345678";
    const output = validateAndFormatPhone(input);
    expect(output).toBe("Invalid phone number");
  });
  test("Returns 'Invalid phone number' if passed a phone number which does not include the valid formats", () => {
    // The phone number can be "valid" in many formats: +447, +441, +442, 00447, 00441, 00442, 07, 01, 02
    let input = "08559912983";
    let output = validateAndFormatPhone(input);
    expect(output).toBe("Invalid phone number");
    input = "+2082394891246";
    output = validateAndFormatPhone(input);
    expect(output).toBe("Invalid phone number");
  });
  test("Does not return 'Invalid phone number' if passed a phone number which does include the valid formats", () => {
    // The phone number can be "valid" in many formats: +447, +441, +442, 00447, 00441, 00442, 07, 01, 02
    let input = "01616603202";
    let output = validateAndFormatPhone(input);
    expect(output).not.toBe("Invalid phone number");
    input = "00441616603202";
    output = validateAndFormatPhone(input);
    expect(output).not.toBe("Invalid phone number");
    input = "07540706000";
    output = validateAndFormatPhone(input);
    expect(output).not.toBe("Invalid phone number");
    input = "+447540706000";
    output = validateAndFormatPhone(input);
    expect(output).not.toBe("Invalid phone number");
  });
  test("Returns the new Twilio format number when passed a phone number which includes the valid format starting with 01", () => {
    const input = "01616603202";
    const output = validateAndFormatPhone(input);
    expect(output).toBe("+441616603202");
  });
  test("Returns the new Twilio format number when passed a phone number which includes the valid format starting with 00441", () => {
    const input = "00441616603202";
    const output = validateAndFormatPhone(input);
    expect(output).toBe("+441616603202");
  });
  test("Returns the new Twilio format number when passed a phone number which includes the valid format starting with 07", () => {
    const input = "07540706000";
    const output = validateAndFormatPhone(input);
    expect(output).toBe("+447540706000");
  });
});
