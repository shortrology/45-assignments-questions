// Question no 29Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.

// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!


let favoriteFruits : string[] = ["Banana","Mango","kiwi"]
    
if (favoriteFruits .includes('Banana') ) {
    console.log(" I really like Banana");
    
}

if (favoriteFruits .includes('Mango') ) {
    console.log(" I really like Mango");
    
}
if (favoriteFruits .includes('orange') ) {
    console.log(" I really like orange");
    
}
if (favoriteFruits .includes('kiwi') ) {
    console.log(" I really like kiwi");
    
}
if (favoriteFruits .includes('grapes') ) {
    console.log(" I really like grapes");
    
}

//  Question no 30 
// Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
// • If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?

// • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.

let usernames : string [] = ["Bilal", "Omer","Ahemd","Admin","alina"];

for(let username of usernames){
       if (username === "Admin") {
    console.log("Hello admin ,would you like to see a status report? ");
    
}
else {
    console.log(`Hello ${username},Thank you for logging in again.`);
    }
}