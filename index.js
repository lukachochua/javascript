// Constructors

// Constructors are like construction workers. JS has constructor functions that provide blueprint for the objects.

// Apple example - In game we have a player(object) that goes through the game and collects apples, that are also objects. 
// We need constructor to dynamically create an apple - new instance of the object - copy of the blueprint. 

function Apple(x, y, color, score) // add capital letter to the constructor functions. Just a naming convention to understand that function is constructor.
{
    this.x = x;
    this.y = y;
    this.color = color;
    this.score = score;
    // You can say return this;, but once we start invoking this execution context, it'll automatically return the values.  
}

var apple1 = new Apple(10, 20, 'red', 200); // Once you create this object, there is no way to reference it. So you assign it to the symbol name. 
var apple2 = new Apple(10, 20, 'green', 60);
var apple3 = new Apple(10, 20, 'yellow', 20); // even all thre of the apples come from one factory, they're all different objects with their own values 
// - different instances. Each of the obejcts has same structure, but different values. 