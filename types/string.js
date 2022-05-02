// JavaScript String
const name = 'John';

/* Create JavaScript Strings
Strings are created by surrounding them with quotes. There are three ways you can use quotes.
    1. Single quotes: 'hello'
    2. Double quotes: "hello"
    3. Backticks: `Hello ${name}`
*/


// // JavaScript is Case-Sensitive
// const a = 'a';
// const b = 'A';
// console.log(a === b); // false


// // JavaScript Multiline Strings
// // using the + operator 
// const message1 = 'This is a long message' + 
//     'That spans across multiple lines' + 
//     'in the code'

// // using the \ operators
//     const message2 = 'This is a long message \
//     that spans across multiple lines \
//     in the code'


// // JavaScript String Length
// const a = 'hello'
// console.log(a.length); // 5


// // JavaScript String Object
// const a = 'hello'
// const b = new String('hello');

// console.log(a);
// console.log(b);

// console.log(typeof a);
// console.log(typeof b);


// JavaScript String Methods
/*  Method          Description
    charAt(index)   returns the character at the specified index 
    concat()        joins two or more strings
    replace()       replaces a string with another string
    split()         converts the string to an array of strings
    substr(start, length)   returns a part of string
    substring(start, end)   returns a part of string
    toLowerCase()   returns the passed string in lower case
    toUpperCase()   returns the passed string in upper case
    trim()          removes whitespace from the strings
    includes()      searches for a string and returns a boolean value
    search()        searches for a string and returns a position of a match    
*/

// // Example: JavaScript String Methods
// const text1 = 'hello';
// const text2 = 'world';
// const text3 = '     JavaScript      ';

// // concatenating two strings
// const result1 = text1.concat(' ', text1);
// console.log(result1); // "hello world"

// // converting the text to uppercase
// const result2 = text1.toUpperCase();
// console.log(result2);

// // removing whitespace from the string
// const result3 = text3.trim();
// console.log(result3);

// // converting the string to an array
// const result4 = text1.split();
// console.log(result4);


// // slicing the string
// const result5 = text1.slice(1, 3);
// console.log(result5);



// // JavaScript String() Function
// /* The String() function is used to convert various data types to strings. */
// const a = 225; // number
// const b = true; // boolean

// // converting to string
// const result1 = String(a);
// const result2 = String(b);

// console.log(result1);
// console.log(result2);


// Escape Character
/*  Code        Output
    /"          include double quote 
    \\          include backslash
    \n          new line
    \r          carriage return
    \v          vertical tab
    \t          horizontal tab
    \b          backspace
    \f          form feed
*/

console.log("Hello\n")
console.log("Hello\r")
console.log("Hello\v")
console.log("Hello\t")
console.log("Hello\b")
console.log("Hello\f")