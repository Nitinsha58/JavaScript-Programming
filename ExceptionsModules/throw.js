// JavaScript throw Statement

// // Example1: try...catch...throw Example
// const number = 40;
// try {
//     if (number > 50) {
//         console.log('Success');
//     }else {
//         // user-defined throw statement
//         throw new Error('The number is low');
//     }

//     // if throw executes, the below code does not execute
// }catch  (error){ 
//     console.log('An Error caught');
//     console.log('Error message: ' + error);
// }


// JavaScript Built-in error constructors for standard errors
/*  Errors
    TypeError   
    SyntaxError
    ReferenceError
    EvalError
    InternalError
    RangeError
*/


// Rethrow an Exception
const number = 5;
try {
    // user-defined throw statement
    throw new Error('This is the throw');
}catch (error) {
    console.log('An error caught');
    if (number + 8 > 10) {
        // statement to handle exceptions
        console.log('Error message: '+ error);
        console.log('Error resolved');
    }else {
        // cannot handle the exception
        // rethrow the exception
        throw new Error('The value is low');
    }
}