// JavaScript Default Parameters


// Using Expression as Default Values
// It is also possible to provide expressions as default values

// // Example 1: Passing Parameter as Default Values
// function sum(x = 1, y = x, z = x + y) {
//     console.log(x + y + z);
// }

// sum();


// // Example 2: Passing Function Value as Default Value

// const sum = () => 15;

// const calculate = function(x, y = x * sum()) {
//     return x + y;
// }

// const result = calculate(10);
// console.log(result);


// passing undefined Value
function test(x = 1) {
    console.log(x);
}

// passing undefined 
// takes default value 1
test(undefined);