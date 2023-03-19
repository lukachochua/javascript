// If Statements

var carsLeft = 1,
    carsRight = 0,
    greenMan = "no";

if (greenMan === "yes") { // We write condition in the parenthisis and use braces to define execution context. 
    console.log("Cross the road"); // if false statement - condition not met and script not executed. 
} else if (greenMan === 'yes' && (carsLeft === 0 || carsRight === 0)) { // Ability to chain multiple comparison conditions with "&&" (and) or "||" (or) operators.
    // false as 1 car left &&    true. in case of "||" operator, this will be truthy statement - as long as one of those sides are true.
    // Whatever ius inside parenthesis will be executed first as it grouping operator takes precendence over every other.
    console.log("All clear! Cross the road"); // In "else if"-s case, if first execution context isn't truthy, compiler goes on to check others. 
    // you can keep adding as many "else if"-s as you want.
} else {
    console.log("Stay where you are!"); // "else" doesn't need condition.
}

// "else if" and "else" part of the code won't be executed if initial condision is met/true. 