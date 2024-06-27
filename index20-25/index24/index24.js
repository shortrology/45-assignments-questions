"use strict";
// Question no 24
// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
Object.defineProperty(exports, "__esModule", { value: true });
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array
let car = "subaru";
let age = 25;
let numbers = [1, 2, 3, 4,];
// **string TEST**
// Test 1:  Equality (ture)
console.log("Is car == 'subaru' ? I predict ture.");
console.log(car == 'subaru'); // ture (case-insensitive)
// Test 2: strict Equality (false)
console.log("Is car === 'subaru' ? I predict ture");
console.log(car === 'subaru'); //false (case- sensitive)
// Test 3: inquality (ture)
console.log("Is car != 'toyota' ? I predict ture");
console.log(car != 'toyata'); //ture 
// Test 4: inequality (false)
console.log("Is car !== 'subaru' ? I predict ture");
console.log(car !== 'subaru'); //false (case senstive)
// ** LOWERCASE FUNCTION TESTS**
// Test 5: lowercase conversion (ture)
console.log("Is car.tolowerCase() == 'subaru' ? I predict ture");
console.log(car.toLowerCase() == 'subaru'); // ture (conversion to lowercase)
// Test 6: lowercase conversion (false)
console.log("Is car === car.tolowercase() ? I predict false");
console.log(car === car.toLowerCase()); //false (original value remains uppercase)
// == Numberical Test**
// Test 7:  Equality (ture)
console.log("Is age == 25 ? I predict ture");
console.log(age == 25); //ture 
// Test 8: Inquality (false)
console.log("Is age != 30 ? I predict ture");
console.log(age != 30); // ture
// Test 9: Greater than  (false)
console.log(" Is age > 30 ? I predict false");
console.log(age > 30); //false 
// Test 10: Less than or Equal (ture)
console.log("Is age <= 25 ? I predict ture");
console.log(age <= 25); // ture
// logical Operators**
// test  11: AND (ture)
console.log("Is age > 20 && age < 30? I predict ture");
console.log(age > 20 || age < 30); //ture (both  conditinos met)
// test  12: OR (false)
console.log("Is age > 30 && age < 18? I predict false");
console.log(age > 30 || age < 18); //False (neither conditinos met)
// **Array test**
// test 13 : in array (ture)
console.log("Is 3  in numbers? I predict ture");
console.log(3 in numbers); //ture (checks for index existence)
// test  14 :NOT in array  (false)
// console.log("Is 5 not in numbers? I predict ture");
// console.log(5 not  in numbers);  //ture (checks for index existence)
