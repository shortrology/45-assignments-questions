"use strict";
// Question no 34
Object.defineProperty(exports, "__esModule", { value: true });
let favoritePizzas = ["cheeze pizza", "chikentikka pizza", "vegeterian pizza"];
// print only name of pizza
for (let index = 0; index < favoritePizzas.length; index++) {
    console.log(favoritePizzas[index]);
    for (let index = 0; index < favoritePizzas.length; index++) {
        console.log(`I like to eat: ${favoritePizzas[index]}`);
    }
    console.log('\n "I really like to eat pizza."\n');
}
// Question no 35
let Animals = ["elephant", "cat", "rabbit", "dog"];
Animals.forEach(Animals => {
    console.log(`A ${Animals} would make a great pet!`);
});
console.log("\nAny of these animals would make a great pet!\n");
