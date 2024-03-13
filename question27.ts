// Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
// • If the person is less than 2 years old, print a message that the person is a baby.

// • If the person is at least 2 years old but less than 4, print a message that the person is a toddler.

// • If the person is at least 4 years old but less than 13, print a message that the person is a kid.

// • If the person is at least 13 years old but less than 20, print a message that the person is a teenager.

// • If the person is at least 20 years old but less than 65, print a message that the person is an adult.

// • If the person is age 65 or older, print a message that the person is an elder.


let myAge: number = 30;

if (myAge < 2) {
    console.log("Aw, just a little baby!");
} else if (myAge < 4) {
    console.log("Hey, look at that tiny tot!");
} else if (myAge < 13) {
    console.log("Cool, we've got a kid here!");
} else if (myAge < 20) {
    console.log("Whoa, a teenager in the house!");
} else if (myAge < 65) {
    console.log("Welcome, fellow adult!");
} else {
    console.log("Wow, now we're living the elder life!");
}
