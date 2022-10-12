const calculator = require("./src/calculator");

// const numbersOf = [1, 2, 3, 4];
const numbersOf = [1];

//addition

test("addition of 1,2,3,4 to equal 6", () => {
  expect(calculator.addCalculator(numbersOf)).toBe(10);
});

//substraction

test("substraction of 10 and 5 to equal 5", () => {
  expect(calculator.substractCalculator(10, 5)).toBe(5);
});

//division

test("division of 10 and 5 to equal 2", () => {
  expect(calculator.divideCalculator(10, 0)).toBe(2);
});

//multiplication

test("multiplication of 10 and 5 to equal 50", () => {
  expect(calculator.multiplicationCalculator(10, 5)).toBe(50);
});

test("Handling error that will occur when function is called with only one parameter or , without any parametars at all", () => {
  expect(() => {
    calculator.addCalculator(numbersOf);
  }).toThrow("ErrorStackUnderflow!");
});

test("Handling error that will occur when one of function parameters are 0", () => {
  expect(() => {
    calculator.divideCalculator(1, 0);
  }).toThrow("ErrorDividingByZero");
});

test("Handling error that will occur when one of function parameters is type of string", () => {
  expect(() => {
    calculator.multiplicationCalculator("string", 2);
  }).toThrow("ErrorByReference");
});
