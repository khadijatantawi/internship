// Create an array of objects ?
let array = [
  { name: "c", id: 1 },
  { name: "e", id: 2 },
];

let arr = [1, 2];

// with console.log
// map method
console.log(array.map((x) => x.name));

// fn callback
//Sometimes you would like to have better control over when to execute a function.

console.log(array.some((x) => x.name == "c"));

// console.log(array.includes( (x) => x.id == 1 ));

console.log(arr.includes(1));
//includes doesnt work with array of objects
