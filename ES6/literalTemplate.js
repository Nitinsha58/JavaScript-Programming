// JavaScript Template Literals (Template Strings)

// // Template Literals for Strings
// const str1 = 'This is a string';

// // cannot use the same quotes
// const str2 = 'A "Quote" inside a string'; // valid code
// // const str3 = 'A 'quote' inside a string'; // Error

// const str4 = "Another 'quote' inside a string"; // valid code
// // const str5 = "Another "quote" inside a string"; // Error


// // escape characters using \
// const str3 = 'A \'qutoe\' inside a string'; // valid code
// const str5 = "Another \"quote\" inside a string"; // valid code


// // Instead of using escape characters, you can use template literals.
// const str1 = `This is a string`;
// const str2 = `This is a string with a 'quote' in it`;
// const str3 = `This is a string with a "double quote" in it`;



// // Multiline Strings Using Template Literals
// const message1 = `This is a logn message 
// that spans across multiple lines 
// in the code.`;

// console.log(message1);


// // Expression Interpolation
// const name = 'Jack';
// console.log(`Hello ${name}`);

// const result = 4 + 5;

// // template literals used with exressions
// console.log(`The sum of 4 + 5 is ${result}`);

// console.log(`${result < 10 ? 'Too low': 'Very High'}`);


// // Tagged Templates
// function tagExample(strings) {
//     return strings; 
// }

// // passing argument
// const result = tagExample('Hello Jack');
// console.log(result);

// function tagExample(strings) {
//     return strings;
// }

// // creating tagged template
// const result = tagExample`Hello Jack`;
// console.log(result);

const name = 'Jack';
const greet = true;

function tagExample(strings, nameValue) {
    let str0 = strings[0]; // Hello
    let str1 = strings[1]; // , How are you?

    console.log(strings, nameValue);
    if (greet) {
        return `${str0}${nameValue}${str1}`;
    }
}

// creating tagged literal
// passing argument name
const result = tagExample`Hello ${name}, How are you?`;
console.log(result);