// JavaScript async/await

/*
    We use the async keyword with a function to represent that 
    the function is an asynchronous function. The async function 
    returns a promise 
*/

// async function name(parameter1, parameter2, ...parameterN) { // statements }
// name - name of the function
// parameters - parameters that are passed to the function


// // Example: Async Function
// async function f() {
//     console.log('Async function.');
//     return Promise.resolve(1);
// }

// f();

// f().then(function(result){
//     console.log(result);
// })


// JavaScript await keyword
/* 
    The await keyword is used inside the async function to wait for the 
    asynchronous operation.
*/

// let result = await promise;

// // a promise 
// let promise = new Promise(function (resolve, reject){
//     setTimeout(function (){
//         resolve('Promise resolved')}, 4000)
// })

// // async function
// async function asyncFunc() {
//     // wait until the promise resolves
//     let result = await promise;
//     console.log(result);
//     console.log('hello');
// }

// asyncFunc();


// Error handling
let promise = new Promise(function (resolve, reject){
    setTimeout(function (){
        resolve('Promise resolved')
    }, 4000);
});

// async function
async function asyncFunc(){
    try {
        // wait until the promise resolves
        let result = await promise;

        console.log(result);
    }
    catch(error) {
        console.log(error);
    }
}


// calling the async function
asyncFunc();


// Benefits of Using async Function
/*
    The code is more readable than using a callback or a promise
    Error handling is simpler.
    Debugging is easier
*/