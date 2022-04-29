// JavaScript Program to calculate the area of a triangle

let area, s1 = 34, s2 = 12, s3 = 43;

let s = (s1 + s2 + s3)/2;

area = (s*(s-s1)*(s-s2)*(s-s2))**0.5;

console.log(`The area of triangle is: ${area}`);