"use strict";
// Question no 33
// Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
// • Store the numbers 1 through 9 in a array.
Object.defineProperty(exports, "__esModule", { value: true });
// • Loop through the array.
// • Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.
let myNumbers = [1, 2, 3, 4, 5, 6, 7, 8.9];
//for loop
for (let index = 0; index < myNumbers.length; index++) {
    // now we use conditions
    if (myNumbers[index] == 1) {
        console.log(`${myNumbers[index]}st`);
    }
    else if (myNumbers[index] == 2) {
        console.log(`${myNumbers[index]}nd`);
    }
    else if (myNumbers[index] == 3) {
        console.log(`${myNumbers[index]}rd`);
    }
    else if (myNumbers[index] >= 4 && myNumbers[index] <= 9) {
        console.log(`${myNumbers[index]}th`);
    }
}
