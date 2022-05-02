// // JavaScript Multidimensional Array

// // multidimensional array
// const data = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
// ];


// // Create a Multidimensional Array
// // Example 1
// let studentsData = [
//     ['Jack', 24],
//     ['Sara', 23],
//     ['Peter', 24]
// ];



// // Access Elements of an Array
// let x = [
//     ['Jack', 24],
//     ['Sara', 23],
//     ['Peter', 24]
// ]


// // access the first item
// console.log(x[0]);

// console.log(x[0][0]);

// console.log(x[2][1]);


// Iterating over Multidimensional Array

let studentsData = [['Jack', 24], ['Sara', 23]]

studentsData.forEach((student) => {
    student.forEach((data) => {
        console.log(data);
    })
});


// looping outer array elements
for (let i = 0; i < studentsData.length; i++){
    // get the length of the inner array elements
    let innerArrayLength = studentsData[i].length;

    // looping inner array elements
    for (let j = 0; j < innerArrayLength; j++){
        console.log(studentsData[i][j])
    }
}