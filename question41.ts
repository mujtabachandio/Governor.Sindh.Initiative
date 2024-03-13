// Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.

function Great(magicians: string[]): string[] {
    return magicians.map(magician => `the Great ${magician}`);
}

let magicians: string[] = ["kalo", "herry bhai", "black nigga", "chandio sahib"];

console.log("Original list of magicians:");
console.log(magicians);

console.log("\nMaking the magicians great:");
let greatMagicians = Great(magicians);

console.log("\nModified list of magicians:");
console.log(greatMagicians);
