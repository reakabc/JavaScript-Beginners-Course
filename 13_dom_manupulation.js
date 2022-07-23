let h1 = document.getElementById("heading"); //access targeted element
h1 = document.getElementsByClassName("heading")[0]; //all element with className

h1 = document.querySelector("#heading"); // # prefix for id
h1 = document.querySelector(".heading"); // . prefix for class
h1 = document.querySelector("h1"); //return first element
h1 = document.querySelectorAll("h1")[0]; //return element array

console.log(h1);
console.log(h1.innerText); //get inner text
console.log(h1.innerHTML); //get inner text
console.log(h1.style); //get inner text

// write html & text
h1.innerText = "Hey, It's new <b>CONTENT</b>";
h1.innerHTML = `<span>Hey, It's new <strong>CONTENT</strong></span>`;

// change style
h1.style.color = "red";
h1.style.backgroundColor = "black";
h1.style.padding = "10px";

// create & append child
let div1 = document.createElement("div");
div1.setAttribute("class", "div1");
div1.addEventListener("click", function () {
  alert("called");
});
div1.append(h1);

let container = document.getElementById("container");
container.append(div1);
