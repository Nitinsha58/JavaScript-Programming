// JavaScript ES6

// // JavaScript let
// /*  JavaScript let is used to declare variables. Previously, variables 
// were declared using the var keyword.
// The variables declared using let are block-scoped. This means they are
// only accessible within a prticular block.
// */

// // variable declared using let
// let name = 'Sara';
// {
//     // can be accessed only inside 
//     let name = 'Peter';
//     console.log(name);
// }

// console.log(name);


// // JavaScript const
// /*  The const statement is used to declare constants in JavaScript. */
// // name declared with const cannot be changed
// const name = 'Sara';
// // once declared, you cannot change the value of a const variable


// // JavaScript Arrow Function
// /*  In the ES6 version, you can use arrow functions to create function 
// expressions. */
// // function expression
// let x = function(x, y) {
//     return x * y;
// }

// // function expression using arrow function
// let x = (x, y) => x * y;


// // JavaScriptt Classes
// /*  JavaScript class is used to create an object. Class is similar to
// a constructor function */
// class Person {
//     constructor (name) {
//         this.name = name;
//     }
// }

// const person1 = new Person('John');
// console.log(person1.name);


// // Default Parameter Values
// /*  In the ES6 version, you can pass default values in the 
// function parameters. */
// function sum(x, y = 5) {
//     // take sum
//     // the value of y is 5 if not passed
//     console.log(x + y);
// }

// sum(5); // 10
// sum(5, 15); // 20


// // JavaScript Template Literals
// const first_name = "Jack";
// const last_name = "Sparrow";

// console.log('Hello ' + first_name + " " + last_name);

// console.log(`Hello ${first_name} ${last_name}`);


// // JavaScript Destructuring
// /*  The destructuring syntax makes it easier to assign values to a new variable
// */
// // before you would do something like this
// const person = {
//     name: 'Sara',
//     age: 25,
//     gender: 'female'
// };

// // let name = person.name;
// // let age = person.age;
// // let gender = person.gender;

// let {name, age, gender} = person;


// console.log(name);
// console.log(age);
// console.log(gender);


// // JavaScript Promises
// /*  Promises are used to handle asynchronous takes. */
// let countValue = new Promise(function (resolve, reject) {
//     reject('Promise rejected');
// });

// // executes when promise is resolved successfully
// countValue.then(
//     function successValue(result) {
//         console.log(result); // Promise resolved
//     }
// )


// JavaScript Rest Parameter and Spread Operator
/*  You can use the rest parameter to represent an indefinite number of arguments
as an array. */
function show (a, b, ...args) {
    console.log(a);
    console.log(b);
    console.log(args);
}

show('one', 'two', 'three', 'four', 'five','six', 'seven');

/*  You pass the remaining arguments using ... syntax. Hence, the 
name rest parameter.

You can use the spread syntax ... to copy the items into a single array.
*/
let arr1 = ['one', 'two'];
let arr2 = [...arr1, 'three', 'four', 'five'];
console.log(arr2)
