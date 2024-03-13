// Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.

// • Print your array in its original order.

// • Print your array in alphabetical order without modifying the actual list.

// • Show that your array is still in its original order by printing it.

// • Print your array in reverse alphabetical order without changing the order of the original list.

// • Show that your array is still in its original order by printing it again.

// • Reverse the order of your list. Print the array to show that its order has changed.

// • Reverse the order of your list again. Print the list to show it’s back to its original order.

// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.


// Store the locations in an array
let placesToVisit: string[] = ["Japan", "Italy", "Australia", "Canada", "Brazil"];

// Print original order
console.log("Original order:");
console.log(placesToVisit);

// Print alphabetical order without modifying the actual list
console.log("\nAlphabetical order (without modifying original list):");
console.log([...placesToVisit].sort());

// Show original order is unchanged
console.log("\nOriginal order after sorting:");
console.log(placesToVisit);

// Print reverse alphabetical order without modifying the actual list
console.log("\nReverse alphabetical order (without modifying original list):");
console.log([...placesToVisit].sort().reverse());

// Show original order is still unchanged
console.log("\nOriginal order after reverse sorting:");
console.log(placesToVisit);

// Reverse the order of the list
placesToVisit.reverse();
console.log("\nReversed order:");
console.log(placesToVisit);

// Reverse the order of the list again to get back to the original order
placesToVisit.reverse();
console.log("\nOriginal order after reversing again:");
console.log(placesToVisit);

// Sort the array in alphabetical order
placesToVisit.sort();
console.log("\nSorted in alphabetical order:");
console.log(placesToVisit);

placesToVisit.reverse();
console.log("\nReverse alphabetical order:\n", placesToVisit);
