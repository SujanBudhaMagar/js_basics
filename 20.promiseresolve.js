// promise resolve
// something that happens in future

//isPending
//success /error

try {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  console.log(data);
} catch (error) {
  console.log("error found");
  console.log(error.message);
}
