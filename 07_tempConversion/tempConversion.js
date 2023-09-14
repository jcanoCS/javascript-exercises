const convertToCelsius = function(fahrenheitDegrees) {
  celsiusDegrees = (fahrenheitDegrees - 32.0) * (5.0/9.0);
  return Number(celsiusDegrees.toFixed(1));
};

const convertToFahrenheit = function() {
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
