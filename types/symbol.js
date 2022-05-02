// JavaScript Symbol

// // Creating symbol
// const x = Symbol("hey");

// console.log(typeof(x));
// console.log(x); // Symbol(hey)


// // Access Symbol Description
// const x = Symbol('hey');
// console.log(x.description); 


// // Add Symbol as an Object Key
// let id = Symbol("id");

// let person = {
//     name: "Jack",

//     // adding symbol as a key
//     [id]: 123, // not "id": 123
// }
// console.log(person); 


// // Symbols are not included in for...in loop
// let id = Symbol("id");

// let person = {
//     name: "Jack", 
//     age: 25,
//     [id]: 12
// };

// // using for...in
// for (let key in person) {
//     console.log(key)
    
// }


// Benefit of Using Symbols in Object
/*  If the same code snippet is used in various programs, then it is
better to use symbols in the object key. It's because you can use the same key name in 
different codes and avoid duplication issues. */

// let person = {
//     name: "Jack"
// };

// creating symbol
// let id = Symbol("id");

// adding symbol as a key
// person[id] = 12;

// person[id] = "Another value";

// let person = {
//     name: "Jack"
// };

// // using string as key
// person.id = 12;
// console.log(person.id)

// // Another program overwrites value
// person.id = "Another value";
// console.log(person.id); // Another value


// Symbol Methods
/*  Method          Description
    for()           Searches for existing symbols
    keyFor()        Returns a shared symbol key from the global symbol registey.
    toSource()      Returns a string containing the source of the Symbol object
    toString()      Returns a string containing the description of the Symbol
    valueOf()       Returns the primitive value of the Symbol object
*/

// // Example
// // get symbol by name
// let sym = Symbol.for('hello');
// let sym1 = Symbol.for('id');

// // get name by symbol
// console.log(Symbol.keyFor(sym)); // hello
// console.log(Symbol.keyFor(sym1)); // id


// Symbol Properties
/*  Properties          Description
    asyncIterator       Returns the default Asynclterator for an object
    hasInstance         Determines if a constructor object recognizes an object as its instance
    isConcatSpreadable  Indicates if an object should be flattened to its array elements
    iterator            Returns the default iterator for an object
    match               Matches against a string
    matchAll            Returns an iterator that yields matches of the regular expression against a string
    replace             Replaces matched substrings of a string
    search              Returns the index within a string that matches the regular expression
    split               Splits a string at the indices that match a regular expression
    species             Creates derived objects
    toPrimitive         Converts an object to a primitive value
    toStringTag         Gives the default description of an object
    description         Returns a string containing the description of the Symbol
*/

const x = Symbol('hey');

// description property
console.log(x.description);

const stringArray = ['a', 'b', 'c', 'd'];
const numberArray = [1, 2, 3];

// isConcatSpreadable property
numberArray[Symbol.isConcatSpreadable] = false;

let result = stringArray.concat(numberArray); 
console.log(result);