// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.

function make_shirt(size: string = "large", message: string = "I love TypeScript"): void {
    console.log(`A ${size}-sized shirt will be printed with the message: "${message}".`);
}

// large shirt defaults message 
make_shirt();

// medium shirt default message
make_shirt("medium");

//  shirt  different message
make_shirt("small", "Keep coding!");
