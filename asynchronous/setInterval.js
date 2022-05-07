// JavaScript setInterval

/*
    There are two methods for executing code at specific intervals. They are
    1. setInterval()
    2. setTimeout()
*/

// JavaScript setInterval() 
/* The setInterval() method repeats a block of code at every 
given timing event */

// // Example 1: Display a Text Once Every  1 Second
// // program to display a text using setInterval method
// function greet() {
//     console.log('Hello world');
// }

// setInterval(greet, 1000);



// // Example 2: Display time every 5 seconds
// function showTime(){
//     // return new date and time
//     let datetime = new Date();

//     let time = datetime.toLocaleTimeString();

//     console.log(time);
// }


// let display = setInterval(showTime, 5000);



// JavaScript clearInterval()

// // Example 3: Use clearInterval() method
// // program to stop the setInterval() method after five times
// let count = 0;

// // function creation
// let interval = setInterval(function(){
//     // increasing the count by 1
//     count += 1;

//     // when count equals to 5, stop the function 
//     if (count === 5){
//         clearInterval(interval);
//     }

//     // display the current time
//     let dateTime = new Date();
//     let time = dateTime.toLocaleTimeString();
//     console.log(time);
// }, 2000);



// program to display a name
function greet(name, lastname) {
    console.log('hello', name, lastname);
}

// passing argument to setInterval
setInterval(greet, 1000, 'Nitin', 'Vava');