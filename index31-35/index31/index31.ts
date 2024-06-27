 // Question no 31
 //No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.

 let userNames = ["mahad","Ali","zeeshan","admin","usmam"]
 userNames = []
 if (userNames.length === 0) {
    console.log("Your Array in Empty we need to find some users!");
    
 }else{
    userNames.forEach(oneUser =>{
        if (oneUser === "admin") {
            console.log(`Hello ${oneUser},would you like to see a status report`);
          }  else{
                console.log(`Hello ${oneUser},Thank you for logging in again:`);
                
        }
    })
 }

    
