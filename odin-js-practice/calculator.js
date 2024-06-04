const add = function(a,b) {
	return a+b;
};

const subtract = function(a,b) {
	return a - b;
};

const sum = function(arr) {
    const ret_sum = arr.reduce((sum, num) => {
        return sum + num;
    },0);
    return ret_sum;
	
};

const multiply = function(arr) {
    const ret_mul = arr.reduce((mul, num) =>{
        return mul * num;
    },1);
    return ret_mul;
};

const power = function(a,b) {
	for(let i = 0; i < b; i++){
        a*a;
    }
    return a;
};

const factorial = function(a) {
    result = 1;
	for(let i = 1; i <= a; i++){
        result *= i;
    }
    return result;
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

// The goal for this exercise is to create a calculator that does the following:

// add, subtract, get the sum, multiply, get the power, and find the factorial

// In order to do this please fill out each function with your solution. Make sure to return the value so you can test it in Jest! To see the expected value take a look at the spec file that houses the Jest test cases.