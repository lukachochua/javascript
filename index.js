// Let ES6 - ECMASCRIPT 6 

/*
var symbolName = "value reference in memory";

let letSymbol = "scoped value"; // Let has more respect for scope. You can assign new values. 


const symName = "constant value in memory"; // Once set, can not change the value. 
*/

if (true)
{
    var symbolName = "value reference in memory"; // Console allows to reach it's value, despite it's scope not being 'window object'
    // So var attaches each created variable to the window object, which is very bad as it slows down machines.
    // One can check the variable in console with 'window.symbolName' too.

    let letSymbol = "scoped value"; // Let symbol is defined within this scope {} and it respects this block. 

    const symName = "constant value in memory"; // Constants respect the scope too. 
}

for(let i=0; i<5; i++) // 'var i' is defined on a 'window object' and it's value is accessable trough console. I don't need this symbol globally accessasble
// if you use 'let i' it'll not be accessable from the console. 
{
    var symbolName = "value reference in memory"; 

    let letSymbol = "scoped value"; 

    const symName = "constant value in memory"; 
    // Last two are private for this execution context. 
}

function check()
{
    var varSymbol = "assign a value"; // 'var' only respects functions execution context. Wherever you can, you should use 'let'. 
}