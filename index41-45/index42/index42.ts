// Question no 42
// Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.

// define the function to show magicians names
function show_magicians(magicaian:string[]){
    magicaian.forEach(name => console.log(name));

}
// define an array of magicians names
let magicaian_names: string[] = ["Don","Rmeenz","Chris"]


// function to make magicians great to through .map () it will modify array
function make_great(magicaions:string[]) {
     return magicaions.map(name =>`The Great ${name}`);
}
// call make_great function to modify magicicans names
let great_magicians = make_great(magicaian_names)

//call show_magicians that show modified list of magicians
show_magicians(great_magicians);


