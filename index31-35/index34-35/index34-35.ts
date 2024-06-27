// Question no 34
// Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
// • Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.

// • Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!



let favoritePizzas : string[] =["cheeze pizza","chikentikka pizza","vegeterian pizza"]

// print only name of pizza
for (let index = 0; index < favoritePizzas.length; index++) {
    console.log(favoritePizzas[index]);
    
    for (let index = 0; index < favoritePizzas.length; index++) {
        console.log(`I like to eat: ${favoritePizzas[index]}`);
        
    }
    console.log(
         '\n "I really like to eat pizza."\n'
    );
}

// Question no 35
// Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. • Modify your program to print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!

let Animals : string[] = ["elephant","cat","rabbit","dog"]
Animals.forEach(Animals => {
    console.log(`A ${Animals} would make a great pet!`);
    
});
console.log("\nAny of these animals would make a great pet!\n");



