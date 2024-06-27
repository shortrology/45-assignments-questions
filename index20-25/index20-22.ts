//Question no 20
let countryName : string [] =["pakistan","india","USA","canada","UK"]
console.log("lish of countries:");
for (let top of countryName) {
    console.log(top)
    
}

// Question no 21

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

let array : (string | number) [] = ["ALI", "Maha","omer",22,5,8,3]
console.log(array[7]);

let LIST : (string | number) [] = ["ALI", "Maha","omer",22,5,8,3]
console.log(LIST[6]);
console.log(LIST[1]);

