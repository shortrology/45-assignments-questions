"use strict";
// Question no 39
// City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:
Object.defineProperty(exports, "__esModule", { value: true });
// "Lahore, Pakistan"
// Call your function with at least three city-country pairs, and print the value that’s returned.
function city_country(city, country) {
    // return `"${city}`,`${country}"`
    console.log(`"${city}, ${country}"`);
}
city_country("karachi", "Pakistan");
let myCities = city_country("karachi", "Pakistan");
console.log(myCities);
console.log(city_country("Dubai", "UAE"));
console.log(city_country("london", "united kingdom"));
console.log(city_country("Riyaz", "saudi Aarbia"));
