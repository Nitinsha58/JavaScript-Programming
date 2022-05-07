// JavaScript Proxies

// // Creating a Proxy Object
// // The syntax of a proxy is
// // new Proxy(target, handler)

// /*
//     Here,
//     new Proxy() - the constructor
//     target = the object/function which you want to proxy
//     handler = can redefine the custom behavior of the object
// */

// let student1 = {
//     name: "Felix",
//     age: 24,
// }

// const handler = {
//     get: function(obj, prop){
//         return obj[prop] ? obj[prop] : 'property does not exist';
//     }
// }

// const proxy = new Proxy(student1, handler);
// console.log(proxy.name);
// console.log(proxy.age);
// console.log(proxy.class);

// const proxy1 = new Proxy(student1, {});

// console.log(proxy1);
// console.log(proxy1.name);


// // Proxy Handlers
// /* Proxy provides two handler methods get() and set() */

// // get() handler
// // get() method is used to access the properties of a target object.

// let student = {
//     name: 'Jack',
//     age: 24,
// }

// const handler = {
//     // get the object key and value
//     get(obj, prop) {
//         return obj[prop];
//     }
// }

// const proxy = new Proxy(student, handler);
// console.log(proxy.name);


// // set() handler
// /* The set() method is used to set the value of an object. */

// let student = {
//     name: 'John',
// }

// let setNewValue = {
//     set: function(obj, prop, value){
//         obj[prop] = value;
//         return;
//     }
// };

// // setting new proxy
// let person = new Proxy(student, setNewValue);

// // setting new key/value
// person.age = 25;
// console.log(person);


 
// // Uses of Proxy
// // 1. For Validation
// /* You can use a proxy for validation. You can check the value of 
// a key and perform an action based on that value */

// let student = {
//     name: 'Jack',
//     age: 24,
// }

// const handler = {
//     // get the object key and value
//     get(obj, prop) {
//         if (prop == 'name') {
//             return obj[prop];
//         }else {
//             return 'Not allowed';
//         }
//     }
// }

// const proxy = new Proxy(student, handler);
// console.log(proxy.name);
// console.log(proxy.age);


// // 2. Read Only View of an Object
// /* There may be times when you do not want to let others make changes in an 
// object. In such cases, you can use a proxy to make an object 
// readable only.*/ 


// let student = {
//     name: 'Jack',
//     age: 23
// }

// const handler = {
//     set: function(obj, prop, value){
//         if(obj[prop]) {
//             // cannot change the student value
//             console.log('Read Only');
//         }
//     }
// };

// const proxy = new Proxy(student, handler);

// proxy.name = 'John'; // Read only
// proxy.age = 23; // Read only


// 3. Side Effects
const myFunction = () => {
    console.log("Execute this function");
}

const handler = {
    set: function(target, prop, value){
        if (prop === 'name' && value === 'Jack'){
            // calling another function
            myFunction();
        }else {
            console.log('Can only access name property');
        }
    }
}

const proxy = new Proxy({}, handler);

proxy.name = 'Jack';
proxy.age = 23;