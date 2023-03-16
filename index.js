// Inferred Globals & Scope
// Window object in JS is highest level object. All of the symbols/functions are of Global Scope. 
// Only objects that are directly accessable from window object have global scope/are accessible from anywhere. 

var engine = {
    maker: "Ford",
    headGasket: {
        maker: 'Golf',
        pots: [
            "piston1", // To access pots you need to go to the 'engine', use dot syntax and go to the 'headGasket'.'pots' and than use bracket syntax [0]. 
            "piston2"
        ]
    }
};

function runExpression() // Functions have their own scope/execution context, which are defined by curly braces. 
{
    var a = 10;

    function add() {
        var engine = "engine"; // if we create variable called engine inside of the FIRST inferred scope, it's value will be returned. 
        // But engine object is still available on global scope. To be blunt - each one of the braces has it's scope. 

        // engine = "New String"; This way because of the assignment operator, it assigns new value to the global scoped variable 'engine'. 
        // You need to be careful with it during coding. To create variable within a scope you need to use 'var', 'let', or 'const' declarations. 
        test = "New String";  // because we use assignment operator, 'test' still has memory pointer on the window object, despite
        // not being explicitly declared as a variable. This is called clubbering a global variables and is bad practice. which is unnecessary. 

        test; // without assignment operator JS will return an error as it can't find tests value. 
        
        console.log(engine); // JS is trying to deduce where the memory pointer 'engine' is. first it goes to the curly brackets
        // inside of the add() function and searches for it there, than in 'runExpression()' and only than in Global/Window Scope. 
    }

    add();

}

