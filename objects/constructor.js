// // JavaScript Constructor Function

// // constructor function
// function Person() {
//     this.name = 'John',
//     this.age = 23
// }

// // create an object 
// const person = new Person()

// console.log(person.name);
// console.log(person.age);


// // Create Multiple Objects with constructor Function

// // constructor function
// function Person1 () {
//     this.name = 'John',
//     this.age = 23,

//     this.greet = function() {
//         console.log('hello');
//     }
// }

// // create objects
// const person1 = new Person1();
// const person2 = new Person1();


// // access properties
// console.log(person1.name);
// console.log(person1.greet());


// // JavaScript Constructor Function Parameters
// function Student (student_name, student_age, student_gender) {
//     // assigning parameter values to the calling object

//     this.name = student_name,
//     this.age = student_age,
//     this.gender = student_gender,

//     this.greet = function () {
//         return (`Hi ${this.name}`)
//     }
// }

// // creating objects
// const stu1 = new Student('John', 23, 'mal3');
// const stu2 = new Student('Sam', 25, 'female');

// // accessing properties
// console.log(stu1.name);
// console.log(stu2.name);


// Create objects: Constructor Function Vs Object Literal
// // using object literal
//     let obj1 = {
//         name: 'Sam'
//     }

// // using constructor function
// function Obj () {
//     this.name = 'Sam'
// }

// let obj1 = new Obj();
// let obj2 = new Obj();


// // uinsg object lateral
// let personObj = {
//     name: 'Sam'
// }

// console.log(personObj.name); 

// let student = personObj;
// // changes the property of an object
// student.name = 'John';

// console.log(personObj.name);


// // Adding Properties and Methods in an Object
// // constructor function
// function PersonObj () {
//     this.name = 'John',
//     this.agej = 23
// }

// // creating Objects
// let personObj1 = new PersonObj();
// let personObj2 = new PersonObj();

// // adding property to personObj1 object
// personObj1.gender = 'male';

// // adding property to personObj1 object
// personObj1.greet = function () {
//     console.log('hello');
// }

// personObj1.greet();




// // JavaScript Object Prototype
// // constructor function
// function Person() {
//     this.name = 'John',
//     this.age = 23
// }

// // creating objects
// let person1 = new Person()
// let person2 = new Person()

// // adding new property to constructor function
// Person.prototype.gender = 'Male';

// console.log(person1.gender);
// console.log(person2.gender);


// JavaScript Built-in Constructors
let a = new Object(); // A new Ojbect object
let b = new String(); // A new String object
let c = new Number(); // A new Number Object
let d = new Boolean(); // A new Boolean object

const name = new String('John');
console.log(name);

const number = new Number(57);
console.log(number);

const count = new Boolean(true);
console.log(count);
