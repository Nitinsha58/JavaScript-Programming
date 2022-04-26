/* 

    Data Types      Description

    String          represents textual data 'hello'
    Number          an integer or a floating-point number
    BigInt          an integer with arbitrary precision
    Boolean         Any of two values: true or false
    undefined       a data type whose variable is not initialized
    null            denotes a null value
    Symbol          data type whose instances are unique and immutable
    Object          key-value pairds of collection of data
*/

// JavaScript String
const name = 'ram';
const name1 = "hari1";
const result = `The names are ${name} and ${name1}`


// JavaScript Number
const number1 = 3;
const number2 = 3.432;
const number3 = 3e5; // 3 * 10^5

const number4 = 3/0;
console.log(number4); // Infinity

const number5 = -3/0;
console.log(number5); // -Infinity

// strings can't be divided by numbers
const number6 = "abc"/0;
console.log(number6); // NaN


// JavaScript BigInt
// BingInt value
const value1 = 99385739287593597239n;

// adding two big integers
const result1 = value1 + 1n;
console.log(result1);

const value2 = 23675983975928236n;

// Error! BigInt and number cannot be added
const result2 = value2 + 1n;
console.log(result2);


// JavaScript Boolean
const dataChecked = true;
const valueCounted = false;


// JavaScript undefined
let nameUn;
console.log(nameUn); // undefined

let nameUn2 = undefined;
console.log(nameUn2);


// JavaScript Null
const number = null;


// JavaScript Symbol
// two symbols with the same description
const symb1 = Symbol('hello');
const symb2 = Symbol('hello');
console.log(symb1);
console.log(symb2);


// JavaScript Object
// An object is a complex data type that allows us to store collections of data.
const student = {
    firstName: 'ram',
    lastName: null,
    class: 10
}


// JavaScript Type
// data is of undefined type
let data;

// data is of integer type
data = 5;

// data is string type
data = "JavaScript Programming";


// JavaScript typeof
const Name = 'ram';
console.log(typeof(Name));

const a = null;
console.log(typeof(a)); // returned "object" for the null type. This is a known issue in JavaScript since its first release.