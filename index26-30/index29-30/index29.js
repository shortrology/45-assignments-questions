"use strict";
// Question no 29
let favoriteFruits = ["Banana", "Mango", "kiwi"];
if (favoriteFruits.includes('Banana')) {
    console.log(" I really like Banana");
}
if (favoriteFruits.includes('Mango')) {
    console.log(" I really like Mango");
}
if (favoriteFruits.includes('orange')) {
    console.log(" I really like orange");
}
if (favoriteFruits.includes('kiwi')) {
    console.log(" I really like kiwi");
}
if (favoriteFruits.includes('grapes')) {
    console.log(" I really like grapes");
}
//  Question no 30 
let usernames = ["Bilal", "Omer", "Ahemd", "Admin", "alina"];
for (let username of usernames) {
    if (username === "Admin") {
        console.log("Hello admin ,would you like to see a status report? ");
    }
    else {
        console.log(`Hello ${username},Thank you for logging in again.`);
    }
}
