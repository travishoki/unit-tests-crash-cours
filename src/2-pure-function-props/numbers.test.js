import { sum } from "./numbers";

/*
Task:
- Throw error for undefined props
*/
describe("numbers - sum", () => {
  it("should return the sum of two numbers", () => {
    const num1 = 1;
    const num2 = 1;

    expect(sum(num1, num2)).toEqual(2);
  });

  it("should throw an error for undefined props", () => {
    expect(() => sum()).toThrow("num1 prop undefined");
  });

  it("should throw an error for prop num2 being undefined", () => {
    const num1 = 1;
    expect(() => sum(num1)).toThrow("num2 prop undefined");
  });
});
