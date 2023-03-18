// Constructors with prototype

function Apple(color, weight) {
    this.color = color,
    this.weight = weight
    /*
    this.eat = function () { return 'eat the apple'; };
    this.throw = function () { return "throw the apple"; }; // This way we have copies of these methods for each of the objects iterations, which cloggs memory. 
    */
} // You should only modify prototype objects on the constructor functions themselves. 

Apple.prototype = {
    eat: function () { return this; }, // This context will be pointing to the Apple object, not the prototype. 
    throw: function () { return "throw the apple"; } // We have a dedicated place to change how methods behave. 
}; // Any property/method will be shared throught all the iterations of the object. 

var apple1 = new Apple('red', 99);
var apple2 = new Apple('green', 109);
var apple3 = new Apple("yellow", 299);

// If you modify apple1 (specific iteration of object), and write 'eat' key, it'll not go to the prototype to invoke it method. Avoid symbol name colisions. 