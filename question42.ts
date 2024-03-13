// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.


function showMagicians(magicians: string[]): void {
    for (const magician of magicians) {
        console.log(magician);
    }
}

function Great(magicians: string[]): string[] {
    return magicians.map(magician => `the Great ${magician}`);
}

const originalMagicians: string[] = ['Harry Houdini', 'David Copperfield', 'Penn Jillette', 'Teller'];

console.log("Original list of magicians:");
showMagicians(originalMagicians);

console.log("\nMaking the magicians great:");
const greatMagicians: string[] = Great([...originalMagicians]); 

console.log("\nOriginal list of magicians (unchanged):");
showMagicians(originalMagicians);

console.log("\nModified list of magicians:");
showMagicians(greatMagicians);
