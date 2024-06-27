"use strict";
// Question no 26
//Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
// • If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
Object.defineProperty(exports, "__esModule", { value: true });
// • If the alien’s color isn’t green, print a statement that the player just earned 10 points.
// • Write one version of this program that runs the if block and another that runs the else block.
let alienColor = "red";
// print message
if (alienColor == "orange") {
    console.log("the player just earned 5 points  for shooting the alien.");
}
else {
    console.log("the player just earned 10 points ");
}
// program passes
alienColor = "yellow";
if (alienColor == "orange") {
    console.log("The player just earned 5 points for shooting the alien");
}
// else {
//     console.log("the player just earned 10 points ");
// }
