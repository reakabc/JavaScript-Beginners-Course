// math object
let a = 16.5;

let result;

result = Math.PI;

result = Math.abs(a);
result = Math.floor(a);
result = Math.ceil(a);
result = Math.round(a);
result = Math.sqrt(25);
result = Math.random();

// get number between 20 to 100
result = Math.round(Math.random() * 80 + 20);

/*---------------------------------------------------*/
// date object
let currentDate = new Date();
result = currentDate.getFullYear(); //2022
result = currentDate.getDay(); //0-6 
result = currentDate.getDate(); //1-31
result = currentDate.getHours(); //0-23 
result = currentDate.getMinutes(); //0-59
result = currentDate.getSeconds(); //0-59
result = currentDate.getMonth(); //0-11
result = currentDate.getTime(); //seconds elapsed from 1, 1970, 00:00:00 UTC

let newDate = currentDate.setFullYear(2021);

console.log(new Date(newDate));
