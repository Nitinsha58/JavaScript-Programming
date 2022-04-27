// JavaScript Recursion
function countDown(number){
    // display the number
    console.log(number);

    // decrease the number value
    const newNumber = number -1;

    // base case
    if (newNumber > 0){
        countDown(newNumber);
    }
}

countDown(4);


// Find Factorial
function fact(x){
    // Base case
    if (x === 0){
        return 1;
    }

    else {
        return x*fact(x-1);
    }
}

console.log(fact(3))