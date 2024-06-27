"use strict";
// Question no 23
// Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:
Object.defineProperty(exports, "__esModule", { value: true });
// let car = 'subaru';
// console.log("Is car == 'subaru'? I predict True.")
// console.log(car == 'subaru')
// • Look closely at your results, and make sure you understand why each line evaluates to True or False.
// • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
//Answer :
let car = "subaru";
// Test 1 : Equality comparion (ture)
console.log("Is car == 'subaru'? I predict Ture.");
console.log(car == 'subaru'); // ture
// Test 2: Strict equality compartion (ture)
console.log("Is car === 'subaru'? I predict ture.");
console.log(car === 'subaru'); //ture
// Test 3: inequality compartion (ture)
console.log("Is car != 'subaru'? I predict ture.");
console.log(car != 'subaru'); //ture
// Test 4: Strict equality compartion (false)
console.log("Is car !== 'subaru'? I predict ture.");
console.log(car !== 'subaru'); //false
// Test 5: less than equality compartion (false)
console.log("Is car < 'subaru'? I predict ture.");
console.log(car > 'subaru'); //false (lexicographic compariosn)
// Test 6: Greater than equality compartion (false)
console.log("Is car > 'subaru'? I predict ture.");
console.log(car > 'subaru'); //false (lexicographic )
// Test 7: less than or equal compartion (ture)
console.log("Is car <= 'subaru'? I predict ture.");
console.log(car <= 'subaru'); //ture
// Test 8: Greater than or equal compartion (ture)
console.log("Is car >= 'subaru'? I predict ture.");
console.log(car >= 'subaru'); //ture
// Test : 9 checking truthiness (ture)
console.log("Is car ? I predict ture.");
console.log(car); // ture (non-empty string is truthy)
// Test : 10 checking truthiness (false)
console.log("Is car ? I predict false.");
console.log(!car); // false (negation of a truthy value)
