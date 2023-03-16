// Scope and Closures

// When you think about scope - think about access. Car engine example. 
// Each object has their own access level. 

var engine = {
    maker: "Ford",
    headGasket: {
        pots: [
            "piston1", // To access pots you need to go to the 'engine', use dot syntax and go to the 'headGasket'.'pots' and than use bracket syntax [0]. 
            "piston2"
        ]
    }
};

function runExpression() // Functions have their own scope/execution context, which are defined by curly braces. 
{
    var a = 10;

    function add(b) {

        return a + b; // You can't do this with regular object as callable objects are going through an 'execution stack'
        // First you have runExpression(), later you got add(). They're both on stack. First it creates 'var a = 10', than 'add()' is executed and 
        // addition is completed. result of the first functione xecution (runExpression) is saved in memory for it to be used later. 
    }

    console.log(
        add(90), // GC -  garbage collection. JS gets rid of waste symbols that we no longer need. .
        // Not any other part of the application has access to the variables/symbols inside of this function. 
        add(20)
    ); // You can have same function executed over and over again as a stack - main thread is temporary memory. It's also called Outer execution Environment. 


    // console.log(b); // This will not run, as 'b' isn't defined in the runExpression() function. it's definition is glued to the 'add()' function. 

}

