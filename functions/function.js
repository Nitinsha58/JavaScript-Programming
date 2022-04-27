// Declaring a function named greet()
function greet(){
    console.log("Hello there");
}

// function call
greet();

// Example 1: Function with Parameters
function greet(name){
    console.log(`Hello ${name}`)
}

greet("Nitin")


// Add two numbers
function add(a, b){
    console.log(a + b);
}

// calling function
add(3, 4);
add(4, 23);


// sum of two numbers
function sum(a, b){
    return a + b;
}

let result = sum(1, 3);
console.log(result);


// Function Expressions
let x = function (num) {return num*num}
console.log(x(4))
