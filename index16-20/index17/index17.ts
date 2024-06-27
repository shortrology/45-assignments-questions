// Qusetion no 17
// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

// • Print a message to each of the two people still on your list, letting them know they’re still invited.

// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
 
let GuestList : string[] = ["Ali","sarah","bilal","azam","fatima"]

// for (let index = 0; index < GuestList.length; index++) {
//     console.log("\n\nRespected sir/ Madam"+"  " + GuestList[index] +" " + "\njoin us for dinner this weekend :\n\nThank you\n");
// }

let present_guest : string = "alina";
let not_present : string = "azam";
 GuestList [3] = present_guest;

 console.log(`mr. ${not_present} will not comeing this weekend dinner:`);

//  start ma 
GuestList.unshift("Hani");
//  End ma
GuestList.push ("Maha");
// middle ma
let middleIndex: number = Math.floor(GuestList.length / 2)
GuestList.splice(middleIndex,0,"zain")

console.log("\nunfortunately we can arrange big table , only two people allow.");

while(GuestList.length>2){
    let removeGuest = GuestList.pop();
    console.log(`sorry sir/madam.${removeGuest} you are not invited for dinner`);
    
}
 for (let index = 0; index < GuestList.length; index++) {
     console.log("\n\nRespected sir/ Madam"+"  " + GuestList[index] +" " + "\nYes you are still invited on this weekend dinner :\n\nThank you\n");
 }
 GuestList.splice(0,2);
 console.log(GuestList);
 

    








