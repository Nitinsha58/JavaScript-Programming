// JavaScript Numbers



// // JavaScript NaN
// const a = 4 - "hello";
// console.log(a);


// const a = isNaN(9);
// console.log(a); // false

// const a = isNaN(4 - 'hello');
// console.log(a); // true
// console.log(typeof(a));


// // JavaScript Infinity
// const a = 2 / 0;
// console.log(a); // Infinity

// const b = -1/0;
// console.log(b); // -Infinity


// // JavaScript BigInt
// // BitInt value
// const value = 23498723958723955872n;

// // Adding two big integers
// const value1 = value + 1n;
// console.log(value1);


// // Precision Problems
// const a = 0.1 + 0.2;

// console.log(a);
// console.log(a.toFixed(2));


// const a = 45;

// // creating a number object
// const b = new Number(45);

// console.log(a); 
// console.log(b);

// console.log(typeof(a));
// console.log(typeof(b));


/*  JavaScript Number Methods
    Method              Description
    isNaN()             determines whether the passed value is NaN
    isFinite()          determines whether the passes value is a finite number
    isInteger()         determines whether the passed value is an integer
    isSafeInteger()     determines whether the passed value is a safe integer
    parseFloat(string)  converts the numeric floating string to floating-point number 
    parseInt(string, [radix])   converts the numeric string to integer
    toExponential(fractionDigits)   returns a string value for a number in exponential notation
    foFixed(digits)     returns a string value for a number in fixed-point notation
    toPrecision()       returns a string value for a number to a specified precision
    toString([radix])   returns a string value in a specified radix(base)
    valueof()           returns the numbers value
    toLocaleString()    returns a string with a language sensitive representation of a number
*/

// // For Example
// const a = 12;
// console.log(Number.isInteger(a)); // true

// // check if b is NaN
// const b = NaN;
// console.log(Number.isNaN(b))

// // display upto two decimal point
// const d = 5.1234;
// console.log(d.toFixed(2));


// JavaScript Number Properties
/*  Property            Description
    EPSILON             returns the smallest interval between two representable numbers
    MAX_SAFE_INTEGER    returns the maximum safe integer
    MAX_VALUE           returns the largest possible value
    MIN_SAFE_INTEGER    returns the minimum safe integer
    MIN_VALUE           returns the smallest possible value
    NaN                 represents 'Not-a-Number' vaule
    NEGATIVE_INFINITY   represents negative infinity
    POSITIVE_INFINITY   represents positive infinity
    prototype           allows the addition of properties to Number objects
*/

// // For Example 
// // largest possible value
// const a = Number.MAX_VALUE;
// console.log(a);

// // maximum safe integer
// const b = Number.MAX_SAFE_INTEGER;
// console.log(b)


// JavaScript Number() Function
const a = '23'; // string
const b = true; // boolean

// converting to number
const result1 = Number(a);
const result2 = Number(b);

console.log(result1);
console.log(result2);