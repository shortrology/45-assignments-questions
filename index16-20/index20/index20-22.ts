//Question no 20
// Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.

let countryName : string [] =["pakistan","india","USA","canada","UK"]
console.log("lish of countries:");
for (let top of countryName) {
    console.log(top)
    
}

// Question no 21
//They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.

interface item {
    name : string
     price : number
}
//create two objects
const book : item = {
    name: "Essential typescipt",
    price : 450,
}
const apple : item = {
    name : "apple",
    price : 250,
}
console.log(`book name : ${book.name},price: $${book.price}`);
console.log(`apple.name : ${apple.name},price : $${apple.price}`);

// Question no 22
//Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.

let array : (string | number) [] = ["ALI", "Maha","omer",22,5,8,3]
console.log(array[7]);

let LIST : (string | number) [] = ["ALI", "Maha","omer",22,5,8,3]
console.log(LIST[6]);
console.log(LIST[1]);

