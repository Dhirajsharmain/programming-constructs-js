/**
 * Adding five random numbers and calculating average.
 */
let sum = 0;
let num = 5;

for (let i = 0; i < num; i++) {
    sum += Math.floor(Math.random() * 90) + 9;
}

console.log("Sum : " + sum);
console.log("Average : " + sum/num);