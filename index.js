// Callable Objects

// Functions are callable objects in the javascript. You can think of the braces {} as containing list of instructions. {} <- object literal. 
// Functions are invokable.

function name(fullName)
{
    return fullName(); // This is how we execute/call when parameter is a function. again, use braces ().

    // return fullName.firstName + fullName.lastName; // We can send another object as an parameter to the function/invokable object. 

    /*

    function concat(name)
    {
        return "MR. " + name; 
    } // You can embedd function inside of another one like this. 

    return concat(fullName); // Returns "MR. Luka Chochua". We create parameter that will store the string (in this case) and delete after executing once. 
    */
} 

console.log(
    name(function(){ return "embed";})
); // You don't have to define symbol name for the function in this case, as it's already defined as a variable. 
// It will be given a name when it's invoked as a parameter. 

console.log(name());
/* console.log(
    name({firstName:"Luka ", lastName: "Chochua"})
); This object was invoked by the parentheses (), than argument was passed as a parameter and assigned. There we're accesssing new object and strings together 
*/

// You can embedd objects inside of other objects. Example:

// let obj = { embedded: [{}] } ; // You can do the same with the functions too, see above ^^

/* obj = {
    method: function() {},
} // you can do the same in arrays too, but arrays don't have key-value pair. Just index and corresponding value.
*/

// Recap - Functions are callable/invokable objects, that contain list of instructions. Objects can be contained inside objects, so callable objects
// can be contained inside another callable object. It's call nesting. 