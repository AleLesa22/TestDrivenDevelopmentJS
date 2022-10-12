function addCalculator(numbers) {
  let sum = 0;

  if (numbers.length == 1 || numbers.length == 0) {
    throw new Error("ErrorStackUnderflow!");
  } else {
    for (let i = 0; i < numbers.length; i++) {
      sum += numbers[i];
    }
  }

  return sum;
}

function substractCalculator(a, b) {
  return a - b;
}

function divideCalculator(a, b) {
  if (b == 0) {
    throw new Error("ErrorDividingByZero");
  } else return a / b;
}

function multiplicationCalculator(a, b) {
  if (isFinite(a) || isFinite(b)) {
    throw new Error("ErrorByReference");
  } else return a * b;
}

module.exports = {
  addCalculator,

  substractCalculator,

  divideCalculator,

  multiplicationCalculator,
};
