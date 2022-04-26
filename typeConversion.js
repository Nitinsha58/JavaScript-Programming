// JavaScript Type Conversion


// There are two types of type conversion in JavaScript
// 1. Implicit Conversion - automatic type conversion
// 2. Explicit Conversion - manual type conversion


// Example 1. Implicit Conversion to String

let result; 

// result = '3' + 2;
// console.log(result); // "32"

// result = '3' + true;
// console.log(result); // "3true"

// result = '3' + undefined;
// console.log(result); // "3undefined"


// result = '3' + null;
// console.log(result); // "3null"



// // Example 2. Implicit Conversion to Number
// // numberic string used with -, /, * results number type

// let result1;

// result = '4' - '2'; 
// console.log(result); // 2

// result = '4' - 2;
// console.log(result); // 2

// result = '4' * 2;
// console.log(result); // 8

// result = '4' / 2;
// console.log(result); // 2


// // Example 3: Non-numeric Stringg results to NaN
// // non-numeric string used with -, /, * results to NaN

// result = 'hello' - 'world';
// console.log(result); // NaN

// result = '4' - 'world';
// console.log(result); // NaN


// // Example 4: Implicit Boolean Conversion to Number
// // Implicit Boolean Conversion to Number
// result = '4' - true;
// console.log(result);

// result = 4 + true;
// console.log(result);

// result = 4 + false;
// console.log(result);


// // Example 5: null Conversion to Number

// result = 4 + null;
// console.log(result); // NaN

// result = 4 - null;
// console.log(result); // NaN


// // Example 6: undefined used with number, boolean or null
// // Arithmetic operation of undefined with number, boolean ro null gives NaN

// result = 4 + undefined;
// console.log(result) // NaN

// result = 4 - undefined;
// console.log(result) // NaN

// result = true + undefined;
// console.log(result) // NaN

// result = null + undefined;
// console.log(result) // NaN



// JavaScript Explicit Conversion
// 1. Convert to Number Explicitly

// string to number
result = Number("23");
console.log(result);

// 2. Convert to String Explicitly

//number to string

result = String(324);
console.log(result);  // "324"

result = String(2 + 4);
console.log(result); // "6"

//other data types to string
result = String(null);
console.log(result); // "null"

result = String(undefined);
console.log(result); // "undefined"

result = String(NaN);
console.log(result); // "NaN"

result = String(true);
console.log(result); // "true"

result = String(false);
console.log(result); // "false"

// using toString()
result = (324).toString();
console.log(result); // "324"

result = true.toString();
console.log(result); // "true"


// 3. Convert to Boolean Explicitly

let result;
result = Boolean('');
console.log(result); // false

result = Boolean(0);
console.log(result); // false

result = Boolean(undefined);
console.log(result); // false

result = Boolean(null);
console.log(result); // false

result = Boolean(NaN);
console.log(result); // false

result = Boolean(324);
console.log(result); // true

result = Boolean('hello');
console.log(result); // true

result = Boolean(' ');
console.log(result); // true

