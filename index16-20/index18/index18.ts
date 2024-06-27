// Question no 18
//seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.

// • Print your array in its original order.

// • Print your array in alphabetical order without modifying the actual list.

// • Show that your array is still in its original order by printing it.

// • Print your array in reverse alphabetical order without changing the order of the original list.

// • Show that your array is still in its original order by printing it again.

// • Reverse the order of your list. Print the array to show that its order has changed.

// • Reverse the order of your list again. Print the list to show it’s back to its original order.

// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
// answer:

let placesName : string[] = ["karachi","delhi","cape town","bankok","islamabad"]
console.log('original :' +""+ placesName);
//print your array in aplhabetical order without modifying the actual list 
console.log("copy:" +" "+ [...placesName].sort());

// show  that array is still in its original order by printing it .
console.log("original:" +"  " + placesName);

//print your array in reverse aplhabetical order without charging the order of the
//original list

console.log("copy:" +"  " + [...placesName].sort().reverse());

//show that your array is still in its original order by printing it again.
console.log("copy:" +"  " + [...placesName].sort().reverse());

// Reverse the order of your list . print the array to show that its order has change.
console.log("original:" +"  " + placesName.sort());

// Reverse the order of your list again. print the array to show that its back to its
//original order has change.
console.log("original:" +"  " + placesName.sort().reverse());

// sort your array so its stored in alphabetical order .print the array to show that 
//its has been changed
console.log("copy:" +"   "+ [...placesName].sort());
 





