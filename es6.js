function sayHello() {
  for (var i = 0; i < 5; i++) {
    console.log(i);
  }
  console.log(i);
}
// when we declare a variable it should only be accesiible inside the block(function) which it is defined (scope)
sayHello();
// "let" came to solve this problem of accessing the variable
function sayHello() {
  for (let i = 0; i < 5; i++) {
    console.log(i);
  }
  // console.log(i); // error
}
//variables declared with the var function are scoped to -> function
// let -> block its defined in only
// moving forward let is preferably used unless there's a valid reason
// const -> block scoped

const x = 1;
// cant be re assigned
// const is preferable than let unless u need to re assign a variable

// objects
const person = {
  name: "dij",
  walk: function () {},
  talk() {},
};

person.talk();
person.name = "xx"; // setting it to a different value if we know ahead of time what property we will be accessing
const targetMember = "name";
person["name"] = "john"; // name of target member
person[targetMember] = "yy";
// if it's an inout field we could acces the property by (targetMember.value)
console.log(person.name);

// THIS KEYWORD

//always return reference to the current object
person.walk();

const person2 = {
  name: "dijjj",
  walk() {
    console.log(this);
  },
};
// person2.walk();
// const walk =person2.walk; //every function in javascript is an object
// walk(); // when calling a method outside of object this by default return a refrencet o the global object which is the window object but in strict mode -> undefined
//->undefined instead of getting refrence
//strict mode is enabled by default

//--> fixing problem by
const walk = person2.walk.bind(person2); // bind sets the value of "this "permanantly
walk();

// arrow fn
//useful in
const jobs = [
  { id: 1, isActive: true },
  { id: 2, isActive: true },
  { id: 3, isActive: false },
];
// arrow fn dont rebind this

//map -> to render lists
const colors = ["red", "green"];
colors.map(function (color) {
  //(callback fn )
  return "<li" + color + "</li>";
});
const items = colors.map((color) => "<li" + color + "</li>");
const items2 = colors.map((color) => "<li> ${color} </li>"); // we want to render color dynamically at runtime
//template literal

// object destructuring
const address = {
  street: "",
  city: "",
  country: "",
};
const street1 = address.street;
const city1 = address.city;
// the problem with this code is that it is repetitive
//rewrite this code like this :
const { street: st, city, country } = address;

//spread operator
const first = [1, 2, 3];
const second = [4, 5, 6];
const combined = first.concat(second);
const combined2 = [...first, "add in the middle element", ...second];

//easily clone the array using spread
//u can combine object {...first, ...second}

//classes
class Person3 {
  constructor(name) {
    this.name = name; // 'this' refrence to an object
  }
  walk() {
    console.log("walk");
  }
}

//inheritance
class Teacher extends Person3 {
  //inherit methods of person
  constructor(name, degree) {
    // we have to call constructor of parent class
    super(name);
    this.degree = degree;
  }
  teach() {
    console.log("teach");
  }
}

// modules
//export-> public
//import {x} from './filename' //without extension
// Create a Set
const letters = new Set();

// Add Values to the Set
letters.add("a");
letters.add("b");
letters.add("c");
console.log(letters);
// Display set.size

//----------------------------------------------------------------

// Filter -> new array
const ages = [32, 33, 16, 40];
const result = ages.filter(checkAdult);

function checkAdult(age) {
  return age >= 18;
}
console.log(result);

// reduce -> it reduces the array to a single value

//Subtract all numbers in an array:
const numbers = [175, 25, 50];
const reduced = numbers.reduce(fn);

function fn(total, num) {
  return total - num;
}
console.log(reduced);

// Round all the numbers and display the sum:
const nums = [15.5, 2.3, 1.1, 4.7];
const r = nums.reduce(getSum, 0);

function getSum(total, num) {
  return total + Math.round(num);
}

//Map
//Return a new array with the square root of all element values:
const arr = [2, 4, 6];
const square = arr.map((x) => x * x);
console.log(square);

// forEach -> call fn for each element in array
let sum = 0;
let n = [65, 44, 12, 4];
n.forEach((item) => (sum += item));
console.log(n);

const numbers2 = [65, 44, 12, 4];
numbers2.forEach(myFunction);

function myFunction(item, index, arr) {
  arr[index] = item * 10;
}
console.log(numbers2);

// Some -> if one or more of its values correspond to something you’re looking for
//Check if any values are over 18:

const ages2 = [3, 10, 18, 20];
let over = ages.some((x) => x >= 18);
console.log(over);

// Find -> return the first value that corresponds to the passed condition
// Find the value of the first element with a value over 18:
const ages3 = [3, 10, 18, 20];

let firstElement = ages3.find((x) => x >= 18);
console.log(firstElement);

// indexOf ->Returns the index of the found occurrence, otherwise -1 if not found.

var str1 = new String( "This is string one" );
var index = str1.indexOf( "string" );
console.log("indexOf found String :" + index );
var index2 = str1.indexOf( "one" );
console.log("indexOf found String :" + index2 );

//callback fn

// function sequence 
// Sometimes you would like to have better control over when to execute a function.

function myDisplayer(some) {
  console.log(some);
}

function myCalculator(num1, num2) {
  let sum = num1 + num2;
  return sum;
}
//-------
let result3 = myCalculator(5, 5);
myDisplayer(result3);

function myCalculator2(num1, num2, myCallback) {
  let sum = num1 + num2;
  myCallback(sum);
}

myCalculator2(5, 5, myDisplayer);
//When you pass a function as an argument, remember not to use parenthesis.
//Where callbacks really shine are in asynchronous functions, where one function has to wait for another function
// A typical example is JavaScript setTimeout().
setTimeout(myFunction, 3000);

function myFunction() {
  console.log("I love You !!");
}
//Waiting for Intervals:
// When using the JavaScript function setInterval(), you can specify a callback function to be executed for each interval:
// setInterval(myFunction, 1000);

// function myFunction() {
//   let d = new Date();
//   console.log(d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds());
// }

//---------------------

//A JavaScript Promise object contains both the producing code and calls to the consuming code:



