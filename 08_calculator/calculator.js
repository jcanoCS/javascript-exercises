const add = function(x, y) {
  return x + y;
};

const subtract = function(x, y) {
	return x - y;
};

const sum = function(arr) {
  const answer = arr.reduce((num, total) => {
    return total + num;
}, 0);
  return answer;
}

const multiply = function(arr) {
  return arr.reduce((accumulator, num) => {
    return accumulator * num;
  });
};


const power = function(base, exponent) {
	return base ** exponent;
};

const factorial = function(num) {
  let total = 1;
  while(num > 0) {
    total *= num;
    num -= 1;
  }
  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
