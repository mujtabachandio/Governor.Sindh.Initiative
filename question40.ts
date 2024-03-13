// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.

function show_magicians(magicians: string[]): void {
    magicians.forEach(magician => console.log(magician));
}

let magicians: string[] = ["kalo", "herry bhai", "black nigga", "chandio sahib"];

show_magicians(magicians);
