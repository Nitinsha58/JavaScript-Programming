// JavaScript Arrays

const words = ['hello', 'world', 'welcome'];

// Create an Array
// 1. Using an array literal 
const array1 = ['eat', 'sleep'];

// 2. Using the new Keyword
const array2 = new Array('eat', 'sleep');


// empty array
const myList = [];

// array of numbers
const numberArray = [1, 2, 3, 4, 5];

// array of strings
const stringArray = ['eat', 'work', 'sleep'];

// array with mixed data types
const newData = ['work', 'exercise', 1, true];

// You can slso store arrays, functions and other objects inside an array.
const newData = [
    {'task1': 'exercise'},
    [1, 2, 3],
    function hello() {console.log("hello")}
];


// Access Elements of an Array
const myArray = ['h', 'e', 'l', 'l','o']

// first element
console.log(myArray[0]); // "h"

console.log(myArray[1]); // "e"



// Add an Element to an Array
let dailyActivities = ['eat', 'sleep'];

// add an element at the end
dailyActivities.push('exercise');

console.log(dailyActivities);


// add an element at the start
dailyActivities.unshift('work');

console.log(dailyActivities);



// Change the elements of an array
// this will add the new element 'play' at the 2 index
dailyActivities[2] = 'play';

console.log(dailyActivities);




// Remove an Element from an Array
let dailyActivities = ['work', 'eat', 'sleep', 'exercise'];

// remove the lst element
dailyActivities.pop();
console.log(dailyActivities); 

// remove the last element from ['work', 'eat', 'sleep']
const removedElement = dailyActivities.pop();


// get removed element
console.log(removedElement);
console.log(dailyActivities);


// get first removed element
let dailyActivities = ['work', 'eat', 'sleep'];

// remove the last element
dailyActivities.shift()

console.log(dailyActivities);



// Array Length
const dailyActivities = ['eat', 'sleep'];

// this gives the total number of elements in an array
console.log(dailyActivities.length);


/* Array Methods 
    Method      Description
    concat()    joins two or more arrays and returns a result
    indexOf()   searches an element of an array and returns its position
    find()      returns the first value of an array element that passes a test
    findIndex() returns the first index of an array element that passes a test
    forEach()   calls a function for each element
    includes()  checks if an array contains a specified element
    push()      adds a new element to the end of an array and returns the new length of an array
    unshift()   adds a new element to the beginning of an array and returns the new length of an array
    pop()       removes the last element of an array and returns the removed element
    shift()     removes the first element of an array and returns the removed element
    sort()      sorts the elements alphabetically in strings and in ascending order
    slice()     selects the part of an array and returns the new array
    splice()    removes or replaces existing elements and/or adds new elements
*/

// JavaScript Array Methods
let dailyActivities = ['sleep', 'work', 'exercise'];
let newRoutine = ['eat'];

// sorting elements in the alphabetical order
dailyActivities.sort();
console.log(dailyActivities);

// finding the index position of string
const position = dailyActivities.indexOf('work');
console.log(position);

// slicing the array elements
const newDailyActivities = dailyActivities.slice(1)
console.log(newDailyActivities);

// concatenating two arrays
const routine = dailyActivities.concat(newRoutine);
console.log(routine);



