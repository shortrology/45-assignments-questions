// question no 2
//Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”

let userName: string = "Anwar";
console.log(
  "Hello",
  userName,
  " Eric would you like to learn some Python today? "
);

// Question no 3  name casesName Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

let personName: string = "Bilal Anwar";

console.log("lowerCase:", personName.toLowerCase());

console.log("upperCase:", personName.toLocaleUpperCase());

console.log(
  "titleCase:",
  personName.replace(/\bw/g, (c) => c.toUpperCase())
);

// Qusetion no 4 famouse Quoteamous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks:
//Albert Einstein once said, “A person who never made a mistake never tried anything new.”

let quote: string =
  "A person who never made a mistake never tried anything new";
let auther: string = "Albert Einstein";
console.log(`${auther} onec said,"${quote}`);

// 2nd method
//console.log("Albert Einstein once said,\"A person who never made a mistake never tried anything new.\"");

//Qusetion no 5
//Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.

let famous_person: string = "Albert Einstein";
let message: string =
  'once said, "A person who never made a mistake never tried anything new."';

console.log(famous_person, message);
