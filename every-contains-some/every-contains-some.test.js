const { every, contains, some } = require("./every-contains-some.js");

describe("Every-Contains-Sum Tests", () => {
  describe("every() Tests:", () => {
    test("Returns a function when typeof is checked", () => {
      expect(typeof every).toBe("function");
    });
    test("Returns false is no list is passed into the every function", () => {
      expect(every()).toBe(false);
    });
    test("Returns false is an empty list is passed into the every function", () => {
      expect(every([])).toBe(false);
    });
    test("Returns true when passed a list of 1 number which evaluates to true", () => {
      const testPredicate = (num) => {
        return num % 2 === 0;
      };
      expect(every([2], testPredicate)).toBe(true);
    });
    test("Returns false when passed a list of 1 number which evaluates to false", () => {
      const testPredicate = (num) => {
        return num % 2 === 0;
      };
      expect(every([3], testPredicate)).toBe(false);
    });
    test("Returns true when passed a list of 3 numbers which evaluate to true", () => {
      const testPredicate = (num) => {
        return num % 2 === 0;
      };
      expect(every([2, 4, 6], testPredicate)).toBe(true);
    });
    test("Returns false when passed a list of 3 numbers which evaluate to false", () => {
      const testPredicate = (num) => {
        return num % 2 === 0;
      };
      expect(every([1, 3, 5], testPredicate)).toBe(false);
    });
    test("Returns false when passed a list of 3 numbers where some are true and some are false (not all true)", () => {
      const testPredicate = (num) => {
        return num % 2 === 0;
      };
      expect(every([2, 4, 5], testPredicate)).toBe(false);
    });
    test("Returns false when passed a list of 3 numbers where some are true and some are false (not all true)", () => {
      const testPredicate = (num) => {
        return num % 2 === 0;
      };
      expect(every([1, 4, 6], testPredicate)).toBe(false);
    });
  });
  describe("some() tests:", () => {
    test("Returns true that it is a typeof function", () => {
      expect(typeof some).toBe("function");
    });
    test("Returns false is no list is passed into the every function", () => {
      expect(some()).toBe(false);
    });
    test("Returns false is an empty list is passed into the every function", () => {
      expect(some([])).toBe(false);
    });
    test("Returns true when passed a list of 1 number which evaluates to true", () => {
      const testPredicate = (num) => {
        return num % 2 === 0;
      };
      expect(some([2], testPredicate)).toBe(true);
    });
    test("Returns false when passed a list of 1 number which evaluates to false", () => {
      const testPredicate = (num) => {
        return num % 2 === 0;
      };
      expect(some([3], testPredicate)).toBe(false);
    });
    test("Returns true when passed a list of 3 numbers which evaluates to true", () => {
      const testPredicate = (num) => {
        return num % 2 === 0;
      };
      expect(some([2, 4, 6], testPredicate)).toBe(true);
    });
    test("Returns false when passed a list of 3 numbers which evaluates to false", () => {
      const testPredicate = (num) => {
        return num % 2 === 0;
      };
      expect(some([1, 3, 5], testPredicate)).toBe(false);
    });
    test("Returns true when passed a list of 3 numbers where at least 1 evaluates to true (first value)", () => {
      const testPredicate = (num) => {
        return num % 2 === 0;
      };
      expect(some([2, 3, 5], testPredicate)).toBe(true);
    });
    test("Returns true when passed a list of 3 numbers where at least 1 evaluates to true (middle value)", () => {
      const testPredicate = (num) => {
        return num % 2 === 0;
      };
      expect(some([1, 4, 5], testPredicate)).toBe(true);
    });
    test("Returns true when passed a list of 4 different values where at least 1 evaluates to true", () => {
      const testPredicate = (num) => {
        return num % 2 === 0;
      };
      expect(some([null, 0, "yes", false], testPredicate)).toBe(true);
    });
  });
  describe("contains() tests:", () => {
    test("Returns true that it is a typeof function", () => {
      expect(typeof contains).toBe("function");
    });
    test("Returns false is no list is passed into the every function", () => {
      expect(contains()).toBe(false);
    });
    test("Returns false is an empty list is passed into the every function", () => {
      expect(contains([])).toBe(false);
    });
    test("Returns true when passed a list of 1 number and the value is present", () => {
      expect(contains([2], 2)).toBe(true);
    });
    test("Returns false when passed a list of 1 number and the value is not present", () => {
      expect(contains([3], 1)).toBe(false);
    });
    test("Returns true when passed a list of values and the value is present", () => {
      expect(contains([1, 2, "a", true, "zz", 3, null], "zz")).toBe(true);
    });
    test("Returns false when passed a list of values and the value is not present", () => {
      expect(contains([1, 2, "a", true, "zz", 3, null], 4)).toBe(false);
    });
  });
});
