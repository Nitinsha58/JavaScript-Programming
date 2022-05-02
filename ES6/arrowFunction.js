// JavaScript Arrow Functions
/*  Arrow Functions allows you to create functions in a cleaner way compared to regular functions. */

// // Example 1: Arrow Function with no Argument
// let greet = () => {
//     console.log("Hello")
// }
// greet();
    
    
// // Example 2: Arrow Function with One Argument
// /*  If a function doesn't take any argument, then you should use empty parenthesses*/
// let greet = x => console.log(x);
// greet("Hello");
    

// // Example 3: Arow Function as an Expression
// /*  You can also dynamically create a function and use it as an expression.*/

// let age = 5;
// let welcome = (age < 18) ? 
//     () => console.log("Baby"):
//     () => console.log("Adult");

// welcome();


// // Example 4: Multiline Arrow Functions
// /*  If a function body has multiple statements, you need to put them inside curly brackets {}. */
// let sum = (a, b) => {
//     let result = a + b;
//     return result;
// }

// let result1 = sum(5, 7);
// console.log(result1)


// // this with Arrow Function
// /*  Inside a regular function, this keyword refers to the function where 
// it is called.

// However, this is not associated with arrow functions. Arrow function 
// does not have its own this. So whenever you cal lthis, it refers to its 
// parent scope.*/

// // // Inside a regular function
// // function Person() {
// //     this.name = 'Jack',
// //     this.age = 25,
// //     this.sayName = function() {
        
// //         // this is accessible
// //         console.log(this.age)

// //         function innerFunction() {
// //             // this refers to the global object
// //             console.log(this.age);
// //             console.log(this);
// //         }
// //         innerFunction();
// //     }
// // }

// // let x = new Person();
// // x.sayName();

// /*  Here, this.age inside this.sayName() is accessible because
// this.sayName() is the method of an object.
// However, innerFunc() is a normal function and this.age is not accessible
// because this refers to the global object. Hence, this.age inside the
// innerFunc() function gives undefined.
// */

// // Inside an arrow function
// function Person() {
//     this.name = 'Jack',
//     this.age = 25,
//     this.sayName = function (){
//         console.log(this.age);

//         let innerFunc = () => {
//             console.log(this.age);
//         }

//         innerFunc();
//     }
// }

// const x = new Person();
// x.sayName(); 
// /* Here, the innerFunc() function is defined using the arrow function.
// And inside the arrow function, this refers to the parent's scope.*/


// // Arguments Binding
// /* Regular functions have argumetns binding. That's why you pass
// arguments to a regular function, you can access them using the arguments 
// keyword. */
// let x = function () {
//     console.log(arguments);
// }

// x(4, 6, 7);

// // Arrow functions do not have argumetns binding
// let y = () => {
//     console.log(arguments);
// }
// y(4, 7, 2);

// let z = (...n) => {
//     console.log(n);
// }

// z(4, 6, 7);


// Arrow Function with Promises and Callbacks
// // ES5
// asyncFunction().then(function (){
//     return asyncFunction1();
// }).then(function(){
//     return asyncFunction2();
// }).then(function() {
//     finish;
// })

// // can be written as 
// asyncFunction()
// .then(()=> asyncFunction1())
// .then(()=> asyncFunction2())
// .then(()=> finish)


// // !! Things to Avoid with Arrow Functions
// // 1. You should not use arrow functions to create methods inside objects.
// let person = {
//     name: 'Jack',
//     age: 25,
//     sayName: ()=> {
//         // this refers to the global ......
//         // 
//         console.log(this.age);
//     }
// }

// person.sayName();


//  You cannot use an arrow function as a constructor.
let Foo = () => {};
let foo = new Foo(); // TypeError: Foo is not a constructor
