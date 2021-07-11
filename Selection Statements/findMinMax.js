/**
 * Write a program that reads 5 Random 3 Digit values and then outputs the minimum
 * and the maximum value
 */

let num1 = Math.floor(Math.random() * 900) + 100;
let num2 = Math.floor(Math.random() * 900) + 100;
let num3 = Math.floor(Math.random() * 900) + 100;
let num4 = Math.floor(Math.random() * 900) + 100;
let num5 = Math.floor(Math.random() * 900) + 100;

if ((num1 < num2) && (num1 < num3) && (num1 < num4) && (num1 < num5)) {
    console.log(num1 + " is maximum");
}
else if((num2 < num3) && (num2 < num3) && (num2 < num3)) {
    console.log(num2 + " is maximum");
}
else if((num3 < num4) && (num3 < num5)) {
    console.log(num3 + " is maximum");
}
else if(num4 < num5) {
    console.log(num4 + " is maximum");
} else {
    console.log(num5 + " is maximum");
}