// JavaScript for...of loop
/*
    The Syntax of the for...of loop
    for (element of iterable){
        // body of for...of
    }

    1. iterable - an interable object(array, set, strings, etc)
    2. element - items in the iterable
*/

// // for...of with Arrays
// // array
// const students = ['John', 'Sara', 'Jack'];

// // using for...of
// for (let element of students){
    
//     // display the values 
//     console.log(element);
// }


// // for...of with Strings
// // string
// const string = 'code';

// // using for...of loop
// for (let i of string){
//     console.log(i);
// }


// // for...of with Sets
// // define Set
// const set = new Set([1, 2, 3]);

// // looping through Set
// for (let i of set){
//     console.log(i);
// }


// // for...of with Maps
// // define Map
// let map = new Map();

// // inserting elements
// map.set('name', 'Jack');
// map.set('age', '27');

// // looping through Map
// for (let [key, value] of map){
//     console.log(key + "- " + value)
// }


// // User Definied Iterators
// /* You can create an interator manually and use the for...of loop to
// iterate through the iterators */ 

// const iterableObj = {

//     // iterator method
//     [Symbol.iterator]() {
//         let step = 0;
//         return {
//             next() {
//                 step++;
//                 if (step === 1){
//                     return {value: '1', done: false};
//                 }
//                 else if (step === 2) {
//                     return {value: '2', done: false};
//                 }
//                 else if (step === 3) {
//                     return {value: '3', done: false};
//                 }
//                 return {value: '', done: true};
//             }
//         }
//     }

// }

// // iterating using for...of
// for (const i of iterableObj) {
//     console.log(i);
// }


// for...of with Generators
/* Since generators are iterables, you can implement an iterator in an 
easier way. Then you can iterate through the generators using the for...of loop
*/

// generate function
function* generatorFunc() {
    yield 10;
    yield 20;
    yield 30;
}

const obj = generatorFunc();

// iteration through generator
for (let value of obj){
    console.log(value);
}


// for...of Vs for...in
/*

    for...of: The for...of loop is used to iterate through the
    values of an iterable

    for...in: The for...in loop is used to iterate through the 
    keys of an object

    for...of: the for...of loop cannot be used to iterate over an object

    for...in: You can use for...in to iterate over an iterable such 
    arrays and strings but you should avoid using for...in for iterables
*/

