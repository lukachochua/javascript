// Computed Member Access
// Computed member access is an alternative to the dot syntax. This operator uses brackets []. 

let car = {
    make: "Volvo",
    speed: "160",
    engine: {
        size: 2.0,
        make: "BMW",
        fuel: "petrol",
        pistons: [{maker: "BMW"}, {maker: "BMW2"}],
    },
    drive: function() { return "drive"}
};


let array = ["string",
    100, 
    ["embed", 200],
    { car: "ford" },
    function() { return "drive"}
];

console.log(car.engine.pistons[0]); // This is an example of computed member access. Wha's returned is symbol link istead of a number type.  

console.log(car.engine.pistons[0].maker); // Computed member access is used mainly on arrays.

console.log(array[0]); // This will return not a number '0' but memory pointer 0 which is "string".

console.log(array[4]()); // If you want to invoke function, as in dot syntax, here you also need to put parenthisis.

console.log(array[1+1-2]); // When you have computer member access, whatever is inside, is treated as a javascript statement. This is the same as array[0].

let a = 10; // In these kind of operations, you could even use variables. 

console.log(array[a-5-2]); // In this case console will print out array[3], as a = 10 - 5 - 2 = 3. JS computes statement inside of bracket. 

console.log(car["make"]); // You can use computed member access as an alternative to dot syntax. in that case, you need to call variable/value name 
// as a string inside of brackets [].

console.log(car["engine"]["pistons"][1]['maker']); // This can also be used, to get whatever is in an sub object or an sub array.

console.log(car["drive"]()); // This way, you can still invoke subroutines. AGAIN - use parenthisis. Otherwise, you'll get function syntax and not subroutin itself.

let pointer = "make"; // One can also target variable.

console.log(car[pointer]); // This returns Volvo, as pointer variable is assigned to the string "make";

let newPointer = "speed"; 

console.log(car[newPointer]); // Another example. 

console.log(car["en" + "gine"]); // You can also do all kinds of things like concationation. You have ability to mix and match between dot syntax and 
// Computed Member Access.