// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

// • Print a message to each of the two people still on your list, letting them know they’re still invited.

// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.const guests: string[] = ['Alice', 'Bob', 'Charlie'];

const guests: string[] = ['mujtaba', 'asad ali', 'faisal chandio','meer baloch'];

console.log(`\nsorry ${guests} but i can only invite 2 person on dinner beacse of smaller table\n`);

// removing guests from the table
while (guests.length > 2) {
    let removedGuest = guests.pop();
    console.log(`Sorry, ${removedGuest?.toLocaleUpperCase()}, I can't invite you to dinner.\n`);
}

guests.forEach(ii_person_party => console.log(`\n${ii_person_party} you guys are still invited to dinner party`))