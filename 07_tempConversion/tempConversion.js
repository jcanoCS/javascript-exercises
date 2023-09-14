const convertToCelsius = function(fahrenheitDegrees) {
  // calculate conversion
  let celsiusDegrees = (fahrenheitDegrees - 32.0) * (5.0/9.0);
  // round to a single decimal place
  return Number(celsiusDegrees.toFixed(1));
};


const convertToFahrenheit = function(celsiusDegrees) {
  // calculate conversion
  let fahrenheitDegrees = (celsiusDegrees * (9.0/5.0)) + 32.0;
  // round to a single decimal place
  return Number(fahrenheitDegrees.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
