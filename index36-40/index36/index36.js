"use strict";
// Question no 36T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.
Object.defineProperty(exports, "__esModule", { value: true });
function make_Shirt(size, message) {
    console.log(`Making a ${size} t-shirt with the message "${message}"printed on it.`);
}
make_Shirt("medium", "code is life");
