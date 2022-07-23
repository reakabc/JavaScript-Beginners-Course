// It's not core java features
// This storage is implemented by browser

let storage = localStorage; //sessionStorage

// set
storage.setItem("id", "ID123456789");
storage.setItem("name", "Vivek");
storage.setItem("age", 23);

// get
// console.log(storage.getItem("id"));
// console.log(storage.getItem("name"));
// console.log(storage.getItem("age"));

// setting any object
let user = {
  id: 1,
  name: "Vivek",
  age: 23,
};

user = [1, 2, "Vivek", true];

let userJson = JSON.stringify(user); // JSON
storage.setItem("user", userJson); //set JSON
// storage.setItem("user", user); //cannot set object to storage
// console.log(storage.getItem("user")); //cannot access properties

let jsonUser = storage.getItem("user");
let javaScriptUser = JSON.parse(jsonUser);

console.log(javaScriptUser);
