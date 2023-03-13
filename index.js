// Embedding Objects and Arrays

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

// There is hierarchy, kind of structure in which our object is created.

let array = ["string",
    100, 
    ["embed", 200],
    { car: "ford" },
    function() { return "drive"}
];

// Arrays can embed objects and objects can embed arrays