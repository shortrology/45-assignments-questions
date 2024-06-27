// question no 11 arrayNames: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.
let frientsName = ["bilal", "umer", "hani", "maha", "bushra"];
for (let index = 0; index < frientsName.length; index++) {
    console.log(frientsName[index]);
}
// question no 12 arraylist
//Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
let memberName = ["saba", "azam", "sana", "bushra", "hani"];
let message = "Hello world!:";
for (let index = 0; index < memberName.length; index++) {
    console.log(message + "   " + memberName[index]);
}
// Question no 13
//Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
let transportation = ["civic", "bike", "bus", "suzuki", "rikshaw",];
for (let index = 0; index < transportation.length; index++) {
    console.log("I would like to own a:" + "   " + transportation[index]);
}
//Question no 15  new guests listChanging Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
//• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
//• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
//• Print a second set of invitation messages, one for each person who is still in your list.
let GuestListName = ["Ali", "sarah", "omer", "fatima", "ahemd"];
for (let index = 0; index < GuestListName.length; index++) {
    console.log("\n\nRespected sir / Madam" + "  " + GuestListName[index] + "  " + "\n join us for dinner this weekent.\n\nThank you\n");
}
let not_present = "fatima";
let new_guest = "alina";
GuestListName[3] = new_guest;
for (let index = 0; index < GuestListName.length; index++) {
    console.log("\n\nRespected sir / Madam" + "  " + GuestListName[index] + " " +
        "\n join us for dinner this weekent.\n\n Thank you\n");
}
console.log(`Mrs.${not_present} will not coming this weekent dinner`);
export {};
