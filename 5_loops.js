let todos = [
  "First Todo",
  "Second Todo",
  "Third Todo",
  "Fourth Todo",
  "Fifth Todo",
];

// forloop
// for (let startInde = 0; startInde < todos.length; startInde++) {
//   console.log(todos[startInde]);
// }

// while
// let startIndex = 0;
// while (startIndex < todos.length) {
//   console.log(todos[startIndex]);
//   startIndex += 1;
// }

// do-while
// let startIndex = 0;
// do {
//   console.log(todos[startIndex]);
//   startIndex += 1;
// } while (startIndex < todos.length);

// for...in
// for (const item in todos) { // here item is index
//   console.log(todos[item]);
// }

// for...of
// for (const item of todos) { // here item is value
//   console.log(item);
// }

// with object
const user1 = {
  id: 1,
  name: "Puja",
  address: "Patna",
};

// for...of
for (const item in user1) { // here item is keys
  console.log(user1[item]); 
}
