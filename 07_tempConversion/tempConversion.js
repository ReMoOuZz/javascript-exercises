const convertToCelsius = function(tempOnFahrenheit) {
  const tempCelcius = ((((tempOnFahrenheit)-32)/1.8))
  return Math.ceil(tempCelcius*10)/10
};

const convertToFahrenheit = function(tempOnCelcius) {
  const tempFahrenheit = (((tempOnCelcius)*1.8)+32)
  return Math.ceil(tempFahrenheit*10)/10
};

console.log(convertToFahrenheit(-10));


// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
