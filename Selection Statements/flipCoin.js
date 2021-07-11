/**
 * Write a program to simulate a coin flip and print out "Heads" or "Tails" accordingly.
 */
var toss = Math.random() * 2;
var floor = Math.floor(toss);
if(floor === 0){
    console.log("0 Random Coin Value: Head");
} else if(floor === 1)
{
    console.log("1 Random Coin Value: Tails");
}