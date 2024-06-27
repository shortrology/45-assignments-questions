// Question no 37
// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.

function make_Shirt(size: string ="large",message: string = "Ilove TypeScript") {

    console.log(`Making a ${size} t-shirt with the message "${message}"printed on it`);
        
    }
    make_Shirt (); // Default large and message
    make_Shirt("medium"); // Default message , medium
    make_Shirt("small","Dive into codeing") // custom message ,samll size
    
