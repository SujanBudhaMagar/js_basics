// error handling

console.log("Hi");
const x = 2;
try {
  x = 5;
  console.log(x);
} catch (error) {
  console.log("error found");
  console.log(error.message);
}

console.log("Hello");
