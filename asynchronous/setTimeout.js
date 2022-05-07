// JavaScript setTimeout()

/*
    Its Parameters are:
    1. function - a function containg a block of code
    2. miliseconds - the time after which the function is executed

    The setTimeout() method returns an itervalId, which is a positive integer
*/

// // Example1: Display a Text Once After 3 Second
// function greet() {
//     console.log('Hello World');
// }

// let intervalId = setTimeout(greet, 3000);
// console.log('This message is shown first');

// console.log('Id: ', intervalId); 


// // Example 2: Display Time Every 3 Second
// function showTime() {
//     // return new date and time
//     let datetime = new Date();

//     // retursn the current local time
//     let time = datetime.toLocaleTimeString();
//     console.log(time);
//     // display the time after 3 seconds
//     setTimeout(showTime, 3000);
// }

// showTime();


// // clearTimeout();
// // Example 3: Use clearTimeout() Method
// // program to stop the setTimeout() method

// let count = 0;

// // function creation
// function increaseCount(){
//     // increase the count by 1
//     count += 1;
//     console.log(count);

//     let id = setTimeout(increaseCount, 3000);

//     if (count == 3){
//         clearTimeout(id);
//         console.log('SetTimeout is stopped.');
//     }
// }

// increaseCount();


// // program to display a name
function greet(name, lastName){
    console.log('Hello', name , lastName);
}

// passing argument to setTimeout
setTimeout(greet, 1000, 'John', 'doe');