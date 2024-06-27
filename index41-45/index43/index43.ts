// Question no 43
// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.

// Define an array of magicians names

function show_magicians(magicaian:string[]){
    magicaian.forEach(name => console.log(name));
    
}
// function to make magicians great through .map()  it will modify array
function make_great(magicaians:string[]): string[] {
    return magicaians.map(name => ` The Great ${name}`);
        
    }

    // define an array of magicians names
let  magicaian_names : string [] = ["Harry poter", "Bilal","omer","hani"];

 // making a copy of original array through .slice () function
 let copy_magician_names = magicaian_names.slice();

 //modify the copied array to includ "the great " with thier names
let copy_great_magicians = make_great(copy_magician_names);

// show both array original and copied
//original
console.log("Original Array\n");
show_magicians(magicaian_names);
// copied
console.log("\n Copied Array\n");

show_magicians(copy_great_magicians);

    
