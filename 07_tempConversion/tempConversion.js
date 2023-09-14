const convertToCelsius = function(fahrenheitDegrees) {
  let celsiusDegrees = (fahrenheitDegrees - 32.0) * (5.0/9.0);
  return Number(celsiusDegrees.toFixed(1));
};


const convertToFahrenheit = function(celsiusDegrees) {
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
