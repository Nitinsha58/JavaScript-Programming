// JavaScript Spread Operator

// // Spread Operator
// /* The spread operator ... is used to expand or spread an iterable or an array. */

// const arrValue = ['My', 'name', 'is', 'Jack'];
// console.log(arrValue);
// console.log(...arrValue);


// // Copy Array Using Spread Operator
// /* You can also use the spread syntax ... to copy 
// the items into a single array. */

// const arr1 = ['one', 'two'];
// const arr2 = [...arr1, 'three', 'four', 'five'];

// console.log(arr2);


// // Clonse Array using Spread Operator
// let arr1 = [1, 2, 3];
// let arr2 = arr1;

// console.log(arr1);
// console.log(arr2);

// // append an item to the array
// arr1.push(4);

// console.log(arr1);
// console.log(arr2);

// let arr1 = [1, 2, 3];
// let arr2 = [...arr1];

// console.log(arr1);
// console.log(arr2);

// // append an item to the array
// arr1.push(4);

// console.log(arr1);
// console.log(arr2);


// // Spread Operator with Object
// const Obj1 = { x: 1, y: 2}; 
// const obj2 = { z: 3};

// // add members obj1 and obj2 to obj3
// const obj3 = {...Obj1, ...obj2};
// console.log(obj3);


// Rest Parameter
/* When the spread operator is used as a parameter, it is known as
the rest parameter. */
let func = function(...args) {
    console.log(args);
}

func(3);
func(4, 5, 6);