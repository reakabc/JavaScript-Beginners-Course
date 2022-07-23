// literal

const user1 = {
  id: 1,
  name: "Mukesh",
  age: 20,
  getDetails: function () {
    console.log(`${this.name} is ${this.age} year old.`);
  },
};

// get
// console.log(user1.id);
// console.log(user1.name);
// console.log(user1.age);
// user1.getDetails();

// set
user1.age = 23;
user1.name = "Vivek";

// user1.getDetails();

// get keys in array
// console.log(Object.keys(user1));

// get values in array
// console.log(Object.values(user1));

// contructor function
function User(id, name, age) {
  this.id = id;
  this.name = name;
  this.age = age;
  this.getDetails = function () {
    console.log(`${this.name} is ${this.age} year old.`);
  };
}

const user2 = new User(2, "Manu", 21);
const user3 = new User(2, "Subhash", 23);

// console.log(user2.id);
// console.log(user2.name);
// console.log(user2.age);

// user2.id = 5;
// user2.getDetails();
console.log(user2);
