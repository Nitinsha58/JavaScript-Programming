// JavaScript CallBack Function

// // function
// function greet(name, callBack) {
//     console.log("hi", name);
//     callBack();
// }

// // greet('Peter');

// // callBack function
// function callMe() {
//     console.log('I am CallBack function');
// }

// // passing function as an argument
// greet('Peter', callMe);


// Benefit of Callback Function
/* 
    The benefit of using a callback function is that you can wait
    for the result of a previous function call and then execute 
    another functioon call.
*/

// // Example: Program with setTimeout()
// function greet() {
//     console.log('Hello')
// }

// function sayName(name) {
//     console.log('Hello', name);
// }

// // calling the function
// setTimeout(greet, 2000); 
// sayName('John');


// Example: Using a Callback Function

function greet(name, myFunction){
    console.log('Hello world');

    // callback function
    // excecuted only after the greet() is executed
    myFunction(name);
}

// callback function
function sayname(name) {
    console.log('Hello', name);
}

// calling the function after 2 seconds
setTimeout(greet, 2000, 'John', sayname);
