// Question no 31

// No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!

// • Remove all of the usernames from your array, and make sure the correct message is printed.

let users :string[] = ["Hani", "Omer","Bilal","Alina","aAmin"]
if (users .length === 0) {
    console.log("we need to find some users!");
}
// remove all of the usernames
    else{
        users= [];
        console.log("All users have been removed " + users.length);
        
    }
    
