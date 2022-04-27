// JavaScript Switch Statement

// Example 1: Simple Program using switch statement
let a = 2; 

switch (a) {
    case 1: 
        a = 'one';
        break;
    case 2:
        a = 'two';
        break;
    case 3:
        a = 'three';
    default:
        a = 'not found';
        break;
}
console.log(`The value is ${a}`)


// JavaScript switch with multiple case

// Example 4: multiple case switch program

let fruit = 'apple';
switch (fruit) {
    case 'apple':
    case 'mango':
    case 'pineapple':
        console.log(`${fruit} is a fruit.`)
        break;
    default:
        console.log(`${fruit} is not a fruit`)
        break;
}