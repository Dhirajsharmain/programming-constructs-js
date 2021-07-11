/**
 * Write a program that takes a year as input and outputs the Year is a Leap Year or not
 * a Leap Year. A Leap Year checks for 4 Digit Number, Divisible by 4 and not 100 unless
 * divisible by 400.
 * @param {*} year : user input
 */

// function to check leap year
function checkLeapYear(year) {

    if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
        console.log(year + ' is a leap year');
    } else {
        console.log(year + ' is not a leap year');
    }
}

// take input
const year = prompt('Enter a year:');

checkLeapYear(year);    