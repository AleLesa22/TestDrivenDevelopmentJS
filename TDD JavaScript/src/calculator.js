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

//average
function averageFunctionsCalculator(numbers){
  if (isFinite(numbers) || numbers.length<=1) {
    throw new Error("ErrorByReferenceOfElements");
  } else
  {
  let average=0;
  for(let i=0; i < numbers.length; i++)
  {
    average+=numbers[i];
  }
  average= average/numbers.length;
  return average;
  }
}

//min
function minFunctionsCalculator(numbers){
    let min=Infinity;
  if (isFinite(numbers) || numbers.length<=1) {
    throw new Error("ErrorByReferenceOfElements");
  } else
  {
    for(let i=0; i < numbers.length; i++)
  {
    if(numbers[i]<min)
    {
      min=numbers[i];
    }
  }
  return min;
  }
}

//max
function maxFunctionsCalculator(numbers){

  let max=0;
  if (isFinite(numbers) || numbers.length<=1) {
    throw new Error("ErrorByReferenceOfElements");
  } else
  {
  for(let i=0; i < numbers.length; i++)
  {
    if(numbers[i]>max)
    {
      max=numbers[i];
    }
  }
  return max;
  }

}


module.exports = {
  addCalculator,

  substractCalculator,

  divideCalculator,

  multiplicationCalculator,

  averageFunctionsCalculator,

  maxFunctionsCalculator,

  minFunctionsCalculator,
};
