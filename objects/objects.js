// JavaScript Object Declaration
// // object creation
// const person = {
//     name: 'John', 
//     age: 20
// };

// console.log(typeof person); // object

// // JavaScript Object properties
// let person = {
//     name: 'John',
//     age: 20
// };

// Accessing Object Properties
// 1. Using dot notation
const person = {
    name: 'John',
    age: 20,
};

// accessing property
console.log(person.name)


// 2. Using bracket Notation
// accessing property
console.log(person["name"]); // John


// JavaScript Nested Objects
const student = {
    name : 'John',
    age: 20,
    marks: {
        science: 70,
        math: 75
    }
}


// JavaScript object methods
const person1 = {
    name: 'Sam',
    age: 30,
    // using function as a value
    greet: function() {console.log('hello')}
}

person1.greet(); // hello


