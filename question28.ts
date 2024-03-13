// Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.

// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!

let favorite_fast_food: string[] = ["burger", "pizza", "fries"];

if (favorite_fast_food.includes("burger")) {
    console.log("You really like burgers!");
}
if (favorite_fast_food.includes("pizza")) {
    console.log("You really like pizza!");
}
if (favorite_fast_food.includes("fries")) {
    console.log("You really like fries!");
}
if (favorite_fast_food.includes("hot dog")) {
    console.log("You really like hot dogs!");
} else {
    console.log("Hot dogs aren't one of your favorite fast foods.");
}
if (favorite_fast_food.includes("taco")) {
    console.log("You really like tacos!");
} else {
    console.log("Tacos aren't one of your favorite fast foods.");
}
