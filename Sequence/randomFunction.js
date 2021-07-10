/**
 * ****************************************************************************
 * Purpose: The purpose of this program to learn about Random function and use
 * of Random function
 *
 * @author Dhiraj
 * @version 1.0
 * @since 10-07-2021
 * ****************************************************************************
 */

//Generate random number of single digit

let randomNumber = Math.floor(Math.random() * 10); 

console.log(randomNumber);

//Generate Dice Number between 1 to 6

let diceNumber = Math.floor(Math.random() * 6 + 1); 

console.log(diceNumber);

//Adding two Random Dice Number and Print the Result

let diceNumber1 = Math.floor(Math.random() * 6 + 1); 
let diceNumber2 = Math.floor(Math.random() * 6 + 1); 

console.log("Sum of two random number " + diceNumber1 + " + " + diceNumber2 + " = " + (diceNumber1 + diceNumber2));
