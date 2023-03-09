// Variables, Constants and Assignment

// Computer also has short term memory, so we need to assign values to the data to pull it up when needed

// When you use 'var'/'let' you're creating a box and identifying what's in that box

var name = "Lawrence"; // don't make it a string, cuz it's symbol, a memory address.

// when you call variable name in the console, it returns 'Lawrence' as expected.
// While naming variables don't start with numbers, capital letters or special charecters and never put in spaces, or define it as a string.
// Being a variable means that it changes and you can assign new value.

name = "Luka";

name ="Anthony";

var blank; // Blank variables return null/undifined to say it's waiting for the value to be assigned.

blank = "new value"; // This is how you assign value to the blank variable.

// JS is loosely typed language. Which means programmer can easily chance type of the variable from string to number, boolean, etc.

blank = [];

// Another type of variable is constant, which means variable always stays the same.

const lastName = "turton"; // Can't create const without adding a value first. 

// lastName = 'Chochua'; This returns a TypeError: Assignment to constant variable.

console.log(lastName);