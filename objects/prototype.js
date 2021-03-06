// JavaScript Prototype

// function Person() {
//     this.name = 'John',
//     this.age = 23
// }

// const person = new Person();

// // checking the prototype value
// console.log(Person.prototype); // {...}



// // Prototype Inheritance
// // constructor function
// function Person() {
//     this.name = 'John',
//     this.age = 23
// }

// // creating objects
// const person1 = new Person();
// const person2 = new Person();

// // adding property to constructor function
// Person.prototype.gender = 'male';

// // prototype value of Person
// console.log(Person.prototype);

// // inheriting the property from prototype
// console.log(person1.gender);
// console.log(person2.gender);



// // Add Methods to a Constructor Function Using Prototype

// // constructor function
// function Person() {
//     this.name = 'John',
//     this.age = 23
// }

// // creating objects
// const person1 = new Person();
// const person2 = new Person();

// // adding a method to the constructor function
// Person.prototype.greet = function () {
//     console.log(`Hello ${this.name}`);
// }

// person1.greet(); 
// person2.greet();



// // Changing Prototype
// // constructor function
// function Person() {
//     this.name = 'John'
// }


// // add a property
// Person.prototype.age = 20;

// // creating an object
// const person1 = new Person();

// console.log(person1.age); // 20

// // changing the property value of prototype
// Person.prototype = {age: 50};

// // creating new object
// const person3 = new Person();

// console.log(person3.age);
// console.log(person1.age);



// // JavaScript Prototype Chaining
// function Person() {
//     this.name = 'John'
// }

// // adding property
// Person.prototype.name= 'Peter';
// Person.prototype.age = 23;

// const person1 = new Person();

// console.log(person1.name); // John
// console.log(person1.age); // 23



// accessing the prototype property of from a constructor function
function Person() {
    this.name = 'John'
}

// adding a prototype
Person.prototype.age = 24;

// creating object
const person = new Person();

// accessing prototype property
console.log(person.__proto__); // { age: 24}