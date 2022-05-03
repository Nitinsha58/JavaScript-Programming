// JavaScript Map

/*  Map is similar to objects in JavaScript that allows us to store elements in a 
Key/value pair

The elements in a Map are inserted in an insertion order. However, unlike
an object, a map can contain objects, function and other data types as key.
*/

// // Create JavaScript Map
// // create a Map
// const map1 = new Map(); // an empty map
// console.log(map1); // Map {}


// // Insert Item to Map
// /*  After you create a map, you can use the set()  */
// // create a set
// let map1 = new Map();

// // insert key-value pair
// map1.set('info', {name: 'Jack', age: 26});
// console.log(map1);


// // Map with object key
// let map2 = new Map();
// let obj = {};
// map2.set(obj, {name: 'Jack', age: 26});

// console.log(map2);


// // Access Map Elements
// /* You can access Map elements using the get() method. */

// let map1 = new Map();
// map1.set('info', {name: 'Jack', age: "26"});

// // access the elements of a Map
// console.log(map1.get('info'));


// // Check Map Elements
// /* You can use the has() method to check if the element is in a Map */
// const set1 = new Set([1, 2, 3]);
// let map1 = new Map();
// map1.set('info', {name: 'Jack', age:26});

// // check if an element is in Set
// console.log(map1.has('info'));


// // Removing Elements
// /* You can use the clear() and the delete() method to remove elements from a Map

// The delete() method returns true if a specified key/value pair exists and has been 
// removed or else returns false. */

// let map1 = new Map();
// map1.set('info', {name: 'Jack', age: 26});

// // removing a particular element
// map1.delete('address'); // false
// console.log(map1);

// map1.delete('info'); // true
// console.log(map1);

// map1.set('info', {name: 'Jack', age: 26});
// map1.clear();
// console.log(map1);


// // JavaScript Map Size
// /* You can get the number of elements in a Map using the size property. */
// let map1 = new Map();
// map1.set('info', {name: 'Jack', age: 26});

// console.log(map1.size); // 1


// // Iterate Through a Map
// /* You can iterate through the Map elements using the for...of loop or forEach()
// method. The elements are accessed in the insertion order */

// let map1 = new Map();
// map1.set('name', 'Jack');
// map1.set('age', '27');

// // looping through Map
// for (let [key, value] of map1) {
//     console.log(key + "- " + value);
// }

// // Using ForEach method()
// // looping through Map
// map1.forEach(function(value, key) {
//     console.log(key + " : " + value);
// })


// // Iterate Over Map keys
// let map1 = new Map();
// map1.set('name', 'Nitin');
// map1.set('age', 20);

// // looping through the Map keys
// for (let key of map1.keys()) {
//     console.log(key)
// }

// // looping through the Map values
// for (let value of map1.values()) {
//     console.log(value)
// }


// // get key/values of Map
// let map1 = new Map();
// map1.set('name', 'Nitin');
// map1.set('age', 20);

// // looping through the Map
// for (let elem of map1.entries()) {
//     console.log(`${elem[0]}: ${elem[1]}`);
// }


// JavaScript Map vs Object
/*
Map: Maps can contain objects and other data types as keys.
Object: Objects can only contain strings and symbols as keys.

Map: Maps can be directly iterated and their value can be accessed
Object: Objects can be iterated by accessing its keys

Map: The number of elements of a Map can be determined by size property
Object: The number of elements of an object needs to be determined manually

Map: Map performs better for programs that require the addition or removal
of elements frequently.
Object: Object does not perform well if the program requires the 
addition or removal of elements frequently.
*/


// // JavaScript WeakMap
// /* The WeakMap is similar to a Map. However, WeakMap can only contain objects as keys.*/
// const weakMap = new WeakMap();
// console.log(weakMap);

// let obj = {};

// // adding object (element) to WeakMap
// weakMap.set(obj, 'hello');

// console.log(weakMap);


// // WeakMap Methods
// /* WeakMaps have methods get(), set(), delete(), and has(). */
// const weakMap = new WeakMap();
// console.log(weakMap);

// let obj = {};

// // adding object (element) to WeakMap
// weakMap.set(obj, 'hello');
// console.log(weakMap);

// // get the element of a WeakMap
// console.log(weakMap.get(obj));

// // check if an element is presetn in WeakMap
// console.log(weakMap.has(obj));

// // delete the element of WeakMap
// console.log(weakMap.delete(obj));

// console.log(weakMap);


// WeakMaps are Not iterable
const weakMap = new WeakMap();
let obj = {};

// adding object (element) to WeakMap
weakMap.set(obj, 'hello'); 

// looping through WeakMap
for (let i of weakMap){
    console.log(i); // TypeError
}