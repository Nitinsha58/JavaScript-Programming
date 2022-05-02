// JavaScript try...catch...finally Statement

// // Example1: Display undeclared Variable
// // program to show try...catch in a program
// const numerator = 100, denominator = 'a';

// try {
//     console.log(numerator/denominator); 

//     // forgot to define variable a 
//     console.log(a);

// }
// catch (error) {
//     console.log("An Error caught"); 
//     console.log('Error Message: '+ error); 
// }



// // JavaScript try catch finally statement
// // Example 2: try...catch...finally Example
// const numerator = 100, denominator = 'a';
// try {
//     console.log(numerator/denominator);
//     console.log(a);
// }catch (error) {
//     console.log('An Error caught');
//     console.log('Error Message: ' + error); 
// }finally {
//     console.log('Finally will execute every time');
// }


// JavaScript try...catch in setTimeOut
try {
    setTimeout(function() {
        // error in the code
    }, 3000);
}catch (e) {
    console.log("won't work");
}