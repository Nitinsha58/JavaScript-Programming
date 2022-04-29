// JavaScript Getter and Setter

/* There are two kinds of objects properties: 
    1. Data properties
    2. Accessor properties
*/


// // Data Property
// const student = {
//     // data property
//     firstName: 'Monica'
// };


// Accessor Property
/* Accessor properties are methods that get or set the value of an object.
For that, we use these two keywords
    1. get - to define a getter method to get the property value
    2. set - to define a setter method to set the property value
*/


// // JavaScript Getter

// const student = {
//     // data property
//     firstName: 'Monica',

//     // accessor property(getter)
//     get getName() {
//         return this.firstName;
//     }
// };

// // accessing data property
// console.log(student.firstName); // Monica

// // accessing getter methods
// console.log(student.getName); // Monica

// // trying to access as a method
// console.log(student.getName()); // error



// // JavaScript Setter
// const student = {
//     firstName: 'Monica',

//     // accessor property(setter)
//     set changeName(newName) {
//         this.firstName = newName;
//     }
// };

// console.log(student.firstName); // Monica

// // change(set) object property using a setter
// student.changeName = 'Sarah';

// console.log(student.firstName); // Sarah



// JavaScript Object.defineProperty()

const student = {
    firstName: 'Monica'
}

// getting property
Object.defineProperty(student, 'getName', {
    get: function () {
        return this.firstName
    }
})


// setting property
Object.defineProperty(student, 'changeName', {
    set: function(value) {
        this.firstName = value;
    }
})

console.log(student.firstName); // Monica

// changing the property value
student.changeName = 'Sarah';

console.log(student.firstName); // Sarah