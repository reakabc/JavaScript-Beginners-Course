let principalAmount = 1200;
let people = 0;

try {
  getData();
  console.log("hey");
} catch (error) {
  console.log(error.message);
} finally {
  console.log("Work Done");
}
