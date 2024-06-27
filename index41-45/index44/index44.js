"use strict";
// Question no 44 
//  Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
Object.defineProperty(exports, "__esModule", { value: true });
//define a function with a rest parameter that accept items arugments representing our sandwich
function makeSandwich(...items) {
    console.log("\nMaking a sandwich with the following items :\n");
    items.forEach(singleItem => console.log(singleItem));
    console.log("\nNow Enjoy Sandwich\n");
}
// call the function 3 times with 3 different number of argument
makeSandwich("Chicken", "cheese", "Mayo", "Egg");
makeSandwich("Bread", "Butter");
makeSandwich("Bread", "Butter", "Mayo", "Egg", "cheese", "chicken", "tomato", "lettuce");
