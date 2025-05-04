const add = function(a, b) {
  const result = (a) + (b)
  return result
};

const subtract = function(c, d) {
	const result = (c)-(d)
  return result
};

const sum = function(sumArray) {
	const result = sumArray.reduce((acc, currentValue)=> {
    return acc + currentValue
  }, 0)
  return result
};

const multiply = function(multiplyArray) {
	const result = multiplyArray.reduce((acc, currentValue)=> {
    return acc * currentValue
  },)
  return result
};

const power = function(e, f) {
  const result = e ** f
  return result
};

const factorial = function(number) {
  if (number === 0) {
    return 1
  }
  let result = 1
	for (let i = 1; i <= number; i++) {
  result *= i }

  return result
};


console.log(factorial(5));

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
