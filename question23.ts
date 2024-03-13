// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings

// • Tests using the lower case function

// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

// • Tests using "and" and "or" operators

// • Test whether an item is in a array

// • Test whether an item is not in a array



// equality and inequality  strings
let string1 = 'hello';
let string2 = 'world';
console.log("Is string1 equal to 'hello'? I predict True.");
console.log(string1 == 'hello'); // True
console.log("Is string2 not equal to 'hello'? I predict True.");
console.log(string2 != 'hello'); // True

//  lower case function
let uppercaseString = 'HELLO';
console.log("Is uppercaseString in lowercase equal to 'hello'? I predict True.");
console.log(uppercaseString.toLowerCase() == 'hello'); // True

// Numerical 
let number1 = 10;
let number2 = 5;
console.log("Is number1 greater than number2? I predict True.");
console.log(number1 > number2); // True
console.log("Is number1 less than or equal to number2? I predict False.");
console.log(number1 <= number2); // False

// && , || operators
let a = true;
let b = false;
console.log("Is a true and b false? I predict False.");
console.log(a && b); // False
console.log("Is a true or b false? I predict True.");
console.log(a || b); // True

// array
let array = ['apple', 'banana', 'orange'];
console.log("Is 'apple' in the array? I predict True.");
console.log(array.includes('apple')); // True

// Test whether an item is not in an array
console.log("Is 'grape' not in the array? I predict True.");
console.log(!array.includes('grape')); // True
