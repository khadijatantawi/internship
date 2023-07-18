// const toggleButton = document.getElementsByClassName("toggle-button")[0];
// const navbarLinks = document.getElementsByClassName("navbar-links")[0];

// toggleButton.addEventListener("click", () => {
//   navbarLinks.classList.toggle("active");
// });

let objects = [
  { id: 1, name: "jannah", age: 21 },
  { id: 1, name: "maram", age: 23 },
  { id: 3, name: "oss", age: 22 },
];
// map vs forEach

// for (x in objects) {
//   console.log(objects[x]);
// }

objects.map( (object) => console.log(object) )
const x =objects.find(object => object.id==1) // method returns the value of the first element that passes a test.
const y =objects.filter( object => object.id==1) // method creates a new array filled with elements that pass a test provided by a function.
console.log(x)

console.log(y)

function getElement(object,num){
    if (object.id == num) {
        console.log(object);
      }
}


//                 Difference between arrow function and normal function 

// 1. No arguments object in arrow functions

// function print() {
//     console.log(arguments) //The arguments object is a local variable that contains the arguments passed to the function when called.
//   }

// print("hello", 400, false) // We can access the nth argument with arguments[n]

// // Uncaught ReferenceError: arguments is not defined
// // const print = () => {
// //     console.log(arguments)
// //   }
  
// //   print("hello", 400, false)
 

// // 2. Arrow functions do not create their own this binding
// const obj = {
//     name: 'deeecode',
//     age: 200,
//     print: function() {
//       console.log(this)  // a this variable is created which references the objects that call them. 
//     }
//   }
  
//   obj.print() //As you can see here, the this in the print method points to obj, which is the object that calls the method.

// //By using an arrow function for print, this function does not automatically create a this variable. As a result, any reference to this 
// //would point to what this was before the function was created.
// const obj2 = {
//   name: 'deeecode',
//   age: 200,
//   print: function() {
//     const print2 = () => {
//       console.log(this)
//     }
    
//     print2()
//   }
// }

// obj2.print()
//  3. Arrow functions cannot be used as constructors

// 4. Arrow functions cannot be declared
//      Function declarations involve the function keyword and a name for the function.
// function printHello() {
//     console.log("hello")
//   }

// const printHello = function() { // This function is a function expression, which is assigned to the printHello variable.
//     console.log("hello")
//   }
// // Normal functions can be declared when you use the function keyword and a name, but arrow functions cannot be declared. 
// //   They can only be expressed because they are anonymous:
// const printHello = () => {
//    console.log("hello")}

//printHello is not a declared function here. It is a variable that holds the evaluated value from the function expression.

// 5. Arrow functions cannot be accessed before initialization

// printName()

// console.log("hello")

// function printName() {
//   console.log("i am dillion")
// }

// What happens here is hoisting.

// The printName function is raised to the top of the global scope (the scope it is declared in) before the whole code is executed, thereby making it possible to execute the function earlier.

// But not all kinds of functions can be accessed before initialization. All functions and variables in JavaScript are hoisted, but only declared functions can be accessed before initialization.

// 6. No prototype object for Arrow Functions

//The JavaScript prototype property also allows you to add new methods /new properties to objects constructors:
// regular javascript fn 
// function x (){}
// console.log(x.prototype); 
// //arrow function 
// const arrow =()=>{}
// console.log(arrow.prototype); 

//                                                   Find vs Filter 
// filter() returns an array containing the element that satisfies the condition,In filter(), whole array is iterated despite the fact that the element being searched for is present at the beginning. 
// but find() returns the element itself that satisfies the condition. as soon as the element that satisfies the condition is found, it gets returned.


// for (x in objects) {
//   if (objects[x].id == 1) {
//     console.log(objects[x]);
//   }
// }

const array = [1,2,3]
array.forEach((item)=>console.log(item))