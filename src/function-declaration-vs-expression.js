// Function Declaration
function greet() {
  return "Hello, world!";
}

// Call the function before its declaration
console.log(greet()); // Output: "Hello, world!"

// Function can be called anywhere in the code
console.log(greetAgain()); // Output: "Hello again!"

function greetAgain() {
  return "Hello again!";
}

// Function Expression is the same as assigning any value to a variable
var string = "some string";
let number = 1234;
const someObject = { someKey: "some value" };

var multiply = function (a, b) {
  return a * b;
};

// Call the function after its assignment
console.log(multiply(5, 3)); // Output: 15

// Function expressions are not hoisted in this way
// The following line would cause an error: TypeError: multiplyAgain is not a function
// console.log(multiplyAgain(2, 4));

var multiplyAgain = function (a, b) {
  return a * b;
};

// Variables declared with var are hoisted and initialized with undefined
console.log(a); // Output: undefined
var a = 10;
console.log(a); // Output: 10

// Variables declared with let and const are not hoisted
// The following line would cause an error: ReferenceError: Cannot access 'b' before initialization
// console.log(b);

let b = 20;
console.log(b); // Output: 20

const c = 30;
console.log(c); // Output: 30
