// JavaScript Inheritance
/* Inheritance enables you to define a class that takes all the functionality from
a parent class and allows you to add more.

Using class inheritance, a class can inherit all the methods and properties 
of another class

Inheritanc is a useful feature that allows code reusability.

*/

// // parent class
// class Person {
//     constructor(name) {
//         this.name = name;
//     }

//     greet(){
//         console.log(`Hello ${this.name}`);
//     }
// }

// // inheriting parent class
// class Student extends Person {

// }

// let student1 = new Student('Jack');
// student1.greet();


// // JavaScript super() keyword
// /* The super keyword used inside a child class denotes
// its parent class. */

// /* super inside Student class refers to the Person 
// class. Hence, when the constructor of Student class is called,
// it also calls the constructor of the Person class which assigns 
// a name property to it. */

// // parent class
// class Person {
//     constructor(name){
//         this.name = name;
//     }

//     greet() {
//         console.log(`Hello ${this.name}`);
//     }
// }

// // inheriting parent 
// class Student extends Person {
//     constructor(name){
//         console.log("Creating student class")

//         // cal the super class constructor and pass in the name parameter
//         super(name);
//     }
// }

// let student1 = new Student('Nitin');
// student1.greet();


// Overriding Method or Property

// parent class
class Person {
    constructor(name){
        this.name = name;
        this.occupation = "unemployed";
    }
    greet() {
        console.log(`Hello ${this.name}`);
    }
}

// inheriting parent class
class Student extends Person {
    constructor(name){

        // call the super class constructor and pass in the name parameter
        super(name);

        // Overriding an occupation property
        this.occupation = 'Student';
    }

    // overriding Person's method
    greet(){
        console.log(`Hello student ${this.name}`);
        console.log(`Occupation: ${this.occupation}`)
    }
}

let p = new Student('Jack');
p.greet();