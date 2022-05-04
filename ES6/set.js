// JavaScript Set and WeakSet
/* Set is similar to an array that allows us to store multiple items
like numbers, strings, objects, etc. However, unlike an array, a set
cannot contain duplicate values.*/

// // Create JavaScript Set
// // create set
// const set1 = new Set(); // an empty set
// console.log(set1);

// // set with multiple types of value
// const set2 = new Set([1, 'hello', {count: true}]);
// console.log(set2); 

// // set with duplicate values
// const set3 = new Set([1, 2, 2, 3]);
// console.log(set3);


// // Access Set Elements
// const set1 = new Set([1, 2, 3]);

// // access the elements of a Set
// console.log(set1.values()); // Set Iterator [1, 2, 3]
// console.log(set1.has(1))


// // Adding New Elements
// const set = new Set([1, 2]);
// console.log(set.values());

// // adding new elements
// set.add(3);
// console.log(set.values());

// // adding duplicate elements
// // does not add to Set
// set.add(1);
// console.log(set.values());


// // Removing Elements
// // user the clear() and the delete() method to remove elements from a Set

// const set = new Set([1, 2, 3]);
// console.log(set.values());

// // removing a particular element
// set.delete(2);
// console.log(set.values());


// // remove all elements of Set
// set.clear();
// console.log(set.values());


// // Iterate Sets
// /* You can iterate through the Set elements using the for...of loop
// or forEach() method. The elements are accessed in the insertion order. */

// const set = new Set([1, 2, 3]);

// // looping through Set
// for (let i of set) {
//     console.log(i);
// }


// // JavaScript WeakSet
// /*  The WeakSet is similar to a Set. However, WeakSet can contain
// objects whereas a Set can contain any data types such as strings, numbers,
// objects, etc.*/

// const weakSet = new WeakSet();
// console.log(weakSet);

// let obj = {
//     message: 'Hi',
//     sendMessage: true
// }

// // adding object (elements) to WeakSet
// weakSet.add(obj);
// console.log(weakSet);

// // trying to add strijng to WeakSet
// weakSet.add('hello');
// console.log(weakSet)


// // WeakSet Methods
// /* WeakSets have methods add(), delete(), and has() */
// const weakSet = new WeakSet();
// console.log(weakSet);

// const obj = {a:1};

// // adding to a weakSet
// weakSet.add(obj);
// console.log(weakSet);

// // check if an element is in Set
// console.log(weakSet.has(obj));

// // delete elements
// weakSet.delete(obj);
// console.log(weakSet);


// // WeakSets are Not Iterable
// /* Unlike Sets, WeakSets are not iterable */

// const weakSet = new WeakSet({a:1});

// // looping through WeakSet
// for (let i of weakSet) {
//     // Type Error
//     console.log(i)
// }


// Mathematical Set Operations
/* Set does not provide built-in methods for performing 
mathematical operatiosn such as union, intersection, differences, etc.
However, we can create programs to perform those operations. */

// // Example: Set Union Operation
// // perform union operation
// // contain elements of both sets
// function union(a, b) {
//     let unionSet = new Set(a);
//     for (let i of b){
//         unionSet.add(i)
//     }
//     return unionSet
// }

// // two sets of fruits
// let setA = new Set(['apple', 'mango', 'orange']);
// let setB = new Set(['grapes', 'apple', 'banana']);

// let result = union(setA, setB);
// console.log(result);


// // Example: Set Intersection Operation
// // perform intersection operation
// // elements of set a that are also in set b
// function intersection(setA, setB) {
//     let intersectionSet = new Set();

//     for (let i of setB){
//         if (setA.has(i)){
//             intersectionSet.add(i);
//         }
//     }

//     return intersectionSet;
// }


// // two sets of fruits
// let setA = new Set(['apple', 'mango', 'orange']);
// let setB = new Set(['grapes', 'apple', 'banana']);

// let result = intersection(setA, setB);
// console.log(result);



// // Example: Set Difference Operation
// // perform intersection operation
// // elements of set a that are also in set b
// function difference(setA, setB) {
//     let differenceSet = new Set(setA);

//     for (let i of setB){
//         differenceSet.delete(i);
//     }

//     return differenceSet;
// }


// // two sets of fruits
// let setA = new Set(['apple', 'mango', 'orange']);
// let setB = new Set(['grapes', 'apple', 'banana']);

// let result = difference(setA, setB);
// console.log(result);


// Example: Set Subset Operation
// perform subset operation
// true if all elements of a set b is in set a
function subset(setA, setB){
    for (let i of setB){
        if (!setA.has(i)){
            return false
        }
    }
    return false
}

// two sets of fruits
let setA = new Set(['apple', 'mango', 'orange']);
let setB = new Set(['grapes', 'apple', 'banana']);

let result = subset(setA, setB);
console.log(result);
