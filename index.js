// 'This' context

// This word is a context based word - it has a reference. It needs a point of what one's looking at. 
// When you open your brower window, there is an environment that is established - window object that includes all of the default properties and methods of JS.

console.log(this); // -> this by default refers to the window object. 

var object = {
    prop: this,
    embed:
    {
        embed: true,
        method: function () { return this; } // now 'this' refers to the 'embed' object. curly braces are it's context. 
    },
    method: function() {return this;} //This pointer is going out of the pointer by one and refers to the object that cointains it. 
};

var array = [
    this,
    function () { return this; } // Same with arrays, as arrays are type of objects. 
];

// if you have 'this' keyword in an object, or an array, it's always pointing to the window object. 
// Only callable objects allow us to change the context of the 'this'.

function global() {
    console.log('from global', this);

    function sub() { console.log('from sub', this)};

    sub(); // by default callable objects go to the global scope.
    
    // return this; // In this case it steps out once to the outer scope and reaches window {} context. 
    // function add() { this; }  // In this case, even in embeded object/method 'this' refers to the window. This it how functions differ from arrays and objects in
    // the given context. 
}



global.call(object); // We use dot syntax to use 'call' function on a callable object. This, once again, proves that functions/methods are objects too. 
// This is a way to change the context of the 'this' keyword. In the console an object will be returned that contains values of the 'var object'.

new global(); // with 'new' keywoard, you're creating blank object. 

// You can use call method on a callable method and pass in ar argument and that argument will be assigned to the 'this' context. 

/* So, if function is directly invoked, 'this' will refer to the object it's called from. If you use call method, 'this' will refer to the argument of the call 
function. Also, you have new keyword, in which case, it creates new context. 
*/ 