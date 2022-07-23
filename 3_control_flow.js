// if-else

let name = "Puja Gupta";
let marks = 90;

if (marks >= 80) {
  console.log(name + ", You rocked!");
} else if (marks >= 60) {
  console.log(name + ", You passed!");
} else {
  console.log(name + ", You need to work hard!");
}

let month = new Date().getMonth();

switch (month) {
  case 0:
    console.log("January");
    break;

  case 1:
    console.log("February");
    break;

  case 2:
    console.log("March");
    break;

  case 3:
    console.log("April");
    break;

  case 6:
    console.log("July");
    break;

  default:
    console.log("No month mathcing");
    break;
}
