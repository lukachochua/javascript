// Arithmetic Operators and BODMAS
// Operators are predifined functions for the language defined in a JIT compiler.
// There is an order of precendence to which operators are executed. 

let result = 5 + 2 * 3; // because multiplication operator has higher precendence, it is executed first. Here, the result is 9. 

// BODMAS =  Brackets -> (), pOwers -> function call, DM -> Division and Multiplication, AS -> Addition and Substriction. When no precendence, JS goes left to right

result = Math.pow(2, 4) / 2 + 1 - 5 + (2 * 12); // in Math.pow() -> first we pass base number, later exponent. result is 28.
// Two types of divison '/' and '%' - reminder operator, modulus divison. Gives reminder of division.
result = 9 % 5; // 4
result = 10 % 2; // 2

console.log(result);