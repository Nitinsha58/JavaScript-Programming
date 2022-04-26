// JavaScript comparison Operators
const a = 3, b = 2;
console.log(a > b);

/*
    Operator    Name
    ==          Equal to: returns true if the operands are equal
    !=          Not Equal to: returns true if the operands are not equal
    ===         Strict not equal to: true if the operands are equal but of different type or not equal at all
    !==         Strict not equal to: true if the operands are equal but of differentr type or not equal at all
    >           Greater than : true if left operand is greater than the right operand
    >=          Greather than or equal to: true if left operand is greater than or equal to the right operand
    <           Less than: true if the left operand is less than the right operand
    <=          Less than or equal to: true if the left operand is less than or equal to the right operand
*/


// Example: comparison operators in JavaScript
// equal operator
console.log(2 == 2); // true
console.log(2 == '2'); // true

// not equal operator
console.log(3 != 2); // true
console.log('hello' != 'Hello'); // true

// strict equal operator
console.log(2 === 2); // true
console.log(2 === '2'); // false

// strict not equal operator
console.log(2 !== '2'); // true
console.log(2 !== 2); // false
