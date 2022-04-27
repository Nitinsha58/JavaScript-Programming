// Variable Hoisting
// keyword var is hoisted and let and const does not allow hoisting

// Example
a = 5; 
console.log(a)
var a;  // 5

// program to display value
var a = 4;

function greet() {
    b = 'hello';
    console.log(b); // hello
    var b;
}

greet(); // hello


// Function Hoisting
// program to print the text
greet();

function greet(){
    console.log("Hi, there.");
}

