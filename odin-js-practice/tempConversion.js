//Exercise 07 - tempConversion

// Write two functions that convert temperatures from Fahrenheit to Celsius, and vice versa:

// convertToCelsius(32) // fahrenheit to celsius, should return 0

// convertToFahrenheit(0) // celsius to fahrenheit, should return 32
// Because we are human, we want the result temperature to be rounded to one decimal place: i.e., convertToCelsius(100) should return 37.8 and not 37.77777777777778.

//copied their starter code bc I think I need to get used to function expressions.

const convertToCelsius = function(temp) {
    //looking up conversion: (32°F − 32) × 5/9 = 0°C
    // Math.round(number * 10) / 10 for getting to 1 decimal i guess
     return Math.round(((temp - 32) * 5/9)*10)/10;
};

const convertToFahrenheit = function(temp) {
    //°F = (°C × 9/5) + 32
    return (temp* 9/5) + 32;
   
};

console.log(convertToCelsius(32)); // fahrenheit to celsius, should return 0
console.log(convertToFahrenheit(0)); // celsius to fahrenheit, should return 32