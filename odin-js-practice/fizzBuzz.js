/*
Write a program that takes a user’s input and prints the numbers from one to the number the user entered. However, for multiples of three print Fizz instead of the number and for the multiples of five print Buzz. For numbers which are multiples of both three and five print FizzBuzz.

*/
let input = parseInt(prompt("Enter a number!"));
// console.log(input);
for(let i =1; i <= input; i++){
    output ='';
    normal = true;
    if(i%3 ==0){
        output += 'Fizz';
        normal = false;
    }
    if(i%5 ==0){
        output += 'Buzz';
        normal = false;
    }
    if (normal){
        console.log(i)
    }else{
        console.log(output)
    }
}