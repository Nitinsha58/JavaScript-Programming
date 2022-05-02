// JavaScript for...in loop

// // Example1: Iterate Through an object 
// const student = {
//     name: 'Monica',
//     class: 7,
//     age: 12
// }

// // using for...in
// for (let key in student){
//     // displaying the properties
//     console.log(`${key} => ${student[key]}`);
// }


// // Example 2: Update Values of Properties
// const salaries = {
//     Jack: 24000,
//     Paul: 34000,
//     Monica: 55000
// }

// // using for...in
// for (let i in salaries) {
//     // add a currency symbol
//     let salary = "$" + salaries[i];

//     // display the values
//     console.log(`${i}: ${salary}`)
// }


// // for...in with Strings
// const string = 'code';

// // using for...in loop
// for (let i in string) {
//     console.log(string[i]);
// }


// for...in with Arrays
const arr = ['hello', 1, 'JavaScript'];

// using for...in loop
for (let i in arr) {
    console.log(`${arr[i]}`)
}