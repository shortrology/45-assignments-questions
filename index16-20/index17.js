// Question no 17
let GuestList = ["Ali", "sarah", "bilal", "azam", "fatima"];
// for (let index = 0; index < GuestList.length; index++) {
//     console.log("\n\nRespected sir/ Madam"+"  " + GuestList[index] +" " + "\njoin us for dinner this weekend :\n\nThank you\n");
// }
let present_guest = "alina";
let not_present = "azam";
GuestList[3] = present_guest;
for (let index = 0; index < GuestList.length; index++) {
    console.log("\n\nRespected sir / Madam" + " " + GuestList[index] + " " + "\n join us for dinner this weekend: \n\nThank you\n");
}
console.log(`mr. ${not_present} will not comeing this weekend dinner:`);
//  start ma 
GuestList.unshift("Hani");
//  End ma
GuestList.push("Maha");
// middle ma
let middleIndex = Math.floor(GuestList.length / 2);
GuestList.splice(middleIndex, 0, "zain");
for (let index = 0; index < GuestList.length; index++) {
    console.log("\n\nRespected sir / Madam" + " " + GuestList[index] + " " + "\n join us for dinner this wee);
}
export {};
