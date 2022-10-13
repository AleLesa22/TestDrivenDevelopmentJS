const calculator = require("./src/calculator");

// const numbersOf = [1, 2, 3, 4];
const numbersOf = [1,2,3];
const numbersOf2 = [1];
const numberOf3 = ['String','String'];

//addition

test("addition of 1,2,3 to equal 6", () => {
  expect(calculator.addCalculator(numbersOf)).toBe(6);
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
    calculator.addCalculator(numbersOf2);
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

test("TDD implement average function of 1,2,3 for analyze an array of numbers to equal 2", () => {
  expect(calculator.averageFunctionsCalculator(numbersOf)).toBe(2);
});

test("TDD implement min function for analyze an array of numbers 1,2,3 to equal 1", () => {
  expect(calculator.minFunctionsCalculator(numbersOf)).toBe(1);
});

test("TDD implement max function for analyze an array of numbers 1,2,3 to equal 3", () => {
  expect(calculator.maxFunctionsCalculator(numbersOf)).toBe(3);
});

test("Handling error that will occur when function is called with only one parameter or , without any parametars ", () => {
  expect(() => {
    calculator.averageFunctionsCalculator(numbersOf3);
  }).toThrow("ErrorByReferenceOfElements");
});

test("Handling error that will occur when function is called with only one parameter or , without any parametars ", () => {
  expect(() => {
    calculator.minFunctionsCalculator(numbersOf3);
  }).toThrow("ErrorByReferenceOfElements");
});

test("Handling error that will occur when function is called with only one parameter or , without any parametars ", () => {
  expect(() => {
    calculator.maxFunctionsCalculator(numbersOf3);
  }).toThrow("ErrorByReferenceOfElements");
});

