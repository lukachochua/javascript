// Prototypes

// Prototypes are unique to JS - they're shared objects. They're objects that have properties and methods that can be accessed by a range of different objects.

function Apple(color, weight)
{
    this.color = color,
    this.weight = weight
}


Apple.prototype = {
    eat() {return this}, 
    throw(){},
}


var Apple1 = new Apple('red', 10);

console.log(Apple1.eat()); // Console returns 'this' iteration of the object, using eat() function in the prototype. with according values. 


// Using prototype, each of the 'new' object can use prototype functions as they're linked to the prototype that includes those methods. 
// This saves a lot of memory to make sure to have one copy of the verb/method. 