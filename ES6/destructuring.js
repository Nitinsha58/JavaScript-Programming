// JavaScript Destructuring Assignment

// // Object Destructuring
// const person = {
//     name: 'Sara',
//     age: 25,
//     gender: 'female'
// }

// // destructuring assignment
// // using different variables names

// // same name should be used for destructuring, order does not matter

// let {age, name, gender} = person;

// console.log(age);
// console.log(name);
// console.log(gender);

// // assign different variable names for the object key
// // destructuring assignment
// // using different variables names
// let {name:name1, age: age1, gender:gender1} = person;

// console.log(age1);
// console.log(name1);
// console.log(gender1);


// // Array Destructuring
// const arrValue = ['one', 'two', 'three'];

// // destructuring assignment in arrays
// const [x, y, z] = arrValue;

// console.log(x); //one
// console.log(y); // two
// console.log(z); // three


// // Assign Default Values
// let arrValue = [10];
// // assigning default value 5 and 7
// let [x=5, y = 7] = arrValue;
// console.log(x);
// console.log(y);


// const person = {
//     name: 'Nitin'
// }

// // assign default value 26 to age if undefined
// const {name, age = 26} = person;

// console.log(name);
// console.log(age);


// // Swapping Variables
// let x = 4, y = 7;

// // swapping variables
// [x, y] = [y, x];

// console.log(x);
// console.log(y);


// // Skip Items
// const arrValue = ['one', 'two', 'three'];

// // destructuring assignment in arrays
// const [x, , z] = arrValue;

// console.log(x);
// console.log(z);


// // Assign Remaining Elements to a Single Variable
// const arrValue = ['one', 'two', 'three', 'four'];

// const [x, ...y] = arrValue;
// console.log(x);
// console.log(y);

// const person = {
//     name: 'Vishaal',
//     age: 25,
//     gender: 'male'
// }

// // destructuring assignment
// // assigning remaining properties to rest
// let {name, ...rest} = person;

// console.log(name);
// console.log(rest);


// Nested Destructuring Assignment
// netsted array elements
const arrValue = ['one', ['two', 'three']];

// nested destructuring assignment in arrays
const [x, [y, z]] = arrValue;

console.log(x);
console.log(y);
console.log(z);

const person = {
    name: 'Vivan',
    age: 26,
    hobbies: {
        read: true,
        playGame: true,
    }
}

const {name, hobbies: {read, playGame}} = person;
console.log(name);
console.log(read);
console.log(playGame);
