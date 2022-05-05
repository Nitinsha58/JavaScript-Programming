// JavaScript Class

// Creating JavaScript Class
/* JavaScript class is similar to the JavaScript Constructor
function, and it is merely a syntactic sugar */

// // The constructor function is defined as:
// function Person() {
//     this.name = 'John',
//     this.age = 23
// }

// // create an object
// const person1 = new Person();

// // creating class
// class Person {
//     constructor(name){
//         this.name = name;
//     }
// }

// // creating an object
// const person1 = new Person('John');
// const person2 = new Person('Vihal');

// console.log(person1.name);
// console.log(person2.name);


// // JavaScript Class Methods
// // while using constructor function, you define methods as
// function Person(name) {
//     this.name = name;

//     // defining method
//     this.greet = function () {
//         return ('Hello' + " " + this.name);
//     }
// }

// /* It is easy to define methods in the JavaScript class. 
// You simply give the name of the method followed by() */

// class Person {
//     constructor(name) {
//         this.name = name;
//     }

//     greet() {
//         console.log(`Hello ${this.name}`)
//     }
// }

// let person1 = new Person('Aditya');

// // accessing property
// console.log(person1.name);

// // accessing method
// person1.greet();


// // Getters and Setters
// class Person {
//     constructor(name) {
//         this.name = name;
//     }

//     // getter
//     get personName() {
//         return this.name
//     }

//     // setter
//     set personName(x) {
//         this.name = x;
//     }
// }

// let person1 = new Person('Jack');
// console.log(person1.name);

// // changin the value of the name property
// person1.personName = 'Sarah';
// console.log(person1.name);


// // Hoisting
// /* A class should be defined before using it. Unlike 
// functions and other JavaScript declarations, the class 
// is not hoisted */

// // accessing class
// const p = new Person(); // ReferenceError

// // defining class
// class Person {
//     constructor(name){
//         this.name = name;
//     }
// }


// 'use strict'
/* class always follow 'use-strict'. All the code inside
the class is automatically in strict mode */

class Person {
    constructor() {
        a = 0;
        this.name = a;
    }
}

let p = new Person(); // ReferenceError: a is not defined