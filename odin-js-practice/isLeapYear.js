//Exercise 06 - leapYears

// Create a function that determines whether or not a given year is a leap year. Leap years are determined by the following rules:

// Leap years are years divisible by four (like 1984 and 2004). However, years divisible by 100 are not leap years (such as 1800 and 1900) unless they are divisible by 400 (like 1600 and 2000, which were in fact leap years). (Yes, it's all pretty confusing)

function isLeapYear(year){
    if (year%4 ==0){
        if ((year%100 == 0) && !(year%400==0)){
            return false;
        }
        return true;
    }
    return false;
}
console.log(`2000? `,isLeapYear(2000));
console.log(`1985? `,isLeapYear(1985));
console.log(`1800? `,isLeapYear(1800));
console.log(`1600? `,isLeapYear(1600));


//TOP condensed it all better
const leapYears = function (year) {
  return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
};