/*
Objects and Arrays

Objects are obvious for what they're. Arrays are list objects. Arrays are objects, but are type of objects.

Standart Object
{
     key    value  = properties | nouns are keys, adjectives are values.
    color: "red",
    speed: 165,
    maker: volvo,
    drive: function() {},
    stop: function() {},
};

when you take subroutine or function and add it to the object, it's called method. Just to be clear when we're talking about objects.

Arrays. Arrays are 0 indexed. first item is indexed as 0. If you delete item of array, key names are reassigned.
[
    0: Apple,
    1: Orange,
    2: Pear
]
*/

// Example of the Object

let car = {
    color : 'red',
    speed : 200,
    drive: function() { return "drive";},

};

// Example of the Array

let shoppingList = [
    'Apple',
    'Orange',
    'Pear'
];