// Define a mixin object with a greet() method
const GreetingMixin = {
    greet() {
      console.log('Hello, world!');
    }
  };
  
  // Define a class that uses the mixin
  class Person {
    constructor(name) {
      this.name = name;
    }
  }
  
  // Use object spread syntax to add the greet() method to the Person class
  Object.assign(Person.prototype, GreetingMixin);
  
  // Create a new Person object and call the greet() method
  const person = new Person('Alice');
  person.greet(); // Output: Hello, world!