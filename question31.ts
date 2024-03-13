// Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.

// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.

// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.

// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.


let current_users: string[] = ["asad", "murtaza", "ali", "mujtaba", "hania"];
let new_users: string[] = ["meer", "huzaifa", "ASAD", "MUJTABA", "faisal"];

new_users.forEach(new_user => {
    let lowercase_new_user = new_user.toLowerCase(); // Convert to lowercase for case-insensitive comparison
    if (current_users.includes(lowercase_new_user)) {
        console.log(`Username '${new_user}' is taken. Please choose another one.`);
    } else {
        console.log(`Username '${new_user}' is available.`);
        current_users.push(lowercase_new_user); // Add the new username to the current_users 
    }
});
