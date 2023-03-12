// Functions and Subroutines.

// Functions are set of prewritten instructions for a computer to execute when they're called from the memory
// Functions define subroutines, like routines inside humans minds. Programmer names it, gives it set of instructions and calls it when needed.
// functions can have parameters, that are variables, that can have values asssigned to them when we execute instructions. 
// Curly braces define functions body. Functions are called with return function.

function makeCoffe(sugar, milk)
{
    let instructions = 'Boil Water,'; // These variables inside functions are accessible only in the scope of the function.
    instructions += " pour into cup,";
    instructions += " add coffee granules,";
    instructions += " add " + sugar + " spoons of sugar,";
    instructions += " add " + milk + "% milk.";
    
    return instructions;
} // Make coffee as a function example.

console.log(makeCoffe(2, 20));

// If we mention parameters, or arguments, we know we're talking about invoking a function and/or function in General.
