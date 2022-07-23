// ARRAY

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// foreach
// numbers.forEach(function (item, index) {
//   console.log(index + ". " + item);
// });

// filter
// let newNumbers = numbers.filter((item) => {
//   return item > 5;
// });
// console.log(newNumbers);

// map
// let modifiedNumber = numbers.map((item) => item * 2);
// console.log(modifiedNumber);

// indexOf(value)
// console.log(numbers.indexOf(2));

// lastIndexOf(value)
// console.log(numbers.lastIndexOf(2));

// find & findIndex
// console.log(numbers.find((item) => item > 4)); // item or undefined
// console.log(numbers.findIndex((item) => item > 18)); // item or -1

// includes
// console.log(numbers.includes(20));

// MAP

// set
const contacts = new Map();
contacts.set("Puja Gupta", {
  phone: "+91 7878787878",
  address: "Patna, Bihar",
});
contacts.set("Sonal Gupta", {
  phone: "+91 7878787879",
  address: "Lucknow, UP",
});

// check
// console.log(contacts.has("Puja Gupta")); //true
// console.log(contacts.has("Prerna")); //false

// get
// console.log(contacts.get("Prerna")); //undefined
// console.log(contacts.get("Puja Gupta")); //{ phone: "+91 7878787879", address: "Lucknow, UP",}

// delete
// console.log(contacts.delete("Puja Gupta")); //true
// console.log(contacts.delete("Prerna")); //false

// size
// let length = contacts.size

// clear - delete all key pair
// contacts.clear()

// clone
// const newMap = new Map(contacts);

// contacts.set("Vishal", "+914545454545");
// console.log(newMap);

// iterables
// 1. for...in
// 2. for...of
// 3. foreach

// SET

const ids = new Set();

// add
ids.add(1);
ids.add(1); // nothing
ids.add("1");
ids.add({ id: 1, name: "XYZ" });

// check presences
console.log(ids.has(1)); //true
console.log(ids.has(2)); //false

// size
console.log(ids.size);

// delete
console.log(ids.delete(1)); //true

console.log(ids);

// iterables
// 1. for...of
// 2. foreach
