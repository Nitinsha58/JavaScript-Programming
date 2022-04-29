// JavaScript methods and this keyword

// accessing method and property
const person = {
    name: 'John',
    greet: function() {console.log('Hello');}
}

// accessing property
person.name; // John

// accessing method
person.greet(); // Hello

/*
    The greet method is accessed as person.greet() 
    instead of person.greet

    If you try to access the method with only person.greet, it will 
    give you a function definition.
*/


// JavaScript Built-In Methods
let number = '23.32';
let result = parseInt(number);

console.log(result);



// Addding a method to a JavaScript object
// creating an object
let student = {};

// adding a property 
student.name = 'John';

// adding a method
student.greet = function(){
    console.log("Hello");
}

// accessing a method
student.greet(); // hello

// JavaScript this keyword
const person1 = {
    name: 'John',
    age: 30,

    // accessing name property by using this.name
    greet: function() {
        console.log(`The name is ${this.name}`);
    }
}

person1.greet();


// accessing variables inside a function inside an object
const person2 = {
    name: 'John',
    age: 30,
    greet: function(){
        let surname = 'Doe'; 
        console.log(`The name is ${this.name} ${surname}`);
    }
}

person2.greet();