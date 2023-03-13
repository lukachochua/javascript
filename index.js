// Member Access

// Standart objects properties and/or methods are called objects members. Also with array -  each element is a member of an array.

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

// In javascript '.' (dot symbol) is dedicated to the member access.

console.log(car.make);
console.log(car.engine.make); // You can continue using dot syntax to get information from sub/member-objects of the initial object.
console.log(car.drive()); // in order to run member function from an object, you need to use parenthesis() after function name. 
// If you don't use parenthesis it will print out just the syntax of the function.
// It's pretty familiar to console.log() method. We looking in the Console Object and using the log function. 

console.log(car.engine.pistons[0]); // To access a member of an array you can use brackets [] and index of an array member.
// It's called computed member access.

let array = ["string",
    100, 
    ["embed", 200],
    { car: "ford" },
    function() { return "drive"}
];

