// Memory Hoisting

// Memory hoisting is a feature of a javscript. Hoist means to lift up - like a crane. 

// While JIT compiler reads through the code, it looks for the syntax errors, also it's looking for var/const names and callable objects.
// To lift them up - Hoist them. 

console.log(myName, printName());

var myName = "Luka"; // At this point JIT is just creating memory pointer and not a value. 

function printName() 
{
    console.log(a, embed()); // Curly brackets are also hoisted - execution code. Again, variable is created, but not defined. hence 'undefined'.

    var a = 100; // But if u delete variable all together, JS will give out error 'a isn't defined'. 

    function embed() {return 'Hello'}; // Each execution constext has it's own memory hoisting. 

    return "John Doe"; // It's different for function. Execution gets hoisted. 
}

// Than it goes back up again - myName exists, but isnt' referencing anything, whilst printName()-> is fully executed.
