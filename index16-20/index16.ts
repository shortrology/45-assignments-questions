// Question no 16 
//More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
//• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
//• Add one new guest to the beginning of your array.
//• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
//

let GuestList: string[] = ["Ali", "sarah", "bilal", "azam", "fatima"];

// for (let index = 0; index < GuestList.length; index++) {
//     console.log("\n\nRespected sir/ Madam"+"  " + GuestList[index] +" " + "\njoin us for dinner this weekend :\n\nThank you\n");
// }

let present_guest: string = "alina";
let not_present: string = "azam";
GuestList[3] = present_guest;
for (let index = 0; index < GuestList.length; index++) {
  console.log(
    "\n\nRespected sir / Madam" +
      " " +
      GuestList[index] +
      " " +
      "\n join us for dinner this weekend: \n\nThank you\n"
  );
}
console.log(`mr. ${not_present} will not comeing this weekend dinner:`);

//  start ma
GuestList.unshift("Hani");
//  End ma
GuestList.push("Maha");
// middle ma
let middleIndex: number = Math.floor(GuestList.length / 2);
GuestList.splice(middleIndex, 0, "zain");
for (let index = 0; index < GuestList.length; index++) {
  console.log(
    "\n\nRespected sir / Madam" +
      " " +
      GuestList[index] +
      " " +
      "\n join us for dinner this weekend. we found big table so we decide to invite 3 more guest :\n\nThank you\n"
  );
}
