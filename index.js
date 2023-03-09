// Assignment Operators
// All of the same precendence


let number = 20;

number += 30; // 50. += adds to the initial value.

number -= 30; // 20. -= subtracts to the initial value.

number *= 2; // 40. multiplies initial value by the newly given number.

number /= 4; // 10. divides initial value by the newly given number.

number %= 4; // 2. gives what's left after the division. 10%4 = 2 (4+4+2).

number **= 4; // 16. 2 to the power of 4 is 16.

// Plus operator doesn't just deal with numbers, it also deals with strings

let result = "Luka" + " Chochua"; // Joins the strings together.

result = "Luka" + 10; // This is called polymorphism - an organism or inorganic object or material which takes various forms. 
// Instead of addition, + assignment operator concatinates string with a number and converts it to the string data type.

let name = "Luka";

name += " Chochua";

console.log(name);