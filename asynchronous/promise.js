// JavaScript Promise
/*
    A promise is a good way to handle asynchronous operations. It is 
    used to find out if the asynchronous operation is successfully 
    completed or not.

    A promise may have one of three states.
    1. Pending
    2. Fulfilled
    3. Rejected    
*/

/*
    A promise starts in a pending state. That means the process is not
    complete. If the operation is successful, the process ends in a 
    fullfilled state. And, if an error occurs, the process ends in a 
    rejected state.
*/


// // Create a Promise
// let promise = new Promise(function(resolve, reject){
//     console.log('Hello world')
// })


// // Example 1: Program with a Promise
// const count = false;
// let countValue = new Promise(function (resolve, reject){
//     if (count){
//         resolve("There is a count value.");
//     }else {
//         reject("There is no count value");
//     }
// });

// console.log(countValue);


// JavaScript Promise Chaining
/* Promises are useful when you have to handle more than one asynchronous
tasks, one after another. for that, we use promise chaining. 

You can perform an operation after a promise is resolved using methods then(), 
catch() and finally()
*/


// // JavaScript then() method
// /* The then() method is used with the callback when the promise is 
// successfully fulfilled or resolved */

// // Example 2: Chaining the Promise with then()
// let countValue = new Promise(function(resolve, reject){
//     resolve("Promise resolved");
// })

// // executes when promise is resolved successfully

// countValue
// .then(function successValue(result){
//     console.log(result);
// })
// .then(function successValue1(){
//     console.log("You can call multiple functions this way.")
// })



// // JavaScript catch() method
// let countValue = new Promise(function (resolve, reject) {
//     reject('Promise rejected');
// })


// // executes when promise is resolved successfully
// countValue.then(
//     function successValue(result){
//         console.log(result);
//     }
// )

// // executes if there is an error
// .catch(
//     function errorValue(result){
//         console.log(result);
//     }
// )


// // JavaScript finally() method
// /* You can also use the finally() method with promises. The finally() method 
// gets executed when the promise is either resolved successfully or rejected. */

// let countValue = new Promise(function (resolve, reject){
//     // could be resolved or rejected
//     resolve('Promise resolved');
// });

// countValue
// .finally(
//     function greet(){
//         console.log("This code is executed");
//     }
// )


// JavaScript Promise Methods
/*
Method                  Description
all(iteratable)         Waits for all promises to be resolved or any one to be rejected
allSettled(iterable)    Waits until all promises are either resolved or rejected
any(iterable)           Returns the promise value as soon as any one of the promises is fullfilled
race(iterable)          Wait until any of the promises is resolved or rejected
reject(reason)          Returns a new Promise object that is rejected for the given reason
resolve(value)          Returns a new Promise object that is resolved with the given value
catch()                 Appends the rejection handler callback
then()                  Appends the resolved handler callback
finally()               Appends a handler to the promise
*/