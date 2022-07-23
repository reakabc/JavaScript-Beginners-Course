// string array
// 0 -> n

let todos = [
  "Buy some fruits",
  "Create email template",
  "Redesign portfolio's about page",
];

// number array
let ids = [12, 452, 454, 51, 27];

// mix array
let random = ["Happy Birthday!", true, 12, null];

// length
let totalTodos = todos.length;

// getter
let wish = random[0];
let isWished = random[1];

// setter
random[0] = "Happy Marriage Anniversary!";
random[1] = false;

// add items to an array
// random.push("End"); //add at end - return new length
// random.unshift("Start"); //add at start - return new length

// remove item from array
// random.pop(); //remove item from end - return removed item
// random.shift(); //remove item from start - return removed item

// truncate items
// #1
// random.splice(startIndex, deleteCount);
// let fruits = ["Apple", "Banana", "Plum", "Mango", "Guava", "Strawberry"];
// let startIndex = 1;
// let deleteCount = 3;
// let deletedItems = fruits.splice(startIndex, deleteCount);
// console.log("deleted items: ", deletedItems);
// console.log("new array: ", fruits);

// #2
// random.splice(newSizeFromBeginning);
let fruits = ["Apple", "Banana", "Plum", "Mango", "Guava", "Strawberry"];
let newSizeFromBeginning = 3;
let deletedItems = fruits.splice(newSizeFromBeginning);
console.log("deleted items: ", deletedItems);
console.log("new array: ", fruits);

// concat - add two array
console.log(deletedItems.concat(fruits));

// slice
// let fruits = ["Apple", "Banana", "Plum", "Mango", "Guava", "Strawberry"];
// let startIndex = 1;
// let endIndexExcluded = 4;
// console.log(fruits.slice(startIndex, endIndexExcluded));

// join items with some separator
let todosString = todos.join(", ");
