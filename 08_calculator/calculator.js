const add = function(x, y) {
  return x + y;
};

const subtract = function(x, y) {
	return x - y;
};

const sum = function(arr) {
	let total = 0;
  arr.forEach((val) => {total += val; });
  return total;
};

const multiply = function(arr) {
  let total;
  arr.forEach((val) => {
    if(total){
      total *= val;
    }
    else {
      total = val;
    } 
  });

  return total;
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
