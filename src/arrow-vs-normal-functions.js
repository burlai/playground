function regularFunction(param1, param2) {
  return param1 + param2;
}

console.log(regularFunction(2, 3)); // Output: 5

// Arrow Function with Implicit Return:
const arrowFunction = (param1, param2) => param1 + param2;

console.log(arrowFunction(2, 3)); // Output: 5

// Regular Function as Constructor:
function Person(name, age) {
  this.name = name;
  this.age = age;
}

const person = new Person("John", 30);

console.log(person.name); // Output: John
console.log(person.age); // Output: 30

// Attempting to use Arrow Function as Constructor (will result in TypeError):
const ArrowPerson = (name, age) => {
  this.name = name;
  this.age = age;
};

const arrowPerson = new ArrowPerson("Jane", 25); // TypeError: ArrowPerson is not a constructor

// Arrow Function as a Callback:
const numbers = [1, 2, 3, 4, 5];

const squaredNumbers = numbers.map((num) => num * num);

console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]
