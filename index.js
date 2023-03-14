// Member Creation, assignment and deletion

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

// car = "string" | | You can reassign keys and values in the 'car' object. 

car.make = "ford"; // You can also target specific key value pair in the object with dot syntax. 

car.make += 200; // With other operators, you can even concatinate something to the existing value in the object.

car["speed"] *= 2;

console.log(car["speed"]); // you can use other operators i.e. multiplication, to change numeric values inside the object. 

car.engine = { newengine: "newEngine"}; // You can even manipualte objects inside parent object by assigning new values. 

car.drive = "drive"; // Newly assigning subroutines is also possible. 

// How to assign new key

car.model = "v60"; // This is how you create new symbol/memory pointer inside given object. 
car.color; // You can also add keys without values, or with value of undefined/null.

car.color = "red"; // You can't create new variable color to include it in the object. You need to use dot syntax to assign specific value to the specific key.

car.stop = function() { return "stop"};  // You can even assign new method to the object.

car.engine.stop = function() { return "stop engine"}; // You can assign methods to the sub objects inside the main one with this syntax. 

// How do you delete certain members.

car.color = null; // This doesn't remove the key, only makes value null, so this is not the way to go. 
delete car.color; // This is the way to delete the symbol/memory link in the object. 
delete car.stop; // To delete method. 

let array = ["string",
    100, 
    ["embed", 200],
    { car: "ford" },
    function() { return "drive"}
];

console.log(car.make);
